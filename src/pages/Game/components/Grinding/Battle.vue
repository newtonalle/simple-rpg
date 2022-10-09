<template>
  <div>
    <h2>Battle</h2>

    <!-- Player Stats -->

    <div>
      <h4 class="fw-bold">{{ player.label }}</h4>
      <p class="fs-5">
        Combat Lvl. {{ playerSkills.combat }} ({{ player.skills.combat }} XP)
      </p>
      <p>{{ player.health }}/{{ equippedPlayer.maxHealth }} ❤️</p>
      <p>{{ player.mana }}/{{ player.maxMana }} 🪄</p>
      <p>{{ equippedPlayer.strength }} 👊</p>
      <p>{{ equippedPlayer.defense }} 🛡️</p>
      <p>{{ player.coins }} 🪙</p>
    </div>

    <br />

    <!-- Current Enemy Stats -->

    <div v-if="currentEnemy.label">
      <h3>{{ currentEnemy.label }}</h3>
      <p>{{ currentEnemy.health }}/{{ currentEnemy.maxHealth }} ❤️</p>
      <p>{{ currentEnemy.strength }} 👊</p>
      <p>{{ currentEnemy.defense }} 🛡️</p>

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
            player.mana - playerEquipments.wand.manaCost < 0 ||
            player.health >= equippedPlayer.maxHealth
          "
          class="btn btn-success"
          @click="heal"
        >
          Heal
          <span>({{ playerEquipments.wand.manaCost }}🪄)</span>
        </button>
      </div>
    </div>

    <hr class="divider" />

    <!-- Starting Battle Actions -->

    <div v-for="(enemy, index) in enemies" :key="`${enemy.label}-${index}`">
      <div v-if="enemy.unlocked">
        <button
          class="btn btn-success"
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
export default {
  methods: {
    fight(index) {
      this.$store.dispatch("newEnemy", index);
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

      this.$store.dispatch("attack", {
        user: "currentEnemy",
        target: "player",
      });
    },

    clearCombatLog() {
      this.$store.dispatch("clearCombatLog");
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
  width: 150px;
}
</style>