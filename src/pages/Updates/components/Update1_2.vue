<template>
  <div>
    <div style="cursor: pointer" @click="popout = !popout">
      <br />
      <h2>Update 1.2</h2>
      <p style="font-style: italic">Released January 8th, 2024</p>
      <div v-if="popout">
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
        <p>- Added a New Locations System</p>
        <p>- Added Crit Bar Mechanic to Bosses, Mining & Foraging Skills</p>
        <p>- Reworked and added more materials</p>
        <p>- Reworked and added more equipments</p>
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
  </div>
</template>

<script>
export default {
  data: () => ({
    popout: false,
  }),
};
</script>