import CRAFTABLE_PLACEHOLDERS from './constants'
const clonedeep = require('lodash.clonedeep')

export const setState = (prevState, newState) => Object.assign(prevState, newState)

export const newEnemy = (state, index) => {

    // Generates new enemy for the player to battle

    state.gameState.currentEnemy = clonedeep(state.gameState.enemies[index])
    state.gameState.combatLog.push(`! Engaged combat with ${state.gameState.currentEnemy.label}!`)
}

export const mineOre = (state, { index, amount }) => {

    // Mines an ore
    if (state.gameState.player.skills.mining < state.gameState.player.skillLimits.mining) {
        state.gameState.player.skills.mining += state.gameState.ores[index].experience
    }
    state.gameState.materials.mining[state.gameState.ores[index].drop].amount += amount
    state.gameState.milestones.mining[state.gameState.ores[index].name].amount++

}

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

            const dropTable = state.gameState.fishingLootTable[dropTier][diceRoll]

            while (state.gameState.fishingLog.length > 6) {
                state.gameState.fishingLog.splice(0, 1)
            }

            if (dropTable.type === 'fishing') {
                state.gameState.milestones.fishing[dropTable.drop].amount++
                state.gameState.fishingLog.push(`Fished ${dropTable.amount + fishingLuck} ${state.gameState.materials[dropTable.type][dropTable.drop].label}(s) - Rolled a ${diceRoll + 1}/Tier ${dropTier + 1}`)
                state.gameState.materials[dropTable.type][dropTable.drop].amount += (dropTable.amount + fishingLuck)
            } else {
                state.gameState.fishingLog.push(`Fished ${dropTable.amount} ${state.gameState.materials[dropTable.type][dropTable.drop].label}(s) - Rolled a ${diceRoll + 1}/Tier ${dropTier + 1}`)
                state.gameState.materials[dropTable.type][dropTable.drop].amount += dropTable.amount
            }

            experienceGain = state.gameState.materials[dropTable.type][dropTable.drop].experience

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

export const inflictDamage = (state, { inflictedDamage, target }) => {

    // Deal the amount of damage

    state.gameState[target].health -= inflictedDamage

    state.gameState.combatLog.push(`${state.gameState[target].label} was attacked for ${inflictedDamage} of damage!`)

    // If the health of the target drops to zero or less remove the currentEnemy

    // If the enemy dies, drop the apropriate loot, account to the slayer milestone and add the xp to the player

    if (state.gameState.currentEnemy.health <= 0) {
        state.gameState.combatLog.push(`${state.gameState.currentEnemy.label} was defeated!`)
        if (state.gameState.currentEnemy.drop) {
            state.gameState.materials.enemies[state.gameState.currentEnemy.drop.name].amount += state.gameState.currentEnemy.drop.amount
            state.gameState.combatLog.push(`Received ${state.gameState.currentEnemy.drop.amount}x ${state.gameState.materials.enemies[state.gameState.currentEnemy.drop.name].label}!`)
        }
        if (state.gameState.currentEnemy.coins.min) {
            const earnedCoins = Math.floor(Math.random() * (state.gameState.currentEnemy.coins.max - state.gameState.currentEnemy.coins.min + 1)) + state.gameState.currentEnemy.coins.min
            state.gameState.player.coins += earnedCoins
            state.gameState.combatLog.push(`Received ${earnedCoins} coins!`)
        } else {
            state.gameState.player.coins += state.gameState.currentEnemy.coins
            state.gameState.combatLog.push(`Received ${state.gameState.currentEnemy.coins} coins!`)
        }

        if (state.gameState.player.skills.combat < state.gameState.player.skillLimits.combat) {
            state.gameState.player.skills.combat += state.gameState.currentEnemy.experience
        }
        state.gameState.milestones.enemies[state.gameState.currentEnemy.name].amount++
        state.gameState.currentEnemy = {}
    }

    // If the player dies, take 10% of their coins and heal them back to life

    if (state.gameState.player.health <= 0) {
        state.gameState.combatLog.push(`${state.gameState.player.label} was defeated by ${state.gameState.currentEnemy.label} and lost 10% of your total coins!`)
        state.gameState.player.coins = Math.floor(state.gameState.player.coins / 100 * 90)
        state.gameState.player.health = state.gameState.player.maxHealth //MAXHEALTH
        state.gameState.currentEnemy = {}
    }

    while (state.gameState.combatLog.length > 5) {
        state.gameState.combatLog.splice(0, 1)
    }
}

