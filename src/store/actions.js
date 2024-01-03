import { ENEMIES, ORE_VEINS, PLANTS, CROPS, RECIPES, SHOP, WEAPON_TYPES } from './constants'
import defaultState from './state'

const BASE_PASSIVE_COOLDOWN = 5

const CRIT_ACCURACY = {
    extreme: 0,
    strong: 40,
    weak: 80,

    // Anything above will result in a normal attack
}

const CRIT_BONUSES = {
    extreme: 1.55,
    strong: 1.35,
    weak: 1.2,

    // Anything above will result in a normal attack
}

export const resetState = (context) => {
    context.commit('setState', defaultState())
    context.commit('versionUpdate')
}

export const versionUpdate = (context) => {
    context.commit('versionUpdate')
}

export const importGame = (context, gameState) => context.commit('setGameState', gameState)

export const newEnemy = (context, index) => context.commit('newEnemy', index)

export const mineOre = (context, index) => {
    if (context.state.gameState.player.currentMiningCooldown <= 0) {

        let miningCooldown = ORE_VEINS[index].baseMiningCooldown - context.getters.getEquippedPlayer.miningSpeed

        if (miningCooldown < 0) {
            miningCooldown = 0
        }

        if (miningCooldown < ORE_VEINS[index].minMiningCooldown) {
            miningCooldown = ORE_VEINS[index].minMiningCooldown
        }

        context.state.gameState.player.currentMiningCooldown = miningCooldown

        let amountBonus = (Math.floor(context.getters.getEquippedPlayer.miningLuck / 10))

        if (context.getters.getEquippedPlayer.miningLuck % 10 > Math.floor(Math.random() * 100)) {
            amountBonus += 1
        }

        const amount = ORE_VEINS[index].drop.amount + amountBonus

        let experienceAmount = ORE_VEINS[index].experience * amount

        context.commit('mineOre', { amount, experienceAmount, oreId: index })
    }
}

export const critBarMineOre = (context, { index, hitAccuracy }) => {
    if (context.state.gameState.player.currentMiningCooldown <= 0) {

        let miningCooldown = ORE_VEINS[index].baseMiningCooldown - context.getters.getEquippedPlayer.miningSpeed

        if (miningCooldown < 0) {
            miningCooldown = 0
        }

        if (miningCooldown < ORE_VEINS[index].minMiningCooldown) {
            miningCooldown = ORE_VEINS[index].minMiningCooldown
        }

        context.state.gameState.player.currentMiningCooldown = miningCooldown


        let amountBonus = (Math.floor(context.getters.getEquippedPlayer.miningLuck / 10))

        if (context.getters.getEquippedPlayer.miningLuck % 10 > Math.floor(Math.random() * 100)) {
            amountBonus += 1
        }

        let amount = ORE_VEINS[index].drop.amount + amountBonus

        if (hitAccuracy === CRIT_ACCURACY.extreme) {
            amount *= CRIT_BONUSES.extreme
        } else if (hitAccuracy < CRIT_ACCURACY.strong) {
            amount *= CRIT_BONUSES.strong
        } else if (hitAccuracy < CRIT_ACCURACY.weak) {
            amount *= CRIT_BONUSES.weak
        }

        amount = Math.round(amount)

        let experienceAmount = ORE_VEINS[index].experience * amount

        context.commit('mineOre', { amount, experienceAmount, oreId: index })
    }
}

export const foragePlant = (context, index) => {
    if (context.state.gameState.player.currentForagingCooldown <= 0) {
        let foragingCooldown = PLANTS[index].baseForagingCooldown - context.getters.getEquippedPlayer.foragingSpeed

        if (foragingCooldown < 0) {
            foragingCooldown = 0
        }

        if (foragingCooldown < PLANTS[index].minForagingCooldown) {
            foragingCooldown = PLANTS[index].minForagingCooldown
        }

        context.state.gameState.player.currentForagingCooldown = foragingCooldown

        let amountBonus = (Math.floor(context.getters.getEquippedPlayer.foragingLuck / 10))

        if (context.getters.getEquippedPlayer.foragingLuck % 10 > Math.floor(Math.random() * 100)) {
            amountBonus += 1
        }

        const amount = PLANTS[index].drop.amount + amountBonus

        let experienceAmount = PLANTS[index].experience * amount

        context.commit('foragePlant', { amount, experienceAmount, plantId: index })
    }
}

