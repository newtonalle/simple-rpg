<template>
  <div @click="expandCard()" style="cursor: pointer">
    <h5 v-if="showItemLabel" class="fw-bold">{{ equipments[itemId].label }}</h5>
    <div v-if="expanded">
      <p v-if="arrows[itemId].strength">{{ arrows[itemId].strength }} 👊</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    expanded: false,
  }),

  props: { itemId: Number, canBeRetracted: Boolean, showItemLabel: Boolean },

  methods: {
    expandCard() {
      if (this.canBeRetracted) {
        this.expanded = !this.expanded;
      }
    },
  },

  computed: {
    arrows() {
      return this.$store.getters.getArrows;
    },
  },

  created() {
    this.expanded = !this.canBeRetracted;
  },
};
</script>