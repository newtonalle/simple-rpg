<template>
  <div>
    <h5 class="fw-bold">{{ equipments[itemId].label }}</h5>

    <button
      :class="`btn btn-${buttonLabel.color}`"
      :disabled="
        !itemEquippedStatus &&
        player.equippedItems.findIndex(
          (equipingItemId) =>
            equipments[equipingItemId].type === equipments[itemId].type
        ) >= 0
      "
      @click="toggleItem"
    >
      {{ buttonLabel.text }}
    </button>

    <button
      v-if="!itemEquippedStatus"
      style="margin-left: 10px"
      class="btn btn-danger"
      @click="removeEquipment"
    >
      Delete
    </button>
    <br />
    <br />

    <p class="fw-bold" v-if="equipments[itemId].effectLore">
      {{ equipments[itemId].effectLore }}
    </p>

    <p class="fw-bold" v-if="equipments[itemId].strengthBonus != 0">
      {{ equipments[itemId].strengthBonus }} 👊
    </p>

    <p class="fw-bold" v-if="equipments[itemId].defenseBonus != 0">
      {{ equipments[itemId].defenseBonus }} 🛡️
    </p>

    <p class="fw-bold" v-if="equipments[itemId].healthBonus != 0">
      {{ equipments[itemId].healthBonus }} ❤️
    </p>

    <p class="fw-bold" v-if="equipments[itemId].miningSpeedBonus != 0">
      {{ equipments[itemId].miningSpeedBonus }} ⛏
    </p>

    <p class="fw-bold" v-if="equipments[itemId].miningLuckBonus != 0">
      {{ equipments[itemId].miningLuckBonus }} 🍀
    </p>

    <p class="fw-bold" v-if="equipments[itemId].fishingLuckBonus != 0">
      {{ equipments[itemId].fishingLuckBonus }} 🐟
    </p>

    <p class="fw-bold" v-if="equipments[itemId].manaCost != 0">
      {{ equipments[itemId].manaCost }} 🪄
    </p>

    <p class="fw-bold" v-if="equipments[itemId].healing != 0">
      {{ equipments[itemId].healing }} ️‍🩹
    </p>

    <p class="fw-bold" v-if="equipments[itemId].regeneration != 0">
      {{ equipments[itemId].regeneration }} ️‍💗
    </p>

    <p class="fw-bold" v-if="equipments[itemId].critChanceBonus != 0">
      {{ equipments[itemId].critChanceBonus }}% ️💥🍀
    </p>

    <p class="fw-bold" v-if="equipments[itemId].critDamageMultiplierBonus != 0">
      {{ equipments[itemId].critDamageMultiplierBonus }}x ️💥👊
    </p>
  </div>
</template>

<script>
export default {
  props: { itemId: Number, itemEquippedStatus: Boolean },

  computed: {
    player() {
      return this.$store.getters.getPlayer;
    },

    equipments() {
      return this.$store.getters.getEquipments;
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

    removeEquipment() {
      if (confirm("Are you sure you want to delete this item?")) {
        this.$emit("removeEquipment");
      }
    },
  },
};
</script>