import {
    ENEMIES, MATERIALS, ORE_VEINS, CROPS, SHOP, RECIPES, EQUIPMENTS, PLANTS, SKILLS, ATTACK_PATTERNS, MILESTONES, FORGE, ARROWS, /*FISHING_LOOT_TABLE*/
    COLLECTIONS
} from './constants'

const clonedeep = require('lodash.clonedeep')
const BASE_PASSIVE_COOLDOWN = 10

function calculateRolledDrop(possibleDrops) {

    // Calculate rolled drops based on weigthed probabilities

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

export const setState = (prevState, newState) => {
    Object.assign(prevState, newState)
    location.reload()
}

export const setGameState = (state, newGameState) => Object.assign(state.gameState, newGameState)

export const changeLocation = (state, locationId) => {

    // Change the current location of the player

    state.gameState.player.currentLocationId = locationId
    location.reload()
}

export const newEnemy = (state, id) => {

    // Resets Dodge Board

    state.gameState.currentDodgeBoard.playerPos = [0, 0]
    state.gameState.currentDodgeBoard.currentAttackStep = 0
    state.gameState.currentDodgeBoard.moveCooldown = 0
    state.gameState.currentDodgeBoard.passiveCooldown = BASE_PASSIVE_COOLDOWN

    // Reset use timers

    state.gameState.player.inventory.forEach(item => {
        item.useTimer = 0
    });

    state.gameState.player.setups[0].forEach(item => {
        item.useTimer = 0
    });

    state.gameState.player.setups[1].forEach(item => {
        item.useTimer = 0
    });

    // Generates new enemy for the player to battle

    const newEnemy = ENEMIES.find((enemy) => enemy.id === id)
    state.gameState.currentEnemy = clonedeep(newEnemy)

    if (state.gameState.currentEnemy.type === 'boss') {

        // If the enemy is a boss, set the starting pattern

        const startingAttackPattern = ATTACK_PATTERNS.find((attackPattern) => attackPattern.id === state.gameState.currentEnemy.bossStats.startingPatternId).pattern
        state.gameState.currentDodgeBoard.attackBoard = clonedeep(startingAttackPattern)
    } else {
        state.gameState.currentDodgeBoard.attackBoard = [[[]]]
    }


    state.gameState.combatLog.unshift(`! Engaged combat with ${state.gameState.currentEnemy.label}!`)
}

export const mineOre = (state, { amount, experienceAmount, oreId }) => {

    // Find mined ore & dropped material

    const minedOreVein = ORE_VEINS.find((oreVein) => oreVein.id === oreId)
    const droppedMaterial = MATERIALS.find((material) => material.id === minedOreVein.drop.id)

    // Add events to mining log

    state.gameState.miningLog.unshift(`Mined ${minedOreVein.label}!`)
    state.gameState.miningLog.unshift(`Received ${amount}x ${droppedMaterial.label}`)

    // If the player XP isn't at its maximum, add the xp

    if (state.gameState.player.skills.mining < SKILLS.mining.levelingXp[SKILLS.mining.levelingXp.length - 1]) {
        state.gameState.player.skills.mining += experienceAmount
        state.gameState.miningLog.unshift(`+${experienceAmount} Mining XP!`)
    }


    state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === droppedMaterial.id).amount += amount

    // Find if the dropped material belongs to a collection

    let collectionIndex = COLLECTIONS.findIndex((collection) => collection.itemId === droppedMaterial.id)

    // If it does, add to the collection amounts tracker

    if (collectionIndex >= 0) {
        state.gameState.collectionAmounts.find((collectionAmount) => collectionAmount.id === COLLECTIONS[collectionIndex].id).amount += amount
    }

    // Add mining milestone of this ore

    let milestone = MILESTONES.mining.find((milestone) => milestone.oreId === oreId)
    state.gameState.milestoneAmounts.mining.find((milestoneAmount) => milestoneAmount.id === milestone.id).amount++

    // Update arrays

    state.gameState.materialAmounts.push()
    state.gameState.collectionAmounts.push()
    state.gameState.milestoneAmounts.mining.push()
}

