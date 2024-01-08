<template>
  <div class="text-center">
    <h1>Wiki 📄</h1>
    <br />
    <p>
      Here is where you may find more about the game's items, functionality and
      details that might helps you in your gameplay!
    </p>

    <h3>Index</h3>

    <br />

    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('iconLabelsSectorWiki')"
    >
      - Icon Labels
    </p>
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('locationsSectorWiki')"
    >
      - Locations
    </p>
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('equipmentsSectorWiki')"
    >
      - Equipments
    </p>
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('materialsSectorWiki')"
    >
      - Materials
    </p>
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('enemiesSectorWiki')"
    >
      - Enemies
    </p>
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('oresSectorWiki')"
    >
      - Ores
    </p>
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('plantsSectorWiki')"
    >
      - Plants
    </p>
    <!--<p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('cropsSectorWiki')"
    >
      - Crops
    </p>-->
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('craftingSectorWiki')"
    >
      - Crafting
    </p>
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('shopSectorWiki')"
    >
      - Shop
    </p>
    <p
      style="cursor: pointer; font-style: italic"
      @click="scrollToElement('forgeSectorWiki')"
    >
      - Forge
    </p>

    <br />
    <hr />
    <br />

    <h3 id="iconLabelsSectorWiki">Icon Labels</h3>

    <br />
    <br />

    <div class="row">
      <div class="col-4">
        <p>
          👊 (Strength) Indicates how much damage the character will do to their
          target if they hit them
        </p>
        <br />

        <p>
          👊⚡ (Attack Speed) Indicates the speed at which the character will be
          able to attack their target again
        </p>
        <br />

        <p>
          🛡️ (Defense/Defence) Indicates how much damage the character will be
          able to block before having damage dealt to their health (note that
          the minimum damage is 1, and that the defense will always round down
          if its not a whole number [0.5 🛡️ is the same as 0 🛡️ for example])
        </p>
        <br />

        <p>
          ❤️ (Max Health) Indicates how much damage the character can take
          before dying
        </p>
        <br />

        <p>
          🦶💨 (Move Speed) Indicates how much fast the player can move inside a
          boss fight (the calculations goes as follows: wait time = 1 - (move
          speed / 10))
        </p>
        <br />
      </div>

      <div class="col-4">
        <p>
          ⛏⚡ (Mining Speed) Indicates how fast the character will be able to
          mine ores again
        </p>
        <br />

        <p>
          ⛏🍀 (Mining Luck) Indicates how much XP & Items the player will
          receive per ore mined (the calculations goes as follows: (base drop) +
          (1 every 10 ⛏🍀), for every remaining mining luck, the character has
          much percentage of gaining another item [a character with 52⛏🍀 gains
          the base drop, plus 5 items & has 2% chance of gaining another item]),
          the XP gain is proportional to the number of items gained
        </p>
        <br />

        <p>
          🪓⚡ (Foraging Speed) Indicates how fast the character will be able to
          forage plants again
        </p>
        <br />

        <p>
          🪓🍀 (Foraging Luck) Indicates how much XP & Items the player will
          receive per plant foraged (the calculations goes as follows: (base
          drop) + (1 every 10🪓🍀), for every remaining foraging luck, the
          character has much percentage of gaining another item [a character
          with 52🪓🍀 gains the base drop, plus 5 items & has 2% chance of
          gaining another item]), the XP gain is proportional to the number of
          items gained
        </p>
        <br />
      </div>
      <div class="col-4">
        <p>
          🪄 (Mana Cost) Indicates how much mana will be spent upon using the
          item's skill/ability
        </p>
        <br />

        <p>
          💗 (Regeneration) Indicates how much health the item will heal every
          turn or, in a boss fight, every 5 seconds
        </p>
        <br />

        <p>
          %💥🍀 (Crit Chance) Indicates how likely the character is to land a
          critical hit on an enemy
        </p>
        <br />

        <p>
          x💥👊 (Crit Damage Multiplier) Indicates how much extra damage a
          critical hit dealt by the character will do when compared to a normal
          hit (If the character has 10👊 & 2x💥👊, they will do 20 base damage
          if they land a critical hit)
        </p>
        <br />

        <p>
          %🎯 (Aiming Accuracy) Indicates the chance the character has to land a
          hit with the weapon they are using (this stat is exclusive to
          ranged-aiming weapons)
        </p>
        <br />
      </div>
    </div>

    <br />
    <hr />
    <br />

    <h3 id="locationsSectorWiki">Locations</h3>

    <br />
    <br />

    <div class="row">
      <div
        v-for="(location, index) in locations"
        class="col-4"
        :key="`wikiLocationIndex-${index}`"
      >
        <hr />
        <br />
        <h4>#{{ location.id }} {{ location.label }}</h4>
        <br />
        <div v-if="location.availableEnemies.length > 0">
          <p class="fw-bold">Enemies</p>
          <div class="row">
            <div
              v-for="(enemyId, enemyIndex) in location.availableEnemies"
              :key="`wikiLocationIndex+${index}-locationEnemyIndex-${enemyIndex}`"
              class="col-4"
            >
              <p>{{ enemies[enemyId].label }}</p>
            </div>
          </div>
          <br />
        </div>

        <div v-if="location.availableOres.length > 0">
          <p class="fw-bold">Ores</p>
          <div class="row">
            <div
              v-for="(oreId, oreIndex) in location.availableOres"
              :key="`wikiLocationIndex+${index}-locationOreIndex-${oreIndex}`"
              class="col-4"
            >
              <p>{{ ores[oreId].label }}</p>
            </div>
          </div>
          <br />
        </div>

        <div v-if="location.availablePlants.length > 0">
          <p class="fw-bold">Plants</p>
          <div class="row">
            <div
              v-for="(plantId, plantIndex) in location.availablePlants"
              :key="`wikiLocationIndex+${index}-locationPlantIndex-${plantIndex}`"
              class="col-4"
            >
              <p>{{ plants[plantId].label }}</p>
            </div>
          </div>
        </div>
        <p class="fw-bold" v-if="location.hasForge">
          Access to the Forge (in inventory)
        </p>
      </div>
    </div>

    <br />
    <hr />
    <br />

    <h3 id="equipmentsSectorWiki">Equipments</h3>

    <br />
    <br />

    <div class="row">
      <div
        v-for="(equipment, index) in equipments"
        class="col-3"
        :key="`wikiEquipmentIndex-${index}`"
      >
        <hr />
        <br />
        <h4>#{{ equipment.id }} {{ equipment.label }}</h4>
        <equipment-stats :itemId="equipment.id" />
        <br />
      </div>
    </div>

    <br />
    <hr />
    <br />

    <h3 id="materialsSectorWiki">Materials</h3>

    <br />
    <div class="row">
      <div
        v-for="(material, index) in availableMaterials"
        :key="`materialWikiIndex-${index}`"
        class="col-3"
      >
        <div>
          <hr />

          <br />

          <h4>#{{ material.id }} {{ material.label }} {{ material.symbol }}</h4>

          <p class="fw-bold">{{ materialTypeLabel(material.type) }}</p>

          <p v-if="material.price">Sold for {{ material.price }}🪙</p>
          <p v-else>Can't be sold</p>

          <br />
        </div>
      </div>
    </div>

    <br />
    <hr />
    <br />

    <h3 id="enemiesSectorWiki">Enemies</h3>

    <br />
    <br />

    <div class="row">
      <div
        v-for="(enemy, index) in enemies"
        :key="`enemyWikiIndex-${index}`"
        class="col-3"
      >
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
              <span v-if="drop.drop.type === 'material'"
                >{{ materials[drop.drop.id].symbol }}
                {{ materials[drop.drop.id].label }}</span
              >
            </p>
          </div>
        </div>
        <br />
      </div>
    </div>

    <br />
    <hr />
    <br />

    <h3 id="oresSectorWiki">Ores</h3>

    <br />

    <div class="row">
      <div
        v-for="(ore, index) in ores"
        class="col-4"
        :key="`wikiOreIndex-${index}`"
      >
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

        <p>
          +{{ ore.drop.amount }} {{ materials[ore.drop.id].symbol }}
          {{ materials[ore.drop.id].label }} (With 0 ⛏🍀)
        </p>
        <p>{{ ore.baseMiningCooldown }}s per ore (With 0 ⛏⚡)</p>
        <p>{{ ore.minMiningCooldown }}s minimum cooldown (With max ⛏⚡)</p>
        <p>+{{ ore.experience }} Mining XP</p>
        <br />
      </div>
    </div>

    <br />
    <hr />
    <br />

    <h3 id="plantsSectorWiki">Plants</h3>

    <br />

    <div class="row">
      <div
        v-for="(plant, index) in plants"
        class="col-4"
        :key="`wikiPlantIndex-${index}`"
      >
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
        <p>
          +{{ plant.drop.amount }} {{ materials[plant.drop.id].symbol }}
          {{ materials[plant.drop.id].label }} (With 0 🪓🍀)
        </p>
        <p>{{ plant.baseForagingCooldown }}s per plant (With 0 🪓⚡)</p>
        <p>{{ plant.minForagingCooldown }}s minimum cooldown (With max 🪓⚡)</p>
        <br />
      </div>
    </div>
    <!--- 

    <br />
    <hr />
    <br />

    <h3 id="cropsSectorWiki">Crops</h3>

    <br />

    <p>#001 - A</p>

    -->

    <br />
    <hr />
    <br />

    <h3 id="craftingSectorWiki">Crafting</h3>
    <div class="row">
      <div
        v-for="(recipe, index) in recipes"
        class="col-3"
        :key="`wikiRecipeIndex-${index}`"
      >
        <hr />
        <br />
        <h4>
          <span v-if="recipe.result.type === 'material'">
            {{ materials[recipe.result.id].label
            }}{{ materials[recipe.result.id].symbol }}
          </span>
          <span v-if="recipe.result.type === 'equipment'">
            {{ equipments[recipe.result.id].label }}
          </span>
        </h4>
        <div class="fw-bold">
          <p v-if="recipe.requiredSkill">
            Requires {{ recipe.requiredSkill.skill.toUpperCase() }} LVL
            {{ recipe.requiredSkill.level + 1 }}
          </p>
          <p v-if="recipe.requiredMilestoneType">
            Requires
            {{
              getRequiredMilestoneText(
                recipe.requiredMilestoneType,
                recipe.requiredMilestoneAmount
              )
            }}
          </p>
          <p v-if="recipe.requiredCollection">
            Requires
            {{ recipe.requiredCollection.amount }}
            {{
              materials[
                collections[recipe.requiredCollection.collectionId].itemId
              ].label
            }}
            Collection
          </p>
        </div>

        <br />

        <div v-if="recipe.materialCosts">
          <p class="fw-bold">Material Cost</p>
          <div
            v-for="(materialCost, materialCostIndex) in recipe.materialCosts"
            :key="`recipeWikiIndex+${index}-materialCostIndex-${materialCostIndex}`"
          >
            <p>
              {{ materialCost.amount }}
              {{ materials[materialCost.id].symbol }}
              {{ materials[materialCost.id].label }}
            </p>
          </div>
        </div>

        <div v-if="recipe.equipmentCosts">
          <p class="fw-bold">Equipment Cost</p>
          <div
            v-for="(equipmentCost, equipmentCostIndex) in recipe.equipmentCosts"
            :key="`recipeWikiIndex+${index}-equipmentCostIndex-${equipmentCostIndex}`"
          >
            <p>
              {{ equipmentCost.amount }}
              {{ equipments[equipmentCost.id].label }}
            </p>
          </div>
        </div>

        <p v-if="recipe.goldCost">Gold Cost: {{ recipe.goldCost }} 🪙</p>
      </div>
    </div>

    <br />
    <hr />
    <br />

    <h3 id="shopSectorWiki">Shop</h3>
    <div class="row">
      <div
        v-for="(shopItem, index) in shop"
        class="col-3"
        :key="`wikiShopIndex-${index}`"
      >
        <hr />
        <br />
        <h4>
          {{ equipments[shopItem.equipmentId].label }}
        </h4>
        <div class="fw-bold">
          <p v-if="shopItem.requiredSkill">
            Requires {{ shopItem.requiredSkill.skill.toUpperCase() }} LVL
            {{ shopItem.requiredSkill.level + 1 }}
          </p>
          <p v-if="shopItem.requiredMilestoneType">
            Requires
            {{
              getRequiredMilestoneText(
                shopItem.requiredMilestoneType,
                shopItem.requiredMilestoneAmount
              )
            }}
          </p>
          <p v-if="shopItem.requiredCollection">
            Requires
            {{ shopItem.requiredCollection.amount }}
            {{
              materials[
                collections[shopItem.requiredCollection.collectionId].itemId
              ].label
            }}
            Collection
          </p>
        </div>

        <br />

        <p v-if="shopItem.goldPrice">{{ shopItem.goldPrice }} 🪙</p>

        <div v-if="shopItem.materialPrices">
          <p class="fw-bold">Material Price</p>
          <div
            v-for="(
              materialPrice, materialPriceIndex
            ) in shopItem.materialPrices"
            :key="`shopWikiIndex+${index}-materialPriceIndex-${materialPriceIndex}`"
          >
            <p>
              {{ materialPrice.amount }}
              {{ materials[materialPrice.id].symbol }}
              {{ materials[materialPrice.id].label }}
            </p>
          </div>
        </div>

        <div v-if="shopItem.equipmentPrices">
          <p class="fw-bold">Equipment Price</p>
          <div
            v-for="(
              equipmentPrice, equipmentPriceIndex
            ) in shopItem.equipmentPrices"
            :key="`shopWikiIndex+${index}-equipmentPriceIndex-${equipmentPriceIndex}`"
          >
            <p>
              {{ equipmentPrice.amount }}
              {{ equipments[equipmentPrice.id].label }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <br />
    <br />

    <br />
    <hr />
    <br />

    <h3 id="forgeSectorWiki">Forge</h3>
    <p>
      The forge can only be accessed in the inventory menu if you are in the
      "The Caves" location
    </p>
    <div class="row">
      <div
        v-for="(forgeCrafting, index) in forge"
        class="col-3"
        :key="`wikiRecipeIndex-${index}`"
      >
        <hr />
        <br />
        <h4>
          <span v-if="forgeCrafting.result.type === 'material'">
            {{ materials[forgeCrafting.result.id].label
            }}{{ materials[forgeCrafting.result.id].symbol }}
          </span>
          <span v-if="forgeCrafting.result.type === 'equipment'">
            {{ equipments[forgeCrafting.result.id].label }}
          </span>
        </h4>
        <div class="fw-bold">
          <p v-if="forgeCrafting.requiredSkill">
            Requires {{ forgeCrafting.requiredSkill.skill.toUpperCase() }} LVL
            {{ forgeCrafting.requiredSkill.level + 1 }}
          </p>
          <p v-if="forgeCrafting.requiredMilestoneType">
            Requires
            {{
              getRequiredMilestoneText(
                forgeCrafting.requiredMilestoneType,
                forgeCrafting.requiredMilestoneAmount
              )
            }}
          </p>
          <p v-if="forgeCrafting.requiredCollection">
            Requires
            {{ forgeCrafting.requiredCollection.amount }}
            {{
              materials[
                collections[forgeCrafting.requiredCollection.collectionId]
                  .itemId
              ].label
            }}
            Collection
          </p>
        </div>

        <br />

        <p>{{ forgeCrafting.baseForgingTime }}s to forge</p>

        <div v-if="forgeCrafting.materialCosts">
          <p class="fw-bold">Material Cost</p>
          <div
            v-for="(
              materialCost, materialCostIndex
            ) in forgeCrafting.materialCosts"
            :key="`forgeWikiIndex+${index}-materialCostIndex-${materialCostIndex}`"
          >
            <p>
              {{ materialCost.amount }}
              {{ materials[materialCost.id].symbol }}
              {{ materials[materialCost.id].label }}
            </p>
          </div>
        </div>

        <div v-if="forgeCrafting.equipmentCosts">
          <p class="fw-bold">Equipment Cost</p>
          <div
            v-for="(
              equipmentCost, equipmentCostIndex
            ) in forgeCrafting.equipmentCosts"
            :key="`forgeWikiIndex+${index}-equipmentCostIndex-${equipmentCostIndex}`"
          >
            <p>
              {{ equipmentCost.amount }}
              {{ equipments[equipmentCost.id].label }}
            </p>
          </div>
        </div>

        <p v-if="forgeCrafting.goldCost">
          Gold Cost: {{ forgeCrafting.goldCost }} 🪙
        </p>
      </div>
    </div>

    <br />
    <br />
  </div>
