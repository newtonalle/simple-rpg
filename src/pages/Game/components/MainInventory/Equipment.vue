<template>
  <div>
    <h5 class="fw-bold">{{ equipments[itemId].label }}</h5>

    <div v-if="itemEquippedStatus">
      <button
        :disabled="inBattle"
        :class="`btn btn-${buttonLabel.color}`"
        @click="toggleItem"
      >
        {{ buttonLabel.text }}
      </button>
    </div>

    <div v-else>
      <button
        :class="`btn btn-${buttonLabel.color} dropdown-toggle`"
        :disabled="inBattle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {{ buttonLabel.text }}
      </button>
      <ul class="dropdown-menu">
        <button
          v-for="(setup, setupIndex) in player.setups"
          :key="`setup-${setup}-index-${setupIndex}`"
          style="width: 100px"
          class="btn btn-primary"
          :disabled="
            player.setups[setupIndex].findIndex(
              (equipingItemId) =>
                equipments[equipingItemId].type === equipments[itemId].type
            ) >= 0 || inBattle
          "
          @click="toggleItem(setupIndex)"
        >
          #{{ setupIndex }}
        </button>
      </ul>

      <button
        v-if="!itemEquippedStatus"
        style="margin-left: 10px"
        class="btn btn-danger"
        @click="removeEquipment"
      >
        Delete
      </button>
    </div>

    <br />

    <p class="fw-bold" v-if="equipments[itemId].effectLore">
      {{ equipments[itemId].effectLore }}
    </p>

    <p class="fw-bold" v-if="equipments[itemId].strengthBonus">
      {{ equipments[itemId].strengthBonus }} 👊
    </p>

    <p class="fw-bold" v-if="equipments[itemId].defenseBonus">
      {{ equipments[itemId].defenseBonus }} 🛡️
    </p>

    <p class="fw-bold" v-if="equipments[itemId].healthBonus">
      {{ equipments[itemId].healthBonus }} ❤️
    </p>

    <p class="fw-bold" v-if="equipments[itemId].miningSpeedBonus">
      {{ equipments[itemId].miningSpeedBonus }} ⛏
    </p>

    <p class="fw-bold" v-if="equipments[itemId].miningLuckBonus">
      {{ equipments[itemId].miningLuckBonus }} ⛏🍀
    </p>

    <p class="fw-bold" v-if="equipments[itemId].foragingSpeedBonus">
      {{ equipments[itemId].foragingSpeedBonus }} 🪓
    </p>

    <p class="fw-bold" v-if="equipments[itemId].foragingLuckBonus">
      {{ equipments[itemId].foragingLuckBonus }} 🪓🍀
    </p>

    <p class="fw-bold" v-if="equipments[itemId].farmingLuckBonus">
      {{ equipments[itemId].farmingLuckBonus }} 🌱🍀
    </p>

    <p class="fw-bold" v-if="equipments[itemId].fishingLuckBonus">
      {{ equipments[itemId].fishingLuckBonus }} 🐟
    </p>

    <p class="fw-bold" v-if="equipments[itemId].manaCost">
      {{ equipments[itemId].manaCost }} 🪄
    </p>

    <p class="fw-bold" v-if="equipments[itemId].healing">
      {{ equipments[itemId].healing }} ️‍🩹
    </p>

    <p class="fw-bold" v-if="equipments[itemId].regeneration">
      {{ equipments[itemId].regeneration }} ️‍💗
    </p>

    <p class="fw-bold" v-if="equipments[itemId].critChanceBonus">
      {{ equipments[itemId].critChanceBonus }}% ️💥🍀
    </p>

    <p class="fw-bold" v-if="equipments[itemId].critDamageMultiplierBonus">
      {{ equipments[itemId].critDamageMultiplierBonus }}x ️💥👊
    </p>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    itemId: Number,
    itemEquippedStatus: Boolean,
    inBattle: Boolean,
  },

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
    toggleItem(setupIndex) {
      this.$emit("toggleItem", this.index, setupIndex);
    },

    removeEquipment() {
      if (confirm("Are you sure you want to delete this item?")) {
        this.$emit("removeEquipment");
      }
    },
  },
};
</script>