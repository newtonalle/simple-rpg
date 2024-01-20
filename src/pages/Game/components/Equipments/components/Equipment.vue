<template>
  <div>
    <equipment-stats
      :itemId="itemId"
      :canBeRetracted="true"
      :showItemLabel="true"
    />

    <div v-if="itemEquippedStatus">
      <div v-if="setItem">
        <button
          :disabled="inBattle"
          :class="`btn btn-${buttonLabel.color}`"
          @click="unequipSetItem"
        >
          {{ buttonLabel.text }}
        </button>
      </div>
      <div v-else>
        <button :class="`btn btn-${buttonLabel.color}`" @click="unequipItem">
          {{ buttonLabel.text }}
        </button>
      </div>
    </div>

    <div v-else>
      <div v-if="setItem">
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
            @click="equipSetItem(setupIndex)"
          >
            #{{ setupIndex }}
          </button>
        </ul>
      </div>
      <div v-else>
        <button
          :class="`btn btn-${buttonLabel.color}`"
          :disabled="!canEquip(-1)"
          @click="equipItem()"
          style="width: 80px"
        >
          {{ buttonLabel.text }}
        </button>
      </div>

      <button
        v-if="!itemEquippedStatus && deleteButtonAppear"
        style="width: 80px"
        class="btn btn-danger"
        @click="removeEquipment"
      >
        Delete
      </button>
    </div>

    <br />

    <div v-if="equipments[itemId].useEffect && inBattle && itemEquippedStatus">
      <br />
      <button
        :disabled="
          player.stats.mana < equipments[itemId].manaCost ||
          itemSetupIndex != player.equippedSetup ||
          useEffectTimer > 0 ||
          useEffectTimer === -999
        "
        class="btn btn-success"
        @click="useEffect(itemId)"
      >
        Use ({{ equipments[itemId].manaCost }}🪄)
        <span v-if="useEffectTimer > 0">({{ useEffectTimer }}s)</span>
        <span v-if="useEffectTimer === -999">(Used)</span>
      </button>
    </div>
  </div>
</template>

<script>
import EquipmentStats from "../../../../components/EquipmentStats.vue";
export default {
  props: {
    index: Number,
    itemId: Number,
    useEffectTimer: Number,
    itemEquippedStatus: Boolean,
    itemSetupIndex: Number,
    inBattle: Boolean,
    setItem: Boolean,
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
    equipSetItem(setupIndex) {
      this.$store.dispatch("equipSetItem", { index: this.index, setupIndex });
    },

    unequipSetItem(setupIndex) {
      this.$store.dispatch("unequipSetItem", { index: this.index, setupIndex });
    },

    equipItem() {
      this.$store.dispatch("equipItem", this.index);
    },

    unequipItem() {
      this.$store.dispatch("unequipItem", this.index);
    },

    removeEquipment() {
      if (confirm("Are you sure you want to delete this item?")) {
        this.$emit("removeEquipment");
      }
    },

    useEffect(id) {
      this.$store.dispatch("useEffect", { id, index: this.index });
    },

    canEquip(setupIndex) {
      // Verify if there's already an item equipped using the slot you are currently trying to equip an item on

      let slotOccuppied = false;

      if (setupIndex === -1) {
        slotOccuppied = this.player.equippedItems.findIndex(
          (equipingItem) =>
            this.equipments[equipingItem.id].slot ===
            this.equipments[this.itemId].slot
        );
      } else {
        slotOccuppied = this.player.setups[setupIndex].findIndex(
          (equipingItem) =>
            this.equipments[equipingItem.id].slot ===
            this.equipments[this.itemId].slot
        );
      }

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
        (this.inBattle && this.setItem) ||
        !skillRequirementMet
      ) {
        return false;
      }
      return true;
    },
  },
};
</script>
