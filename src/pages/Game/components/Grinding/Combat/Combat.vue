<template>
  <div>
    <h2>Combat</h2>
    <p class="fs-5">
      Combat Lvl. {{ playerSkills.combat }} ({{ player.skills.combat }}
      XP)
    </p>

    <!-- Player Stats -->

    <div>
      <h4 class="fw-bold">{{ player.label }}</h4>

      <br />

      <player-status :player="player" :equippedPlayer="equippedPlayer" />
    </div>

    <br />

    <!-- Current Enemy Stats -->

    <div v-if="currentEnemy.label">
      <h3>{{ currentEnemy.label }}</h3>

      <enemy-status :currentEnemy="currentEnemy" />

      <div v-if="currentEnemy.type === 'common'">
        <!-- Common Battle -->

        <!-- Player Actions -->

        <!-- Attacking -->

        <button
          :disabled="
            player.currentAttackCooldown > 0 ||
            (playerEquipments.weapon &&
              weaponTypes[playerEquipments.weapon.typeId].damageType ===
                'ranged' &&
              player.quiverInventory.equippedAmount <= 0)
          "
          class="btn btn-danger"
          @click="attack"
        >
          Attack
          <span v-if="player.currentAttackCooldown > 0"
            >({{ player.currentAttackCooldown }}s)
          </span>
          <span
            v-if="
              playerEquipments.weapon &&
              weaponTypes.find(
                (weaponType) => weaponType.id === playerEquipments.weapon.typeId
              ).damageType === 'ranged' &&
              player.quiverInventory.equippedAmount <= 0
            "
          >
            (No Arrows!)</span
          >
        </button>
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
          :disabled="
            currentEnemy.label ||
            !enemyUnlocks.find((enemyUnlock) => enemyUnlock.id === enemy.id)
              .unlocked
          "
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
import PlayerStatus from "../../../../components/PlayerStatus.vue";
import EnemyStatus from "../../../../components/EnemyStatus.vue";
export default {
  components: { PlayerStatus, EnemyStatus },
  methods: {
    fight(id) {
      this.$store.dispatch("newEnemy", id);
      if (this.enemies.find((enemy) => enemy.id === id).type === "boss") {
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

      this.$store.dispatch("playerActive");
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

    weaponTypes() {
      return this.$store.getters.getWeaponTypes;
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