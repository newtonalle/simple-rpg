import { ENEMIES, ORE_VEINS, PLANTS, CROPS, RECIPES, SHOP } from './constants'
import defaultState from './state'

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

export const resetState = (context) => context.commit('setState', defaultState())

export const importGame = (context, gameState) => context.commit('setGameState', gameState)

export const newEnemy = (context, index) => context.commit('newEnemy', index)

export const mineOre = (context, index) => {

    let miningCooldown = context.state.gameState.player.baseMiningCooldown - context.getters.getEquippedPlayer.miningSpeed

    if (miningCooldown < 1) {
        miningCooldown = 1
    }

    context.state.gameState.player.currentMiningCooldown = miningCooldown

    const amount = context.getters.getEquippedPlayer.miningLuck
    context.commit('mineOre', { amount, oreId: index })
}

export const critBarMineOre = (context, { index, hitAccuracy }) => {

    let miningCooldown = context.state.gameState.player.baseMiningCooldown - context.getters.getEquippedPlayer.miningSpeed

    if (miningCooldown < 1) {
        miningCooldown = 1
    }

    context.state.gameState.player.currentMiningCooldown = miningCooldown

    let amount = context.getters.getEquippedPlayer.miningLuck

    if (hitAccuracy === CRIT_ACCURACY.extreme) {
        amount *= CRIT_BONUSES.extreme
    } else if (hitAccuracy < CRIT_ACCURACY.strong) {
        amount *= CRIT_BONUSES.strong
    } else if (hitAccuracy < CRIT_ACCURACY.weak) {
        amount *= CRIT_BONUSES.weak
    }

    console.log(amount)

    amount = Math.round(amount)

    context.commit('mineOre', { amount, oreId: index })
}

export const foragePlant = (context, index) => {

    let foragingCooldown = context.state.gameState.player.baseForagingCooldown - context.getters.getEquippedPlayer.foragingSpeed

    if (foragingCooldown < 1) {
        foragingCooldown = 1
    }

    context.state.gameState.player.currentForagingCooldown = foragingCooldown

    const amount = context.getters.getEquippedPlayer.foragingLuck
    context.commit('foragePlant', { amount, plantId: index })
}

