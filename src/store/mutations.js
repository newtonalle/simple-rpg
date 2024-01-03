import {
    ENEMIES, MATERIALS, ORE_VEINS, CROPS, SHOP, RECIPES, EQUIPMENTS, PLANTS, SKILLS, ATTACK_PATTERNS, MILESTONES, /*FISHING_LOOT_TABLE*/
    COLLECTIONS
} from './constants'

const clonedeep = require('lodash.clonedeep')
const BASE_PASSIVE_COOLDOWN = 5

function calculateRolledDrop(possibleDrops) {

    let rollValue = Math.random()
    let calculatedDrop = {}

    possibleDrops.forEach(possibleDrop => {
        if (!calculatedDrop.drop) {
            if (rollValue <= possibleDrop.weigth) {
                calculatedDrop = possibleDrop
            } else {
                rollValue -= possibleDrop.weigth
            }

        }
    });

    return calculatedDrop

}

const LOG_LIMITS = {
    COMBAT: 5,
    MINING: 5,
    FORAGING: 5,
    FARMING: 5,
    FISHING: 5
}


export const setState = (prevState, newState) => {
    Object.assign(prevState, newState)
    location.reload()
}

export const setGameState = (state, newGameState) => Object.assign(state.gameState, newGameState)

export const newEnemy = (state, index) => {

    // Resets Dodge Board

    state.gameState.currentDodgeBoard.playerPos = [0, 0]
    state.gameState.currentDodgeBoard.currentAttackStep = 0
    state.gameState.currentDodgeBoard.moveCooldown = 0
    state.gameState.currentDodgeBoard.passiveCooldown = BASE_PASSIVE_COOLDOWN

    // Generates new enemy for the player to battle

    state.gameState.currentEnemy = clonedeep(ENEMIES[index])

    if (state.gameState.currentEnemy.type === 'boss') {
        state.gameState.currentDodgeBoard.attackBoard = clonedeep(ATTACK_PATTERNS[state.gameState.currentEnemy.bossStats.startingPatternId].pattern)
    } else {
        state.gameState.currentDodgeBoard.attackBoard = [[[]]]
    }


    state.gameState.combatLog.unshift(`! Engaged combat with ${state.gameState.currentEnemy.label}!`)

    while (state.gameState.combatLog.length > LOG_LIMITS.COMBAT) {
        state.gameState.combatLog.splice(LOG_LIMITS.COMBAT, 1)
    }
}

export const mineOre = (state, { amount, experienceAmount, oreId }) => {

    // Mines an ore

    state.gameState.miningLog.unshift(`Mined ${ORE_VEINS[oreId].label}!`)
    state.gameState.miningLog.unshift(`Received ${amount}x ${MATERIALS[ORE_VEINS[oreId].drop.id].label}`)

    if (state.gameState.player.skills.mining < SKILLS.mining.levelingXp[SKILLS.mining.levelingXp.length - 1]) {
        state.gameState.player.skills.mining += experienceAmount
        state.gameState.miningLog.unshift(`+${experienceAmount} Mining XP!`)
    }
    state.gameState.materialAmounts[ORE_VEINS[oreId].drop.id] += amount
    let collectionIndex = COLLECTIONS.findIndex((element) => element.itemId === ORE_VEINS[oreId].drop.id)
    if (collectionIndex >= 0) {
        state.gameState.collectionAmounts[collectionIndex] += amount
    }
    state.gameState.milestoneAmounts.mining[oreId]++

    while (state.gameState.miningLog.length > LOG_LIMITS.MINING) {
        state.gameState.miningLog.splice(LOG_LIMITS.MINING, 1)
    }
}

export const foragePlant = (state, { amount, experienceAmount, plantId }) => {

    // Forages a plant

    state.gameState.foragingLog.unshift(`Foraged ${PLANTS[plantId].label}!`)
    state.gameState.foragingLog.unshift(`Received ${amount}x ${MATERIALS[PLANTS[plantId].drop.id].label}`)

    if (state.gameState.player.skills.foraging < SKILLS.foraging.levelingXp[SKILLS.foraging.levelingXp.length - 1]) {
        state.gameState.player.skills.foraging += experienceAmount
        state.gameState.foragingLog.unshift(`+${experienceAmount} Foraging XP!`)
    }
    state.gameState.materialAmounts[PLANTS[plantId].drop.id] += amount
    let collectionIndex = COLLECTIONS.findIndex((element) => element.itemId === PLANTS[plantId].drop.id)
    if (collectionIndex >= 0) {
        state.gameState.collectionAmounts[collectionIndex] += amount
    }
    state.gameState.milestoneAmounts.foraging[plantId]++

    while (state.gameState.foragingLog.length > LOG_LIMITS.FORAGING) {
        state.gameState.foragingLog.splice(LOG_LIMITS.FORAGING, 1)
    }
}

