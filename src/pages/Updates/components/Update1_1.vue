<template>
  <div>
    <div style="cursor: pointer" @click="popout = !popout">
      <br />

      <h2>Update 1.1</h2>
      <p style="font-style: italic">Released November 12th, 2023</p>

      <div v-if="popout">
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
    popout: false,
  }),
};
</script>