import defaultState from './state'

export const resetState = (context) => context.commit('setState', defaultState())

export const newEnemy = (context, index) => context.commit('newEnemy', index)

export const mineOre = (context, index) => {

    context.state.gameState.player.currentMiningCooldown = context.getters.getEquippedPlayer.baseMiningCooldown
    const amount = context.getters.getEquippedPlayer.miningLuck
    context.commit("mineOre", { index, amount })
}

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

export const attack = (context, { user, target }) => {

    let inflictedDamage = 0

    // The target recieves damaged based in its own defense and enemy strength

    // Current Enemy & Player are the options for user/target

    if (user === 'player') {

        // Reset the attack cooldown to its base value

        context.state.gameState.player.currentAttackCooldown = context.state.gameState.player.baseAttackCooldown

        // Apply the damage

        // First case = Player has a piercing item

        // Second case = It doesn't

        if (context.state.gameState.player.equippedItems.findIndex((equipment) => equipment.specialEffect === 'ignoresEnemyDefense') <= -1) {
            inflictedDamage = context.getters.getEquippedPlayer.strength - context.state.gameState[target].defense
        } else {
            inflictedDamage = context.getters.getEquippedPlayer.strength
        }


    } else {

        // Apply the damage

        inflictedDamage = context.state.gameState[user].strength - context.getters.getEquippedPlayer.defense
    }

    if (inflictedDamage < 1) {

        // If the formula results in a negative number or 0, the damage is converted to 1

        inflictedDamage = 1
    }

    context.commit('inflictDamage', { inflictedDamage, target })
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

export const equipItem = (context, index) => context.commit('equipItem', index)

export const unequipItem = (context, type) => context.commit('unequipItem', type)

export const craftItem = (context, recipeIndex) => context.commit('craftItem', recipeIndex)

export const buyItem = (context, itemIndex) => context.commit('buyItem', itemIndex)

export const sellItem = (context, { item, type }) => context.commit('sellItem', { item, type })

export const openTreasure = (context, treasure) => context.commit('openTreasure', treasure)

export const updateGame = ({ state, getters, commit }) => {

    // Enemies

    state.gameState.enemies.forEach(enemy => {

        let milestoneRequirementMet = false
        let skillRequirementMet = false

        // Milestone Requirements

        if (enemy.requiredMilestoneType) {
            if (enemy.requiredMilestoneType.categoryType === 'altogether') {
                if (getters.getTotalMilestoneStats[enemy.requiredMilestoneType.subcategoryType] >= enemy.requiredMilestoneAmount) {
                    milestoneRequirementMet = true
                }
            } else {
                if (state.gameState.milestones[enemy.requiredMilestoneType.categoryType][enemy.requiredMilestoneType.subcategoryType].amount >= enemy.requiredMilestoneAmount) {
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
            enemy.unlocked = true
        }
    });

    // Ores

    state.gameState.ores.forEach(ore => {

        let milestoneRequirementMet = false
        let skillRequirementMet = false

        // Milestone Requirements

        if (ore.requiredMilestoneType) {
            if (ore.requiredMilestoneType.categoryType === 'altogether') {
                if (getters.getTotalMilestoneStats[ore.requiredMilestoneType.subcategoryType] >= ore.requiredMilestoneAmount) {
                    milestoneRequirementMet = true
                }
            } else {
                if (state.gameState.milestones[ore.requiredMilestoneType.categoryType][ore.requiredMilestoneType.subcategoryType].amount >= ore.requiredMilestoneAmount) {
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
            ore.unlocked = true
        }
    });

    // Recipes

    state.gameState.recipes.forEach(recipe => {

        let milestoneRequirementMet = false
        let skillRequirementMet = false

        // Milestone Requirements

        if (recipe.requiredMilestoneType) {
            if (recipe.requiredMilestoneType.categoryType === 'altogether') {
                if (getters.getTotalMilestoneStats[recipe.requiredMilestoneType.subcategoryType] >= recipe.requiredMilestoneAmount) {
                    milestoneRequirementMet = true
                }
            } else {
                if (state.gameState.milestones[recipe.requiredMilestoneType.categoryType][recipe.requiredMilestoneType.subcategoryType].amount >= recipe.requiredMilestoneAmount) {
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
            recipe.unlocked = true
        }
    });

    // Shop

    state.gameState.shop.forEach(item => {

        let milestoneRequirementMet = false
        let skillRequirementMet = false

        // Milestone Requirements

        if (item.requiredMilestoneType) {
            if (item.requiredMilestoneType.categoryType === 'altogether') {
                if (getters.getTotalMilestoneStats[item.requiredMilestoneType.subcategoryType] >= item.requiredMilestoneAmount) {
                    milestoneRequirementMet = true
                }
            } else {
                if (state.gameState.milestones[item.requiredMilestoneType.categoryType][item.requiredMilestoneType.subcategoryType].amount >= item.requiredMilestoneAmount) {
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
            item.unlocked = true
        }

    });

    commit('updateGame')
}