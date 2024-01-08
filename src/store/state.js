export default () => ({
    gameState: {
        timeElapsed: 0,

        player: {
            label: 'Hero',
            coins: 0,
            stats: {
                // Combat

                maxHealth: 10,
                health: 10,

                maxMana: 10,
                mana: 10,

                defense: 0,

                strength: 1,
                critChance: 10,
                critDamageMultiplier: 2,
                attackSpeed: 0,

                magicDamage: 0,

                aimingAccuracy: 0, // Percentage

                moveSpeed: 0,

                // Mining

                miningLuck: 0,
                miningSpeed: 0,

                // Foraging

                foragingLuck: 0,
                foragingSpeed: 0,

                // Farming

                farmingLuck: 0,

                // Fishing

                fishingLuck: 0,
                maxFishingTier: 4,
                temporaryStats: [],
            },

            skills: {
                combat: 0,

                mining: 0,

                foraging: 0,

                farming: 0,

                fishing: 0,
            },


            forgingCraftings: [],

            currentLocationId: 0,

            inventory: [],

            equippedItems: [],

            setups: [[], []],
            equippedSetup: 0,

            baseAttackCooldown: 0,
            baseMiningCooldown: 10,
            baseForagingCooldown: 15,
            baseFishingCooldown: 10,

            currentAttackCooldown: 0,
            currentMiningCooldown: 0,
            currentForagingCooldown: 0,
            currentFishingCooldown: 0,
        },

        farming: {
            cropPlots: [],
            maxCropPlotSize: 10,
        },

        currentEnemy: {},

        currentDodgeBoard: {
            playerPos: [0, 0], // Y - X
            currentAttackStep: 0,
            moveCooldown: 0,
            passiveActivateCooldown: 0,
            // 0 - Empty
            // 1 - Attack
            // 2 - Warning
            attackBoard: [
                [[]]
            ]
        },

        enemyUnlocks: [],

        oreUnlocks: [],

        plantUnlocks: [],

        cropUnlocks: [],

        materialAmounts: [],

        milestoneAmounts: {
            enemies: [],

            mining: [],

            foraging: [],

            farming: [],

            fishing: [],
        },

        collectionAmounts: [],

        recipeUnlocks: [],

        shopUnlocks: [],

        combatLog: [],

        miningLog: [],

        foragingLog: [],

        farmingLog: [],

        fishingLog: [],
    }
})