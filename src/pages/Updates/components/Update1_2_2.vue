<template>
  <div>
    <div style="cursor: pointer" @click="popout = !popout">
      <br />
      <h2>Update 1.2.2</h2>
      <p style="font-style: italic">Released Febuary 10th, 2024</p>
      <div v-if="popout">
        <br />
        <br />
        <h3>Code Enhancement</h3>

        <br />

        <p>- Changed the way intern IDs work</p>

        <br />
        <br />

        <h3>Bug Fixes</h3>

        <br />

        <p>- Fixed Bug which the Player couldn't Unequip Set-Items</p>
        <p>
          - Fixed Bug with the Healing Wand, which didn't work properly when
          used
        </p>

        <br />
        <br />

        <h3>Balancing</h3>

        <br />

        <p>- Changed sell price of logs to a more reasonable value</p>

        <br />
        <br />
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