export const plantCrop = (state, cropId) => {

    // Plants a crop in a plot

    if (state.gameState.farming.cropPlots.length < state.gameState.farming.maxCropPlotSize && state.gameState.materialAmounts[CROPS[cropId].seedId] >= 1) {
        state.gameState.materialAmounts[CROPS[cropId].seedId]--
        state.gameState.farming.cropPlots.push({
            id: clonedeep(CROPS[cropId].id),
            growthTimer: clonedeep(CROPS[cropId].growthTime),
        })

        state.gameState.farmingLog.unshift(`Planted a ${CROPS[cropId].label}`)

        while (state.gameState.farmingLog.length > LOG_LIMITS.FARMING) {
            state.gameState.farmingLog.splice(LOG_LIMITS.FARMING, 1)
        }
    }
}

export const harvestCrop = (state, { amountBuff, experienceAmount, cropId }) => {

    // Harvests a fully grown crop


    state.gameState.farmingLog.unshift(`Harvested ${CROPS[cropId].label}!`)
    state.gameState.farmingLog.unshift(`Received ${amount + amountBuff}x ${MATERIALS[CROPS[cropId].drop.id].label}`)

    if (state.gameState.player.skills.farming < SKILLS.farming.levelingXp[SKILLS.farming.levelingXp.length - 1]) {
        state.gameState.player.skills.farming += experienceAmount
        state.gameState.farmingLog.unshift(`+${experienceAmount} Farming XP!`)
    }

    const amount = Math.floor(Math.random() * (CROPS[cropId].drop.amount[1] - CROPS[cropId].drop.amount[0])) + CROPS[cropId].drop.amount[0]

    state.gameState.materialAmounts[CROPS[cropId].drop.id] += amount + amountBuff
    let collectionIndex = COLLECTIONS.findIndex((element) => element.itemId === CROPS[cropId].drop.id)
    if (collectionIndex >= 0) {
        state.gameState.collectionAmounts[collectionIndex] += amount
    }
    state.gameState.milestoneAmounts.farming[cropId]++

    while (state.gameState.farmingLog.length > LOG_LIMITS.FARMING) {
        state.gameState.farmingLog.splice(LOG_LIMITS.FARMING, 1)
    }
}

/* 
export const fish = (state, { fishingLuck, startingDropTier }) => {

    // Drop tier usually starts at 0 just for the sake of using arrays (witch start with in 0), the same for the dice number

    let dropTier = startingDropTier

    let experienceGain = 0

    for (; ;) {

        // Pseudo-random number between 0 and 5 that determines witch drop or tier upgrade will happen

        let diceRoll = Math.floor(Math.random() * 6)

        if (diceRoll === 5 && dropTier < state.gameState.player.maxFishingTier) {

            // Fish tier up

            dropTier++
        } else {

            // Correct drop for the current tier/and dice number in fishing

            const dropTable = FISHING_LOOT_TABLE[dropTier][diceRoll]

            while (state.gameState.fishingLog.length > 6) {
                state.gameState.fishingLog.splice(0, 1)
            }

            if (dropTable.type === 'fishing') {
                state.gameState.milestoneAmounts.fishing[dropTable.dropId]++
                state.gameState.fishingLog.push(`Fished ${dropTable.amount + fishingLuck} ${MATERIALS[dropTable.id].label}(s) - Rolled a ${diceRoll + 1}/Tier ${dropTier + 1}`)
                state.gameState.materialAmounts[dropTable.id].amount += (dropTable.amount + fishingLuck)
            } else {
                state.gameState.fishingLog.push(`Fished ${dropTable.amount} ${MATERIALS[dropTable.id].label}(s) - Rolled a ${diceRoll + 1}/Tier ${dropTier + 1}`)
                state.gameState.materialAmounts[dropTable.type][dropTable.drop].amount += dropTable.amount
            }

            experienceGain = MATERIALS[dropTable.id].experience

            break
        }
    }

    if (state.gameState.player.skills.fishing < SKILLS.fishing.levelingXp[SKILLS.fishing.levelingXp.length - 1]) {
        state.gameState.player.skills.fishing += state.gameState.currentEnemy.experience
    }

    state.gameState.player.currentFishingCooldown = state.gameState.player.baseFishingCooldown


}
*/

