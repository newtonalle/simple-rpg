import { ENEMIES, MATERIALS, ORE_VEINS, CROPS, SHOP, RECIPES, EQUIPMENTS, PLANTS, /*FISHING_LOOT_TABLE*/ } from './constants'

const clonedeep = require('lodash.clonedeep')

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

const COMBAT_LOG_LIMIT = 5


export const setState = (prevState, newState) => Object.assign(prevState, newState)

export const setGameState = (state, newGameState) => Object.assign(state.gameState, newGameState)

export const newEnemy = (state, index) => {

    // Resets Dodge Board

    state.gameState.currentDodgeBoard.playerPos = [0, 0]
    state.gameState.currentDodgeBoard.currentAttackStep = 0
    state.gameState.currentDodgeBoard.attackBoard = [[[]]]

    // Generates new enemy for the player to battle

    state.gameState.currentEnemy = clonedeep(ENEMIES[index])
    state.gameState.combatLog.unshift(`! Engaged combat with ${state.gameState.currentEnemy.label}!`)
}

export const mineOre = (state, { amount, oreId }) => {

    // Mines an ore
    if (state.gameState.player.skills.mining < state.gameState.player.skillLimits.mining) {
        state.gameState.player.skills.mining += ORE_VEINS[oreId].experience
    }
    state.gameState.materialAmounts[ORE_VEINS[oreId].dropId] += amount
    state.gameState.milestoneAmounts.mining[oreId]++

}

export const foragePlant = (state, { amount, plantId }) => {

    // Forages a plant
    if (state.gameState.player.skills.foraging < state.gameState.player.skillLimits.foraging) {
        state.gameState.player.skills.foraging += PLANTS[plantId].experience
    }
    state.gameState.materialAmounts[PLANTS[plantId].dropId] += amount
    state.gameState.milestoneAmounts.foraging[plantId]++

}

export const plantCrop = (state, cropId) => {

    // Plants a crop in a plot

    if (state.gameState.farming.cropPlots.length < state.gameState.farming.maxCropPlotSize && state.gameState.materialAmounts[CROPS[cropId].seedId] >= 1) {
        state.gameState.materialAmounts[CROPS[cropId].seedId]--
        state.gameState.farming.cropPlots.push({
            id: clonedeep(CROPS[cropId].id),
            growthTimer: clonedeep(CROPS[cropId].growthTime),
        })
    }
}

export const harvestCrop = (state, { amountBuff, cropId }) => {

    // Harvests a fully grown crop

    if (state.gameState.player.skills.farming < state.gameState.player.skillLimits.farming) {
        state.gameState.player.skills.farming += CROPS[cropId].experience
    }

    const amount = Math.floor(Math.random() * (CROPS[cropId].drop.amount[1] - CROPS[cropId].drop.amount[0])) + CROPS[cropId].drop.amount[0]

    state.gameState.materialAmounts[CROPS[cropId].drop.id] += amount + amountBuff
    state.gameState.milestoneAmounts.farming[cropId]++

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

    if (state.gameState.player.skills.fishing < state.gameState.player.skillLimits.fishing) {
        state.gameState.player.skills.fishing += experienceGain
    }

    state.gameState.player.currentFishingCooldown = state.gameState.player.baseFishingCooldown


}

