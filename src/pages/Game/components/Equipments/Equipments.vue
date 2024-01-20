<template>
  <div>
    <div>
      <h2>Equipments</h2>

      <!-- The player's equipments that are currently equipped -->

      <h3>Equipped</h3>

      <!-- Menu showing all equipments equipped by the player, including their status -->
      <div class="row">
        <!-- Set items -->

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
              v-for="(item, index) in setup"
              :key="`equipmentItemId-${item.id}-index-${index}`"
              class="col-6"
            >
              <equipment
                :index="index"
                :itemId="item.id"
                :useEffectTimer="item.useTimer"
                :itemEquippedStatus="true"
                :itemSetupIndex="setupIndex"
                :inBattle="!!currentEnemy.label"
                :deleteButtonAppear="deleteButtonAppear"
                :setItem="true"
              />
            </div>
          </div>
        </div>

        <!-- Message for empty array -->

        <div
          v-if="player.setups[0].length <= 0 && player.setups[1].length <= 0"
        >
          <h5>No equipped armor!</h5>

          <br />
          <br />
        </div>

        <h3>Item Set</h3>

        <!-- NON set items -->

        <div
          v-for="(item, index) in player.equippedItems"
          :key="`equipmentItemId-${item.id}-index-${index}`"
          class="col-6"
        >
          <equipment
            :index="index"
            :itemId="item.id"
            :useEffectTimer="item.useTimer"
            :itemEquippedStatus="true"
            :itemSetupIndex="-1"
            :inBattle="!!currentEnemy.label"
            :deleteButtonAppear="deleteButtonAppear"
            :setItem="false"
          />
        </div>

        <!-- Message for empty array -->

        <div v-if="player.equippedItems.length <= 0">
          <h5>No equipped equipment!</h5>
          <br />
        </div>
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
            v-for="(item, index) in player.inventory"
            :key="`inventoryItemId-${item.id}-index-${index}`"
            class="col-4"
          >
            <equipment
              :index="index"
              :itemId="item.id"
              :useEffectTimer="item.useTimer"
              :itemEquippedStatus="false"
              :itemSetupIndex="-1"
              :inBattle="!!currentEnemy.label"
              :deleteButtonAppear="deleteButtonAppear"
              :setItem="isSetItem(item.id)"
              @removeEquipment="removeEquipment(index)"
            />
          </div>
          <br />
        </div>
      </div>

      <hr class="divider" />

      <!-- The player's arrows -->

      <quiver-menu />
    </div>
  </div>
</template>

<script>
import Equipment from "./components/Equipment.vue";
import QuiverMenu from "./components/QuiverMenu.vue";

export default {
  props: { showUnequippedItems: Boolean, deleteButtonAppear: Boolean },

  components: { Equipment, QuiverMenu },

  methods: {
    equipArrow(id) {
      this.$store.dispatch("equipArrow", id);
    },

    addArrowToQuiver(id) {
      this.$store.dispatch("addArrowToQuiver", id);
    },

    chooseEquippedSetup(setupIndex) {
      this.$store.dispatch("chooseEquippedSetup", setupIndex);
    },

    removeEquipment(index) {
      this.$store.dispatch("removeEquipment", index);
    },

    isSetItem(itemId) {
      const setItems = {
        helmet: true,
        chestplate: true,
        leggings: true,
        boots: true,
      };

      return setItems[this.equipments[itemId].slot];
    },
  },

  computed: {
    player() {
      return this.$store.getters.getPlayer;
    },

    currentEnemy() {
      return this.$store.getters.getCurrentEnemy;
    },

    equipments() {
      return this.$store.getters.getEquipments;
    },
  },
};
</script>

<style scoped>
button {
  width: 150px;
}
</style>