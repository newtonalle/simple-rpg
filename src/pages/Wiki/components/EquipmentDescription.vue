<template>
  <div>
    <h3 id="equipmentsSectorWiki">Equipments</h3>

    <br />
    <br />

    <div class="row">
      <div
        v-for="(equipment, index) in equipments"
        class="col-3"
        :key="`wikiEquipmentIndex-${index}`"
      >
        <div :id="`wiki-equipment-id-${equipment.id}`">
          <hr />
          <br />
          <h4>#{{ equipment.id }} {{ equipment.label }}</h4>
          <equipment-stats
            :itemId="equipment.id"
            :canBeRetracted="false"
            :showItemLabel="false"
          />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EquipmentStats from "../../components/EquipmentStats.vue";
export default {
  components: { EquipmentStats },
  computed: {
    equipments() {
      return this.$store.getters.getEquipments;
    },
  },
};
</script>