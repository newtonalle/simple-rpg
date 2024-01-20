<template>
  <div>
    <h3 id="cropsSectorWiki">Crops</h3>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToElement(id) {
      this.$emit("scrollToElement", id);
    },
  },
};
</script>