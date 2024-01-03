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
      @click="scrollToElement('equipmentsSectorWiki')"
    >
      - Equipments
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
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('cropsSectorWiki')"
    >
      - Crops
    </p>
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

    <br />
    <hr />
    <br />

    <h3 id="equipmentsSectorWiki">Equipments</h3>

    <br />

    <p>Icon Labels</p>

    <br />

    <p>#001 - A</p>

    <br />
    <hr />
    <br />

    <h3 id="materialsSectorWiki">Materials</h3>

    <br />

    <p>#001 - A</p>

    <br />
    <hr />
    <br />

    <h3 id="enemiesSectorWiki">Enemies</h3>

    <br />

    <p>Icon Labels</p>

    <br />

    <p>#001 - A</p>

    <br />
    <hr />
    <br />

    <h3 id="oresSectorWiki">Ores</h3>

    <br />

    <p>#001 - A</p>

    <br />
    <hr />
    <br />

    <h3 id="plantsSectorWiki">Plants</h3>

    <br />

    <p>#001 - A</p>

    <br />
    <hr />
    <br />

    <h3 id="cropsSectorWiki">Crops</h3>

    <br />

    <p>#001 - A</p>

    <br />
    <hr />
    <br />

    <h3 id="craftingSectorWiki">Crafting</h3>

    <br />

    <p>#001 - A</p>

    <br />
    <hr />
    <br />

    <h3 id="shopSectorWiki">Shop</h3>

    <br />

    <p>#001 - A</p>

    <br />
    <br />
  </div>
</template>

<script>
export default {
  data: () => ({
    setIntervalId: 0,
    speedSetIntervalId: 1,
  }),

  methods: {
    scrollToElement(id) {
      document.getElementById(id).scrollIntoView();
    },

    updateGame() {
      this.$store.dispatch("updateGame");
    },

    speedyUpdate() {
      this.$store.dispatch("speedyUpdate");
    },

    versionUpdate() {
      this.$store.dispatch("versionUpdate");
    },
  },

  created() {
    this.versionUpdate();

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