export const inflictDamage = (state, { inflictedDamage, target, crit: { wasCrit, critType }, playerStats }) => {

    // Deal the amount of damage

    state.gameState[target].stats.health -= inflictedDamage

    if (wasCrit) {
        switch (critType) {
            case "normal":
                state.gameState.combatLog.unshift(`CRIT! ${state.gameState[target].label} was heavily attacked for ${inflictedDamage} of damage!`)
                break;

            case "weak":
                state.gameState.combatLog.unshift(`WEAK CRIT! ${state.gameState[target].label} was attacked for ${inflictedDamage} of damage!`)
                break;

            case "strong":
                state.gameState.combatLog.unshift(`STRONG CRIT! ${state.gameState[target].label} was heavily attacked for ${inflictedDamage} of damage!`)
                break;

            case "extreme":
                state.gameState.combatLog.unshift(`EXTREME CRIT! ${state.gameState[target].label} received a powerful blow that dealt ${inflictedDamage} of damage!`)
                break;

            default:
                break;
        }
    } else {
        if (critType === "arrowMissed") {
            state.gameState.combatLog.unshift(`${state.gameState[target].label} dodged the arrow!`)
        } else {
            state.gameState.combatLog.unshift(`${state.gameState[target].label} was attacked for ${inflictedDamage} of damage!`)
        }
    }

    // If the health of the target drops to zero or less remove the currentEnemy

    // If the enemy dies, drop the apropriate loot, account to the slayer milestone and add the xp to the player

    if (state.gameState.currentEnemy.stats.health <= 0) {
        state.gameState.combatLog.unshift(`${state.gameState.currentEnemy.label} was defeated!`)

        if (state.gameState.currentEnemy.drops.length > 0) {

            let receivedDrop = calculateRolledDrop(state.gameState.currentEnemy.drops)

            if (receivedDrop.drop.type === "material") {

                state.gameState.materialAmounts[receivedDrop.drop.id] += receivedDrop.amount
                let collectionIndex = COLLECTIONS.findIndex((element) => element.itemId === receivedDrop.drop.id)
                if (collectionIndex >= 0) {
                    state.gameState.collectionAmounts[collectionIndex] += receivedDrop.amount
                }
                state.gameState.combatLog.unshift(`Received ${receivedDrop.amount}x ${MATERIALS[receivedDrop.drop.id].label}!`)

            } else if (receivedDrop.drop.type === "equipment") {

                state.gameState.player.inventory.push(receivedDrop.drop.id)
                state.gameState.combatLog.unshift(`Received ${receivedDrop.amount}x ${EQUIPMENTS[receivedDrop.drop.id].label}!`)

            } else if (receivedDrop.drop.type === "coin") {
                state.gameState.player.coins += receivedDrop.amount
                state.gameState.combatLog.unshift(`Received ${receivedDrop.amount}x 🪙!`)
            }
        }

        if (state.gameState.player.skills.combat < SKILLS.combat.levelingXp[SKILLS.combat.levelingXp.length - 1]) {
            state.gameState.player.skills.combat += state.gameState.currentEnemy.experience
            state.gameState.combatLog.unshift(`+${state.gameState.currentEnemy.experience} Combat XP!`)
        }

        state.gameState.milestoneAmounts.enemies[state.gameState.currentEnemy.id]++
        state.gameState.currentEnemy = {}
        state.gameState.player.stats.health = playerStats.maxHealth
        state.gameState.player.stats.mana = playerStats.maxMana
    }

    // If the player dies, take 10% of their coins and heal them back to life

    if (state.gameState.player.stats.health <= 0) {
        state.gameState.combatLog.unshift(`${state.gameState.player.label} was defeated by ${state.gameState.currentEnemy.label} and lost 10% of your total coins!`)
        state.gameState.player.coins = Math.floor(state.gameState.player.coins / 100 * 90)
        state.gameState.player.stats.health = playerStats.maxHealth
        state.gameState.player.stats.mana = playerStats.maxMana
        state.gameState.currentEnemy = {}
    }

    while (state.gameState.combatLog.length > LOG_LIMITS.COMBAT) {
        state.gameState.combatLog.splice(LOG_LIMITS.COMBAT, 1)
    }
}

export const clearLog = (state, log) => {
    state.gameState[log] = []
}

