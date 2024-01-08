import { COLLECTIONS, CROPS, ENEMIES, EQUIPMENTS, FORGE, LOCATIONS, MATERIALS, MILESTONES, ORE_VEINS, PLANTS, RECIPES, SHOP, SKILLS } from './constants'

export const getGameState = (state) => state.gameState

export const getTimeElapsed = (state) => state.gameState.timeElapsed

export const getLocations = () => LOCATIONS

export const getPlayer = (state) => state.gameState.player

export const getEquipments = () => EQUIPMENTS

export const getEnemies = () => ENEMIES

export const getLocationEnemies = (state) => {
    let locationEnemies = []

    LOCATIONS[state.gameState.player.currentLocationId].availableEnemies.forEach(enemyId => {
        locationEnemies.push(ENEMIES[enemyId])
    });

    return locationEnemies
}

export const getEnemyUnlocks = (state) => state.gameState.enemyUnlocks

export const getOres = () => ORE_VEINS

export const getLocationOres = (state) => {
    let locationOres = []

    LOCATIONS[state.gameState.player.currentLocationId].availableOres.forEach(oreId => {
        locationOres.push(ORE_VEINS[oreId])
    });

    return locationOres
}

export const getOreUnlocks = (state) => state.gameState.oreUnlocks

export const getPlants = () => PLANTS

export const getLocationPlants = (state) => {
    let locationPlants = []

    LOCATIONS[state.gameState.player.currentLocationId].availablePlants.forEach(plantId => {
        locationPlants.push(PLANTS[plantId])
    });

    return locationPlants
}

export const getPlantUnlocks = (state) => state.gameState.plantUnlocks

export const getCrops = () => CROPS

export const getCropUnlocks = (state) => state.gameState.cropUnlocks

export const getFarmingStatus = (state) => state.gameState.farming

export const getCombatLog = (state) => state.gameState.combatLog

export const getMiningLog = (state) => state.gameState.miningLog

export const getForagingLog = (state) => state.gameState.foragingLog

export const getFarmingLog = (state) => state.gameState.farmingLog

export const getFishingLog = (state) => state.gameState.fishingLog

export const getCurrentEnemy = (state) => state.gameState.currentEnemy

export const getMaterials = () => MATERIALS

export const getAvailableMaterials = () => {
    let availableMaterials = []

    MATERIALS.forEach(material => {
        if (!material.currentlyUnavailable) {
            availableMaterials.push(material)
        }
    });

    return availableMaterials
}

export const getMaterialAmounts = (state) => state.gameState.materialAmounts

export const getMilestones = () => MILESTONES

export const getMilestoneAmounts = (state) => state.gameState.milestoneAmounts

export const getCollections = () => COLLECTIONS

export const getCollectionAmounts = (state) => state.gameState.collectionAmounts

export const getRecipes = () => RECIPES

export const getRecipeUnlocks = (state) => state.gameState.recipeUnlocks