export const foragePlant = (state, { amount, experienceAmount, plantId }) => {

    // Find foraged plant & dropped material

    const foragedPlant = PLANTS.find((plant) => plant.id === plantId)
    const droppedMaterial = MATERIALS.find((material) => material.id === foragedPlant.drop.id)

    // Add events to foraging log

    state.gameState.foragingLog.unshift(`Foraged ${foragedPlant.label}!`)
    state.gameState.foragingLog.unshift(`Received ${amount}x ${droppedMaterial.label}`)

    // If the player XP isn't at its maximum, add the xp

    if (state.gameState.player.skills.foraging < SKILLS.foraging.levelingXp[SKILLS.foraging.levelingXp.length - 1]) {
        state.gameState.player.skills.foraging += experienceAmount
        state.gameState.foragingLog.unshift(`+${experienceAmount} Foraging XP!`)
    }

    state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === droppedMaterial.id).amount += amount

    // Find if the dropped material belongs to a collection

    let collectionIndex = COLLECTIONS.findIndex((collection) => collection.itemId === droppedMaterial.id)

    // If it does, add to the collection amounts tracker

    if (collectionIndex >= 0) {
        state.gameState.collectionAmounts.find((collectionAmount) => collectionAmount.id === COLLECTIONS[collectionIndex].id).amount += amount
    }

    // Add foraging milestone of this plant

    let milestone = MILESTONES.foraging.find((milestone) => milestone.plantId === plantId)
    state.gameState.milestoneAmounts.foraging.find((milestoneAmount) => milestoneAmount.id === milestone.id).amount++

    // Update arrays

    state.gameState.materialAmounts.push()
    state.gameState.collectionAmounts.push()
    state.gameState.milestoneAmounts.foraging.push()
}

export const plantCrop = (state, cropId) => {

    // Find planted crop

    const plantedCrop = CROPS.find((crop) => crop.id === cropId)

    // Verify if there is enough space in the crop plot for the crop & if the player has the seeds to plant it

    if (state.gameState.farming.cropPlots.length < state.gameState.farming.maxCropPlotSize && state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === plantedCrop.seedId).amount >= 1) {

        // Spend 1 seed & add plant to crop plot

        state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === plantedCrop.seedId).amount--
        state.gameState.farming.cropPlots.push({
            id: clonedeep(plantedCrop.id),
            growthTimer: clonedeep(plantedCrop.growthTime),
        })

        // Add event to farming log

        state.gameState.farmingLog.unshift(`Planted a ${plantedCrop.label}`)
    }
}

export const harvestCrop = (state, { amountBuff, experienceAmount, cropId }) => {

    // Find harvested crop & dropped material

    const harvestedCrop = CROPS.find((crop) => crop.id === cropId)
    const droppedMaterial = MATERIALS.find((material) => material.id === harvestedCrop.drop.id)

    // Add events to farming log

    state.gameState.farmingLog.unshift(`Harvested ${harvestedCrop.label}!`)
    state.gameState.farmingLog.unshift(`Received ${amount + amountBuff}x ${droppedMaterial.label}`)

    // If the player XP isn't at its maximum, add the xp

    if (state.gameState.player.skills.farming < SKILLS.farming.levelingXp[SKILLS.farming.levelingXp.length - 1]) {
        state.gameState.player.skills.farming += experienceAmount
        state.gameState.farmingLog.unshift(`+${experienceAmount} Farming XP!`)
    }

    // Calculate amount using max & min values for the crop drop

    const amount = Math.floor(Math.random() * (harvestedCrop.drop.amount[1] - harvestedCrop.drop.amount[0])) + harvestedCrop.drop.amount[0]

    state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === droppedMaterial.id).amount += (amount + amountBuff)

    // Find if the dropped material belongs to a collection

    let collectionIndex = COLLECTIONS.findIndex((collection) => collection.itemId === droppedMaterial.id)

    // If it does, add to the collection amounts tracker

    if (collectionIndex >= 0) {
        state.gameState.collectionAmounts.find((collectionAmount) => collectionAmount.id === COLLECTIONS[collectionIndex].id).amount += (amount + amountBuff)
    }

    // Add farming milestone of this plant

    let milestone = MILESTONES.farming.find((milestone) => milestone.cropId === cropId)
    state.gameState.milestoneAmounts.farming.find((milestoneAmount) => milestoneAmount.id === milestone.id).amount++

    // Update arrays

    state.gameState.materialAmounts.push()
    state.gameState.collectionAmounts.push()
    state.gameState.milestoneAmounts.foraging.push()
}