export const clearCombatLog = (state) => {
    state.gameState.combatLog = []
}

export const healPlayer = (state, { healing, manaCost, maxHealth }) => {

    // Heals the player for some amount of health, costing mana

    state.gameState.combatLog.push(`${state.gameState.player.label} was healed for ${healing}!`)

    state.gameState.player.mana -= manaCost


    if (state.gameState.player.health + healing > maxHealth) {
        state.gameState.player.health = maxHealth
    } else {
        state.gameState.player.health += healing
    }
}

export const equipItem = (state, index) => {
    state.gameState.player.equippedItems.push(clonedeep(state.gameState.player.inventory[index]))
    state.gameState.player.inventory.splice(index, 1)
}

export const unequipItem = (state, index) => {
    state.gameState.player.inventory.push(clonedeep(state.gameState.player.equippedItems[index]))
    state.gameState.player.equippedItems.splice(index, 1)

}

export const craftItem = (state, recipeIndex) => {
    if (state.gameState.recipes[recipeIndex].materialCosts) {
        state.gameState.recipes[recipeIndex].materialCosts.forEach(materialCost => {
            state.gameState.materials[materialCost.material.type][materialCost.material.name].amount -= materialCost.amount
        });
    }

    if (state.gameState.recipes[recipeIndex].equipmentCosts) {
        state.gameState.recipes[recipeIndex].equipmentCosts.forEach(equipmentCost => {
            for (let costAmount = 0; costAmount < equipmentCost.amount; costAmount++) {
                state.gameState.player.inventory.splice(state.gameState.player.inventory.findIndex((equipmentFind) => equipmentFind === equipmentCost.name), 1)
            }
        });
    }

    state.gameState.player.coins -= state.gameState.recipes[recipeIndex].goldCost



    if (state.gameState.recipes[recipeIndex].result.type === 'equipment') {
        state.gameState.player.inventory.push(clonedeep(CRAFTABLE_PLACEHOLDERS()[state.gameState.recipes[recipeIndex].result.name]))
    }

    if (state.gameState.recipes[recipeIndex].result.type === 'material') {
        state.gameState.materials.specialCrafting[state.gameState.recipes[recipeIndex].result.name].amount++
    }


}

export const buyItem = (state, itemIndex) => {
    if (state.gameState.shop[itemIndex].materialPrices) {
        state.gameState.shop[itemIndex].materialPrices.forEach(materialPrice => {
            state.gameState.materials[materialPrice.material.type][materialPrice.material.name].amount -= materialPrice.amount
        });
    }

    if (state.gameState.shop[itemIndex].equipmentPrices) {
        state.gameState.shop[itemIndex].equipmentPrices.forEach(equipmentPrice => {
            for (let costAmount = 0; costAmount < equipmentPrice.amount; costAmount++) {
                state.gameState.player.inventory.splice(state.gameState.player.inventory.findIndex((equipmentFind) => equipmentFind === equipmentPrice.name), 1)
            }
        });
    }

    state.gameState.player.coins -= state.gameState.shop[itemIndex].goldPrice
    state.gameState.player.inventory.push(clonedeep(CRAFTABLE_PLACEHOLDERS()[state.gameState.shop[itemIndex].name]))



}

export const sellItem = (state, { item, type }) => {
    state.gameState.materials[type][item].amount--
    state.gameState.player.coins += state.gameState.materials[type][item].price
}

export const openTreasure = (state, treasure) => {
    state.gameState.materials.treasures[treasure].amount--

    const diceRoll = Math.floor(Math.random() * 6)

    if (state.gameState.materials.treasures[treasure].prizeNumbers.findIndex((number) => number === diceRoll) > -1) {
        state.gameState.player.coins += state.gameState.materials.treasures[treasure].prize
    }
}

export const updateGame = (state) => {

    // Take 1 from the cooldowns every second if it is not already 0


    if (state.gameState.player.currentAttackCooldown > 0) {
        state.gameState.player.currentAttackCooldown--
    }

    if (state.gameState.player.currentMiningCooldown > 0) {
        state.gameState.player.currentMiningCooldown--
    }

    if (state.gameState.player.currentFishingCooldown > 0) {
        state.gameState.player.currentFishingCooldown--
    }

    // Raise timeElapsed by 1

    state.gameState.timeElapsed++

}