export const critBarForagePlant = (context, { index, hitAccuracy }) => {
    if (context.state.gameState.player.currentForagingCooldown <= 0) {

        let foragingCooldown = PLANTS[index].baseForagingCooldown - context.getters.getEquippedPlayer.foragingSpeed

        if (foragingCooldown < 0) {
            foragingCooldown = 0
        }

        if (foragingCooldown < PLANTS[index].minForagingCooldown) {
            foragingCooldown = PLANTS[index].minForagingCooldown
        }

        context.state.gameState.player.currentForagingCooldown = foragingCooldown

        let amountBonus = (Math.floor(context.getters.getEquippedPlayer.foragingLuck / 10))

        if (context.getters.getEquippedPlayer.foragingLuck % 10 > Math.floor(Math.random() * 100)) {
            amountBonus += 1
        }

        let amount = PLANTS[index].drop.amount + amountBonus

        if (hitAccuracy === CRIT_ACCURACY.extreme) {
            amount *= CRIT_BONUSES.extreme
        } else if (hitAccuracy < CRIT_ACCURACY.strong) {
            amount *= CRIT_BONUSES.strong
        } else if (hitAccuracy < CRIT_ACCURACY.weak) {
            amount *= CRIT_BONUSES.weak
        }


        amount = Math.round(amount)

        let experienceAmount = PLANTS[index].experience * amount

        context.commit('foragePlant', { amount, experienceAmount, plantId: index })
    }
}

export const plantCrop = (context, cropId) => {
    context.commit('plantCrop', cropId)
}

export const harvestPlot = (context, plotIndex) => {

    if (context.state.gameState.farming.cropPlots[plotIndex].growthTimer <= 0) {
        const amountBuff = context.getters.getEquippedPlayer.farmingLuck
        const cropId = context.state.gameState.farming.cropPlots[plotIndex].id

        context.commit('harvestCrop', { amountBuff, cropId })
        context.state.gameState.farming.cropPlots.splice(plotIndex, 1)

    }
}

/* 
export const fish = (context) => {
    const fishingLuck = context.getters.getEquippedPlayer.fishingLuck
    let startingDropTier = 0
    const playerSet = {
        helmet: context.getters.getPlayerEquipment.helmet,
        chestplate: context.getters.getPlayerEquipment.chestplate,
        leggings: context.getters.getPlayerEquipment.leggings,
        boots: context.getters.getPlayerEquipment.boots,
    }

    // If the player has all armor pieces and they have some full set bonus

    if (playerSet.helmet && playerSet.chestplate && playerSet.leggings && playerSet.boots && playerSet.helmet.fullsetEffect) {

        // If the set has a fishing tier skiping fullset effect

        if (playerSet.helmet.fullsetEffect.effect === 'skipFishingTier') {

            // If all the player's armors are the same set,

            if (playerSet.helmet.set === playerSet.chestplate.set && playerSet.helmet.set === playerSet.leggings.set && playerSet.helmet.set === playerSet.boots.set) {

                // Skip some number of tiers

                startingDropTier = playerSet.helmet.fullsetEffect.tier
            }
        }
    }

    context.commit("fish", { fishingLuck, startingDropTier })
}
*/