export const turnPass = (state) => {
    // Lower Durations of temporary stats

    state.gameState.player.stats.temporaryStats.forEach((tempStat) => {
        tempStat.duration--
    });

    if (state.gameState.player.stats.temporaryStats.length > 0) {
        let loopActive = true

        while (loopActive) {

            // Verify if there is any temporary stats that ended

            let index = state.gameState.player.stats.temporaryStats.findIndex((stat) => stat.duration <= 0)

            if (index < 0) {
                // If there aren't, exit the loop

                loopActive = false
            } else {
                // If there are, remove those temp stats from the array

                state.gameState.player.stats.temporaryStats.splice(index, 1)
            }
        }
    }
}

export const inflictDamage = (state, { inflictedDamage, target, crit: { wasCrit, critType }, playerStats }) => {

    // Deal the amount of damage

    state.gameState[target].stats.health -= inflictedDamage

    // Show different event message in combat log for each diffent crit type/miss type

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

    // Verify if the current enemy is alive

    if (state.gameState.currentEnemy.stats.health <= 0) {

        // If it's dead

        // Add win event to combat log

        state.gameState.combatLog.unshift(`${state.gameState.currentEnemy.label} was defeated!`)

        // verify if the enemy has enemy drops

        if (state.gameState.currentEnemy.drops.length > 0) {

            // Use function to calculate the drop based on drop weights

            let receivedDrop = calculateRolledDrop(state.gameState.currentEnemy.drops)

            if (receivedDrop.drop.type === "material") {

                // If the drop is a material

                state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === receivedDrop.drop.id).amount += receivedDrop.amount

                // Resolve collection of dropped material (if there are any)

                let collectionIndex = COLLECTIONS.findIndex((element) => element.itemId === receivedDrop.drop.id)
                if (collectionIndex >= 0) {
                    state.gameState.collectionAmounts.find((collectionAmount) => collectionAmount.id === COLLECTIONS[collectionIndex].id).amount += receivedDrop.amount
                }

                // Update arrays

                state.gameState.materialAmounts.push()
                state.gameState.collectionAmounts.push()

                state.gameState.combatLog.unshift(`Received ${receivedDrop.amount}x ${MATERIALS[receivedDrop.drop.id].label}!`)

            } else if (receivedDrop.drop.type === "equipment") {

                // If the drop is an equipment

                state.gameState.player.inventory.push({ id: receivedDrop.drop.id, useTimer: -1 })
                state.gameState.combatLog.unshift(`Received ${receivedDrop.amount}x ${EQUIPMENTS[receivedDrop.drop.id].label}!`)

            } else if (receivedDrop.drop.type === "coin") {

                // If the drop is coins

                state.gameState.player.coins += receivedDrop.amount
                state.gameState.combatLog.unshift(`Received ${receivedDrop.amount}x 🪙!`)
            }
        }

        if (state.gameState.player.skills.combat < SKILLS.combat.levelingXp[SKILLS.combat.levelingXp.length - 1]) {
            state.gameState.player.skills.combat += state.gameState.currentEnemy.experience
            state.gameState.combatLog.unshift(`+${state.gameState.currentEnemy.experience} Combat XP!`)
        }

        let milestone = MILESTONES.enemies.find((milestone) => milestone.enemyId === state.gameState.currentEnemy.id)
        state.gameState.milestoneAmounts.enemies.find((milestoneAmount) => milestoneAmount.id === milestone.id).amount++

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
}

export const clearLog = (state, log) => {
    state.gameState[log] = []
}

export const healPlayer = (state, { healing, maxHealth }) => {

    // Heals the player for some amount of health

    state.gameState.combatLog.unshift(`${state.gameState.player.label} was healed for ${healing} ❤️!`)

    if (state.gameState.player.stats.health + healing > maxHealth) {
        state.gameState.player.stats.health = maxHealth
    } else {
        state.gameState.player.stats.health += healing
    }
}

export const temporaryBuffPlayer = (state, { stats, numberOfRounds }) => {

    // Temporary give a stat buff advantage to the player

    console.log(stats)

    state.gameState.player.stats.temporaryStats.push({ ...stats, duration: numberOfRounds })

    state.gameState.combatLog.unshift(`${state.gameState.player.label} was buffed for ${numberOfRounds} round(s)!`)
}

