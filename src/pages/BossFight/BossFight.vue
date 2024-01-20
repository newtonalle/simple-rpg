<template>
  <div class="text-center">
    <div v-if="currentEnemy.label">
      <div v-if="currentEnemy.type === 'boss'">
        <!-- Boss Fight -->
        <div class="row">
          <div class="col-4">
            <h2 class="fw-bold">{{ player.label }}</h2>

            <div>
              <h4 class="fw-bold">{{ player.label }}</h4>
              <p class="fs-5">
                Combat Lvl. {{ playerSkills.combat + 1 }} ({{
                  player.skills.combat
                }}
                XP)
              </p>
              <player-status
                :player="player"
                :equippedPlayer="equippedPlayer"
              />
            </div>

            <equipments
              :showUnequippedItems="true"
              :deleteButtonAppear="false"
            />
          </div>

          <div class="col-4">
            <p>Dodge the attacks using "WASD" keys to move!</p>

            <br />

            <dodge-board />

            <crit-bar
              :speed="17.539999"
              :cooldown="player.currentAttackCooldown"
              :specialDisabled="
                playerEquipments.weapon &&
                weaponTypes[playerEquipments.weapon.typeId].damageType ===
                  'ranged' &&
                player.quiverInventory.equippedAmount <= 0
              "
              :hitText="`Attack`"
              :markerId="`bossbattle-0`"
              @critHit="critBarAttack"
            />
          </div>

          <div class="col-4">
            <h2 class="fw-bold">{{ currentEnemy.label }}</h2>

            <enemy-status :currentEnemy="currentEnemy" />
          </div>
        </div>

        <br />
        <br />

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
        <hr class="divider" />
      </div>
    </div>
    <div v-else>
      <br />

      <h2>Battle Ended</h2>

      <br />
      <button @click="goBacktoGame" class="btn btn-success">
        Go back to game
      </button>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import Equipments from "../Game/components/Equipments/Equipments.vue";
import CritBar from "../Game/components/Grinding/components/CritBar.vue";
import DodgeBoard from "./components/DodgeBoard.vue";
import PlayerStatus from "../components/PlayerStatus.vue";
import EnemyStatus from "../components/EnemyStatus.vue";
export default {
  components: { CritBar, DodgeBoard, Equipments, PlayerStatus, EnemyStatus },

  methods: {
    updateGame() {
      this.$store.dispatch("updateGame");
    },

    speedyUpdate() {
      this.$store.dispatch("speedyUpdate");
    },

    enteredBossScreen() {
      this.$store.dispatch("changeInBossScreenStatus", true);
    },

    critBarAttack(hitAccuracy) {
      this.$store.dispatch("critBarAttack", {
        hitAccuracy,
        vm: this,
      });

      if (this.currentEnemy.label) {
        this.$store.dispatch("attack", {
          user: "currentEnemy",
          target: "player",
        });
      }

      this.$store.dispatch("playerActive");
    },

    heal() {
      this.$store.dispatch("healPlayer");
    },

    clearCombatLog() {
      this.$store.dispatch("clearCombatLog");
    },

    goBacktoGame() {
      this.$router.push({ name: "game" });
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

    weaponTypes() {
      return this.$store.getters.getWeaponTypes;
    },

    combatLog() {
      return this.$store.getters.getCombatLog;
    },
  },

  created() {
    this.setIntervalId = setInterval(() => {
      this.updateGame();
    }, 1000);

    this.speedSetIntervalId = setInterval(() => {
      this.speedyUpdate();
    }, 100);

    this.enteredBossScreen();
  },

  destroyed() {
    clearInterval(this.setIntervalId);
    clearInterval(this.speedSetIntervalId);
  },
};
</script>

<style scoped>
button {
  width: 150px;
}
</style>