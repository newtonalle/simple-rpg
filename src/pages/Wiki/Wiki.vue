<template>
  <div class="text-center">
    <h1>Wiki 📄</h1>
    <br />
    <p>
      Here is where you may find more about the game's items, functionality and
      details that might helps you in your gameplay!
    </p>

    <h3>Index</h3>

    <br />

    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('iconLabelsSectorWiki')"
    >
      - Icon Labels
    </p>
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('locationsSectorWiki')"
    >
      - Locations
    </p>
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('equipmentsSectorWiki')"
    >
      - Equipments
    </p>
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('arrowsSectorWiki')"
    >
      - Arrows
    </p>
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('materialsSectorWiki')"
    >
      - Materials
    </p>
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('enemiesSectorWiki')"
    >
      - Enemies
    </p>
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('oresSectorWiki')"
    >
      - Ores
    </p>
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('plantsSectorWiki')"
    >
      - Plants
    </p>
    <!--<p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('cropsSectorWiki')"
    >
      - Crops
    </p>-->
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('craftingSectorWiki')"
    >
      - Crafting
    </p>
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('shopSectorWiki')"
    >
      - Shop
    </p>
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('forgeSectorWiki')"
    >
      - Forge
    </p>

    <br />
    <hr />
    <br />

    <iconLabelsDescription @scrollToElement="scrollToElement" />

    <br />
    <hr />
    <br />

    <location-description @scrollToElement="scrollToElement" />

    <br />
    <hr />
    <br />

    <equipment-description @scrollToElement="scrollToElement" />

    <br />
    <hr />
    <br />

    <arrow-description @scrollToElement="scrollToElement" />

    <br />
    <hr />
    <br />

    <material-description @scrollToElement="scrollToElement" />

    <br />
    <hr />
    <br />

    <enemy-description @scrollToElement="scrollToElement" />

    <br />
    <hr />
    <br />

    <ore-description @scrollToElement="scrollToElement" />

    <br />
    <hr />
    <br />

    <plant-description @scrollToElement="scrollToElement" />

    <!--- 

    <crop-description @scrollToElement="scrollToElement" />

    -->

    <br />
    <hr />
    <br />

    <crafting-description @scrollToElement="scrollToElement" />

    <br />
    <hr />
    <br />

    <shop-description @scrollToElement="scrollToElement" />

    <br />
    <hr />
    <br />

    <forge-description @scrollToElement="scrollToElement" />
  </div>
</template>

<script>
import IconLabelsDescription from "./components/IconLabelsDescription.vue";
import LocationDescription from "./components/LocationDescription.vue";
import EquipmentDescription from "./components/EquipmentDescription.vue";
import ArrowDescription from "./components/ArrowDescription.vue";
import MaterialDescription from "./components/MaterialDescription.vue";
import EnemyDescription from "./components/EnemyDescription.vue";
import OreDescription from "./components/OreDescription.vue";
import PlantDescription from "./components/PlantDescription.vue";
// import CropDescription from "./components/CropDescription.vue";
import CraftingDescription from "./components/CraftingDescription.vue";
import ShopDescription from "./components/ShopDescription.vue";
import ForgeDescription from "./components/ForgeDescription.vue";
export default {
  data: () => ({
    setIntervalId: 0,
    speedSetIntervalId: 1,
  }),

  components: {
    IconLabelsDescription,
    LocationDescription,
    EquipmentDescription,
    ArrowDescription,
    MaterialDescription,
    EnemyDescription,
    OreDescription,
    PlantDescription,
    CraftingDescription,
    ShopDescription,
    ForgeDescription,
    // CropDescription
  },

  computed: {
    materials() {
      return this.$store.getters.getMaterials;
    },

    equipments() {
      return this.$store.getters.getEquipments;
    },

    arrows() {
      return this.$store.getters.getArrows;
    },

    enemies() {
      return this.$store.getters.getEnemies;
    },

    ores() {
      return this.$store.getters.getOres;
    },

    plants() {
      return this.$store.getters.getPlants;
    },

    recipes() {
      return this.$store.getters.getRecipes;
    },

    shop() {
      return this.$store.getters.getShop;
    },

    forge() {
      return this.$store.getters.getForge;
    },

    collections() {
      return this.$store.getters.getCollections;
    },
  },

  methods: {
    async sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },

    async scrollToElement(id) {
      document.getElementById(id).scrollIntoView();

      await this.sleep(400);

      document.getElementById(id).style.backgroundColor = "#d3d3d3";

      await this.sleep(400);

      document.getElementById(id).style.backgroundColor = "#ffffff";

      await this.sleep(400);

      document.getElementById(id).style.backgroundColor = "#d3d3d3";

      await this.sleep(400);

      document.getElementById(id).style.backgroundColor = "#ffffff";

      await this.sleep(400);

      document.getElementById(id).style.backgroundColor = "#d3d3d3";

      await this.sleep(400);

      document.getElementById(id).style.backgroundColor = "#ffffff";
    },

    updateGame() {
      this.$store.dispatch("updateGame");
    },

    speedyUpdate() {
      this.$store.dispatch("speedyUpdate");
    },

    leftBossScreen() {
      this.$store.dispatch("changeInBossScreenStatus", false);
    },

    versionUpdate() {
      this.$store.dispatch("versionUpdate");
    },
  },

  created() {
    this.versionUpdate();
    this.leftBossScreen();

    this.setIntervalId = setInterval(() => {
      this.updateGame();
    }, 1000);

    this.speedSetIntervalId = setInterval(() => {
      this.speedyUpdate();
    }, 100);
  },

  destroyed() {
    clearInterval(this.setIntervalId);
    clearInterval(this.speedSetIntervalId);
  },
};
</script>