export const equipSetItem = (state, { index, setupIndex }) => {
    state.gameState.player.setups[setupIndex].push(clonedeep(state.gameState.player.inventory[index]))
    state.gameState.player.inventory.splice(index, 1)
}

export const unequipSetItem = (state, { index, setupIndex }) => {
    state.gameState.player.inventory.push(clonedeep(state.gameState.player.setups[setupIndex][index]))
    state.gameState.player.setups[setupIndex].splice(index, 1)
}

export const equipItem = (state, index) => {
    state.gameState.player.equippedItems.push(clonedeep(state.gameState.player.inventory[index]))
    state.gameState.player.inventory.splice(index, 1)
}

export const unequipItem = (state, index) => {
    state.gameState.player.inventory.push(clonedeep(state.gameState.player.equippedItems[index]))
    const unequipItem = EQUIPMENTS.find((equipment) => equipment.id === state.gameState.player.equippedItems[index].id)

    // If the item was a quiver, remove all arrows from quiver

    if (unequipItem.slot === 'quiver') {
        state.gameState.arrowAmounts.find((arrowAmount) => arrowAmount.id === state.gameState.player.quiverInventory.arrowId).amount += state.gameState.player.quiverInventory.equippedAmount
        state.gameState.arrowAmounts.push()
        state.gameState.player.quiverInventory.equippedAmount = 0
    }

    state.gameState.player.equippedItems.splice(index, 1)
}

export const equipArrow = (state, id) => {

    // Remove arrows from quiver

    state.gameState.arrowAmounts.find((arrowAmount) => arrowAmount.id === id).amount += state.gameState.player.quiverInventory.equippedAmount
    state.gameState.arrowAmounts.push()
    state.gameState.player.quiverInventory.equippedAmount = 0

    // Equip arrow type

    state.gameState.player.quiverInventory.arrowId = id
}

export const addArrowToQuiver = (state, { id, quiver }) => {

    // Verify if the player has arrows of that type to equip & if they have enough space in the quiver to equip the arrow

    if (state.gameState.arrowAmounts.find((arrowAmount) => arrowAmount.id === id).amount > 0 && (state.gameState.player.quiverInventory.equippedAmount + 1 <= quiver.maxEquippedArrows)) {
        state.gameState.arrowAmounts.find((arrowAmount) => arrowAmount.id === id).amount--
        state.gameState.arrowAmounts.push()
        state.gameState.player.quiverInventory.equippedAmount++
    }
}

export const chooseEquippedSetup = (state, setupIndex) => {
    state.gameState.player.equippedSetup = setupIndex
}

export const craftItem = (state, { recipeId, numberOfEquipment }) => {
    let canCraft = true;

    // Find recipe item

    const recipeItem = RECIPES.find((recipe) => recipe.id === recipeId)

    // Verify if the player has enough item/equipment/gold to craft this item

    if (recipeItem.materialCosts) {
        recipeItem.materialCosts.forEach((materialCost) => {
            if (state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === materialCost.id).amount < materialCost.amount) {
                canCraft = false;
            }
        });
    }

    if (recipeItem.equipmentCosts) {
        recipeItem.equipmentCosts.forEach((equipmentCost) => {
            if (numberOfEquipment.find((equipmentAmount) => equipmentAmount.id === equipmentCost.id).amount < equipmentCost.amount) {
                canCraft = false;
            }
        });
    }

    if (recipeItem.goldCost > state.gameState.player.coins) {
        canCraft = false;
    }

    if (canCraft) {

        // If the player can craft this item

        // Spend materials/equipments/gold based on the respective costs

        if (recipeItem.materialCosts) {
            recipeItem.materialCosts.forEach(materialCost => {
                state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === materialCost.id).amount -= materialCost.amount
            });
        }

        if (recipeItem.equipmentCosts) {
            recipeItem.equipmentCosts.forEach(equipmentCost => {
                for (let costAmount = 0; costAmount < equipmentCost.amount; costAmount++) {
                    state.gameState.player.inventory.splice(state.gameState.player.inventory.findIndex((equipmentFind) => equipmentFind.id === equipmentCost.id), 1)
                }
            });
        }

        if (recipeItem.goldCost) {
            state.gameState.player.coins -= recipeItem.goldCost
        }

        // Add resulting item based on result type

        if (recipeItem.result.type === 'equipment') {
            for (let amount = 0; amount < recipeItem.result.amount; amount++) {
                state.gameState.player.inventory.push({ id: recipeItem.result.id, useTimer: -1 })
            }
        }

        if (recipeItem.result.type === 'material') {
            state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === recipeItem.result.id).amount += recipeItem.result.amount
            let collectionIndex = COLLECTIONS.findIndex((element) => element.itemId === recipeItem.result.id)
            if (collectionIndex >= 0) {
                state.gameState.collectionAmounts.find((collectionAmount) => collectionAmount.id === COLLECTIONS[collectionIndex].id).amount += recipeItem.result.amount
            }
            state.gameState.collectionAmounts.push()
        }

        if (recipeItem.result.type === 'arrow') {
            state.gameState.arrowAmounts.find((arrowAmount) => arrowAmount.id === recipeItem.result.id).amount += recipeItem.result.amount
        }

        // Update arrays

        state.gameState.materialAmounts.push()
        state.gameState.arrowAmounts.push()
    }
}

