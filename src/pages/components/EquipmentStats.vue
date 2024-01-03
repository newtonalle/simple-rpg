<template>
  <div>
    <p class="fw-bold" v-if="equipments[itemId].effectLore">
      {{ equipments[itemId].effectLore }}
    </p>

    <div v-if="equipments[itemId].equipSkillRequirement">
      <div
        v-for="(skill, index) in Object.keys(
          equipments[itemId].equipSkillRequirement
        )"
        :key="`skillRequirement-itemId-${itemId}-${index}`"
      >
        <p class="fw-bold">
          Requires {{ skill.toUpperCase() }}
          {{ equipments[itemId].equipSkillRequirement[skill] + 1 }}
        </p>
      </div>
    </div>

    <p class="fw-bold" v-if="equipments[itemId].strengthBonus">
      {{ equipments[itemId].strengthBonus }} 👊
    </p>

    <p class="fw-bold" v-if="equipments[itemId].attackSpeedBonus">
      {{ equipments[itemId].attackSpeedBonus }} 👊⚡
    </p>

    <p class="fw-bold" v-if="equipments[itemId].defenseBonus">
      {{ equipments[itemId].defenseBonus }} 🛡️
    </p>

    <p class="fw-bold" v-if="equipments[itemId].healthBonus">
      {{ equipments[itemId].healthBonus }} ❤️
    </p>

    <p class="fw-bold" v-if="equipments[itemId].miningSpeedBonus">
      {{ equipments[itemId].miningSpeedBonus }} ⛏⚡
    </p>

    <p class="fw-bold" v-if="equipments[itemId].miningLuckBonus">
      {{ equipments[itemId].miningLuckBonus }} ⛏🍀
    </p>

    <p class="fw-bold" v-if="equipments[itemId].foragingSpeedBonus">
      {{ equipments[itemId].foragingSpeedBonus }} 🪓⚡
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

    <p class="fw-bold" v-if="equipments[itemId].aimingAccuracyBonus">
      {{ equipments[itemId].aimingAccuracyBonus }}% ️🎯
    </p>

    <p class="fw-bold" v-if="equipments[itemId].magicDamageBonus">
      {{ equipments[itemId].magicDamageBonus }} ️👊🪄
    </p>
  </div>
</template>

<script>
export default {
  props: { itemId: Number },

  computed: {
    equipments() {
      return this.$store.getters.getEquipments;
    },
  },
};
</script>