export const healPlayer = (state, { healing, manaCost, maxHealth }) => {

    // Heals the player for some amount of health, costing mana

    state.gameState.combatLog.unshift(`${state.gameState.player.label} was healed for ${healing}!`)

    state.gameState.player.stats.mana -= manaCost


    if (state.gameState.player.stats.health + healing > maxHealth) {
        state.gameState.player.stats.health = maxHealth
    } else {
        state.gameState.player.stats.health += healing
    }

    while (state.gameState.combatLog.length > LOG_LIMITS.COMBAT) {
        state.gameState.combatLog.splice(LOG_LIMITS.COMBAT, 1)
    }
}

export const equipItem = (state, { index, setupIndex }) => {
    state.gameState.player.setups[setupIndex].push(clonedeep(state.gameState.player.inventory[index]))
    state.gameState.player.inventory.splice(index, 1)
}

export const unequipItem = (state, { index, setupIndex }) => {
    state.gameState.player.inventory.push(clonedeep(state.gameState.player.setups[setupIndex][index]))
    state.gameState.player.setups[setupIndex].splice(index, 1)

}

export const chooseEquippedSetup = (state, setupIndex) => {
    state.gameState.player.equippedSetup = setupIndex

}

export const craftItem = (state, { recipeIndex, numberOfEquipment }) => {
    let canCraft = true;

    if (RECIPES[recipeIndex].materialCosts) {
        RECIPES[recipeIndex].materialCosts.forEach((materialCost) => {
            if (state.gameState.materialAmounts[materialCost.id] < materialCost.amount) {
                canCraft = false;
            }
        });
    }

    if (RECIPES[recipeIndex].equipmentCosts) {
        RECIPES[recipeIndex].equipmentCosts.forEach((equipmentCost) => {
            if (numberOfEquipment[equipmentCost.id] < equipmentCost.amount) {
                canCraft = false;
            }
        });
    }

    if (RECIPES[recipeIndex].goldCost > state.gameState.player.coins) {
        canCraft = false;
    }

    if (canCraft) {
        if (RECIPES[recipeIndex].materialCosts) {
            RECIPES[recipeIndex].materialCosts.forEach(materialCost => {
                state.gameState.materialAmounts[materialCost.id] -= materialCost.amount
            });
        }

        if (RECIPES[recipeIndex].equipmentCosts) {
            RECIPES[recipeIndex].equipmentCosts.forEach(equipmentCost => {
                for (let costAmount = 0; costAmount < equipmentCost.amount; costAmount++) {
                    state.gameState.player.inventory.splice(state.gameState.player.inventory.findIndex((equipmentFind) => equipmentFind === equipmentCost.id), 1)
                }
            });
        }

        if (RECIPES[recipeIndex].goldCost) {
            state.gameState.player.coins -= RECIPES[recipeIndex].goldCost
        }

        if (RECIPES[recipeIndex].result.type === 'equipment') {
            state.gameState.player.inventory.push(RECIPES[recipeIndex].result.id)
        }

        if (RECIPES[recipeIndex].result.type === 'material') {
            state.gameState.materialAmounts[RECIPES[recipeIndex].result.id]++
        }

        state.gameState.materialAmounts.push()
    }
}

export const buyItem = (state, { itemIndex, numberOfEquipment }) => {
    let canBuy = true;

    if (SHOP[itemIndex].materialPrices) {
        SHOP[itemIndex].materialPrices.forEach((materialPrice) => {
            if (state.gameState.materialAmounts[materialPrice.id] < materialPrice.amount) {
                canBuy = false;
            }
        });
    }

    if (SHOP[itemIndex].equipmentPrices) {
        SHOP[itemIndex].equipmentPrices.forEach((equipmentPrice) => {
            if (
                numberOfEquipment[equipmentPrice.id] < equipmentPrice.amount
            ) {
                canBuy = false;
            }
        });
    }

    if (SHOP[itemIndex].goldPrice > state.gameState.player.coins) {
        canBuy = false;
    }

    if (canBuy) {
        if (SHOP[itemIndex].materialPrices) {
            SHOP[itemIndex].materialPrices.forEach(materialPrice => {
                state.gameState.materialAmounts[materialPrice.id] -= materialPrice.amount
            });
        }

        if (SHOP[itemIndex].equipmentPrices) {
            SHOP[itemIndex].equipmentPrices.forEach(equipmentPrice => {
                for (let costAmount = 0; costAmount < equipmentPrice.amount; costAmount++) {
                    state.gameState.player.inventory.splice(state.gameState.player.inventory.findIndex((equipmentFind) => equipmentFind === equipmentPrice.id), 1)
                }
            });
        }

        state.gameState.player.coins -= SHOP[itemIndex].goldPrice
        state.gameState.player.inventory.push(SHOP[itemIndex].equipmentId)
    }
}