export const attack = (context, { user, target }) => {
    if (context.state.gameState.player.currentAttackCooldown <= 0 || user != 'player') {

        const playerWeapon = context.getters.getPlayerEquipment.weapon

        const playerStats = context.getters.getEquippedPlayer

        let inflictedDamage = 0
        let wasCrit = false
        let critType = "normal"

        const baseDamage = playerStats.strength


        // The target recieves damaged based in its own defense and enemy strength

        // Current Enemy & Player are the options for user/target

        if (user === 'player') {

            // Reset the attack cooldown to its base value

            let attackCooldown = context.state.gameState.player.baseAttackCooldown + context.state.gameState.currentEnemy.stats.attackDelay - playerStats.attackSpeed
            if (attackCooldown < 1) {
                attackCooldown = 1
            }
            context.state.gameState.player.currentAttackCooldown = attackCooldown

            // Apply the damage

            // First case = Player has a piercing item

            // Second case = It doesn't

            if (context.state.gameState.player.equippedItems.findIndex((equipment) => equipment.specialEffect === 'ignoresEnemyDefense') <= -1) {
                inflictedDamage = baseDamage - context.state.gameState.currentEnemy.stats.defense
            } else {
                inflictedDamage = baseDamage
            }

            let randomChance = Math.floor(Math.random() * 100)

            if (playerStats.critChance > randomChance) {
                // CRIT!
                wasCrit = true
                inflictedDamage *= playerStats.critDamageMultiplier
            }


        } else {

            // Apply the damage

            inflictedDamage = context.state.gameState.currentEnemy.stats.strength - Math.floor(playerStats.defense)
            let randomChance = Math.floor(Math.random() * 100)

            if (context.state.gameState.currentEnemy.stats.critChance > randomChance) {

                // CRIT!

                wasCrit = true
                inflictedDamage *= context.state.gameState.currentEnemy.stats.critDamageMultiplier
            }
        }

        if (inflictedDamage < 1) {

            // If the formula results in a negative number or 0, the damage is converted to 1

            inflictedDamage = 1
        }

        // if the current weapon is a bow, test to see if it hits

        if (user === 'player' && playerWeapon && WEAPON_TYPES[playerWeapon.typeId].damageType === "ranged") {

            // Check if the test succeds, if it doesn't, deal 0 damage
            if (!(playerStats.aimingAccuracy > Math.floor(Math.random() * 100))) {
                inflictedDamage = 0
                wasCrit = false
                critType = "arrowMissed"
            }

        }

        inflictedDamage = Math.round(inflictedDamage)

        context.commit('inflictDamage', { inflictedDamage, target, crit: { wasCrit, critType }, playerStats })
    }
}

export const attackGridHit = (context) => {

    let inflictedDamage = 0
    let wasCrit = false
    let critType = "normal"

    const playerStats = context.getters.getEquippedPlayer

    // Percentage Damage

    if (context.state.gameState.currentEnemy.bossStats.gridAttackDamage.type.includes("percentage")) {
        // If the damage is percentage damage
        inflictedDamage = (playerStats.maxHealth / 100) * context.state.gameState.currentEnemy.bossStats.gridAttackDamage.amount
    } else {
        // If the damage isn't percentage damage
        inflictedDamage = context.state.gameState.currentEnemy.stats.strength
    }

    // True Damage

    if (!context.state.gameState.currentEnemy.bossStats.gridAttackDamage.type.includes("true")) {
        // If the damage isn't true damage
        inflictedDamage -= Math.floor(playerStats.defense)
    }

    // Critable

    if (context.state.gameState.currentEnemy.bossStats.gridAttackDamage.type.includes("crit")) {

        let randomChance = Math.floor(Math.random() * 100)

        if (context.state.gameState.currentEnemy.stats.critChance > randomChance) {

            // CRIT!

            wasCrit = true
            inflictedDamage *= context.state.gameState.currentEnemy.stats.critDamageMultiplier
        }
    }

    if (inflictedDamage < 1) {

        // If the formula results in a negative number or 0, the damage is converted to 1

        inflictedDamage = 1
    }

    inflictedDamage = Math.round(inflictedDamage)

    context.commit('inflictDamage', { inflictedDamage, target: "player", crit: { wasCrit, critType }, playerStats })
}

