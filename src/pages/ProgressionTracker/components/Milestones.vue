<template>
  <div>
    <h2>Milestones</h2>
    <br />
    <h4>Combat Milestones</h4>
    <div
      v-for="(milestone, index) in milestones.enemies"
      :key="`milestoneEnemies-${index}`"
    >
      <div v-if="enemyUnlocks[milestone.id]">
        {{ milestoneAmounts.enemies[milestone.id] }}🗡️
        {{ enemies[milestone.id].label }}
      </div>
    </div>
    <br />
    <h4>Mining Milestones</h4>
    <div
      v-for="(milestone, index) in milestones.mining"
      :key="`milestoneMining-${index}`"
    >
      <div v-if="oreUnlocks[milestone.id]">
        {{ milestoneAmounts.mining[milestone.id] }}⛏
        {{ ores[milestone.id].label }}
      </div>
    </div>
    <br />
    <h4>Foraging Milestones</h4>
    <div
      v-for="(milestone, index) in milestones.foraging"
      :key="`milestoneForaging-${index}`"
    >
      <div v-if="plantUnlocks[milestone.id]">
        {{ milestoneAmounts.foraging[milestone.id] }}🪓
        {{ plants[milestone.id].label }}
      </div>
    </div>
    <br />
    <!-- 
    <h4>Farming Milestones</h4>
    <div
      v-for="(milestone, index) in milestones.farming"
      :key="`milestoneFarming-${index}`"
    >
      <div v-if="cropUnlocks[milestone.id]">
        {{ milestoneAmounts.farming[milestone.id] }}🌱
        {{ crops[milestone.id].label }}
      </div>
    </div>
    <br />
    -->
    <!--
    <h4>Fishing Milestones</h4>
    <div
      v-for="(milestone, index) in milestones.fishing"
      :key="`milestoneFishing-${index}`"
    >
      {{ milestoneAmounts.fishing[milestone.id] }}🎣 {{ milestone.label }}
    </div>-->
  </div>
</template>

<script>
export default {
  computed: {
    enemies() {
      return this.$store.getters.getEnemies;
    },

    ores() {
      return this.$store.getters.getOres;
    },

    plants() {
      return this.$store.getters.getPlants;
    },

    crops() {
      return this.$store.getters.getCrops;
    },

    milestones() {
      return this.$store.getters.getMilestones;
    },

    milestoneAmounts() {
      return this.$store.getters.getMilestoneAmounts;
    },

    enemyUnlocks() {
      return this.$store.getters.getEnemyUnlocks;
    },

    oreUnlocks() {
      return this.$store.getters.getOreUnlocks;
    },

    plantUnlocks() {
      return this.$store.getters.getPlantUnlocks;
    },

    cropUnlocks() {
      return this.$store.getters.getCropUnlocks;
    },
  },
};
</script>