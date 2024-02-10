<template>
  <div>
    <h2>Forge</h2>

    <br />
    <div class="row">
      <div class="col-6">
        <h3>Craftable</h3>
        <div
          v-for="(forgeCrafting, index) in forge"
          :key="`forgeResultId-${forgeCrafting.result.id}-index-${index}`"
        >
          <forge-item :forgeCrafting="forgeCrafting" />
        </div>
      </div>
      <div class="col-6">
        <h3>Crafting</h3>
        <div
          v-for="(currentForgeCrafting, index) in player.forgingCraftings"
          :key="`forgeResultId-${currentForgeCrafting.result.id}-index-${index}`"
        >
          <p v-if="currentForgeCrafting.result.type === 'material'">
            {{ currentForgeCrafting.result.amount }}x
            {{
              materials.find(
                (material) => material.id === currentForgeCrafting.result.id
              ).symbol
            }}
            {{
              materials.find(
                (material) => material.id === currentForgeCrafting.result.id
              ).label
            }}
          </p>

          <p v-if="currentForgeCrafting.result.type === 'equipment'">
            {{ currentForgeCrafting.result.amount }}
            {{
              equipments.find(
                (equipment) => equipment.id === currentForgeCrafting.result.id
              ).label
            }}
          </p>

          <button
            @click="collectForge(index)"
            class="btn btn-success"
            :disabled="currentForgeCrafting.timer > 0"
          >
            Collect
            <span v-if="currentForgeCrafting.timer > 0"
              >({{ currentForgeCrafting.timer }}s)</span
            >
          </button>
          <br />
          <br />
        </div>
        <p v-if="player.forgingCraftings.length <= 0">
          There is nothing in the forge!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ForgeItem from "./components/ForgeItem.vue";
export default {
  components: { ForgeItem },

  methods: {
    collectForge(index) {
      this.$store.dispatch("collectForge", index);
    },
  },

  computed: {
    forge() {
      return this.$store.getters.getForge;
    },

    player() {
      return this.$store.getters.getPlayer;
    },

    materials() {
      return this.$store.getters.getMaterials;
    },

    equipments() {
      return this.$store.getters.getEquipments;
    },
  },
};
</script>