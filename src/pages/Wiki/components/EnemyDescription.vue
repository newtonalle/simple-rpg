<template>
  <div>
    <h3 id="enemiesSectorWiki">Enemies</h3>

    <br />
    <br />

    <div class="row">
      <div
        v-for="(enemy, index) in enemies"
        :key="`enemyWikiIndex-${index}`"
        class="col-3"
      >
        <div :id="`wiki-enemy-id-${enemy.id}`">
          <hr />

          <br />

          <h4>#{{ enemy.id }} {{ enemy.label }}</h4>

          <p class="fw-bold">{{ enemyTypeLabel(enemy.type) }}</p>

          <div class="fw-bold">
            <p v-if="enemy.requiredSkill">
              Requires {{ enemy.requiredSkill.skill.toUpperCase() }} LVL
              {{ enemy.requiredSkill.level + 1 }}
            </p>
            <p v-if="enemy.requiredMilestoneType">
              Requires
              {{
                getRequiredMilestoneText(
                  enemy.requiredMilestoneType,
                  enemy.requiredMilestoneAmount
                )
              }}
            </p>
          </div>

          <br />

          <div class="row">
            <div class="col-6">
              <p>{{ enemy.stats.maxHealth }} ❤️</p>
              <p>{{ enemy.stats.defense }} 🛡️</p>
              <p>{{ enemy.stats.strength }} 👊</p>
            </div>
            <div class="col-6">
              <p>{{ enemy.stats.critChance }}% ️💥🍀</p>
              <p>{{ enemy.stats.critDamageMultiplier }}x ️💥👊</p>
              <p>{{ enemy.stats.attackDelay }}s per attack</p>
            </div>
            <p class="fw-bold">Drops:</p>
            <p>+{{ enemy.experience }} Combat XP</p>
            <div
              v-for="(drop, dropIndex) in enemy.drops"
              :key="`enemyWikiIndex+${index}-dropIndex-${dropIndex}`"
            >
              <p>
                {{ drop.weigth * 100 }}% - {{ drop.amount }}
                <span v-if="drop.drop.type === 'coin'">🪙</span>
                <span
                  style="cursor: pointer"
                  @click="scrollToElement(`wiki-materials-id-${drop.drop.id}`)"
                  v-if="drop.drop.type === 'material'"
                  >{{ materials[drop.drop.id].symbol }}
                  {{ materials[drop.drop.id].label }}</span
                >
              </p>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    enemies() {
      return this.$store.getters.getEnemies;
    },

    materials() {
      return this.$store.getters.getMaterials;
    },
  },

  methods: {
    enemyTypeLabel(type) {
      let label = "";

      switch (type) {
        case "common":
          label = "Common";
          break;

        case "boss":
          label = "💀 Boss 💀";
          break;

        default:
          break;
      }

      return label;
    },

    getRequiredMilestoneText(type, amount) {
      let milestoneText = "";

      switch (type.categoryType) {
        case "enemies":
          milestoneText = `${amount} Defeated ${
            this.enemies[type.subcategoryType].label
          }(s)`;
          break;

        case "mining":
          milestoneText = `${amount} Mined ${
            this.ores[type.subcategoryType].label
          }(s)`;
          break;

        case "foraging":
          milestoneText = `${amount} Foraged ${
            this.plants[type.subcategoryType].label
          }(s)`;
          break;

        case "farming":
          milestoneText = `${amount} Farmed ${
            this.crops[type.subcategoryType].label
          }(s)`;
          break;

        case "fishing":
          milestoneText = `${amount} Fished fishes`; // Not implemented
          break;

        case "altogether":
          switch (type.subcategoryType) {
            case "enemies":
              milestoneText = `${amount} Defeated Enemies`;
              break;

            case "mining":
              milestoneText = `${amount} Mined Ores`;
              break;

            case "foraging":
              milestoneText = `${amount} Foraged Plants`;
              break;

            case "farming":
              milestoneText = `${amount} Farmed Crops`;
              break;

            case "fishing":
              milestoneText = `${amount} Fished Fishes`;
              break;

            default:
              break;
          }

          break;

        default:
          break;
      }

      return milestoneText;
    },

    scrollToElement(id) {
      this.$emit("scrollToElement", id);
    },
  },
};
</script>
