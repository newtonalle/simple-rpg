<template>
  <div>
    <h3 id="arrowsSectorWiki">Arrows</h3>

    <br />
    <br />

    <div class="row">
      <div
        v-for="(arrow, index) in arrows"
        class="col-3"
        :key="`wikiEquipmentIndex-${index}`"
      >
        <hr />
        <br />
        <h4 :id="`wiki-arrow-id-${arrow.id}`">
          #{{ arrow.id }} {{ arrow.label }}
        </h4>
        <arrow-stats
          :itemId="arrow.id"
          :canBeRetracted="false"
          :showItemLabel="false"
        />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import ArrowStats from "../../components/ArrowStats.vue";
export default {
  components: { ArrowStats },
  computed: {
    arrows() {
      return this.$store.getters.getArrows;
    },
  },
};
</script>