export const buyItem = (state, { itemId, numberOfEquipment }) => {
    let canBuy = true;

    // Find shop item

    const shopItem = SHOP.find((item) => item.id === itemId)

    // Find if the player has enough materials/equipments/gold to buy this item

    if (shopItem.materialPrices) {
        shopItem.materialPrices.forEach((materialPrice) => {
            if (state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === materialPrice.id).amount < materialPrice.amount) {
                canBuy = false;
            }
        });
    }

    if (shopItem.equipmentPrices) {
        shopItem.equipmentPrices.forEach((equipmentPrice) => {
            if (
                numberOfEquipment.find((equipmentAmount) => equipmentAmount.id === equipmentPrice.id).amount < equipmentPrice.amount
            ) {
                canBuy = false;
            }
        });
    }

    if (shopItem.goldPrice > state.gameState.player.coins) {
        canBuy = false;
    }

    if (canBuy) {
        // If the player can buy this item

        // Spend materials/equipments/gold based on the respective prices

        if (shopItem.materialPrices) {
            shopItem.materialPrices.forEach(materialPrice => {
                state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === materialPrice.id).amount -= materialPrice.amount
            });
        }

        if (shopItem.equipmentPrices) {
            shopItem.equipmentPrices.forEach(equipmentPrice => {
                for (let priceAmount = 0; priceAmount < equipmentPrice.amount; priceAmount++) {
                    state.gameState.player.inventory.splice(state.gameState.player.inventory.findIndex((equipmentFind) => equipmentFind.id === equipmentPrice.id), 1)
                }
            });
        }

        if (shopItem.goldPrice) {
            state.gameState.player.coins -= shopItem.goldPrice
        }

        // Add result item based on result type

        if (shopItem.result.type === 'equipment') {
            for (let amount = 0; amount < shopItem.result.amount; amount++) {
                state.gameState.player.inventory.push({ id: shopItem.result.id, useTimer: -1 })
            }
        }

        if (shopItem.result.type === 'material') {
            state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === shopItem.result.id).amount += shopItem.result.amount
            let collectionIndex = COLLECTIONS.findIndex((element) => element.itemId === shopItem.result.id)
            if (collectionIndex >= 0) {
                state.gameState.collectionAmounts.find((collectionAmount) => collectionAmount.id === COLLECTIONS[collectionIndex].id).amount += shopItem.result.amount
            }
            state.gameState.collectionAmounts.push()
        }

        if (shopItem.result.type === 'arrow') {
            state.gameState.arrowAmounts.find((arrowAmount) => arrowAmount.id === shopItem.result.id).amount += shopItem.result.amount
        }

        // Update arrays

        state.gameState.materialAmounts.push()
        state.gameState.arrowAmounts.push()
    }
}

