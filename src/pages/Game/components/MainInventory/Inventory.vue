<template>
  <div>
    <div>
      <h2>Inventory</h2>

      <!-- The player's equipments that are currently equipped -->

      <h3>Equipped Items</h3>

      <!-- Message for empty array -->

      <div v-if="player.equippedItems.length <= 0">
        <h5>No equipped items!</h5>
        <br />
        <br />
      </div>

      <!-- Menu showing all equipments equipped by the player, including their status -->

      <div
        v-for="(item, index) in player.equippedItems"
        :key="`equipment-${item.label}-${index}`"
      >
        <equipment
          :item="item"
          :itemEquippedStatus="true"
          @toggleItem="unequipItem(index)"
        />
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
        v-for="(item, index) in player.inventory"
        :key="`inventory-${item.label}-${index}`"
      >
        <equipment
          :item="item"
          :itemEquippedStatus="false"
          @toggleItem="equipItem(index)"
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
    equipItem(index) {
      this.$store.dispatch("equipItem", index);
    },

    unequipItem(index) {
      this.$store.dispatch("unequipItem", index);
    },
  },

  computed: {
    player() {
      return this.$store.getters.getPlayer;
    },

    materials() {
      return this.$store.getters.getMaterials;
    },
  },
};
</script>