<template>
  <div>
    <h5 class="fw-bold">{{ equipments[itemId].label }}</h5>

    <div v-if="itemEquippedStatus">
      <button
        :disabled="
          inBattle &&
          (equipments[itemId].slot === 'helmet' ||
            equipments[itemId].slot === 'chestplate' ||
            equipments[itemId].slot === 'leggings' ||
            equipments[itemId].slot === 'boots')
        "
        :class="`btn btn-${buttonLabel.color}`"
        @click="toggleItem"
      >
        {{ buttonLabel.text }}
      </button>
    </div>

    <div v-else>
      <button
        :class="`btn btn-${buttonLabel.color} dropdown-toggle`"
        :disabled="!canEquip(0) && !canEquip(1)"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style="width: 80px"
      >
        {{ buttonLabel.text }}
      </button>
      <ul class="dropdown-menu">
        <button
          v-for="(setup, setupIndex) in player.setups"
          :key="`setup-${setup}-index-${setupIndex}`"
          style="width: 100px"
          class="btn btn-primary"
          :disabled="!canEquip(setupIndex)"
          @click="toggleItem(setupIndex)"
        >
          #{{ setupIndex }}
        </button>
      </ul>

      <button
        v-if="!itemEquippedStatus && deleteButtonAppear"
        style="width: 80px; margin-left: 10px"
        class="btn btn-danger"
        @click="removeEquipment"
      >
        Delete
      </button>
    </div>

    <br />

    <equipment-stats :itemId="itemId" />

    <div v-if="equipments[itemId].useEffect && inBattle && itemEquippedStatus">
      <br />
      <button
        :disabled="player.stats.mana < equipments[itemId].manaCost"
        class="btn btn-success"
        @click="useEffect(itemId)"
      >
        Use ({{ equipments[itemId].manaCost }}🪄)
      </button>
    </div>
  </div>
</template>

<script>
import EquipmentStats from "../../../components/EquipmentStats.vue";
export default {
  props: {
    index: Number,
    itemId: Number,
    itemEquippedStatus: Boolean,
    inBattle: Boolean,
    deleteButtonAppear: Boolean,
  },

  components: { EquipmentStats },

  computed: {
    player() {
      return this.$store.getters.getPlayer;
    },

    playerSkillLevel() {
      return this.$store.getters.getPlayerSkillLevel;
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

    useEffect(id) {
      this.$store.dispatch("useEffect", id);
    },

    canEquip(setupIndex) {
      // Verify if there's already an item equipped using the slot you are currently trying to equip an item on

      let slotOccuppied = this.player.setups[setupIndex].findIndex(
        (equipingItemId) =>
          this.equipments[equipingItemId].slot ===
          this.equipments[this.itemId].slot
      );

      let skillRequirementMet = true;

      if (this.equipments[this.itemId].equipSkillRequirement) {
        // First verify if there is a skill requirement

        // If there is one, run through each one of them

        Object.keys(this.equipments[this.itemId].equipSkillRequirement).forEach(
          (skill) => {
            // Verify if the requirement is met
            if (
              this.playerSkillLevel[skill] <
              this.equipments[this.itemId].equipSkillRequirement[skill]
            ) {
              // If not, set the variable to false

              skillRequirementMet = false;
            }
          }
        );
      }

      if (
        slotOccuppied >= 0 ||
        (this.inBattle &&
          (this.equipments[this.itemId].slot === "helmet" ||
            this.equipments[this.itemId].slot === "chestplate" ||
            this.equipments[this.itemId].slot === "leggings" ||
            this.equipments[this.itemId].slot === "boots")) ||
        !skillRequirementMet
      ) {
        return false;
      }
      return true;
    },
  },
};
</script>