export const forgeCraft = (state, { craftingId, numberOfEquipment }) => {
    let canCraft = true;

    // Find forge item

    const forgeItem = FORGE.find((crafting) => crafting.id === craftingId)

    // Find if player has enough materials/equipments/gold to craft item

    if (forgeItem.materialCosts) {
        forgeItem.materialCosts.forEach((materialCost) => {
            if (state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === materialCost.id).amount < materialCost.amount) {
                canCraft = false;
            }
        });
    }

    if (forgeItem.equipmentCosts) {
        forgeItem.equipmentCosts.forEach((equipmentCost) => {
            if (
                numberOfEquipment.find((equipmentAmount) => equipmentAmount.id === equipmentCost.id).amount < equipmentCost.amount
            ) {
                canCraft = false;
            }
        });
    }

    if (forgeItem.goldCost > state.gameState.player.coins) {
        canCraft = false;
    }

    if (canCraft) {

        // If the player can craft this item

        // Spend materials/equipments/gold based on the respective costs

        if (forgeItem.materialCosts) {
            forgeItem.materialCosts.forEach(materialCost => {
                state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === materialCost.id).amount -= materialCost.amount
            });
        }

        if (forgeItem.equipmentCosts) {
            forgeItem.equipmentCosts.forEach(equipmentCost => {
                for (let costAmount = 0; costAmount < equipmentCost.amount; costAmount++) {
                    state.gameState.player.inventory.splice(state.gameState.player.inventory.findIndex((equipmentFind) => equipmentFind.id === equipmentCost.id), 1)
                }
            });
        }

        if (forgeItem.goldCost) {
            state.gameState.player.coins -= forgeItem.goldCost
        }

        // Add crafting to forge crafting list

        let crafting = {
            result: forgeItem.result,
            timer: forgeItem.baseForgingTime,
        }

        state.gameState.player.forgingCraftings.push(clonedeep(crafting))

        // Update arrays

        state.gameState.materialAmounts.push()
    }
}

export const collectForge = (state, index) => {
    let crafting = state.gameState.player.forgingCraftings[index]

    // Verify if the crafting is done

    if (crafting.timer <= 0) {

        // If it is, give result item based on the result type

        if (crafting.result.type === 'material') {
            state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === crafting.result.id).amount += crafting.result.amount
            let collectionIndex = COLLECTIONS.findIndex((element) => element.itemId === crafting.result.id)
            if (collectionIndex >= 0) {
                state.gameState.collectionAmounts.find((collectionAmount) => collectionAmount.id === COLLECTIONS[collectionIndex].id).amount += crafting.result.amount
            }
            state.gameState.collectionAmounts.push()
            state.gameState.materialAmounts.push()
        }

        if (crafting.result.type === 'equipment') {
            for (let amount = 0; amount < crafting.result.amount; amount++) {
                state.gameState.player.inventory.push({ id: clonedeep(crafting.result.id), useTimer: -1 })
            }
        }
    }

    // Remove crafting from forge crafting list

    state.gameState.player.forgingCraftings.splice(index, 1)
}

export const sellItem = (state, materialId) => {
    if (state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === materialId).amount > 0) {
        state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === materialId).amount--
        state.gameState.materialAmounts.push()
        state.gameState.player.coins += MATERIALS.find((material) => material.id === materialId).price
    }
}

export const removeEquipment = (state, index) => {
    state.gameState.player.inventory.splice(index, 1)
}

/* export const openTreasure = (state, materialId) => {
    if (state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === materialId).amount > 0) {
        state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === materialId).amount--
        state.gameState.materialAmounts.push()

        const diceRoll = Math.floor(Math.random() * 6)
        const treasure = MATERIALS.find((material) => material.id === materialId)

        if (treasure.prizeNumbers.findIndex((number) => number === diceRoll) > -1) {
            state.gameState.player.coins += treasure.prize
        }
    }
} */

