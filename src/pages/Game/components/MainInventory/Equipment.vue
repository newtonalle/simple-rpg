<template>
  <div>
    <h5 class="fw-bold">{{ item.label }}</h5>

    <button
      :class="`btn btn-${buttonLabel.color}`"
      :disabled="
        !itemEquippedStatus &&
        player.equippedItems.findIndex(
          (equipingItem) => equipingItem.type === item.type
        ) >= 0
      "
      @click="toggleItem"
    >
      {{ buttonLabel.text }}
    </button>
    <br />
    <br />

    <p class="fw-bold" v-if="item.effectLore">{{ item.effectLore }}</p>

    <p class="fw-bold" v-if="item.strengthBonus != 0">
      {{ item.strengthBonus }} 👊
    </p>

    <p class="fw-bold" v-if="item.defenseBonus != 0">
      {{ item.defenseBonus }} 🛡️
    </p>

    <p class="fw-bold" v-if="item.healthBonus != 0">
      {{ item.healthBonus }} ❤️
    </p>

    <p class="fw-bold" v-if="item.miningSpeedBonus != 0">
      {{ item.miningSpeedBonus }} ⛏
    </p>

    <p class="fw-bold" v-if="item.miningLuckBonus != 0">
      {{ item.miningLuckBonus }} 🍀
    </p>

    <p class="fw-bold" v-if="item.fishingLuckBonus != 0">
      {{ item.fishingLuckBonus }} 🐟
    </p>

    <p class="fw-bold" v-if="item.manaCost != 0">{{ item.manaCost }} 🪄</p>

    <p class="fw-bold" v-if="item.healing != 0">{{ item.healing }} ️‍🩹</p>

    <p class="fw-bold" v-if="item.regeneration != 0">
      {{ item.regeneration }} ️‍💗
    </p>
  </div>
</template>

<script>
export default {
  props: { item: Object, itemEquippedStatus: Boolean },

  computed: {
    player() {
      return this.$store.getters.getPlayer;
    },
    buttonLabel() {
      let buttonLabel = {
        color: "",
        text: "",
      };
      if (this.itemEquippedStatus) {
        buttonLabel.text = "Unequip";
        buttonLabel.color = "danger";
      } else {
        buttonLabel.text = "Equip";
        buttonLabel.color = "success";
      }

      return buttonLabel;
    },
  },

  methods: {
    toggleItem() {
      this.$emit("toggleItem");
    },
  },
};
</script>