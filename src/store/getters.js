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

    for (let index = 0; index < EQUIPMENTS.length; index++) {
        equipmentAmounts.push(0)
    }

    state.gameState.player.inventory.forEach(equipment => {
        equipmentAmounts[equipment.id]++
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
            (healthBonus, item) => {
                if (EQUIPMENTS[item.id].healthBonus) {
                    return healthBonus + EQUIPMENTS[item.id].healthBonus
                } else {
                    return healthBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (healthBonus, item) => {
                    if (EQUIPMENTS[item.id].healthBonus) {
                        return healthBonus + EQUIPMENTS[item.id].healthBonus
                    } else {
                        return healthBonus
                    }
                }, 0),

        maxMana: state.gameState.player.stats.maxMana + state.gameState.player.setups[equippedSetup].reduce(
            (manaBonus, item) => {
                if (EQUIPMENTS[item.id].manaBonus) {
                    return manaBonus + EQUIPMENTS[item.id].manaBonus
                } else {
                    return manaBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (manaBonus, item) => {
                    if (EQUIPMENTS[item.id].manaBonus) {
                        return manaBonus + EQUIPMENTS[item.id].manaBonus
                    } else {
                        return manaBonus
                    }
                }, 0),

        defense: state.gameState.player.stats.defense + (SKILLS.mining.bonusPerLevel.defenseBonus * getPlayerSkillLevel(state).mining) + state.gameState.player.setups[equippedSetup].reduce(
            (defenseBonus, item) => {
                if (EQUIPMENTS[item.id].defenseBonus) {
                    return defenseBonus + EQUIPMENTS[item.id].defenseBonus
                } else {
                    return defenseBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (defenseBonus, item) => {
                    if (EQUIPMENTS[item.id].defenseBonus) {
                        return defenseBonus + EQUIPMENTS[item.id].defenseBonus
                    } else {
                        return defenseBonus
                    }
                }, 0),

        strength: state.gameState.player.stats.strength + (SKILLS.combat.bonusPerLevel.strengthBonus * getPlayerSkillLevel(state).combat) + state.gameState.player.setups[equippedSetup].reduce(
            (strengthBonus, item) => {
                if (EQUIPMENTS[item.id].strengthBonus) {
                    return strengthBonus + EQUIPMENTS[item.id].strengthBonus
                } else {
                    return strengthBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (strengthBonus, item) => {
                    if (EQUIPMENTS[item.id].strengthBonus) {
                        return strengthBonus + EQUIPMENTS[item.id].strengthBonus
                    } else {
                        return strengthBonus
                    }
                }, 0),

        activeRegeneration: state.gameState.player.stats.activeRegeneration + state.gameState.player.setups[equippedSetup].reduce(
            (activeRegenerationBonus, item) => {
                if (EQUIPMENTS[item.id].activeRegenerationBonus) {
                    return activeRegenerationBonus + EQUIPMENTS[item.id].activeRegenerationBonus
                } else {
                    return activeRegenerationBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (activeRegenerationBonus, item) => {
                    if (EQUIPMENTS[item.id].activeRegenerationBonus) {
                        return activeRegenerationBonus + EQUIPMENTS[item.id].activeRegenerationBonus
                    } else {
                        return activeRegenerationBonus
                    }
                }, 0),

        passiveRegeneration: state.gameState.player.stats.passiveRegeneration + state.gameState.player.setups[equippedSetup].reduce(
            (passiveRegenerationBonus, item) => {
                if (EQUIPMENTS[item.id].passiveRegenerationBonus) {
                    return passiveRegenerationBonus + EQUIPMENTS[item.id].passiveRegenerationBonus
                } else {
                    return passiveRegenerationBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (passiveRegenerationBonus, item) => {
                    if (EQUIPMENTS[item.id].passiveRegenerationBonus) {
                        return passiveRegenerationBonus + EQUIPMENTS[item.id].passiveRegenerationBonus
                    } else {
                        return passiveRegenerationBonus
                    }
                }, 0),

        attackSpeed: state.gameState.player.stats.attackSpeed + state.gameState.player.setups[equippedSetup].reduce(
            (attackSpeedBonus, item) => {
                if (EQUIPMENTS[item.id].attackSpeedBonus) {
                    return attackSpeedBonus + EQUIPMENTS[item.id].attackSpeedBonus
                } else {
                    return attackSpeedBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (attackSpeedBonus, item) => {
                    if (EQUIPMENTS[item.id].attackSpeedBonus) {
                        return attackSpeedBonus + EQUIPMENTS[item.id].attackSpeedBonus
                    } else {
                        return attackSpeedBonus
                    }
                }, 0),

        magicDamage: state.gameState.player.stats.magicDamage + state.gameState.player.setups[equippedSetup].reduce(
            (magicDamageBonus, item) => {
                if (EQUIPMENTS[item.id].magicDamageBonus) {
                    return magicDamageBonus + EQUIPMENTS[item.id].magicDamageBonus
                } else {
                    return magicDamageBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (magicDamageBonus, item) => {
                    if (EQUIPMENTS[item.id].magicDamageBonus) {
                        return magicDamageBonus + EQUIPMENTS[item.id].magicDamageBonus
                    } else {
                        return magicDamageBonus
                    }
                }, 0),

        aimingAccuracy: state.gameState.player.stats.aimingAccuracy + state.gameState.player.setups[equippedSetup].reduce(
            (aimingAccuracyBonus, item) => {
                if (EQUIPMENTS[item.id].aimingAccuracyBonus) {
                    return aimingAccuracyBonus + EQUIPMENTS[item.id].aimingAccuracyBonus
                } else {
                    return aimingAccuracyBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (aimingAccuracyBonus, item) => {
                    if (EQUIPMENTS[item.id].aimingAccuracyBonus) {
                        return aimingAccuracyBonus + EQUIPMENTS[item.id].aimingAccuracyBonus
                    } else {
                        return aimingAccuracyBonus
                    }
                }, 0),

        miningLuck: state.gameState.player.stats.miningLuck + (SKILLS.mining.bonusPerLevel.miningLuckBonus * getPlayerSkillLevel(state).mining) + state.gameState.player.setups[equippedSetup].reduce(
            (miningLuckBonus, item) => {
                if (EQUIPMENTS[item.id].miningLuckBonus) {
                    return miningLuckBonus + EQUIPMENTS[item.id].miningLuckBonus
                } else {
                    return miningLuckBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (miningLuckBonus, item) => {
                    if (EQUIPMENTS[item.id].miningLuckBonus) {
                        return miningLuckBonus + EQUIPMENTS[item.id].miningLuckBonus
                    } else {
                        return miningLuckBonus
                    }
                }, 0),

        miningSpeed: state.gameState.player.stats.miningSpeed + (SKILLS.mining.bonusPerLevel.miningSpeedBonus * getPlayerSkillLevel(state).mining) + state.gameState.player.setups[equippedSetup].reduce(
            (miningSpeedBonus, item) => {
                if (EQUIPMENTS[item.id].miningSpeedBonus) {
                    return miningSpeedBonus + EQUIPMENTS[item.id].miningSpeedBonus
                } else {
                    return miningSpeedBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (miningSpeedBonus, item) => {
                    if (EQUIPMENTS[item.id].miningSpeedBonus) {
                        return miningSpeedBonus + EQUIPMENTS[item.id].miningSpeedBonus
                    } else {
                        return miningSpeedBonus
                    }
                }, 0),

        foragingLuck: state.gameState.player.stats.foragingLuck + state.gameState.player.setups[equippedSetup].reduce(
            (foragingLuckBonus, item) => {
                if (EQUIPMENTS[item.id].foragingLuckBonus) {
                    return foragingLuckBonus + EQUIPMENTS[item.id].foragingLuckBonus
                } else {
                    return foragingLuckBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (foragingLuckBonus, item) => {
                    if (EQUIPMENTS[item.id].foragingLuckBonus) {
                        return foragingLuckBonus + EQUIPMENTS[item.id].foragingLuckBonus
                    } else {
                        return foragingLuckBonus
                    }
                }, 0),

        foragingSpeed: state.gameState.player.stats.foragingSpeed + state.gameState.player.setups[equippedSetup].reduce(
            (foragingSpeedBonus, item) => {
                if (EQUIPMENTS[item.id].foragingSpeedBonus) {
                    return foragingSpeedBonus + EQUIPMENTS[item.id].foragingSpeedBonus
                } else {
                    return foragingSpeedBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (foragingSpeedBonus, item) => {
                    if (EQUIPMENTS[item.id].foragingSpeedBonus) {
                        return foragingSpeedBonus + EQUIPMENTS[item.id].foragingSpeedBonus
                    } else {
                        return foragingSpeedBonus
                    }
                }, 0),

        farmingLuck: state.gameState.player.stats.farmingLuck + state.gameState.player.setups[equippedSetup].reduce(
            (farmingLuckBonus, item) => {
                if (EQUIPMENTS[item.id].farmingLuckBonus) {
                    return farmingLuckBonus + EQUIPMENTS[item.id].farmingLuckBonus
                } else {
                    return farmingLuckBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (farmingLuckBonus, item) => {
                    if (EQUIPMENTS[item.id].farmingLuckBonus) {
                        return farmingLuckBonus + EQUIPMENTS[item.id].farmingLuckBonus
                    } else {
                        return farmingLuckBonus
                    }
                }, 0),

        fishingLuck: state.gameState.player.stats.fishingLuck + state.gameState.player.setups[equippedSetup].reduce(
            (fishingLuckBonus, item) => {
                if (EQUIPMENTS[item.id].fishingLuckBonus) {
                    return fishingLuckBonus + EQUIPMENTS[item.id].fishingLuckBonus
                } else {
                    return fishingLuckBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (fishingLuckBonus, item) => {
                    if (EQUIPMENTS[item.id].fishingLuckBonus) {
                        return fishingLuckBonus + EQUIPMENTS[item.id].fishingLuckBonus
                    } else {
                        return fishingLuckBonus
                    }
                }, 0),

        critChance: state.gameState.player.stats.critChance + (SKILLS.combat.bonusPerLevel.critChanceBonus * getPlayerSkillLevel(state).combat) + state.gameState.player.setups[equippedSetup].reduce(
            (critChanceBonus, item) => {
                if (EQUIPMENTS[item.id].critChanceBonus) {
                    return critChanceBonus + EQUIPMENTS[item.id].critChanceBonus
                } else {
                    return critChanceBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (critChanceBonus, item) => {
                    if (EQUIPMENTS[item.id].critChanceBonus) {
                        return critChanceBonus + EQUIPMENTS[item.id].critChanceBonus
                    } else {
                        return critChanceBonus
                    }
                }, 0),

        critDamageMultiplier: state.gameState.player.stats.critDamageMultiplier + (SKILLS.combat.bonusPerLevel.critDamageMultiplierBonus * getPlayerSkillLevel(state).combat) + state.gameState.player.setups[equippedSetup].reduce(
            (critDamageMultiplierBonus, item) => {
                if (EQUIPMENTS[item.id].critDamageMultiplierBonus) {
                    return critDamageMultiplierBonus + EQUIPMENTS[item.id].critDamageMultiplierBonus
                } else {
                    return critDamageMultiplierBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (critDamageMultiplierBonus, item) => {
                    if (EQUIPMENTS[item.id].critDamageMultiplierBonus) {
                        return critDamageMultiplierBonus + EQUIPMENTS[item.id].critDamageMultiplierBonus
                    } else {
                        return critDamageMultiplierBonus
                    }
                }, 0),

        moveSpeed: state.gameState.player.stats.moveSpeed + state.gameState.player.setups[equippedSetup].reduce(
            (moveSpeedBonus, item) => {
                if (EQUIPMENTS[item.id].moveSpeedBonus) {
                    return moveSpeedBonus + EQUIPMENTS[item.id].moveSpeedBonus
                } else {
                    return moveSpeedBonus
                }
            }, 0) + state.gameState.player.equippedItems.reduce(
                (moveSpeedBonus, item) => {
                    if (EQUIPMENTS[item.id].moveSpeedBonus) {
                        return moveSpeedBonus + EQUIPMENTS[item.id].moveSpeedBonus
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
        let equipment = EQUIPMENTS[equipmentBonus.id]

        // Milestone Bonuses

        if (equipment.specialEffect && equipment.specialEffect === "bonusPerMilestone") {
            let bonusLevels = Math.floor(state.gameState.milestoneAmounts[equipment.specialEffectBonus.milestoneType][equipment.specialEffectBonus.milestoneSubtype] / equipment.specialEffectBonus.amount)

            if (bonusLevels > equipment.specialEffectBonus.bonusCap) {
                bonusLevels = equipment.specialEffectBonus.bonusCap
            }

            Object.entries(equipment.specialEffectBonus.bonusPerLevel).forEach(stat => {
                equippedPlayer[stat[0]] += (stat[1] * bonusLevels)
            })
        }

        // Boss-fight Only Bonuses

        if (equipment.duringBossFightBonus && state.gameState.currentEnemy.type === 'boss') {
            Object.entries(equipment.duringBossFightBonus).forEach(stat => {
                equippedPlayer[stat[0]] += stat[1]
            })
        }
    });

    // Equipment Bonuses

    state.gameState.player.equippedItems.forEach(equipmentBonus => {
        let equipment = EQUIPMENTS[equipmentBonus.id]

        // Milestone Bonuses

        if (equipment.specialEffect && equipment.specialEffect === "bonusPerMilestone") {
            let bonusLevels = Math.floor(state.gameState.milestoneAmounts[equipment.specialEffectBonus.milestoneType][equipment.specialEffectBonus.milestoneSubtype] / equipment.specialEffectBonus.amount)

            if (bonusLevels > equipment.specialEffectBonus.bonusCap) {
                bonusLevels = equipment.specialEffectBonus.bonusCap
            }

            Object.entries(equipment.specialEffectBonus.bonusPerLevel).forEach(stat => {
                equippedPlayer[stat[0]] += (stat[1] * bonusLevels)
            })
        }

        // Boss-fight Only Bonuses

        if (equipment.duringBossFightBonus && state.gameState.currentEnemy.type === 'boss') {
            Object.entries(equipment.duringBossFightBonus).forEach(stat => {
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
        playerEquipments[EQUIPMENTS[item.id].slot] = EQUIPMENTS[item.id]
    });

    state.gameState.player.equippedItems.forEach(item => {
        playerEquipments[EQUIPMENTS[item.id].slot] = EQUIPMENTS[item.id]
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