</template>

<script>
import EquipmentStats from "../components/EquipmentStats.vue";
export default {
  data: () => ({
    setIntervalId: 0,
    speedSetIntervalId: 1,
  }),

  components: { EquipmentStats },

  computed: {
    locations() {
      return this.$store.getters.getLocations;
    },

    materials() {
      return this.$store.getters.getMaterials;
    },

    availableMaterials() {
      return this.$store.getters.getAvailableMaterials;
    },

    equipments() {
      return this.$store.getters.getEquipments;
    },

    enemies() {
      return this.$store.getters.getEnemies;
    },

    ores() {
      return this.$store.getters.getOres;
    },

    plants() {
      return this.$store.getters.getPlants;
    },

    crops() {
      return this.$store.getters.getCrops;
    },

    recipes() {
      return this.$store.getters.getRecipes;
    },

    shop() {
      return this.$store.getters.getShop;
    },

    forge() {
      return this.$store.getters.getForge;
    },

    collections() {
      return this.$store.getters.getCollections;
    },
  },

  methods: {
    scrollToElement(id) {
      document.getElementById(id).scrollIntoView();
    },

    updateGame() {
      this.$store.dispatch("updateGame");
    },

    speedyUpdate() {
      this.$store.dispatch("speedyUpdate");
    },

    versionUpdate() {
      this.$store.dispatch("versionUpdate");
    },

    materialTypeLabel(type) {
      let label = "";

      switch (type) {
        case "enemyDrop":
          label = "Enemy Drop";
          break;

        case "miningDrop":
          label = "Mining Drop";
          break;

        case "foragingDrop":
          label = "Foraging Drop";
          break;

        case "farmingDrop":
          label = "Farming Drop";
          break;

        case "fishingDrop":
          label = "Fishing Drop";
          break;

        case "specialFishingDrop":
          label = "Special Fishing Drop";
          break;

        case "treasure":
          label = "Treasure";
          break;

        case "specialCrafting":
          label = "Special Crafting";
          break;

        default:
          break;
      }

      return label;
    },

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
  },

  created() {
    this.versionUpdate();

    this.setIntervalId = setInterval(() => {
      this.updateGame();
    }, 1000);

    this.speedSetIntervalId = setInterval(() => {
      this.speedyUpdate();
    }, 100);
  },

  destroyed() {
    clearInterval(this.setIntervalId);
    clearInterval(this.speedSetIntervalId);
  },
};
</script>