export const sellItem = (state, materialId) => {
    if (state.gameState.materialAmounts[materialId] > 0) {
        state.gameState.materialAmounts[materialId]--
        state.gameState.materialAmounts.push()
        state.gameState.player.coins += MATERIALS[materialId].price
    }
}

export const removeEquipment = (state, index) => {
    state.gameState.player.inventory.splice(index, 1)
}

export const openTreasure = (state, materialId) => {
    if (state.gameState.materialAmounts[materialId] > 0) {
        state.gameState.materialAmounts[materialId]--
        state.gameState.materialAmounts.push()

        const diceRoll = Math.floor(Math.random() * 6)

        if (MATERIALS[materialId].prizeNumbers.findIndex((number) => number === diceRoll) > -1) {
            state.gameState.player.coins += MATERIALS[materialId].prize
        }
    }
}

export const stepAttackBoard = (state) => {
    state.gameState.currentDodgeBoard.currentAttackStep++
    if (state.gameState.currentDodgeBoard.currentAttackStep > state.gameState.currentDodgeBoard.attackBoard[0][0].length) {
        let randomAttackId = clonedeep(state.gameState.currentEnemy.bossStats.attackPatternIds[Math.floor(Math.random() * state.gameState.currentEnemy.bossStats.attackPatternIds.length)])
        state.gameState.currentDodgeBoard.attackBoard = ATTACK_PATTERNS[randomAttackId].pattern
        state.gameState.currentDodgeBoard.currentAttackStep = 0
    }
}

export const playerMove = (state, { direction, moveSpeed }) => {
    if (state.gameState.currentDodgeBoard.moveCooldown <= 0) {
        const playerPos = state.gameState.currentDodgeBoard.playerPos

        switch (direction) {
            case 0: // Left
                if ((playerPos[1] - 1) >= 0) {
                    state.gameState.currentDodgeBoard.playerPos = [playerPos[0], (playerPos[1] - 1)]
                }
                break;

            case 1: // Up
                if ((playerPos[0] - 1) >= 0) {
                    state.gameState.currentDodgeBoard.playerPos = [(playerPos[0] - 1), playerPos[1]]
                }
                break;

            case 2: // Right
                if ((playerPos[1] + 1) < state.gameState.currentDodgeBoard.attackBoard.length) {
                    state.gameState.currentDodgeBoard.playerPos = [playerPos[0], (playerPos[1] + 1)]
                }
                break;

            case 3: // Down
                if ((playerPos[0] + 1) < state.gameState.currentDodgeBoard.attackBoard.length) {
                    state.gameState.currentDodgeBoard.playerPos = [(playerPos[0] + 1), playerPos[1]]
                }
                break;

            default:
                break;
        }

        if (moveSpeed < 10) {
            state.gameState.currentDodgeBoard.moveCooldown = 1 - (moveSpeed / 10)
        }
    }
}

export const resetPlayerStats = (state, { maxHealth, maxMana }) => {
    if (!state.gameState.currentEnemy.label) {
        state.gameState.player.stats.health = maxHealth
        state.gameState.player.stats.mana = maxMana
    }

    if (state.gameState.player.stats.health > maxHealth) {
        state.gameState.player.stats.health = maxHealth
    }

    if (state.gameState.player.stats.mana > maxMana) {
        state.gameState.player.stats.mana = maxMana
    }
}