export const critBarAttack = (context, hitAccuracy) => {
    if (context.state.gameState.player.currentAttackCooldown <= 0) {
        let inflictedDamage = 0
        const playerWeapon = context.getters.getPlayerEquipment.weapon

        // The enemy recieves damaged based in its own defense and player strength

        // Reset the attack cooldown to its base value

        let attackCooldown = context.state.gameState.player.baseAttackCooldown + context.state.gameState.currentEnemy.stats.attackDelay - context.getters.getEquippedPlayer.attackSpeed
        if (attackCooldown < 1) {
            attackCooldown = 1
        }
        context.state.gameState.player.currentAttackCooldown = attackCooldown

        // Apply the damage

        // First case = Player has a piercing item

        // Second case = It doesn't

        if (context.state.gameState.player.equippedItems.findIndex((equipment) => equipment.specialEffect === 'ignoresEnemyDefense') <= -1) {
            inflictedDamage = context.getters.getEquippedPlayer.strength - context.state.gameState.currentEnemy.stats.defense
        } else {
            inflictedDamage = context.getters.getEquippedPlayer.strength
        }

        let critBonus = 1
        let critType = false
        let wasCrit = false

        if (hitAccuracy === CRIT_ACCURACY.extreme) {
            critBonus = CRIT_BONUSES.extreme
            critType = "extreme"
            wasCrit = true
        } else if (hitAccuracy < CRIT_ACCURACY.strong) {
            critBonus = CRIT_BONUSES.strong
            critType = "strong"
            wasCrit = true
        } else if (hitAccuracy < CRIT_ACCURACY.weak) {
            critBonus = CRIT_BONUSES.weak
            critType = "weak"
            wasCrit = true
        }

        if (wasCrit) {
            inflictedDamage *= (context.getters.getEquippedPlayer.critDamageMultiplier * critBonus)
        }


        if (inflictedDamage < 1) {

            // If the formula results in a negative number or 0, the damage is converted to 1

            inflictedDamage = 1
        }

        const playerStats = context.getters.getEquippedPlayer

        // if the current weapon is a bow, test to see if it hits

        if (playerWeapon && WEAPON_TYPES[playerWeapon.typeId].damageType === "ranged") {

            // Check if the test succeds, if it doesn't, deal 0 damage
            if (!(playerWeapon.aimingAccuracy > Math.floor(Math.random() * 100))) {
                inflictedDamage = 0
                wasCrit = false
                critType = "arrowMissed"
            }

        }

        inflictedDamage = Math.round(inflictedDamage)

        context.commit('inflictDamage', { inflictedDamage, target: "currentEnemy", crit: { wasCrit, critType }, playerStats })
    }
}

export const clearLog = (context, log) => context.commit('clearLog', log)

export const healPlayer = (context) => {
    const wand = context.getters.getPlayerEquipment.wand
    context.commit('healPlayer', { healing: wand.healing, manaCost: wand.manaCost, maxHealth: context.getters.getEquippedPlayer.maxHealth })
}

export const playerPassive = (context) => {
    const playerEquipment = context.getters.getPlayerEquipment
    Object.values(playerEquipment).forEach(equipment => {
        if (equipment.regeneration > 0) {
            context.commit('healPlayer', { healing: equipment.regeneration, manaCost: 0, maxHealth: context.getters.getEquippedPlayer.maxHealth })
        }
    });
}

export const equipItem = (context, { index, setupIndex }) => {
    context.commit('equipItem', { index, setupIndex })
    const equippedPlayer = context.getters.getEquippedPlayer
    context.commit('resetPlayerStats', { maxHealth: equippedPlayer.maxHealth, maxMana: equippedPlayer.maxMana })
}

export const unequipItem = (context, { index, setupIndex }) => {
    context.commit('unequipItem', { index, setupIndex })
    const equippedPlayer = context.getters.getEquippedPlayer
    context.commit('resetPlayerStats', { maxHealth: equippedPlayer.maxHealth, maxMana: equippedPlayer.maxMana })
}

export const chooseEquippedSetup = (context, setupIndex) => {
    context.commit('chooseEquippedSetup', setupIndex)
    const equippedPlayer = context.getters.getEquippedPlayer
    context.commit('resetPlayerStats', { maxHealth: equippedPlayer.maxHealth, maxMana: equippedPlayer.maxMana })
}

export const craftItem = (context, recipeIndex) => context.commit('craftItem', { recipeIndex, numberOfEquipment: context.getters.getNumberOfEquipment })

export const buyItem = (context, itemIndex) => context.commit('buyItem', { itemIndex, numberOfEquipment: context.getters.getNumberOfEquipment })

export const sellItem = (context, materialId) => context.commit('sellItem', materialId)

export const removeEquipment = (context, index) => context.commit('removeEquipment', index)

export const openTreasure = (context, materialId) => context.commit('openTreasure', materialId)

export const stepAttackBoard = (context) => context.commit('stepAttackBoard')

export const playerMove = (context, direction) => {
    const moveSpeed = context.getters.getEquippedPlayer.moveSpeed

    context.commit('playerMove', { direction, moveSpeed })
}