export const clearFishingLog = (state) => {
    state.gameState.fishingLog = []
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
                state.gameState.combatLog.unshift(`EXTREME CRIT! ${state.gameState[target].label} recieved a powerful blow that dealt ${inflictedDamage} of damage!`)
                break;

            default:
                break;
        }
    } else {
        state.gameState.combatLog.unshift(`${state.gameState[target].label} was attacked for ${inflictedDamage} of damage!`)
    }

    // If the health of the target drops to zero or less remove the currentEnemy

    // If the enemy dies, drop the apropriate loot, account to the slayer milestone and add the xp to the player

    if (state.gameState.currentEnemy.stats.health <= 0) {
        state.gameState.combatLog.unshift(`${state.gameState.currentEnemy.label} was defeated!`)

        if (state.gameState.currentEnemy.drops.length > 0) {

            let recievedDrop = calculateRolledDrop(state.gameState.currentEnemy.drops)

            if (recievedDrop.drop.type === "material") {

                state.gameState.materialAmounts[recievedDrop.drop.id] += recievedDrop.amount
                state.gameState.combatLog.unshift(`Received ${recievedDrop.amount}x ${MATERIALS[recievedDrop.drop.id].label}!`)

            } else if (recievedDrop.drop.type === "equipment") {

                state.gameState.player.inventory.push(recievedDrop.drop.id)
                state.gameState.combatLog.unshift(`Received ${recievedDrop.amount}x ${EQUIPMENTS[recievedDrop.drop.id].label}!`)

            } else if (recievedDrop.drop.type === "coin") {
                state.gameState.player.coins += recievedDrop.amount
                state.gameState.combatLog.unshift(`Received ${recievedDrop.amount}x 🪙!`)
            }
        }

        if (state.gameState.player.skills.combat < state.gameState.player.skillLimits.combat) {
            state.gameState.player.skills.combat += state.gameState.currentEnemy.experience
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

    while (state.gameState.combatLog.length > COMBAT_LOG_LIMIT) {
        state.gameState.combatLog.splice(COMBAT_LOG_LIMIT, 1)
    }
}

export const clearCombatLog = (state) => {
    state.gameState.combatLog = []
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

export const craftItem = (state, recipeIndex) => {
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

    state.gameState.player.coins -= RECIPES[recipeIndex].goldCost



    if (RECIPES[recipeIndex].result.type === 'equipment') {
        state.gameState.player.inventory.push(RECIPES[recipeIndex].result.id)
    }

    if (RECIPES[recipeIndex].result.type === 'material') {
        state.gameState.materialAmounts[RECIPES[recipeIndex].result.id]++
    }

    state.gameState.materialAmounts.push()


}

export const buyItem = (state, itemIndex) => {
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

export const sellItem = (state, materialId) => {
    state.gameState.materialAmounts[materialId]--
    state.gameState.materialAmounts.push()
    state.gameState.player.coins += MATERIALS[materialId].price
}

export const removeEquipment = (state, index) => {
    state.gameState.player.inventory.splice(index, 1)
}

export const openTreasure = (state, materialId) => {
    state.gameState.materialAmounts[materialId]--
    state.gameState.materialAmounts.push()

    const diceRoll = Math.floor(Math.random() * 6)

    if (MATERIALS[materialId].prizeNumbers.findIndex((number) => number === diceRoll) > -1) {
        state.gameState.player.coins += MATERIALS[materialId].prize
    }
}

export const stepAttackBoard = (state) => {
    state.gameState.currentDodgeBoard.currentAttackStep++
    if (state.gameState.currentDodgeBoard.currentAttackStep > state.gameState.currentDodgeBoard.attackBoard[0][0].length) {
        let randomAttack = clonedeep(state.gameState.currentEnemy.attackPatterns[Math.floor(Math.random() * state.gameState.currentEnemy.attackPatterns.length)])
        state.gameState.currentDodgeBoard.attackBoard = randomAttack
        state.gameState.currentDodgeBoard.currentAttackStep = 0
    }
}

export const playerMove = (state, direction) => {
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
            if ((playerPos[1] + 1) <= 5) {
                state.gameState.currentDodgeBoard.playerPos = [playerPos[0], (playerPos[1] + 1)]
            }
            break;

        case 3: // Down
            if ((playerPos[0] + 1) <= 5) {
                state.gameState.currentDodgeBoard.playerPos = [(playerPos[0] + 1), playerPos[1]]
            }
            break;

        default:
            break;
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

    // Raise timeElapsed by 1

    state.gameState.timeElapsed++

}