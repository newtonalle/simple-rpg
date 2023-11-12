<template>
  <div>
    <h2>Milestones</h2>
    <h4>Combat Milestones</h4>
    <div
      v-for="(milestone, index) in milestones.enemies"
      :key="`${milestone.name}-${index}`"
    >
      {{ milestoneAmounts.enemies[milestone.id] }}🗡️ {{ milestone.label }}
    </div>
    <hr class="divider" />
    <h4>Mining Milestones</h4>
    <div
      v-for="(milestone, index) in milestones.mining"
      :key="`${milestone.name}-${index}`"
    >
      {{ milestoneAmounts.mining[milestone.id] }}⛏ {{ milestone.label }}
    </div>
    <hr class="divider" />
    <!--
    <h4>Fishing Milestones</h4>
    <div
      v-for="(milestone, index) in milestones.fishing"
      :key="`${milestone.name}-${index}`"
    >
      {{ milestoneAmounts.fishing[milestone.id] }}🎣 {{ milestone.label }}
    </div>-->
  </div>
</template>

<script>
export default {
  computed: {
    milestones() {
      return this.$store.getters.getMilestones;
    },

    milestoneAmounts() {
      return this.$store.getters.getMilestoneAmounts;
    },
  },
};
</script>