export const updateGame = ({ state, getters, commit }) => {



    // Player Passive (if in Boss Fight)

    if (state.gameState.currentEnemy && state.gameState.currentEnemy.type === 'boss' && state.gameState.currentDodgeBoard.passiveCooldown <= 0) {
        state.gameState.currentDodgeBoard.passiveCooldown = BASE_PASSIVE_COOLDOWN

        const playerEquipment = getters.getPlayerEquipment
        Object.values(playerEquipment).forEach(equipment => {
            if (equipment.regeneration > 0) {
                commit('healPlayer', { healing: equipment.regeneration, manaCost: 0, maxHealth: getters.getEquippedPlayer.maxHealth })
            }
        });
    }

    // Enemies

    ENEMIES.forEach(enemy => {

        let milestoneRequirementMet = true
        let skillRequirementMet = true

        // Milestone Requirements

        if (enemy.requiredMilestoneType) {
            if (enemy.requiredMilestoneType.categoryType === 'altogether') {
                if (getters.getTotalMilestoneStats[enemy.requiredMilestoneType.subcategoryType] < enemy.requiredMilestoneAmount) {
                    milestoneRequirementMet = false
                }
            } else {
                if (state.gameState.milestoneAmounts[enemy.requiredMilestoneType.categoryType][enemy.requiredMilestoneType.subcategoryType] < enemy.requiredMilestoneAmount) {
                    milestoneRequirementMet = false
                }
            }
        }

        // Skill Requirements

        if (enemy.requiredSkill) {
            if (getters.getPlayerSkillLevel[enemy.requiredSkill.skill] < enemy.requiredSkill.level) {
                skillRequirementMet = false
            }
        }

        if (milestoneRequirementMet && skillRequirementMet) {
            state.gameState.enemyUnlocks[enemy.id] = true
        } else {
            state.gameState.enemyUnlocks[enemy.id] = false
        }
    });

    // Ores

    ORE_VEINS.forEach(ore => {

        let milestoneRequirementMet = true
        let skillRequirementMet = true

        // Milestone Requirements

        if (ore.requiredMilestoneType) {
            if (ore.requiredMilestoneType.categoryType === 'altogether') {
                if (getters.getTotalMilestoneStats[ore.requiredMilestoneType.subcategoryType] < ore.requiredMilestoneAmount) {
                    milestoneRequirementMet = false
                }
            } else {
                if (state.gameState.milestoneAmounts[ore.requiredMilestoneType.categoryType][ore.requiredMilestoneType.subcategoryType] < ore.requiredMilestoneAmount) {
                    milestoneRequirementMet = false
                }
            }
        }

        // Skill Requirements

        if (ore.requiredSkill) {
            if (getters.getPlayerSkillLevel[ore.requiredSkill.skill] < ore.requiredSkill.level) {
                skillRequirementMet = false
            }
        }

        if (milestoneRequirementMet && skillRequirementMet) {
            state.gameState.oreUnlocks[ore.id] = true
        } else {
            state.gameState.oreUnlocks[ore.id] = false
        }
    });

    // Plants

    PLANTS.forEach(plant => {

        let milestoneRequirementMet = true
        let skillRequirementMet = true

        // Milestone Requirements

        if (plant.requiredMilestoneType) {
            if (plant.requiredMilestoneType.categoryType === 'altogether') {
                if (getters.getTotalMilestoneStats[plant.requiredMilestoneType.subcategoryType] < plant.requiredMilestoneAmount) {
                    milestoneRequirementMet = false
                }
            } else {
                if (state.gameState.milestoneAmounts[plant.requiredMilestoneType.categoryType][plant.requiredMilestoneType.subcategoryType] < plant.requiredMilestoneAmount) {
                    milestoneRequirementMet = false
                }
            }
        }

        // Skill Requirements

        if (plant.requiredSkill) {
            if (getters.getPlayerSkillLevel[plant.requiredSkill.skill] < plant.requiredSkill.level) {
                skillRequirementMet = false
            }
        }

        if (milestoneRequirementMet && skillRequirementMet) {
            state.gameState.plantUnlocks[plant.id] = true
        } else {
            state.gameState.plantUnlocks[plant.id] = false
        }
    });

    // Crops

    CROPS.forEach(crop => {

        let milestoneRequirementMet = true
        let skillRequirementMet = true

        // Milestone Requirements

        if (crop.requiredMilestoneType) {
            if (crop.requiredMilestoneType.categoryType === 'altogether') {
                if (getters.getTotalMilestoneStats[crop.requiredMilestoneType.subcategoryType] < crop.requiredMilestoneAmount) {
                    milestoneRequirementMet = false
                }
            } else {
                if (state.gameState.milestoneAmounts[crop.requiredMilestoneType.categoryType][crop.requiredMilestoneType.subcategoryType] < crop.requiredMilestoneAmount) {
                    milestoneRequirementMet = false
                }
            }
        }

        // Skill Requirements

        if (crop.requiredSkill) {
            if (getters.getPlayerSkillLevel[crop.requiredSkill.skill] < crop.requiredSkill.level) {
                skillRequirementMet = false
            }
        }

        if (milestoneRequirementMet && skillRequirementMet) {
            state.gameState.cropUnlocks[crop.id] = true
        } else {
            state.gameState.cropUnlocks[crop.id] = false
        }
    });



    // Recipes

    RECIPES.forEach(recipe => {

        let milestoneRequirementMet = true
        let skillRequirementMet = true
        let collectionRequirementMet = true

        // Milestone Requirements

        if (recipe.requiredMilestoneType) {
            if (recipe.requiredMilestoneType.categoryType === 'altogether') {
                if (getters.getTotalMilestoneStats[recipe.requiredMilestoneType.subcategoryType] < recipe.requiredMilestoneAmount) {
                    milestoneRequirementMet = false
                }
            } else {
                if (state.gameState.milestoneAmounts[recipe.requiredMilestoneType.categoryType][recipe.requiredMilestoneType.subcategoryType] < recipe.requiredMilestoneAmount) {
                    milestoneRequirementMet = false
                }
            }
        }

        // Skill Requirements

        if (recipe.requiredSkill) {
            if (getters.getPlayerSkillLevel[recipe.requiredSkill.skill] < recipe.requiredSkill.level) {
                skillRequirementMet = false
            }
        }

        // Collection Requirements

        if (recipe.requiredCollection) {
            if (state.gameState.collectionAmounts[recipe.requiredCollection.collectionId] < recipe.requiredCollection.amount) {
                collectionRequirementMet = false
            }
        }

        if (milestoneRequirementMet && skillRequirementMet && collectionRequirementMet) {
            state.gameState.recipeUnlocks[recipe.id] = true
        } else {
            state.gameState.recipeUnlocks[recipe.id] = false
        }
    });

    // Shop

    SHOP.forEach(item => {

        let milestoneRequirementMet = true
        let skillRequirementMet = true
        let collectionRequirementMet = true

        // Milestone Requirements

        if (item.requiredMilestoneType) {
            if (item.requiredMilestoneType.categoryType === 'altogether') {
                if (getters.getTotalMilestoneStats[item.requiredMilestoneType.subcategoryType] < item.requiredMilestoneAmount) {
                    milestoneRequirementMet = false
                }
            } else {
                if (state.gameState.milestoneAmounts[item.requiredMilestoneType.categoryType][item.requiredMilestoneType.subcategoryType] < item.requiredMilestoneAmount) {
                    milestoneRequirementMet = false
                }
            }
        }

        // Skill Requirements

        if (item.requiredSkill) {
            if (getters.getPlayerSkillLevel[item.requiredSkill.skill] < item.requiredSkill.level) {
                skillRequirementMet = false
            }
        }

        // Collection Requirements

        if (item.requiredCollection) {
            if (state.gameState.collectionAmounts[item.requiredCollection.collectionId] < item.requiredCollection.amount) {
                collectionRequirementMet = false
            }
        }

        if (milestoneRequirementMet && skillRequirementMet && collectionRequirementMet) {
            state.gameState.shopUnlocks[item.id] = true
        } else {
            state.gameState.shopUnlocks[item.id] = false
        }

    });

    const equippedPlayer = getters.getEquippedPlayer
    commit('resetPlayerStats', { maxHealth: equippedPlayer.maxHealth, maxMana: equippedPlayer.maxMana })

    commit('updateGame')
}

export const speedyUpdate = (context) => {
    context.commit('speedyUpdate')
}

export const debugGiveXp = (context, { type, amount }) => {
    context.commit('debugGiveXp', { type, amount })
}

export const debugGiveCoins = (context, amount) => {
    context.commit('debugGiveCoins', amount)
}

export const debugGiveItemById = (context, itemId) => {
    context.commit('debugGiveItemById', itemId)
}

export const debugGiveMaterialById = (context, { materialId, materialsAmount }) => {
    context.commit('debugGiveMaterialById', { materialId, materialsAmount })
}