export const updateGame = (state) => {


    state.gameState.milestoneAmounts.enemies.push()
    state.gameState.milestoneAmounts.mining.push()
    state.gameState.milestoneAmounts.foraging.push()
    state.gameState.milestoneAmounts.farming.push()
    state.gameState.milestoneAmounts.fishing.push()

    state.gameState.materialAmounts.push()

    state.gameState.enemyUnlocks.push()
    state.gameState.oreUnlocks.push()
    state.gameState.plantUnlocks.push()
    state.gameState.cropUnlocks.push()
    state.gameState.recipeUnlocks.push()
    state.gameState.shopUnlocks.push()

    // Take 1 from the cooldowns every second if it is not already 0


    if (state.gameState.player.currentAttackCooldown > 0) {
        state.gameState.player.currentAttackCooldown--
    }

    if (state.gameState.player.currentMiningCooldown > 0) {
        state.gameState.player.currentMiningCooldown--
    }

    if (state.gameState.player.currentForagingCooldown > 0) {
        state.gameState.player.currentForagingCooldown--
    }


    state.gameState.farming.cropPlots.forEach(crop => {
        if (crop.growthTimer > 0) {
            crop.growthTimer--
        }
    });

    if (state.gameState.player.currentFishingCooldown > 0) {
        state.gameState.player.currentFishingCooldown--
    }

    if (state.gameState.currentDodgeBoard.passiveCooldown > 0) {
        state.gameState.currentDodgeBoard.passiveCooldown--
    }

    // Raise timeElapsed by 1

    state.gameState.timeElapsed++

}

export const speedyUpdate = (state) => {
    state.gameState.currentDodgeBoard.moveCooldown -= 0.1
}

export const versionUpdate = (state) => {
    // Materials Amounts

    while (state.gameState.materialAmounts.length < MATERIALS.length) {
        state.gameState.materialAmounts.push(0)
    }

    while (state.gameState.materialAmounts.length > MATERIALS.length) {
        state.gameState.materialAmounts.pop()
    }

    // Milestone Amounts

    Object.keys(MILESTONES).forEach((milestoneType) => {
        while (state.gameState.milestoneAmounts[milestoneType].length < MILESTONES[milestoneType].length) {
            state.gameState.milestoneAmounts[milestoneType].push(0)
        }

        while (state.gameState.milestoneAmounts[milestoneType].length > MILESTONES[milestoneType].length) {
            state.gameState.milestoneAmounts[milestoneType].pop()
        }
    });

    // Collections Amounts

    while (state.gameState.collectionAmounts.length < COLLECTIONS.length) {
        state.gameState.collectionAmounts.push(0)
    }

    while (state.gameState.collectionAmounts.length > COLLECTIONS.length) {
        state.gameState.collectionAmounts.pop()
    }

    // Enemy Unlocks

    while (state.gameState.enemyUnlocks.length < ENEMIES.length) {
        state.gameState.enemyUnlocks.push(false)
    }

    while (state.gameState.enemyUnlocks.length > ENEMIES.length) {
        state.gameState.enemyUnlocks.pop()
    }

    // Ore Unlocks

    while (state.gameState.oreUnlocks.length < ORE_VEINS.length) {
        state.gameState.oreUnlocks.push(false)
    }

    while (state.gameState.oreUnlocks.length > ORE_VEINS.length) {
        state.gameState.oreUnlocks.pop()
    }

    // Plant Unlocks

    while (state.gameState.plantUnlocks.length < PLANTS.length) {
        state.gameState.plantUnlocks.push(false)
    }

    while (state.gameState.plantUnlocks.length > PLANTS.length) {
        state.gameState.plantUnlocks.pop()
    }

    // Crop Unlocks

    while (state.gameState.cropUnlocks.length < CROPS.length) {
        state.gameState.cropUnlocks.push(false)
    }

    while (state.gameState.cropUnlocks.length > CROPS.length) {
        state.gameState.cropUnlocks.pop()
    }

    // Recipe Unlocks

    while (state.gameState.recipeUnlocks.length < RECIPES.length) {
        state.gameState.recipeUnlocks.push(false)
    }

    while (state.gameState.recipeUnlocks.length > RECIPES.length) {
        state.gameState.recipeUnlocks.pop()
    }

    // Shop Unlocks

    while (state.gameState.shopUnlocks.length < SHOP.length) {
        state.gameState.shopUnlocks.push(false)
    }

    while (state.gameState.shopUnlocks.length > SHOP.length) {
        state.gameState.shopUnlocks.pop()
    }
}

export const debugGiveXp = (state, { type, amount }) => {
    state.gameState.player.skills[type] += amount
}

export const debugGiveCoins = (state, amount) => {
    state.gameState.player.coins += amount
}

export const debugGiveItemById = (state, itemId) => {
    state.gameState.player.inventory.push(itemId)
}

export const debugGiveMaterialById = (state, { materialId, materialsAmount }) => {
    state.gameState.materialAmounts[materialId] += materialsAmount
    let collectionIndex = COLLECTIONS.findIndex((element) => element.itemId === materialId)
    if (collectionIndex >= 0) {
        state.gameState.collectionAmounts[collectionIndex] += materialsAmount
    }
}