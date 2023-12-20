<template>
  <div>
    <h2>Battle</h2>

    <!-- Player Stats -->

    <div>
      <h4 class="fw-bold">{{ player.label }}</h4>
      <p class="fs-5">
        Combat Lvl. {{ playerSkills.combat }} ({{ player.skills.combat }} XP)
      </p>
      <div class="row">
        <div class="col">
          <p>{{ player.stats.health }}/{{ equippedPlayer.maxHealth }} ❤️</p>
          <p>{{ player.stats.mana }}/{{ equippedPlayer.maxMana }} 🪄</p>
        </div>
        <div class="col">
          <p>{{ equippedPlayer.strength }} 👊</p>
          <p>{{ equippedPlayer.defense }} 🛡️</p>
        </div>
        <div class="col">
          <p>{{ equippedPlayer.critChance }}% 💥🍀</p>
          <p>{{ equippedPlayer.critDamageMultiplier }}x 💥👊</p>
        </div>
      </div>
      <p>{{ equippedPlayer.attackSpeed }}⚡</p>
      <p>{{ player.coins }} 🪙</p>
    </div>

    <br />

    <!-- Current Enemy Stats -->

    <div v-if="currentEnemy.label">
      <h3>{{ currentEnemy.label }}</h3>
      <p>
        {{ currentEnemy.stats.health }}/{{ currentEnemy.stats.maxHealth }} ❤️
      </p>
      <p>{{ currentEnemy.stats.strength }} 👊</p>
      <p>{{ currentEnemy.stats.defense }} 🛡️</p>

      <div v-if="currentEnemy.type === 'common'">
        <!-- Common Battle -->

        <!-- Player Actions -->

        <!-- Attacking -->

        <button
          :disabled="player.currentAttackCooldown > 0"
          class="btn btn-danger"
          @click="attack"
        >
          Attack
          <span v-if="player.currentAttackCooldown > 0"
            >({{ player.currentAttackCooldown }}s)</span
          >
        </button>

        <!-- Healing -->

        <div v-if="playerEquipments.wand">
          <br />
          <button
            :disabled="
              player.stats.mana - playerEquipments.wand.manaCost < 0 ||
              player.stats.health >= equippedPlayer.maxHealth
            "
            class="btn btn-success"
            @click="heal"
          >
            Heal
            <span>({{ playerEquipments.wand.manaCost }}🪄)</span>
          </button>
        </div>
      </div>
      <div v-else-if="currentEnemy.type === 'boss'">
        <!-- Boss Battle -->

        <h2>BOSS BATTLE</h2>
        <div>
          <!-- Dodge Attack -->
          <p>Dodge the Attacks using "WASD" keys to move!</p>
          <dodge-board />
        </div>

        <br />
        <br />

        <div>
          <!-- Attack -->

          <crit-bar
            :speed="17.539999"
            :cooldown="player.currentAttackCooldown"
            :hitText="`Attack`"
            @critHit="critBarAttack"
          />
        </div>
      </div>
    </div>

    <hr class="divider" />

    <!-- Starting Battle Actions -->

    <div v-for="(enemy, index) in enemies" :key="`${enemy.label}-${index}`">
      <div v-if="enemyUnlocks[enemy.id]">
        <button
          :class="`btn btn-${enemyButtonColor(enemy.type)}`"
          @click="fight(index)"
          :disabled="currentEnemy.label"
        >
          Fight {{ enemy.label }}
        </button>
        <br />
        <br />
      </div>
    </div>

    <div v-if="combatLog.length > 0">
      <hr class="divider" />

      <div v-for="(log, index) in combatLog" :key="`${log}-${index}`">
        <p class="fs-8">{{ log }}</p>
      </div>
      <button
        style="width: 200px"
        class="btn btn-danger"
        @click="clearCombatLog"
      >
        Clear Combat Log
      </button>
    </div>
  </div>
</template>

<script>
import CritBar from "./components/CritBar.vue";
import DodgeBoard from "./components/DodgeBoard.vue";
export default {
  components: { CritBar, DodgeBoard },

  methods: {
    fight(index) {
      this.$store.dispatch("newEnemy", index);
    },

    critBarAttack(hitAccuracy) {
      this.$store.dispatch("playerPassive");

      this.$store.dispatch("critBarAttack", hitAccuracy);

      if (this.currentEnemy.label) {
        this.$store.dispatch("attack", {
          user: "currentEnemy",
          target: "player",
        });
      }
    },

    attack() {
      this.$store.dispatch("playerPassive");

      this.$store.dispatch("attack", {
        user: "player",
        target: "currentEnemy",
      });

      if (this.currentEnemy.label) {
        this.$store.dispatch("attack", {
          user: "currentEnemy",
          target: "player",
        });
      }
    },

    heal() {
      this.$store.dispatch("healPlayer");
    },

    clearCombatLog() {
      this.$store.dispatch("clearCombatLog");
    },

    enemyButtonColor(enemyType) {
      switch (enemyType) {
        case "common":
          return "success";

        case "boss":
          return "danger";

        default:
          return "warning";
      }
    },
  },

  computed: {
    player() {
      return this.$store.getters.getPlayer;
    },

    playerSkills() {
      return this.$store.getters.getPlayerSkillLevel;
    },

    equippedPlayer() {
      return this.$store.getters.getEquippedPlayer;
    },

    playerEquipments() {
      return this.$store.getters.getPlayerEquipment;
    },

    currentEnemy() {
      return this.$store.getters.getCurrentEnemy;
    },

    enemies() {
      return this.$store.getters.getEnemies;
    },

    enemyUnlocks() {
      return this.$store.getters.getEnemyUnlocks;
    },

    milestones() {
      return this.$store.getters.getMilestones;
    },

    combatLog() {
      return this.$store.getters.getCombatLog;
    },
  },
};
</script>

<style 
scoped>
button {
  width: 175px;
}
</style>