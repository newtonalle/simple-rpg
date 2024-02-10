<template>
  <div>
    <div>
      <h3 v-if="playerEquipment.quiver">
        {{ playerEquipment.quiver.label }}
      </h3>
      <h3 v-else>Arrows</h3>

      <br />

      <div class="row">
        <div
          v-for="(arrow, index) in arrows"
          :key="`ArrowsArrowId-${arrow.id}-index-${index}`"
          class="col-4"
        >
          <p>
            {{
              arrowAmounts.find((arrowAmount) => arrowAmount.id === arrow.id)
                .amount
            }}x
            {{ arrow.label }}
          </p>
          <div v-if="playerEquipment.quiver">
            <p v-if="player.quiverInventory.arrowId === arrow.id">
              ({{ player.quiverInventory.equippedAmount }}x equipped)
            </p>
            <p>+{{ arrow.strength }} 👊</p>

            <button
              :disabled="
                player.quiverInventory.arrowId === arrow.id ||
                !!currentEnemy.label
              "
              class="btn btn-success"
              @click="equipArrow(arrow.id)"
            >
              Equip
            </button>

            <br />
            <br />

            <button
              :disabled="
                arrowAmounts.find((arrowAmount) => arrowAmount.id === arrow.id)
                  .amount <= 0 ||
                !!currentEnemy.label ||
                player.quiverInventory.equippedAmount + 1 >
                  playerEquipment.quiver.maxEquippedArrows
              "
              v-if="player.quiverInventory.arrowId === arrow.id"
              class="btn btn-success"
              @click="addArrowToQuiver(arrow.id)"
            >
              Add Arrow
            </button>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    equipArrow(id) {
      this.$store.dispatch("equipArrow", id);
    },

    addArrowToQuiver(id) {
      this.$store.dispatch("addArrowToQuiver", id);
    },
  },
  computed: {
    player() {
      return this.$store.getters.getPlayer;
    },

    playerEquipment() {
      return this.$store.getters.getPlayerEquipment;
    },

    arrows() {
      return this.$store.getters.getArrows;
    },

    arrowAmounts() {
      return this.$store.getters.getArrowAmounts;
    },

    currentEnemy() {
      return this.$store.getters.getCurrentEnemy;
    },
  },
};
</script>

<style scoped>
button {
  width: 150px;
}
</style>