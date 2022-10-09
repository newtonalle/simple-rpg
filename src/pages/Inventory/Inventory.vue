<template>
  <div class="text-center">
    <div class="container">
      <div class="row">
        <div class="col-sm"><crafting /></div>
        <div class="col-sm"><materials /></div>
        <div class="col-sm"><shop /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Crafting from "./components/Crafting.vue";
import Materials from "./components/Materials.vue";
import Shop from "./components/Shop.vue";

export default {
  components: { Crafting, Materials, Shop },
};
</script>