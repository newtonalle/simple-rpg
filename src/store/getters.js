import { ARROWS, COLLECTIONS, CROPS, ENEMIES, EQUIPMENTS, FORGE, LOCATIONS, MATERIALS, MILESTONES, ORE_VEINS, PLANTS, RECIPES, SHOP, SKILLS, WEAPON_TYPES } from './constants'

export const getGameState = (state) => state.gameState

export const getTimeElapsed = (state) => state.gameState.timeElapsed

export const getLocations = () => LOCATIONS

export const getPlayer = (state) => state.gameState.player

export const getWeaponTypes = () => WEAPON_TYPES

export const getEquipments = () => EQUIPMENTS

export const getEnemies = () => ENEMIES

export const getLocationEnemies = (state) => {
    let locationEnemies = []

    const currentLocation = LOCATIONS.find((location) => location.id === state.gameState.player.currentLocationId)

    currentLocation.availableEnemies.forEach(enemyId => {
        let locationEnemy = ENEMIES.find((enemy) => enemy.id === enemyId)
        locationEnemies.push(locationEnemy)
    });

    return locationEnemies
}

export const getEnemyUnlocks = (state) => state.gameState.enemyUnlocks

export const getOres = () => ORE_VEINS

export const getLocationOres = (state) => {
    let locationOres = []

    const currentLocation = LOCATIONS.find((location) => location.id === state.gameState.player.currentLocationId)

    currentLocation.availableOres.forEach(oreId => {
        let locationOre = ORE_VEINS.find((ore) => ore.id === oreId)
        locationOres.push(locationOre)
    });

    return locationOres
}

export const getOreUnlocks = (state) => state.gameState.oreUnlocks

export const getPlants = () => PLANTS

