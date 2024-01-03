<template>
  <div class="text-center">
    <h1>Updates 📰</h1>

    <br />
    <hr />
    <div style="cursor: pointer" @click="popoutUpdate(0)">
      <br />
      <h2>Update 1.2</h2>
      <p style="font-style: italic">Released January nºth, 2024</p>
      <div v-if="popout[0]">
        <br />
        <br />

        <h3>Quality of Life</h3>

        <br />

        <p>- Added Search Bar to the Shop/Crafting Menus</p>
        <p>- Status now get instantly healed after a battle (HP & MP)</p>
        <p>- Fully Implemented the Wiki Page</p>

        <br />
        <br />

        <h3>General Grinding skills</h3>

        <br />

        <p>- Added a New Skill to the game (Foraging)</p>
        <p>- Added Crit Bar Mechanic to Bosses, Mining & Foraging Skills</p>
        <p>- Added 8 new items (2 Cheese Items & 6 Log Items)</p>
        <p>- Added Colections System</p>

        <br />
        <br />

        <h3>Combat Skill Updates</h3>

        <br />

        <p>
          - Added Grid Dodge Mechanic to Bosses, with new stats (move speed)
        </p>
        <p>- Balancing of Enemy Status & Appearing Order Logic</p>
        <p>
          - The player is now only allowed to bring 2 different sets of items to
          a battle
        </p>
        <p>- Added Weapon types, with new stats (accuracy)</p>

        <br />
        <br />

        <h3>Bug Fixes</h3>

        <br />

        <p>- Fixed many issues with the milestone unlocks</p>
        <p>
          - Fixed bug where the player could get extra health at the begining of
          a battle by quickly changing equipment & spawning the enemy
        </p>
      </div>

      <br />
    </div>

    <hr />

    <div style="cursor: pointer" @click="popoutUpdate(1)">
      <br />

      <h2>Update 1.1</h2>
      <p style="font-style: italic">Released November 12th, 2023</p>

      <div v-if="popout[1]">
        <br />
        <br />

        <h3>Quality of Life</h3>

        <br />

        <p>- Added Item previews in Shop/Crafting Menus</p>
        <p>- Added Item removal System to Inventory</p>
        <p>- Started Developing the "Wiki" Page</p>
        <p>- Added this "Updates" Page</p>

        <br />
        <br />

        <h3>General Grinding skills</h3>

        <br />

        <p>- Removed fishing</p>

        <br />
        <br />

        <h3>Combat Skill Updates</h3>

        <br />

        <p>- Added Critical Hit Mechanic</p>
        <p>- Added Attack Speed Mechanic</p>
        <p>- Updated the Enemy Drop System & Enemies in General</p>
      </div>
      <br />
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    popout: [false, false],
    setIntervalId: 0,
    speedSetIntervalId: 1,
  }),

  methods: {
    popoutUpdate(index) {
      this.popout[index] = !this.popout[index];
      this.popout.push();
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