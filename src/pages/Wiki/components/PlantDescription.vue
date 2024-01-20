<template>
  <div>
    <h3 id="plantsSectorWiki">Plants</h3>

    <br />

    <div class="row">
      <div
        v-for="(plant, index) in plants"
        class="col-4"
        :key="`wikiPlantIndex-${index}`"
      >
        <div :id="`wiki-plant-id-${plant.id}`">
          <hr />
          <br />
          <h4>#{{ plant.id }} {{ plant.label }}</h4>

          <div class="fw-bold">
            <p v-if="plant.requiredSkill">
              Requires {{ plant.requiredSkill.skill.toUpperCase() }} LVL
              {{ plant.requiredSkill.level + 1 }}
            </p>
            <p v-if="plant.requiredMilestoneType">
              Requires
              {{
                getRequiredMilestoneText(
                  plant.requiredMilestoneType,
                  plant.requiredMilestoneAmount
                )
              }}
            </p>
          </div>

          <br />

          <p>+{{ plant.experience }} Foraging XP</p>
          <p
            style="cursor: pointer"
            @click="scrollToElement(`wiki-materials-id-${plant.drop.id}`)"
          >
            +{{ plant.drop.amount }} {{ materials[plant.drop.id].symbol }}
            {{ materials[plant.drop.id].label }} (With 0 🪓🍀)
          </p>
          <p>{{ plant.baseForagingCooldown }}s per plant (With 0 🪓⚡)</p>
          <p>
            {{ plant.minForagingCooldown }}s minimum cooldown (With max 🪓⚡)
          </p>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    plants() {
      return this.$store.getters.getPlants;
    },

    materials() {
      return this.$store.getters.getMaterials;
    },
  },

  methods: {
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