export const getLocationPlants = (state) => {
    let locationPlants = []

    const currentLocation = LOCATIONS.find((location) => location.id === state.gameState.player.currentLocationId)

    currentLocation.availablePlants.forEach(plantId => {
        let locationPlant = PLANTS.find((plant) => plant.id === plantId)
        locationPlants.push(locationPlant)
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

export const getArrows = () => ARROWS

export const getArrowAmounts = (state) => state.gameState.arrowAmounts

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

    EQUIPMENTS.forEach((equipment) => {
        equipmentAmounts.push({
            id: equipment.id,
            amount: 0,
        })
    })

    state.gameState.player.inventory.forEach(equipment => {
        equipmentAmounts.find((equipmentAmount) => equipmentAmount.id === equipment.id).amount++
    });

    return equipmentAmounts
}

export const getTotalMilestoneStats = (state) => {
    let milestones = {
        enemies: Object.values(state.gameState.milestoneAmounts.enemies).reduce(
            (enemiesKilled, enemyType) => enemiesKilled.amount + enemyType, 0),

        mining: Object.values(state.gameState.milestoneAmounts.mining).reduce(
            (oresMined, oreType) => oresMined.amount + oreType, 0),

        foraging: Object.values(state.gameState.milestoneAmounts.foraging).reduce(
            (plantsForaged, plantType) => plantsForaged.amount + plantType, 0),

        farming: Object.values(state.gameState.milestoneAmounts.farming).reduce(
            (cropsHarvested, cropType) => cropsHarvested.amount + cropType, 0),

        fishing: Object.values(state.gameState.milestoneAmounts.fishing).reduce(
            (fishFished, fishType) => fishFished.amount + fishType, 0),

    }



    return milestones
}

export const getEquippedPlayer = (state) => {

    const equippedSetup = state.gameState.player.equippedSetup

    let equippedPlayer = {
        maxHealth: state.gameState.player.stats.maxHealth + state.gameState.player.setups[equippedSetup].reduce(
            (healthBonus, item) => {
                let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                if (currentEquipment.healthBonus) {
                    return healthBonus + currentEquipment.healthBonus
                } else {
                    return healthBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (healthBonus, item) => {
                    let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                    if (currentEquipment.healthBonus) {
                        return healthBonus + currentEquipment.healthBonus
                    } else {
                        return healthBonus
                    }
                }, 0),

        maxMana: state.gameState.player.stats.maxMana + state.gameState.player.setups[equippedSetup].reduce(
            (manaBonus, item) => {
                let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                if (currentEquipment.manaBonus) {
                    return manaBonus + currentEquipment.manaBonus
                } else {
                    return manaBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (manaBonus, item) => {
                    let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                    if (currentEquipment.manaBonus) {
                        return manaBonus + currentEquipment.manaBonus
                    } else {
                        return manaBonus
                    }
                }, 0),

        defense: state.gameState.player.stats.defense + (SKILLS.mining.bonusPerLevel.defenseBonus * getPlayerSkillLevel(state).mining) + state.gameState.player.setups[equippedSetup].reduce(
            (defenseBonus, item) => {
                let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                if (currentEquipment.defenseBonus) {
                    return defenseBonus + currentEquipment.defenseBonus
                } else {
                    return defenseBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (defenseBonus, item) => {
                    let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                    if (currentEquipment.defenseBonus) {
                        return defenseBonus + currentEquipment.defenseBonus
                    } else {
                        return defenseBonus
                    }
                }, 0),

        strength: state.gameState.player.stats.strength + (SKILLS.combat.bonusPerLevel.strengthBonus * getPlayerSkillLevel(state).combat) + state.gameState.player.setups[equippedSetup].reduce(
            (strengthBonus, item) => {
                let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                if (currentEquipment.strengthBonus) {
                    return strengthBonus + currentEquipment.strengthBonus
                } else {
                    return strengthBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (strengthBonus, item) => {
                    let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                    if (currentEquipment.strengthBonus) {
                        return strengthBonus + currentEquipment.strengthBonus
                    } else {
                        return strengthBonus
                    }
                }, 0),

        activeRegeneration: state.gameState.player.stats.activeRegeneration + state.gameState.player.setups[equippedSetup].reduce(
            (activeRegenerationBonus, item) => {
                let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                if (currentEquipment.activeRegenerationBonus) {
                    return activeRegenerationBonus + currentEquipment.activeRegenerationBonus
                } else {
                    return activeRegenerationBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (activeRegenerationBonus, item) => {
                    let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                    if (currentEquipment.activeRegenerationBonus) {
                        return activeRegenerationBonus + currentEquipment.activeRegenerationBonus
                    } else {
                        return activeRegenerationBonus
                    }
                }, 0),

        passiveRegeneration: state.gameState.player.stats.passiveRegeneration + state.gameState.player.setups[equippedSetup].reduce(
            (passiveRegenerationBonus, item) => {
                let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                if (currentEquipment.passiveRegenerationBonus) {
                    return passiveRegenerationBonus + currentEquipment.passiveRegenerationBonus
                } else {
                    return passiveRegenerationBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (passiveRegenerationBonus, item) => {
                    let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                    if (currentEquipment.passiveRegenerationBonus) {
                        return passiveRegenerationBonus + currentEquipment.passiveRegenerationBonus
                    } else {
                        return passiveRegenerationBonus
                    }
                }, 0),

        attackSpeed: state.gameState.player.stats.attackSpeed + state.gameState.player.setups[equippedSetup].reduce(
            (attackSpeedBonus, item) => {
                let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                if (currentEquipment.attackSpeedBonus) {
                    return attackSpeedBonus + currentEquipment.attackSpeedBonus
                } else {
                    return attackSpeedBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (attackSpeedBonus, item) => {
                    let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                    if (currentEquipment.attackSpeedBonus) {
                        return attackSpeedBonus + currentEquipment.attackSpeedBonus
                    } else {
                        return attackSpeedBonus
                    }
                }, 0),

        magicDamage: state.gameState.player.stats.magicDamage + state.gameState.player.setups[equippedSetup].reduce(
            (magicDamageBonus, item) => {
                let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                if (currentEquipment.magicDamageBonus) {
                    return magicDamageBonus + currentEquipment.magicDamageBonus
                } else {
                    return magicDamageBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (magicDamageBonus, item) => {
                    let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                    if (currentEquipment.magicDamageBonus) {
                        return magicDamageBonus + currentEquipment.magicDamageBonus
                    } else {
                        return magicDamageBonus
                    }
                }, 0),

        aimingAccuracy: state.gameState.player.stats.aimingAccuracy + state.gameState.player.setups[equippedSetup].reduce(
            (aimingAccuracyBonus, item) => {
                let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                if (currentEquipment.aimingAccuracyBonus) {
                    return aimingAccuracyBonus + currentEquipment.aimingAccuracyBonus
                } else {
                    return aimingAccuracyBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (aimingAccuracyBonus, item) => {
                    let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                    if (currentEquipment.aimingAccuracyBonus) {
                        return aimingAccuracyBonus + currentEquipment.aimingAccuracyBonus
                    } else {
                        return aimingAccuracyBonus
                    }
                }, 0),

        miningLuck: state.gameState.player.stats.miningLuck + (SKILLS.mining.bonusPerLevel.miningLuckBonus * getPlayerSkillLevel(state).mining) + state.gameState.player.setups[equippedSetup].reduce(
            (miningLuckBonus, item) => {
                let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                if (currentEquipment.miningLuckBonus) {
                    return miningLuckBonus + currentEquipment.miningLuckBonus
                } else {
                    return miningLuckBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (miningLuckBonus, item) => {
                    let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                    if (currentEquipment.miningLuckBonus) {
                        return miningLuckBonus + currentEquipment.miningLuckBonus
                    } else {
                        return miningLuckBonus
                    }
                }, 0),

        miningSpeed: state.gameState.player.stats.miningSpeed + (SKILLS.mining.bonusPerLevel.miningSpeedBonus * getPlayerSkillLevel(state).mining) + state.gameState.player.setups[equippedSetup].reduce(
            (miningSpeedBonus, item) => {
                let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                if (currentEquipment.miningSpeedBonus) {
                    return miningSpeedBonus + currentEquipment.miningSpeedBonus
                } else {
                    return miningSpeedBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (miningSpeedBonus, item) => {
                    let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                    if (currentEquipment.miningSpeedBonus) {
                        return miningSpeedBonus + currentEquipment.miningSpeedBonus
                    } else {
                        return miningSpeedBonus
                    }
                }, 0),

        foragingLuck: state.gameState.player.stats.foragingLuck + state.gameState.player.setups[equippedSetup].reduce(
            (foragingLuckBonus, item) => {
                let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                if (currentEquipment.foragingLuckBonus) {
                    return foragingLuckBonus + currentEquipment.foragingLuckBonus
                } else {
                    return foragingLuckBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (foragingLuckBonus, item) => {
                    let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                    if (currentEquipment.foragingLuckBonus) {
                        return foragingLuckBonus + currentEquipment.foragingLuckBonus
                    } else {
                        return foragingLuckBonus
                    }
                }, 0),

        foragingSpeed: state.gameState.player.stats.foragingSpeed + state.gameState.player.setups[equippedSetup].reduce(
            (foragingSpeedBonus, item) => {
                let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                if (currentEquipment.foragingSpeedBonus) {
                    return foragingSpeedBonus + currentEquipment.foragingSpeedBonus
                } else {
                    return foragingSpeedBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (foragingSpeedBonus, item) => {
                    let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                    if (currentEquipment.foragingSpeedBonus) {
                        return foragingSpeedBonus + currentEquipment.foragingSpeedBonus
                    } else {
                        return foragingSpeedBonus
                    }
                }, 0),

        farmingLuck: state.gameState.player.stats.farmingLuck + state.gameState.player.setups[equippedSetup].reduce(
            (farmingLuckBonus, item) => {
                let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                if (currentEquipment.farmingLuckBonus) {
                    return farmingLuckBonus + currentEquipment.farmingLuckBonus
                } else {
                    return farmingLuckBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (farmingLuckBonus, item) => {
                    let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                    if (currentEquipment.farmingLuckBonus) {
                        return farmingLuckBonus + currentEquipment.farmingLuckBonus
                    } else {
                        return farmingLuckBonus
                    }
                }, 0),

        fishingLuck: state.gameState.player.stats.fishingLuck + state.gameState.player.setups[equippedSetup].reduce(
            (fishingLuckBonus, item) => {
                let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                if (currentEquipment.fishingLuckBonus) {
                    return fishingLuckBonus + currentEquipment.fishingLuckBonus
                } else {
                    return fishingLuckBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (fishingLuckBonus, item) => {
                    let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                    if (currentEquipment.fishingLuckBonus) {
                        return fishingLuckBonus + currentEquipment.fishingLuckBonus
                    } else {
                        return fishingLuckBonus
                    }
                }, 0),

        critChance: state.gameState.player.stats.critChance + (SKILLS.combat.bonusPerLevel.critChanceBonus * getPlayerSkillLevel(state).combat) + state.gameState.player.setups[equippedSetup].reduce(
            (critChanceBonus, item) => {
                let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                if (currentEquipment.critChanceBonus) {
                    return critChanceBonus + currentEquipment.critChanceBonus
                } else {
                    return critChanceBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (critChanceBonus, item) => {
                    let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                    if (currentEquipment.critChanceBonus) {
                        return critChanceBonus + currentEquipment.critChanceBonus
                    } else {
                        return critChanceBonus
                    }
                }, 0),

        critDamageMultiplier: state.gameState.player.stats.critDamageMultiplier + (SKILLS.combat.bonusPerLevel.critDamageMultiplierBonus * getPlayerSkillLevel(state).combat) + state.gameState.player.setups[equippedSetup].reduce(
            (critDamageMultiplierBonus, item) => {
                let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                if (currentEquipment.critDamageMultiplierBonus) {
                    return critDamageMultiplierBonus + currentEquipment.critDamageMultiplierBonus
                } else {
                    return critDamageMultiplierBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (critDamageMultiplierBonus, item) => {
                    let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                    if (currentEquipment.critDamageMultiplierBonus) {
                        return critDamageMultiplierBonus + currentEquipment.critDamageMultiplierBonus
                    } else {
                        return critDamageMultiplierBonus
                    }
                }, 0),

        moveSpeed: state.gameState.player.stats.moveSpeed + state.gameState.player.setups[equippedSetup].reduce(
            (moveSpeedBonus, item) => {
                let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                if (currentEquipment.moveSpeedBonus) {
                    return moveSpeedBonus + currentEquipment.moveSpeedBonus
                } else {
                    return moveSpeedBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (moveSpeedBonus, item) => {
                    let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
                    if (currentEquipment.moveSpeedBonus) {
                        return moveSpeedBonus + currentEquipment.moveSpeedBonus
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

    // Setup Bonuses

    state.gameState.player.setups[equippedSetup].forEach(equipmentBonus => {
        let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === equipmentBonus.id)

        // Milestone Bonuses

        if (currentEquipment.specialEffect && currentEquipment.specialEffect === "bonusPerMilestone") {
            let bonusLevels = Math.floor(state.gameState.milestoneAmounts[currentEquipment.specialEffectBonus.milestoneType][currentEquipment.specialEffectBonus.milestoneSubtype] / currentEquipment.specialEffectBonus.amount)

            if (bonusLevels > currentEquipment.specialEffectBonus.bonusCap) {
                bonusLevels = currentEquipment.specialEffectBonus.bonusCap
            }

            Object.entries(currentEquipment.specialEffectBonus.bonusPerLevel).forEach(stat => {
                equippedPlayer[stat[0]] += (stat[1] * bonusLevels)
            })
        }

        // Boss-fight Only Bonuses

        if (currentEquipment.duringBossFightBonus && state.gameState.currentEnemy.type === 'boss') {
            Object.entries(currentEquipment.duringBossFightBonus).forEach(stat => {
                equippedPlayer[stat[0]] += stat[1]
            })
        }
    });

    // Equipment Bonuses

    state.gameState.player.equippedItems.forEach(equipmentBonus => {
        let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === equipmentBonus.id)

        // Milestone Bonuses

        if (currentEquipment.specialEffect && currentEquipment.specialEffect === "bonusPerMilestone") {
            let bonusLevels = Math.floor(state.gameState.milestoneAmounts[currentEquipment.specialEffectBonus.milestoneType][currentEquipment.specialEffectBonus.milestoneSubtype] / currentEquipment.specialEffectBonus.amount)

            if (bonusLevels > currentEquipment.specialEffectBonus.bonusCap) {
                bonusLevels = currentEquipment.specialEffectBonus.bonusCap
            }

            Object.entries(currentEquipment.specialEffectBonus.bonusPerLevel).forEach(stat => {
                equippedPlayer[stat[0]] += (stat[1] * bonusLevels)
            })
        }

        // Boss-fight Only Bonuses

        if (currentEquipment.duringBossFightBonus && state.gameState.currentEnemy.type === 'boss') {
            Object.entries(currentEquipment.duringBossFightBonus).forEach(stat => {
                equippedPlayer[stat[0]] += stat[1]
            })
        }
    });

    return equippedPlayer
}

export const getPlayerEquipment = (state) => {

    let playerEquipments = {}
    const equippedSetup = state.gameState.player.equippedSetup

    state.gameState.player.setups[equippedSetup].forEach(item => {
        let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
        playerEquipments[currentEquipment.slot] = currentEquipment
    });

    state.gameState.player.equippedItems.forEach(item => {
        let currentEquipment = EQUIPMENTS.find((equipment) => equipment.id === item.id)
        playerEquipments[currentEquipment.slot] = currentEquipment
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