export const getPlayer = (state) => state.gameState.player

export const getEnemies = (state) => state.gameState.enemies

export const getOres = (state) => state.gameState.ores

export const getCombatLog = (state) => state.gameState.combatLog

export const getFishingLog = (state) => state.gameState.fishingLog

export const getCurrentEnemy = (state) => state.gameState.currentEnemy

export const getMaterials = (state) => state.gameState.materials

export const getMilestones = (state) => state.gameState.milestones

export const getRecipes = (state) => state.gameState.recipes

export const getShop = (state) => state.gameState.shop

export const getNumberOfEquipment = (state) => {

    // Does NOT consider equipped items

    let equipmentAmounts = {}

    state.gameState.player.inventory.forEach(equipment => {
        if (equipmentAmounts[equipment.name]) {
            equipmentAmounts[equipment.name]++
        } else {
            equipmentAmounts[equipment.name] = 1
        }
    });

    return equipmentAmounts
}

export const getTotalMilestoneStats = (state) => {
    let milestones = {
        enemies: Object.values(state.gameState.milestones.enemies).reduce(
            (enemiesKilled, enemyType) => enemiesKilled + enemyType.amount, 0),

        mining: Object.values(state.gameState.milestones.mining).reduce(
            (oresMined, oreType) => oresMined + oreType.amount, 0),

        fishing: Object.values(state.gameState.milestones.fishing).reduce(
            (fishFished, fishType) => fishFished + fishType.amount, 0),

    }



    return milestones
}

export const getEquippedPlayer = (state) => {
    let equippedPlayer = {
        maxHealth: state.gameState.player.maxHealth + state.gameState.player.equippedItems.reduce(
            (healthBonus, item) => healthBonus + item.healthBonus, 0),

        defense: state.gameState.player.defense + state.gameState.player.equippedItems.reduce(
            (defenseBonus, item) => defenseBonus + item.defenseBonus, 0),

        strength: state.gameState.player.strength + state.gameState.skillBonuses.combat[getPlayerSkillLevel(state).combat].strengthBonus + state.gameState.player.equippedItems.reduce(
            (strengthBonus, item) => strengthBonus + item.strengthBonus, 0),

        miningLuck: state.gameState.player.miningLuck + state.gameState.skillBonuses.mining[getPlayerSkillLevel(state).mining].miningLuckBonus + state.gameState.player.equippedItems.reduce(
            (miningLuckBonus, item) => miningLuckBonus + item.miningLuckBonus, 0),

        miningSpeed: state.gameState.player.miningSpeed + state.gameState.skillBonuses.mining[getPlayerSkillLevel(state).mining].miningSpeedBonus + state.gameState.player.equippedItems.reduce(
            (miningSpeedBonus, item) => miningSpeedBonus + item.miningSpeedBonus, 0),

        fishingLuck: state.gameState.player.fishingLuck + state.gameState.skillBonuses.fishing[getPlayerSkillLevel(state).fishing].fishingLuckBonus + state.gameState.player.equippedItems.reduce(
            (fishingLuckBonus, item) => fishingLuckBonus + item.fishingLuckBonus, 0),

        baseAttackCooldown: state.gameState.player.baseAttackCooldown,

        baseMiningCooldown: state.gameState.player.baseMiningCooldown - state.gameState.player.equippedItems.reduce(
            (miningSpeedBonus, item) => miningSpeedBonus + item.miningSpeedBonus, 0),
    }


    return equippedPlayer
}

export const getPlayerEquipment = (state) => {

    let playerEquipments = {}

    state.gameState.player.equippedItems.forEach(item => {
        playerEquipments[item.type] = item
    });


    return playerEquipments
}

export const getPlayerSkillLevel = (state) => {
    let playerSkillLevel = {}

    playerSkillLevel.combat = 0
    playerSkillLevel.mining = 0
    playerSkillLevel.fishing = 0

    for (let power = 0; state.gameState.player.skills.combat >= 100 * 1.5 ** power; power++) {
        playerSkillLevel.combat = (power + 1)
    }

    for (let power = 0; state.gameState.player.skills.mining >= 100 * 1.5 ** power; power++) {
        playerSkillLevel.mining = (power + 1)
    }

    for (let power = 0; state.gameState.player.skills.fishing >= 100 * 1.5 ** power; power++) {
        playerSkillLevel.fishing = (power + 1)
    }

    return playerSkillLevel
}