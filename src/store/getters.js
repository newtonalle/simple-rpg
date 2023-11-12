import { ENEMIES, EQUIPMENTS, MATERIALS, MILESTONES, ORE_VEINS, RECIPES, SHOP, SKILL_BONUSES } from './constants'

export const getGameState = (state) => state.gameState

export const getTimeElapsed = (state) => state.gameState.timeElapsed

export const getPlayer = (state) => state.gameState.player

export const getEquipments = () => EQUIPMENTS

export const getEnemies = () => ENEMIES

export const getEnemyUnlocks = (state) => state.gameState.enemyUnlocks

export const getOres = () => ORE_VEINS

export const getOreUnlocks = (state) => state.gameState.oreUnlocks

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

    let equipmentAmounts = {}

    state.gameState.player.inventory.forEach(equipmentId => {
        if (equipmentAmounts[EQUIPMENTS[equipmentId].name]) {
            equipmentAmounts[EQUIPMENTS[equipmentId].name]++
        } else {
            equipmentAmounts[EQUIPMENTS[equipmentId].name] = 1
        }
    });

    return equipmentAmounts
}

export const getTotalMilestoneStats = (state) => {
    let milestones = {
        enemies: Object.values(state.gameState.milestoneAmounts.enemies).reduce(
            (enemiesKilled, enemyType) => enemiesKilled + enemyType.amount, 0),

        mining: Object.values(state.gameState.milestoneAmounts.mining).reduce(
            (oresMined, oreType) => oresMined + oreType.amount, 0),

        fishing: Object.values(state.gameState.milestoneAmounts.fishing).reduce(
            (fishFished, fishType) => fishFished + fishType.amount, 0),

    }



    return milestones
}

export const getEquippedPlayer = (state) => {
    let equippedPlayer = {
        maxHealth: state.gameState.player.stats.maxHealth + state.gameState.player.equippedItems.reduce(
            (healthBonus, itemId) => healthBonus + EQUIPMENTS[itemId].healthBonus, 0),

        defense: state.gameState.player.stats.defense + state.gameState.player.equippedItems.reduce(
            (defenseBonus, itemId) => defenseBonus + EQUIPMENTS[itemId].defenseBonus, 0),

        strength: state.gameState.player.stats.strength + SKILL_BONUSES.combat[getPlayerSkillLevel(state).combat].strengthBonus + state.gameState.player.equippedItems.reduce(
            (strengthBonus, itemId) => strengthBonus + EQUIPMENTS[itemId].strengthBonus, 0),

        attackSpeed: state.gameState.player.stats.attackSpeed + state.gameState.player.equippedItems.reduce(
            (attackSpeedBonus, itemId) => attackSpeedBonus + EQUIPMENTS[itemId].attackSpeedBonus, 0),

        miningLuck: state.gameState.player.stats.miningLuck + SKILL_BONUSES.mining[getPlayerSkillLevel(state).mining].miningLuckBonus + state.gameState.player.equippedItems.reduce(
            (miningLuckBonus, itemId) => miningLuckBonus + EQUIPMENTS[itemId].miningLuckBonus, 0),

        miningSpeed: state.gameState.player.stats.miningSpeed + SKILL_BONUSES.mining[getPlayerSkillLevel(state).mining].miningSpeedBonus + state.gameState.player.equippedItems.reduce(
            (miningSpeedBonus, itemId) => miningSpeedBonus + EQUIPMENTS[itemId].miningSpeedBonus, 0),

        fishingLuck: state.gameState.player.stats.fishingLuck + SKILL_BONUSES.fishing[getPlayerSkillLevel(state).fishing].fishingLuckBonus + state.gameState.player.equippedItems.reduce(
            (fishingLuckBonus, itemId) => fishingLuckBonus + EQUIPMENTS[itemId].fishingLuckBonus, 0),

        critChance: state.gameState.player.stats.critChance + state.gameState.player.equippedItems.reduce(
            (critChanceBonus, itemId) => critChanceBonus + EQUIPMENTS[itemId].critChanceBonus, 0),

        critDamageMultiplier: state.gameState.player.stats.critDamageMultiplier + state.gameState.player.equippedItems.reduce(
            (critDamageMultiplierBonus, itemId) => critDamageMultiplierBonus + EQUIPMENTS[itemId].critDamageMultiplierBonus, 0),

        baseAttackCooldown: state.gameState.player.baseAttackCooldown,

        baseMiningCooldown: state.gameState.player.baseMiningCooldown,
    }


    return equippedPlayer
}

export const getPlayerEquipment = (state) => {

    let playerEquipments = {}

    state.gameState.player.equippedItems.forEach(itemId => {
        playerEquipments[EQUIPMENTS[itemId].type] = EQUIPMENTS[itemId]
    });


    return playerEquipments
}

export const getPlayerSkillLevel = (state) => {
    let playerSkillLevel = {}

    playerSkillLevel.combat = 0
    playerSkillLevel.mining = 0
    playerSkillLevel.fishing = 0

    for (let power = 0; state.gameState.player.skills.combat >= Math.floor(100 * 1.5 ** power); power++) {
        console.log(power)
        playerSkillLevel.combat = (power + 1)
    }

    for (let power = 0; state.gameState.player.skills.mining >= Math.floor(100 * 1.5 ** power); power++) {
        console.log(power)
        playerSkillLevel.mining = (power + 1)
    }

    for (let power = 0; state.gameState.player.skills.fishing >= Math.floor(100 * 1.5 ** power); power++) {
        console.log(power)
        playerSkillLevel.fishing = (power + 1)
    }

    return playerSkillLevel
}