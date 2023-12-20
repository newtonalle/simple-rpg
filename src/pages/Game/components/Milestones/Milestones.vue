<template>
  <div>
    <h2>Milestones</h2>
    <h4>Combat Milestones</h4>
    <div
      v-for="(milestone, index) in milestones.enemies"
      :key="`milestoneEnemies-${index}`"
    >
      {{ milestoneAmounts.enemies[milestone.id] }}🗡️
      {{ enemies[milestone.id].label }}
    </div>
    <hr class="divider" />
    <h4>Mining Milestones</h4>
    <div
      v-for="(milestone, index) in milestones.mining"
      :key="`milestoneMining-${index}`"
    >
      {{ milestoneAmounts.mining[milestone.id] }}⛏
      {{ ores[milestone.id].label }}
    </div>
    <hr class="divider" />
    <h4>Foraging Milestones</h4>
    <div
      v-for="(milestone, index) in milestones.foraging"
      :key="`milestoneForaging-${index}`"
    >
      {{ milestoneAmounts.foraging[milestone.id] }}🪓
      {{ plants[milestone.id].label }}
    </div>
    <hr class="divider" />
    <h4>Farming Milestones</h4>
    <div
      v-for="(milestone, index) in milestones.farming"
      :key="`milestoneFarming-${index}`"
    >
      {{ milestoneAmounts.farming[milestone.id] }}🌱
      {{ crops[milestone.id].label }}
    </div>
    <hr class="divider" />
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
  },
};
</script>