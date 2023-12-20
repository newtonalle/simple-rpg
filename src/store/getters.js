import { CROPS, ENEMIES, EQUIPMENTS, MATERIALS, MILESTONES, ORE_VEINS, PLANTS, RECIPES, SHOP, SKILL_BONUSES } from './constants'

export const getGameState = (state) => state.gameState

export const getTimeElapsed = (state) => state.gameState.timeElapsed

export const getPlayer = (state) => state.gameState.player

export const getEquipments = () => EQUIPMENTS

export const getEnemies = () => ENEMIES

export const getEnemyUnlocks = (state) => state.gameState.enemyUnlocks

export const getOres = () => ORE_VEINS

export const getOreUnlocks = (state) => state.gameState.oreUnlocks

export const getPlants = () => PLANTS

export const getPlantUnlocks = (state) => state.gameState.plantUnlocks

export const getCrops = () => CROPS

export const getCropUnlocks = (state) => state.gameState.cropUnlocks

export const getFarmingStatus = (state) => state.gameState.farming

export const getCombatLog = (state) => state.gameState.combatLog

export const getFishingLog = (state) => state.gameState.fishingLog

export const getCurrentEnemy = (state) => state.gameState.currentEnemy

export const getMaterials = () => MATERIALS

export const getMaterialAmounts = (state) => state.gameState.materialAmounts

export const getMilestones = () => MILESTONES

export const getMilestoneAmounts = (state) => state.gameState.milestoneAmounts

export const getRecipes = () => RECIPES

export const getRecipeUnlocks = (state) => state.gameState.recipeUnlocks

export const getShop = () => SHOP

export const getShopUnlocks = (state) => state.gameState.shopUnlocks

export const getNumberOfEquipment = (state) => {

    // Does NOT consider equipped items

    let equipmentAmounts = []

    for (let index = 0; index < EQUIPMENTS.length; index++) {
        equipmentAmounts.push(0)
    }

    state.gameState.player.inventory.forEach(equipmentId => {
        equipmentAmounts[equipmentId]++
    });

    return equipmentAmounts
}

export const getTotalMilestoneStats = (state) => {
    let milestones = {
        enemies: Object.values(state.gameState.milestoneAmounts.enemies).reduce(
            (enemiesKilled, enemyType) => enemiesKilled + enemyType, 0),

        mining: Object.values(state.gameState.milestoneAmounts.mining).reduce(
            (oresMined, oreType) => oresMined + oreType, 0),

        foraging: Object.values(state.gameState.milestoneAmounts.foraging).reduce(
            (plantsForaged, plantType) => plantsForaged + plantType, 0),

        farming: Object.values(state.gameState.milestoneAmounts.farming).reduce(
            (cropsHarvested, cropType) => cropsHarvested + cropType, 0),

        fishing: Object.values(state.gameState.milestoneAmounts.fishing).reduce(
            (fishFished, fishType) => fishFished + fishType, 0),

    }



    return milestones
}

