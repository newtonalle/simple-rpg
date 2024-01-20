<template>
  <div>
    <img
      class="critBar"
      src="../../../../../assets/Bar.png"
      alt="BAR IMG"
      style="height: 40px; width: 150px"
    />
    <br />
    <img
      :id="`markerId-${markerId}`"
      class="critMarker"
      src="../../../../../assets/Marker.png"
      alt="MARKER"
      style="height: 20px; width: 20px"
    />

    <br />
    <br />

    <button
      class="btn btn-danger"
      :disabled="cooldown > 0 || specialDisabled"
      @click="critHit"
    >
      {{ hitText }}
      <span v-if="cooldown > 0">({{ cooldown }}s)</span>
      <span v-if="specialDisabled">(No Arrows!)</span>
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    critMarkerPosX: 0,
    critDirection: 1,
    setIntervalId: 784,
    // (1) - going right
    // (-1) - going left
  }),

  props: {
    speed: Number,
    cooldown: Number,
    hitText: String,
    markerId: Number,
    specialDisabled: Boolean,
  },

  methods: {
    critHit() {
      let hitAccuracy = 0;
      if (this.critMarkerPosX >= 0) {
        hitAccuracy = this.critMarkerPosX;
      } else {
        hitAccuracy = -this.critMarkerPosX;
      }

      this.$emit("critHit", hitAccuracy);
    },

    critMove() {
      let image = document.getElementById(`markerId-${this.markerId}`);

      this.critMarkerPosX += 10 * this.critDirection;
      image.style.marginLeft = this.critMarkerPosX + "px";
      if (this.critMarkerPosX >= 120 || this.critMarkerPosX <= -120) {
        this.critDirection = -this.critDirection;
      }
    },
  },

  mounted() {
    this.setIntervalId = setInterval(() => {
      this.critMove();
    }, this.speed);
  },

  destroyed() {
    clearInterval(this.setIntervalId);
  },
};
</script>

<style scoped>
button {
  width: 150px;
}
</style>