export const getForge = () => FORGE

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

        defense: state.gameState.player.stats.defense + (SKILLS.mining.bonusPerLevel.defenseBonus * getPlayerSkillLevel(state).mining) + state.gameState.player.setups[equippedSetup].reduce(
            (defenseBonus, itemId) => {
                if (EQUIPMENTS[itemId].defenseBonus) {
                    return defenseBonus + EQUIPMENTS[itemId].defenseBonus
                } else {
                    return defenseBonus
                }
            }, 0),

        strength: state.gameState.player.stats.strength + (SKILLS.combat.bonusPerLevel.strengthBonus * getPlayerSkillLevel(state).combat) + state.gameState.player.setups[equippedSetup].reduce(
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

        magicDamage: state.gameState.player.stats.magicDamage + state.gameState.player.setups[equippedSetup].reduce(
            (magicDamageBonus, itemId) => {
                if (EQUIPMENTS[itemId].magicDamageBonus) {
                    return magicDamageBonus + EQUIPMENTS[itemId].magicDamageBonus
                } else {
                    return magicDamageBonus
                }
            }, 0),

        aimingAccuracy: state.gameState.player.stats.aimingAccuracy + state.gameState.player.setups[equippedSetup].reduce(
            (aimingAccuracyBonus, itemId) => {
                if (EQUIPMENTS[itemId].aimingAccuracyBonus) {
                    return aimingAccuracyBonus + EQUIPMENTS[itemId].aimingAccuracyBonus
                } else {
                    return aimingAccuracyBonus
                }
            }, 0),

        miningLuck: state.gameState.player.stats.miningLuck + (SKILLS.mining.bonusPerLevel.miningLuckBonus * getPlayerSkillLevel(state).mining) + state.gameState.player.setups[equippedSetup].reduce(
            (miningLuckBonus, itemId) => {
                if (EQUIPMENTS[itemId].miningLuckBonus) {
                    return miningLuckBonus + EQUIPMENTS[itemId].miningLuckBonus
                } else {
                    return miningLuckBonus
                }
            }, 0),

        miningSpeed: state.gameState.player.stats.miningSpeed + (SKILLS.mining.bonusPerLevel.miningSpeedBonus * getPlayerSkillLevel(state).mining) + state.gameState.player.setups[equippedSetup].reduce(
            (miningSpeedBonus, itemId) => {
                if (EQUIPMENTS[itemId].miningSpeedBonus) {
                    return miningSpeedBonus + EQUIPMENTS[itemId].miningSpeedBonus
                } else {
                    return miningSpeedBonus
                }
            }, 0),

        foragingLuck: state.gameState.player.stats.foragingLuck + state.gameState.player.setups[equippedSetup].reduce(
            (foragingLuckBonus, itemId) => {
                if (EQUIPMENTS[itemId].foragingLuckBonus) {
                    return foragingLuckBonus + EQUIPMENTS[itemId].foragingLuckBonus
                } else {
                    return foragingLuckBonus
                }
            }, 0),

        foragingSpeed: state.gameState.player.stats.foragingSpeed + state.gameState.player.setups[equippedSetup].reduce(
            (foragingSpeedBonus, itemId) => {
                if (EQUIPMENTS[itemId].foragingSpeedBonus) {
                    return foragingSpeedBonus + EQUIPMENTS[itemId].foragingSpeedBonus
                } else {
                    return foragingSpeedBonus
                }
            }, 0),

        farmingLuck: state.gameState.player.stats.farmingLuck + state.gameState.player.setups[equippedSetup].reduce(
            (farmingLuckBonus, itemId) => {
                if (EQUIPMENTS[itemId].farmingLuckBonus) {
                    return farmingLuckBonus + EQUIPMENTS[itemId].farmingLuckBonus
                } else {
                    return farmingLuckBonus
                }
            }, 0),

        fishingLuck: state.gameState.player.stats.fishingLuck + state.gameState.player.setups[equippedSetup].reduce(
            (fishingLuckBonus, itemId) => {
                if (EQUIPMENTS[itemId].fishingLuckBonus) {
                    return fishingLuckBonus + EQUIPMENTS[itemId].fishingLuckBonus
                } else {
                    return fishingLuckBonus
                }
            }, 0),

        critChance: state.gameState.player.stats.critChance + (SKILLS.combat.bonusPerLevel.critChanceBonus * getPlayerSkillLevel(state).combat) + state.gameState.player.setups[equippedSetup].reduce(
            (critChanceBonus, itemId) => {
                if (EQUIPMENTS[itemId].critChanceBonus) {
                    return critChanceBonus + EQUIPMENTS[itemId].critChanceBonus
                } else {
                    return critChanceBonus
                }
            }, 0),

        critDamageMultiplier: state.gameState.player.stats.critDamageMultiplier + (SKILLS.combat.bonusPerLevel.critDamageMultiplierBonus * getPlayerSkillLevel(state).combat) + state.gameState.player.setups[equippedSetup].reduce(
            (critDamageMultiplierBonus, itemId) => {
                if (EQUIPMENTS[itemId].critDamageMultiplierBonus) {
                    return critDamageMultiplierBonus + EQUIPMENTS[itemId].critDamageMultiplierBonus
                } else {
                    return critDamageMultiplierBonus
                }
            }, 0),

        moveSpeed: state.gameState.player.stats.moveSpeed + state.gameState.player.setups[equippedSetup].reduce(
            (moveSpeedBonus, itemId) => {
                if (EQUIPMENTS[itemId].moveSpeedBonus) {
                    return moveSpeedBonus + EQUIPMENTS[itemId].moveSpeedBonus
                } else {
                    return moveSpeedBonus
                }
            }, 0),

        trueDamage: false,

        baseAttackCooldown: state.gameState.player.baseAttackCooldown,

        baseMiningCooldown: state.gameState.player.baseMiningCooldown,
    }

    // Temporary Buffs

    state.gameState.player.stats.temporaryStats.forEach(tempStat => {
        Object.entries(tempStat).forEach(stat => {
            if (stat[0] != 'ignoreEnemyDefense') {
                equippedPlayer[stat[0]] += stat[1]
            } else {
                equippedPlayer.trueDamage = true
            }
        })
    })

    // Milestone Equipment Bonuses

    state.gameState.player.setups[equippedSetup].forEach(equipmentId => {
        let equipment = EQUIPMENTS[equipmentId]

        if (equipment.specialEffect && equipment.specialEffect === "bonusPerMilestone") {
            let bonusLevels = Math.floor(state.gameState.milestoneAmounts[equipment.specialEffectBonus.milestoneType][equipment.specialEffectBonus.milestoneSubtype] / equipment.specialEffectBonus.amount)

            if (bonusLevels > equipment.specialEffectBonus.bonusCap) {
                bonusLevels = equipment.specialEffectBonus.bonusCap
            }

            Object.entries(equipment.specialEffectBonus.bonusPerLevel).forEach(stat => {
                equippedPlayer[stat[0]] += (stat[1] * bonusLevels)
            })
        }
    });


    return equippedPlayer
}

export const getPlayerEquipment = (state) => {

    let playerEquipments = {}
    const equippedSetup = state.gameState.player.equippedSetup

    state.gameState.player.setups[equippedSetup].forEach(itemId => {
        playerEquipments[EQUIPMENTS[itemId].slot] = EQUIPMENTS[itemId]
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

    for (let level = 0; state.gameState.player.skills.combat >= SKILLS.combat.levelingXp[level]; level++) {
        playerSkillLevel.combat = (level + 1)
    }

    for (let level = 0; state.gameState.player.skills.mining >= SKILLS.mining.levelingXp[level]; level++) {
        playerSkillLevel.mining = (level + 1)
    }

    for (let level = 0; state.gameState.player.skills.foraging >= SKILLS.foraging.levelingXp[level]; level++) {
        playerSkillLevel.foraging = (level + 1)
    }

    for (let level = 0; state.gameState.player.skills.farming >= SKILLS.farming.levelingXp[level]; level++) {
        playerSkillLevel.farming = (level + 1)
    }

    for (let level = 0; state.gameState.player.skills.fishing >= SKILLS.fishing.levelingXp[level]; level++) {
        playerSkillLevel.fishing = (level + 1)
    }

    return playerSkillLevel
}

export const getCurrentDodgeBoard = (state) => state.gameState.currentDodgeBoard