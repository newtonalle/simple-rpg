<template>
  <div>
    <div>
      <h2>Equipments</h2>

      <!-- The player's equipments that are currently equipped -->

      <h3>Equipped</h3>

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
          <div class="row">
            <div
              v-for="(itemId, index) in setup"
              :key="`equipmentItemId-${itemId}-index-${index}`"
              class="col-6"
            >
              <equipment
                :index="index"
                :itemId="itemId"
                :itemEquippedStatus="true"
                :inBattle="!!currentEnemy.label"
                :deleteButtonAppear="deleteButtonAppear"
                @toggleItem="unequipItem(index, setupIndex)"
              />
            </div>
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
      <div v-if="showUnequippedItems">
        <h3>Unequipped</h3>

        <br />

        <div v-if="player.inventory.length <= 0">
          <h5>No unequipped items in your inventory!</h5>
          <br />
          <br />
        </div>

        <!-- Menu showing all equipments not equipped by the player, including their status -->
        <div class="row">
          <div
            v-for="(itemId, index) in player.inventory"
            :key="`inventoryItemId-${itemId}-index-${index}`"
            class="col-4"
          >
            <equipment
              :index="index"
              :itemId="itemId"
              :itemEquippedStatus="false"
              :inBattle="!!currentEnemy.label"
              :deleteButtonAppear="deleteButtonAppear"
              @toggleItem="equipItem"
              @removeEquipment="removeEquipment(index)"
            />
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Equipment from "./Equipment.vue";

export default {
  props: { showUnequippedItems: Boolean, deleteButtonAppear: Boolean },

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