export const stepAttackBoard = (state) => {
    state.gameState.currentDodgeBoard.currentAttackStep++

    if (state.gameState.currentDodgeBoard.currentAttackStep > state.gameState.currentDodgeBoard.attackBoard[0][0].length) {

        // If the current attack in the board is over, set it to another random attack from the current boss

        const randomAttackId = clonedeep(state.gameState.currentEnemy.bossStats.attackPatternIds[Math.floor(Math.random() * state.gameState.currentEnemy.bossStats.attackPatternIds.length)])
        const newAttackPattern = ATTACK_PATTERNS.find((attackPattern) => attackPattern.id === randomAttackId).pattern
        state.gameState.currentDodgeBoard.attackBoard = newAttackPattern
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

            // Formula for calculation cooldown after moving

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

export const changeInBossScreenStatus = (state, inBossScreenStatus) => {
    state.gameState.player.inBossScreen = inBossScreenStatus
}

export const updateGame = (state) => {

    // Precaution update to all arrays

    state.gameState.milestoneAmounts.enemies.push()
    state.gameState.milestoneAmounts.mining.push()
    state.gameState.milestoneAmounts.foraging.push()
    state.gameState.milestoneAmounts.farming.push()
    state.gameState.milestoneAmounts.fishing.push()

    //state.gameState.materialAmounts.push() ---------------------------------------?

    state.gameState.enemyUnlocks.push()
    state.gameState.oreUnlocks.push()
    state.gameState.plantUnlocks.push()
    state.gameState.cropUnlocks.push()
    state.gameState.recipeUnlocks.push()
    state.gameState.shopUnlocks.push()

    // Take 1 from the cooldowns every second if it is not already 0

    if (state.gameState.player.currentAttackCooldown > 0) {

        // If in a boss fight, only remove cooldown if you are in the boss screen

        if (state.gameState.currentEnemy.type === "boss") {
            if (state.gameState.player.inBossScreen) {
                state.gameState.player.currentAttackCooldown--
            }
        } else {
            state.gameState.player.currentAttackCooldown--
        }
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

    if (state.gameState.currentDodgeBoard.passiveCooldown > 0 && state.gameState.player.inBossScreen) {
        state.gameState.currentDodgeBoard.passiveCooldown--
    }

    // Forging

    state.gameState.player.forgingCraftings.forEach((crafting) => {
        if (crafting.timer > 0) {
            crafting.timer--
        }
    })

    // Use Timers

    // If in a boss fight, only remove cooldown if you are in the boss screen

    if (state.gameState.currentEnemy.type === "boss" && state.gameState.player.inBossScreen) {
        state.gameState.player.setups[0].forEach(item => {
            if (item.useTimer > 0) {
                item.useTimer--
            }
        });


        state.gameState.player.setups[1].forEach(item => {
            if (item.useTimer > 0) {
                item.useTimer--
            }
        });

        state.gameState.player.equippedItems.forEach(item => {
            if (item.useTimer > 0) {
                item.useTimer--
            }
        });
    }

    // Raise time elapsed by 1

    state.gameState.timeElapsed++

}

export const speedyUpdate = (state) => {
    state.gameState.currentDodgeBoard.moveCooldown -= 0.1
}

export const versionUpdate = (state) => {

    // This function serves as an automatic update to the game's systems, so that old players can still use their old saves in 
    // the new system, but currently, it might not fully work


    // Materials Amounts

    state.gameState.materialAmounts.forEach((materialAmount, index) => {
        if (materialAmount.id != 0 && !materialAmount.id) {
            state.gameState.materialAmounts[index] = {
                id: index,
                amount: state.gameState.materialAmounts[index]
            }
        }
    });

    MATERIALS.forEach(material => {
        let foundMaterialAmount = state.gameState.materialAmounts.findIndex((materialAmount) => materialAmount.id === material.id)
        if (foundMaterialAmount < 0) {
            state.gameState.materialAmounts.push({ id: material.id, amount: 0 })
        }
    });

    // Arrow Amounts

    state.gameState.arrowAmounts.forEach((arrowAmount, index) => {
        if (arrowAmount.id != 0 && !arrowAmount.id) {
            state.gameState.arrowAmounts[index] = {
                id: index,
                amount: state.gameState.arrowAmounts[index]
            }
        }
    });

    ARROWS.forEach(arrow => {
        let foundArrowAmount = state.gameState.arrowAmounts.findIndex((arrowAmount) => arrowAmount.id === arrow.id)
        if (foundArrowAmount < 0) {
            state.gameState.arrowAmounts.push({ id: arrow.id, amount: 0 })
        }
    });

    // Milestone Amounts

    Object.keys(MILESTONES).forEach((milestoneType) => {
        if (!MILESTONES[milestoneType]) {
            MILESTONES[milestoneType] = []
        }
        state.gameState.milestoneAmounts[milestoneType].forEach((milestoneAmount, index) => {
            if (milestoneAmount.id != 0 && !milestoneAmount.id) {
                state.gameState.milestoneAmounts[index] = {
                    id: index,
                    amount: state.gameState.milestoneAmounts[index]
                }
            }
        });

        MILESTONES[milestoneType].forEach(milestone => {
            let foundMilestoneAmount = state.gameState.milestoneAmounts[milestoneType].findIndex((milestoneAmount) => milestoneAmount.id === milestone.id)
            if (foundMilestoneAmount < 0) {
                state.gameState.milestoneAmounts[milestoneType].push({ id: milestone.id, amount: 0 })
            }
        });
    });

    // Collections Amounts

    state.gameState.collectionAmounts.forEach((collectionAmount, index) => {
        if (collectionAmount.id != 0 && !collectionAmount.id) {
            state.gameState.collectionAmounts[index] = {
                id: index,
                amount: state.gameState.collectionAmounts[index]
            }
        }
    });

    COLLECTIONS.forEach(collection => {
        let foundCollectionAmount = state.gameState.collectionAmounts.findIndex((collectionAmount) => collectionAmount.id === collection.id)
        if (foundCollectionAmount < 0) {
            state.gameState.collectionAmounts.push({ id: collection.id, amount: 0 })
        }
    });

    // Enemy Unlocks

    ENEMIES.forEach(enemy => {
        let foundEnemyUnlock = state.gameState.enemyUnlocks.findIndex((enemyUnlock) => enemyUnlock.id === enemy.id)
        if (foundEnemyUnlock < 0) {
            state.gameState.enemyUnlocks.push({ id: enemy.id, unlocked: false })
        }
    });

    // Ore Unlocks

    ORE_VEINS.forEach(ore => {
        let foundOreUnlock = state.gameState.oreUnlocks.findIndex((oreUnlock) => oreUnlock.id === ore.id)
        if (foundOreUnlock < 0) {
            state.gameState.oreUnlocks.push({ id: ore.id, unlocked: false })
        }
    });

    // Plant Unlocks

    PLANTS.forEach(plant => {
        let foundPlantUnlock = state.gameState.plantUnlocks.findIndex((plantUnlock) => plantUnlock.id === plant.id)
        if (foundPlantUnlock < 0) {
            state.gameState.plantUnlocks.push({ id: plant.id, unlocked: false })
        }
    });

    // Crop Unlocks

    CROPS.forEach(crop => {
        let foundCropUnlock = state.gameState.cropUnlocks.findIndex((cropUnlock) => cropUnlock.id === crop.id)
        if (foundCropUnlock < 0) {
            state.gameState.cropUnlocks.push({ id: crop.id, unlocked: false })
        }
    });

    // Recipe Unlocks

    RECIPES.forEach(recipe => {
        let foundRecipeUnlock = state.gameState.recipeUnlocks.findIndex((recipeUnlock) => recipeUnlock.id === recipe.id)
        if (foundRecipeUnlock < 0) {
            state.gameState.recipeUnlocks.push({ id: recipe.id, unlocked: false })
        }
    });


    // Shop Unlocks

    SHOP.forEach(shop => {
        let foundShopUnlock = state.gameState.shopUnlocks.findIndex((shopUnlock) => shopUnlock.id === shop.id)
        if (foundShopUnlock < 0) {
            state.gameState.shopUnlocks.push({ id: shop.id, unlocked: false })
        }
    });

    // Equipments in inventory convert to new model {id: NUMBER, useTimer: NUMBER}

    state.gameState.player.inventory.forEach(item => {
        if ((item.id != 0 && !item.id) || (item.useTimer != 0 && !item.useTimer)) {
            let itemId = clonedeep(item)
            item = { id: itemId, useTimer: -999 }
        }
    });
}

// DEBUG FUNCTIONS

export const debugGiveXp = (state, { type, amount }) => {
    state.gameState.player.skills[type] += amount
}

export const debugGiveCoins = (state, amount) => {
    state.gameState.player.coins += amount
}

export const debugGiveItemById = (state, itemId) => {
    state.gameState.player.inventory.push({ id: itemId, useTimer: -1 })
}

export const debugGiveMaterialById = (state, { materialId, materialsAmount }) => {
    state.gameState.materialAmounts.find((materialAmount) => materialAmount.id === materialId).amount += materialsAmount
    let collectionIndex = COLLECTIONS.findIndex((element) => element.itemId === materialId)
    if (collectionIndex >= 0) {
        state.gameState.collectionAmounts.find((collectionAmount) => collectionAmount.id === COLLECTIONS[collectionIndex].id).amount += materialsAmount
    }
    state.gameState.materialAmounts.push()
    state.gameState.collectionAmounts.push()
}

export const debugChangePlayerStatus = (state, { status, amount }) => {
    state.gameState.player.stats[status] = amount
}