export const getEquippedPlayer = (state) => {

    const equippedSetup = state.gameState.player.equippedSetup

    let equippedPlayer = {
        maxHealth: state.gameState.player.stats.maxHealth + state.gameState.player.setups[equippedSetup].reduce(
            (healthBonus, itemId) => {
                if (EQUIPMENTS[itemId].healthBonus) {
                    return healthBonus + EQUIPMENTS[itemId].healthBonus
                } else {
                    return healthBonus
                }
            }, 0),

        maxMana: state.gameState.player.stats.maxMana + state.gameState.player.setups[equippedSetup].reduce(
            (manaBonus, itemId) => {
                if (EQUIPMENTS[itemId].manaBonus) {
                    return manaBonus + EQUIPMENTS[itemId].manaBonus
                } else {
                    return manaBonus
                }
            }, 0),

        defense: state.gameState.player.stats.defense + state.gameState.player.setups[equippedSetup].reduce(
            (defenseBonus, itemId) => {
                if (EQUIPMENTS[itemId].defenseBonus) {
                    return defenseBonus + EQUIPMENTS[itemId].defenseBonus
                } else {
                    return defenseBonus
                }
            }, 0),

        strength: state.gameState.player.stats.strength + SKILL_BONUSES.combat[getPlayerSkillLevel(state).combat].strengthBonus + state.gameState.player.setups[equippedSetup].reduce(
            (strengthBonus, itemId) => {
                if (EQUIPMENTS[itemId].strengthBonus) {
                    return strengthBonus + EQUIPMENTS[itemId].strengthBonus
                } else {
                    return strengthBonus
                }
            }, 0),

        attackSpeed: state.gameState.player.stats.attackSpeed + state.gameState.player.setups[equippedSetup].reduce(
            (attackSpeedBonus, itemId) => {
                if (EQUIPMENTS[itemId].attackSpeedBonus) {
                    return attackSpeedBonus + EQUIPMENTS[itemId].attackSpeedBonus
                } else {
                    return attackSpeedBonus
                }
            }, 0),

        miningLuck: state.gameState.player.stats.miningLuck + SKILL_BONUSES.mining[getPlayerSkillLevel(state).mining].miningLuckBonus + state.gameState.player.setups[equippedSetup].reduce(
            (miningLuckBonus, itemId) => {
                if (EQUIPMENTS[itemId].miningLuckBonus) {
                    return miningLuckBonus + EQUIPMENTS[itemId].miningLuckBonus
                } else {
                    return miningLuckBonus
                }
            }, 0),

        miningSpeed: state.gameState.player.stats.miningSpeed + SKILL_BONUSES.mining[getPlayerSkillLevel(state).mining].miningSpeedBonus + state.gameState.player.setups[equippedSetup].reduce(
            (miningSpeedBonus, itemId) => {
                if (EQUIPMENTS[itemId].miningSpeedBonus) {
                    return miningSpeedBonus + EQUIPMENTS[itemId].miningSpeedBonus
                } else {
                    return miningSpeedBonus
                }
            }, 0),

        foragingLuck: state.gameState.player.stats.foragingLuck + SKILL_BONUSES.foraging[getPlayerSkillLevel(state).foraging].foragingLuckBonus + state.gameState.player.setups[equippedSetup].reduce(
            (foragingLuckBonus, itemId) => {
                if (EQUIPMENTS[itemId].foragingLuckBonus) {
                    return foragingLuckBonus + EQUIPMENTS[itemId].foragingLuckBonus
                } else {
                    return foragingLuckBonus
                }
            }, 0),

        foragingSpeed: state.gameState.player.stats.foragingSpeed + SKILL_BONUSES.foraging[getPlayerSkillLevel(state).foraging].foragingSpeedBonus + state.gameState.player.setups[equippedSetup].reduce(
            (foragingSpeedBonus, itemId) => {
                if (EQUIPMENTS[itemId].foragingSpeedBonus) {
                    return foragingSpeedBonus + EQUIPMENTS[itemId].foragingSpeedBonus
                } else {
                    return foragingSpeedBonus
                }
            }, 0),

        farmingLuck: state.gameState.player.stats.farmingLuck + SKILL_BONUSES.farming[getPlayerSkillLevel(state).farming].farmingLuckBonus + state.gameState.player.setups[equippedSetup].reduce(
            (farmingLuckBonus, itemId) => {
                if (EQUIPMENTS[itemId].farmingLuckBonus) {
                    return farmingLuckBonus + EQUIPMENTS[itemId].farmingLuckBonus
                } else {
                    return farmingLuckBonus
                }
            }, 0),

        fishingLuck: state.gameState.player.stats.fishingLuck + SKILL_BONUSES.fishing[getPlayerSkillLevel(state).fishing].fishingLuckBonus + state.gameState.player.setups[equippedSetup].reduce(
            (fishingLuckBonus, itemId) => {
                if (EQUIPMENTS[itemId].fishingLuckBonus) {
                    return fishingLuckBonus + EQUIPMENTS[itemId].fishingLuckBonus
                } else {
                    return fishingLuckBonus
                }
            }, 0),

        critChance: state.gameState.player.stats.critChance + state.gameState.player.setups[equippedSetup].reduce(
            (critChanceBonus, itemId) => {
                if (EQUIPMENTS[itemId].critChanceBonus) {
                    return critChanceBonus + EQUIPMENTS[itemId].critChanceBonus
                } else {
                    return critChanceBonus
                }
            }, 0),

        critDamageMultiplier: state.gameState.player.stats.critDamageMultiplier + state.gameState.player.setups[equippedSetup].reduce(
            (critDamageMultiplierBonus, itemId) => {
                if (EQUIPMENTS[itemId].critDamageMultiplierBonus) {
                    return critDamageMultiplierBonus + EQUIPMENTS[itemId].critDamageMultiplierBonus
                } else {
                    return critDamageMultiplierBonus
                }
            }, 0),

        baseAttackCooldown: state.gameState.player.baseAttackCooldown,

        baseMiningCooldown: state.gameState.player.baseMiningCooldown,
    }


    return equippedPlayer
}

export const getPlayerEquipment = (state) => {

    let playerEquipments = {}
    const equippedSetup = state.gameState.player.equippedSetup

    state.gameState.player.setups[equippedSetup].forEach(itemId => {
        playerEquipments[EQUIPMENTS[itemId].type] = EQUIPMENTS[itemId]
    });


    return playerEquipments
}

export const getPlayerSkillLevel = (state) => {
    let playerSkillLevel = {}

    playerSkillLevel.combat = 0
    playerSkillLevel.mining = 0
    playerSkillLevel.foraging = 0
    playerSkillLevel.farming = 0
    playerSkillLevel.fishing = 0

    for (let power = 0; state.gameState.player.skills.combat >= Math.floor(100 * 1.5 ** power); power++) {
        playerSkillLevel.combat = (power + 1)
    }

    for (let power = 0; state.gameState.player.skills.mining >= Math.floor(100 * 1.5 ** power); power++) {
        playerSkillLevel.mining = (power + 1)
    }

    for (let power = 0; state.gameState.player.skills.foraging >= Math.floor(100 * 1.5 ** power); power++) {
        playerSkillLevel.foraging = (power + 1)
    }

    for (let power = 0; state.gameState.player.skills.farming >= Math.floor(100 * 1.5 ** power); power++) {
        playerSkillLevel.farming = (power + 1)
    }

    for (let power = 0; state.gameState.player.skills.fishing >= Math.floor(100 * 1.5 ** power); power++) {
        playerSkillLevel.fishing = (power + 1)
    }

    return playerSkillLevel
}

export const getCurrentDodgeBoard = (state) => state.gameState.currentDodgeBoard