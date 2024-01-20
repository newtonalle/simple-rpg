<template>
  <div @click="expandCard()" style="cursor: pointer">
    <h5 v-if="showItemLabel" class="fw-bold">{{ equipments[itemId].label }}</h5>

    <div class="fw-bold">
      <div v-if="equipments[itemId].equipSkillRequirement">
        <div
          v-for="(skill, index) in Object.keys(
            equipments[itemId].equipSkillRequirement
          )"
          :key="`skillRequirement-itemId-${itemId}-${index}`"
        >
          <p>
            Requires {{ skill.toUpperCase() }} LVL
            {{ equipments[itemId].equipSkillRequirement[skill] }}
          </p>
        </div>
      </div>
    </div>

    <div v-if="expanded">
      <p v-if="equipments[itemId].effectLore">
        {{ equipments[itemId].effectLore }}
      </p>

      <br />

      <p v-if="equipments[itemId].strengthBonus">
        {{ equipments[itemId].strengthBonus }} 👊
      </p>

      <p v-if="equipments[itemId].attackSpeedBonus">
        {{ equipments[itemId].attackSpeedBonus }} 👊⚡
      </p>

      <p v-if="equipments[itemId].defenseBonus">
        {{ equipments[itemId].defenseBonus }} 🛡️
      </p>

      <p v-if="equipments[itemId].healthBonus">
        {{ equipments[itemId].healthBonus }} ❤️
      </p>

      <p v-if="equipments[itemId].miningSpeedBonus">
        {{ equipments[itemId].miningSpeedBonus }} ⛏⚡
      </p>

      <p v-if="equipments[itemId].miningLuckBonus">
        {{ equipments[itemId].miningLuckBonus }} ⛏🍀
      </p>

      <p v-if="equipments[itemId].foragingSpeedBonus">
        {{ equipments[itemId].foragingSpeedBonus }} 🪓⚡
      </p>

      <p v-if="equipments[itemId].foragingLuckBonus">
        {{ equipments[itemId].foragingLuckBonus }} 🪓🍀
      </p>

      <p v-if="equipments[itemId].farmingLuckBonus">
        {{ equipments[itemId].farmingLuckBonus }} 🌱🍀
      </p>

      <p v-if="equipments[itemId].fishingLuckBonus">
        {{ equipments[itemId].fishingLuckBonus }} 🐟🍀
      </p>

      <p v-if="equipments[itemId].activeRegenerationBonus">
        {{ equipments[itemId].activeRegenerationBonus }} ️‍💗🗡️
      </p>

      <p v-if="equipments[itemId].passiveRegenerationBonus">
        {{ equipments[itemId].passiveRegenerationBonus }} ️‍💗🛡️
      </p>

      <p v-if="equipments[itemId].critChanceBonus">
        {{ equipments[itemId].critChanceBonus }}% ️💥🍀
      </p>

      <p v-if="equipments[itemId].critDamageMultiplierBonus">
        {{ equipments[itemId].critDamageMultiplierBonus }}x ️💥👊
      </p>

      <p v-if="equipments[itemId].aimingAccuracyBonus">
        {{ equipments[itemId].aimingAccuracyBonus }}% ️🎯
      </p>

      <p v-if="equipments[itemId].magicDamageBonus">
        {{ equipments[itemId].magicDamageBonus }} ️👊🪄
      </p>

      <p v-if="equipments[itemId].moveSpeedBonus">
        {{ equipments[itemId].moveSpeedBonus }} ️🦶💨
      </p>

      <p v-if="equipments[itemId].manaCost">
        {{ equipments[itemId].manaCost }} 🪄
      </p>

      <p v-if="equipments[itemId].maxEquippedArrows">
        x{{ equipments[itemId].maxEquippedArrows }}🏹
      </p>

      <div v-if="equipments[itemId].useEffect">
        <p>On Use:</p>
        <div v-if="equipments[itemId].useEffect.effect === 'boostStats'">
          <div
            v-for="(statsBonus, index) in Object.entries(
              equipments[itemId].useEffect.statsBonus
            )"
            :key="`statsBonusEquipmentOnUseIndex-${index}-${itemId}`"
          >
            <div v-if="statsBonus[0] != 'ignoreEnemyDefense'">
              + {{ statsBonus[1] }} {{ getStatSymbol(statsBonus[0]) }}
            </div>
            <div v-else>Ignore Enemy Defense</div>
          </div>
          <br />
          <p>
            Duration: {{ equipments[itemId].useEffect.duration }} Round<span
              v-if="equipments[itemId].useEffect.duration > 1"
              >s</span
            >
          </p>
        </div>

        <div v-if="equipments[itemId].useEffect.effect === 'healing'">
          Heals {{ equipments[itemId].useEffect.healing }} ❤️
        </div>

        <br />

        <p v-if="equipments[itemId].useEffect.oncePerCommonBattle">
          (Can only be used once in normal battles)
        </p>
        <p v-if="equipments[itemId].useEffect.bossFightRechargeCooldown">
          (Cooldown of
          {{ equipments[itemId].useEffect.bossFightRechargeCooldown }}s in Boss
          Fights)
        </p>
      </div>

      <div v-if="equipments[itemId].specialEffect">
        <div v-if="equipments[itemId].specialEffect === 'bonusPerMilestone'">
          <p>
            Gain the following buffs for every
            {{ equipments[itemId].specialEffectBonus.amount }}
            <span
              v-if="
                equipments[itemId].specialEffectBonus.milestoneType ===
                'enemies'
              "
            >
              {{
                enemies[equipments[itemId].specialEffectBonus.milestoneSubtype]
                  .label
              }}(s) slain [caps at
              {{ equipments[itemId].specialEffectBonus.bonusCap }}x the buff]
            </span>
          </p>
          <div
            v-for="(statsBonus, index) in Object.entries(
              equipments[itemId].specialEffectBonus.bonusPerLevel
            )"
            :key="`statsBonusEquipmentPerMilestoneIndex-${index}-${itemId}`"
          >
            <div v-if="statsBonus[0] != 'ignoreEnemyDefense'">
              + {{ statsBonus[1] }} {{ getStatSymbol(statsBonus[0]) }}
            </div>
          </div>
        </div>
      </div>

      <div v-if="equipments[itemId].duringBossFightBonus">
        <p>Gain the following buffs if you are in a boss fight</p>
        <div
          v-for="(statsBonus, index) in Object.entries(
            equipments[itemId].duringBossFightBonus
          )"
          :key="`statsBonusEquipmentInBossFightIndex-${index}-${itemId}`"
        >
          + {{ statsBonus[1] }} {{ getStatSymbol(statsBonus[0]) }}
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  data: () => ({
    expanded: false,
  }),

  props: { itemId: Number, canBeRetracted: Boolean, showItemLabel: Boolean },

  methods: {
    expandCard() {
      if (this.canBeRetracted) {
        this.expanded = !this.expanded;
      }
    },

    getStatSymbol(stat) {
      const statSymbols = {
        strength: "👊",
        attackSpeed: "👊⚡",
        defense: "🛡️",
        maxHealth: "❤️",
        activeRegeneration: " ️‍💗🗡️",
        passiveRegeneration: " ️‍💗🛡️",
        moveSpeed: "🦶💨",
        miningSpeed: "⛏⚡",
        miningLuck: "⛏🍀",
        foragingSpeed: "🪓⚡",
        foragingLuck: "🪓🍀",
        farmingLuck: "🌱🍀",
        fishingLuck: "🐟🍀",
        critChance: "%💥🍀",
        critDamageMultiplier: "x💥👊",
        aimingAccuracy: "%🎯",
      };

      return statSymbols[stat];
    },
  },

  computed: {
    equipments() {
      return this.$store.getters.getEquipments;
    },

    enemies() {
      return this.$store.getters.getEnemies;
    },
  },

  created() {
    this.expanded = !this.canBeRetracted;
  },
};
</script>