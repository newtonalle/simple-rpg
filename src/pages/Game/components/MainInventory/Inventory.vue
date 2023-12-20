<template>
  <div>
    <div>
      <h2>Inventory</h2>

      <!-- The player's equipments that are currently equipped -->

      <h3>Equipped Items</h3>

      <!-- Menu showing all equipments equipped by the player, including their status -->
      <div class="row">
        <div
          class="col-6"
          v-for="(setup, setupIndex) in player.setups"
          :key="`setup-${setup}-index-${setupIndex}`"
        >
          <h3>Set #{{ setupIndex }}</h3>
          <p v-if="setupIndex === player.equippedSetup">EQUIPPED</p>
          <button
            class="btn btn-success"
            @click="chooseEquippedSetup(setupIndex)"
            :disabled="player.equippedSetup === setupIndex"
          >
            Equip
          </button>
          <br />
          <br />
          <div
            v-for="(itemId, index) in setup"
            :key="`equipmentItemId-${itemId}-index-${index}`"
          >
            <equipment
              :index="index"
              :itemId="itemId"
              :itemEquippedStatus="true"
              :inBattle="!!currentEnemy.id"
              @toggleItem="unequipItem(index, setupIndex)"
            />
          </div>
        </div>
      </div>

      <!-- Message for empty array -->

      <div v-if="player.setups[0].length <= 0 && player.setups[1].length <= 0">
        <br />
        <br />
        <h5>No equipped items!</h5>
      </div>

      <hr class="divider" />

      <!-- The player's equipments that are not currently equipped -->

      <h3>Equipments</h3>

      <div v-if="player.inventory.length <= 0">
        <h5>No equipments in your inventory!</h5>
        <br />
        <br />
      </div>

      <!-- Menu showing all equipments not equipped by the player, including their status -->

      <div
        v-for="(itemId, index) in player.inventory"
        :key="`inventoryItemId-${itemId}-index-${index}`"
      >
        <equipment
          :index="index"
          :itemId="itemId"
          :itemEquippedStatus="false"
          :inBattle="!!currentEnemy.id"
          @toggleItem="equipItem"
          @removeEquipment="removeEquipment(index)"
        />
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import Equipment from "./Equipment.vue";

export default {
  components: { Equipment },

  methods: {
    equipItem(index, setupIndex) {
      this.$store.dispatch("equipItem", { index, setupIndex });
    },

    unequipItem(index, setupIndex) {
      this.$store.dispatch("unequipItem", { index, setupIndex });
    },

    chooseEquippedSetup(setupIndex) {
      this.$store.dispatch("chooseEquippedSetup", setupIndex);
    },

    removeEquipment(index) {
      this.$store.dispatch("removeEquipment", index);
    },
  },

  computed: {
    player() {
      return this.$store.getters.getPlayer;
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