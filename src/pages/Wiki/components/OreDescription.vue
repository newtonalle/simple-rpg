<template>
  <div>
    <h3 id="oresSectorWiki">Ores</h3>

    <br />

    <div class="row">
      <div
        v-for="(ore, index) in ores"
        class="col-4"
        :key="`wikiOreIndex-${index}`"
      >
        <div :id="`wiki-ore-id-${ore.id}`">
          <hr />
          <br />
          <h4>#{{ ore.id }} {{ ore.label }}</h4>
          <div class="fw-bold">
            <p v-if="ore.requiredSkill">
              Requires {{ ore.requiredSkill.skill.toUpperCase() }} LVL
              {{ ore.requiredSkill.level + 1 }}
            </p>
            <p v-if="ore.requiredMilestoneType">
              Requires
              {{
                getRequiredMilestoneText(
                  ore.requiredMilestoneType,
                  ore.requiredMilestoneAmount
                )
              }}
            </p>
          </div>

          <br />

          <p
            style="cursor: pointer"
            @click="scrollToElement(`wiki-materials-id-${ore.drop.id}`)"
          >
            +{{ ore.drop.amount }} {{ materials[ore.drop.id].symbol }}
            {{ materials[ore.drop.id].label }} (With 0 ⛏🍀)
          </p>
          <p>{{ ore.baseMiningCooldown }}s per ore (With 0 ⛏⚡)</p>
          <p>{{ ore.minMiningCooldown }}s minimum cooldown (With max ⛏⚡)</p>
          <p>+{{ ore.experience }} Mining XP</p>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ores() {
      return this.$store.getters.getOres;
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