export const critBarForagePlant = (context, { index, hitAccuracy }) => {

    let foragingCooldown = context.state.gameState.player.baseForagingCooldown - context.getters.getEquippedPlayer.foragingSpeed

    if (foragingCooldown < 1) {
        foragingCooldown = 1
    }

    context.state.gameState.player.currentForagingCooldown = foragingCooldown

    let amount = context.getters.getEquippedPlayer.foragingLuck

    if (hitAccuracy === CRIT_ACCURACY.extreme) {
        amount *= CRIT_BONUSES.extreme
    } else if (hitAccuracy < CRIT_ACCURACY.strong) {
        amount *= CRIT_BONUSES.strong
    } else if (hitAccuracy < CRIT_ACCURACY.weak) {
        amount *= CRIT_BONUSES.weak
    }

    console.log(amount)

    amount = Math.round(amount)

    context.commit('foragePlant', { amount, plantId: index })
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

export const clearFishingLog = (context) => context.commit('clearFishingLog') 
*/

export const attack = (context, { user, target }) => {

    let inflictedDamage = 0
    let wasCrit = false
    let critType = "normal"

    // The target recieves damaged based in its own defense and enemy strength

    // Current Enemy & Player are the options for user/target

    if (user === 'player') {

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
            inflictedDamage = context.getters.getEquippedPlayer.strength - context.state.gameState[target].stats.defense
        } else {
            inflictedDamage = context.getters.getEquippedPlayer.strength
        }

        let randomChance = Math.floor(Math.random() * 100)

        if (context.getters.getEquippedPlayer.critChance > randomChance) {
            // CRIT!
            wasCrit = true
            inflictedDamage *= context.getters.getEquippedPlayer.critDamageMultiplier
        }


    } else {

        // Apply the damage

        inflictedDamage = context.state.gameState.currentEnemy.stats.strength - context.getters.getEquippedPlayer.defense
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

    const playerStats = context.getters.getEquippedPlayer

    context.commit('inflictDamage', { inflictedDamage, target, crit: { wasCrit, critType }, playerStats })
}

export const critBarAttack = (context, hitAccuracy) => {

    let inflictedDamage = 0

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

    inflictedDamage = Math.round(inflictedDamage)

    const playerStats = context.getters.getEquippedPlayer

    context.commit('inflictDamage', { inflictedDamage, target: "currentEnemy", crit: { wasCrit, critType }, playerStats })
}

export const clearCombatLog = (context) => context.commit('clearCombatLog')

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

export const craftItem = (context, recipeIndex) => context.commit('craftItem', recipeIndex)

export const buyItem = (context, itemIndex) => context.commit('buyItem', itemIndex)

export const sellItem = (context, materialId) => context.commit('sellItem', materialId)

export const removeEquipment = (context, index) => context.commit('removeEquipment', index)

export const openTreasure = (context, materialId) => context.commit('openTreasure', materialId)

export const stepAttackBoard = (context) => context.commit('stepAttackBoard')

export const playerMove = (context, direction) => context.commit('playerMove', direction)

export const updateGame = ({ state, getters, commit }) => {

    // Enemies

    ENEMIES.forEach(enemy => {

        let milestoneRequirementMet = false
        let skillRequirementMet = false

        // Milestone Requirements

        if (enemy.requiredMilestoneType) {
            if (enemy.requiredMilestoneType.categoryType === 'altogether') {
                if (getters.getTotalMilestoneStats[enemy.requiredMilestoneType.subcategoryType] >= enemy.requiredMilestoneAmount) {
                    milestoneRequirementMet = true
                }
            } else {
                if (state.gameState.milestoneAmounts[enemy.requiredMilestoneType.categoryType][enemy.requiredMilestoneType.subcategoryType] >= enemy.requiredMilestoneAmount) {
                    milestoneRequirementMet = true
                }
            }
        } else {
            milestoneRequirementMet = true
        }

        // Skill Requirements

        if (enemy.requiredSkill) {
            if (getters.getPlayerSkillLevel[enemy.requiredSkill.skill] >= enemy.requiredSkill.level) {
                skillRequirementMet = true
            }
        } else {
            skillRequirementMet = true
        }

        if (milestoneRequirementMet && skillRequirementMet) {
            state.gameState.enemyUnlocks[enemy.id] = true
        }
    });

    // Ores

    ORE_VEINS.forEach(ore => {

        let milestoneRequirementMet = false
        let skillRequirementMet = false

        // Milestone Requirements

        if (ore.requiredMilestoneType) {
            if (ore.requiredMilestoneType.categoryType === 'altogether') {
                if (getters.getTotalMilestoneStats[ore.requiredMilestoneType.subcategoryType] >= ore.requiredMilestoneAmount) {
                    milestoneRequirementMet = true
                }
            } else {
                if (state.gameState.milestoneAmounts[ore.requiredMilestoneType.categoryType][ore.requiredMilestoneType.subcategoryType] >= ore.requiredMilestoneAmount) {
                    milestoneRequirementMet = true
                }
            }
        } else {
            milestoneRequirementMet = true
        }

        // Skill Requirements

        if (ore.requiredSkill) {
            if (getters.getPlayerSkillLevel[ore.requiredSkill.skill] >= ore.requiredSkill.level) {
                skillRequirementMet = true
            }
        } else {
            skillRequirementMet = true
        }

        if (milestoneRequirementMet && skillRequirementMet) {
            state.gameState.oreUnlocks[ore.id] = true
        }
    });

    // Plants

    PLANTS.forEach(plant => {

        let milestoneRequirementMet = false
        let skillRequirementMet = false

        // Milestone Requirements

        if (plant.requiredMilestoneType) {
            if (plant.requiredMilestoneType.categoryType === 'altogether') {
                if (getters.getTotalMilestoneStats[plant.requiredMilestoneType.subcategoryType] >= plant.requiredMilestoneAmount) {
                    milestoneRequirementMet = true
                }
            } else {
                if (state.gameState.milestoneAmounts[plant.requiredMilestoneType.categoryType][plant.requiredMilestoneType.subcategoryType] >= plant.requiredMilestoneAmount) {
                    milestoneRequirementMet = true
                }
            }
        } else {
            milestoneRequirementMet = true
        }

        // Skill Requirements

        if (plant.requiredSkill) {
            if (getters.getPlayerSkillLevel[plant.requiredSkill.skill] >= plant.requiredSkill.level) {
                skillRequirementMet = true
            }
        } else {
            skillRequirementMet = true
        }

        if (milestoneRequirementMet && skillRequirementMet) {
            state.gameState.plantUnlocks[plant.id] = true
        }
    });

    // Crops

    CROPS.forEach(crop => {

        let milestoneRequirementMet = false
        let skillRequirementMet = false

        // Milestone Requirements

        if (crop.requiredMilestoneType) {
            if (crop.requiredMilestoneType.categoryType === 'altogether') {
                if (getters.getTotalMilestoneStats[crop.requiredMilestoneType.subcategoryType] >= crop.requiredMilestoneAmount) {
                    milestoneRequirementMet = true
                }
            } else {
                if (state.gameState.milestoneAmounts[crop.requiredMilestoneType.categoryType][crop.requiredMilestoneType.subcategoryType] >= crop.requiredMilestoneAmount) {
                    milestoneRequirementMet = true
                }
            }
        } else {
            milestoneRequirementMet = true
        }

        // Skill Requirements

        if (crop.requiredSkill) {
            if (getters.getPlayerSkillLevel[crop.requiredSkill.skill] >= crop.requiredSkill.level) {
                skillRequirementMet = true
            }
        } else {
            skillRequirementMet = true
        }

        if (milestoneRequirementMet && skillRequirementMet) {
            state.gameState.cropUnlocks[crop.id] = true
        }
    });



    // Recipes

    RECIPES.forEach(recipe => {

        let milestoneRequirementMet = false
        let skillRequirementMet = false

        // Milestone Requirements

        if (recipe.requiredMilestoneType) {
            if (recipe.requiredMilestoneType.categoryType === 'altogether') {
                if (getters.getTotalMilestoneStats[recipe.requiredMilestoneType.subcategoryType] >= recipe.requiredMilestoneAmount) {
                    milestoneRequirementMet = true
                }
            } else {
                if (state.gameState.milestoneAmounts[recipe.requiredMilestoneType.categoryType][recipe.requiredMilestoneType.subcategoryType] >= recipe.requiredMilestoneAmount) {
                    milestoneRequirementMet = true
                }
            }
        } else {
            milestoneRequirementMet = true
        }

        // Skill Requirements

        if (recipe.requiredSkill) {
            if (getters.getPlayerSkillLevel[recipe.requiredSkill.skill] >= recipe.requiredSkill.level) {
                skillRequirementMet = true
            }
        } else {
            skillRequirementMet = true
        }

        if (milestoneRequirementMet && skillRequirementMet) {
            state.gameState.recipeUnlocks[recipe.id] = true
        }
    });

    // Shop

    SHOP.forEach(item => {

        let milestoneRequirementMet = false
        let skillRequirementMet = false

        // Milestone Requirements

        if (item.requiredMilestoneType) {
            if (item.requiredMilestoneType.categoryType === 'altogether') {
                if (getters.getTotalMilestoneStats[item.requiredMilestoneType.subcategoryType] >= item.requiredMilestoneAmount) {
                    milestoneRequirementMet = true
                }
            } else {
                if (state.gameState.milestoneAmounts[item.requiredMilestoneType.categoryType][item.requiredMilestoneType.subcategoryType] >= item.requiredMilestoneAmount) {
                    milestoneRequirementMet = true
                }
            }
        } else {
            milestoneRequirementMet = true
        }

        // Skill Requirements

        if (item.requiredSkill) {
            if (getters.getPlayerSkillLevel[item.requiredSkill.skill] >= item.requiredSkill.level) {
                skillRequirementMet = true
            }
        } else {
            skillRequirementMet = true
        }

        if (milestoneRequirementMet && skillRequirementMet) {
            state.gameState.shopUnlocks[item.id] = true
        }

    });

    const equippedPlayer = getters.getEquippedPlayer
    commit('resetPlayerStats', { maxHealth: equippedPlayer.maxHealth, maxMana: equippedPlayer.maxMana })

    commit('updateGame')
}