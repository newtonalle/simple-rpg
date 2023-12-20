<template>
  <div>
    <img
      id="critbarId"
      class="critBar"
      src="../../../../../assets/Bar.png"
      alt="BAR IMG"
    />
    <br />
    <img
      id="markerId"
      class="critMarker"
      src="../../../../../assets/Marker.png"
      alt="MARKER"
    />

    <br />
    <br />

    <button class="btn btn-danger" :disabled="cooldown > 0" @click="critHit">
      {{ hitText }}
      <span v-if="cooldown > 0">({{ cooldown }}s)</span>
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

  props: { speed: Number, cooldown: Number, hitText: String },

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
      let image = document.getElementById("markerId");

      this.critMarkerPosX += 10 * this.critDirection;
      image.style.marginLeft = this.critMarkerPosX + "px";
      if (this.critMarkerPosX >= 120 || this.critMarkerPosX <= -120) {
        this.critDirection = -this.critDirection;
      }
    },
  },

  created() {
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
.critMarker {
  height: 20px;
  width: 20px;
}
.critBar {
  height: 40px;
  width: 150px;
}
button {
  width: 150px;
}
</style>