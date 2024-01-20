<template>
  <div>
    <div style="cursor: pointer" @click="popout = !popout">
      <br />
      <h2>Update 1.2.1</h2>
      <p style="font-style: italic">Released January 20th, 2024</p>
      <div v-if="popout">
        <br />
        <br />
        <h3>Quality of Life</h3>

        <br />

        <p>- Added wiki shortcuts</p>

        <br />
        <br />

        <h3>New/Reworked Features</h3>

        <br />

        <p>- Added Boss Fight-only bonuses</p>
        <p>- Divided Regeneration into Passive & Active Regeneration</p>
        <p>
          - The setups now have been divided into item sets (for items) & setups
          (for armors)
        </p>
        <p>- Added Quiver System</p>

        <br />
        <br />

        <h3>Balancing</h3>

        <br />

        <p>- Reworked Craftings of Armors</p>
        <p>- Changed stats for Worm Skull & Healing Sword Items</p>
        <p>- Reworked Wands to have a Use Cooldown</p>

        <br />
        <br />

        <h3>Bug Fixes</h3>

        <br />

        <p>
          - Cooldowns during boss fights kept running when the player went to
          the other screens
        </p>
        <p>- Player could use items from non-equipped sets</p>
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