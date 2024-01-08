<template>
  <div>
    <h2>Combat</h2>
    <p class="fs-5">
      Combat Lvl. {{ playerSkills.combat + 1 }} ({{ player.skills.combat }}
      XP)
    </p>

    <!-- Player Stats -->

    <div>
      <h4 class="fw-bold">{{ player.label }}</h4>

      <br />

      <div class="row">
        <div class="col">
          <p>{{ player.stats.health }}/{{ equippedPlayer.maxHealth }} ❤️</p>
          <p>{{ player.stats.mana }}/{{ equippedPlayer.maxMana }} 🪄</p>
          <p>{{ player.coins }} 🪙</p>
        </div>
        <div class="col">
          <p>
            {{ equippedPlayer.strength }} 👊<span
              v-if="equippedPlayer.trueDamage"
              >💔</span
            >
          </p>
          <p>{{ equippedPlayer.defense.toFixed(1) }} 🛡️</p>
          <p>{{ equippedPlayer.attackSpeed }}⚡👊</p>
        </div>
        <div class="col">
          <p>{{ equippedPlayer.critChance.toFixed(2) }}% 💥🍀</p>
          <p>{{ equippedPlayer.critDamageMultiplier.toFixed(2) }}x 💥👊</p>
          <p>{{ equippedPlayer.moveSpeed }}🦶💨</p>
        </div>
      </div>
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

        <!-- Use Effects -->

        <div
          v-for="(equipment, index) in Object.values(playerEquipments)"
          :key="`battleItemUseEffectIndex-${index}`"
        ></div>
      </div>
    </div>

    <hr class="divider" />

    <!-- Starting Battle Actions -->

    <div v-if="currentEnemy.type === 'boss'">
      <button :class="`btn btn-danger`" @click="goToBossFight()">
        Return to Battle
      </button>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    <div class="row">
      <div
        v-for="(enemy, index) in locationEnemies"
        :key="`${enemy.label}-${index}`"
        class="col-4"
      >
        <button
          :class="`btn btn-${enemyButtonColor(enemy.type)}`"
          @click="fight(enemy.id)"
          :disabled="currentEnemy.label || !enemyUnlocks[enemy.id]"
          style="width: 100%"
        >
          Fight {{ enemy.label }}
        </button>
        <br />
        <br />
      </div>
    </div>

    <div v-if="locationEnemies.length <= 0">
      <p>There is nothing to fight here!</p>
    </div>

    <div v-if="combatLog.length > 0">
      <hr class="divider" />

      <div v-for="(log, index) in combatLog" :key="`${log}-${index}`">
        <p class="fs-8">{{ log }}</p>
      </div>
      <button style="width: 200px" class="btn btn-danger" @click="clearLog">
        Clear Combat Log
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fight(id) {
      this.$store.dispatch("newEnemy", id);
      if (this.enemies[id].type === "boss") {
        this.$router.push({ name: "bossFight" });
      }
    },

    attack() {
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

      this.$store.dispatch("playerPassive");
    },

    clearLog() {
      this.$store.dispatch("clearLog", "combatLog");
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

    goToBossFight() {
      this.$router.push({ name: "bossFight" });
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

    locationEnemies() {
      return this.$store.getters.getLocationEnemies;
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
  width: 150px;
}
</style>