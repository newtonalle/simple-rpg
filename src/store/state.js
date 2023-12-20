export default () => ({
    gameState: {
        timeElapsed: 0,

        player: {
            label: 'Hero',
            coins: 0,
            stats: {
                maxHealth: 10,
                health: 10,
                maxMana: 10,
                mana: 10,
                defense: 0,
                strength: 1,
                attackSpeed: 0,
                miningLuck: 0,
                miningSpeed: 0,
                foragingLuck: 0,
                foragingSpeed: 0,
                farmingLuck: 0,
                fishingLuck: 0,
                maxFishingTier: 4,
                critChance: 10,
                critDamageMultiplier: 2,
            },

            skills: {
                combat: 0,

                mining: 0,

                foraging: 0,

                farming: 0,

                fishing: 0,
            },

            skillLimits: {
                combat: 333000,

                mining: 333000,

                foraging: 333000,

                farming: 333000,

                fishing: 333000,
            },

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
            // 0 - Empty
            // 1 - Attack
            // 2 - Warning
            attackBoard: [
                [[]]
            ]
        },

        enemyUnlocks: [
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ],

        oreUnlocks: [
            true,
            false,
            false,
            false,
            false,
            false
        ],

        plantUnlocks: [
            true,
            false,
            false,
            false,
            false,
            false
        ],

        cropUnlocks: [
            true,
            false,
            false,
        ],

        materialAmounts: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ],

        milestoneAmounts: {
            enemies: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
            ],

            mining: [
                0,
                0,
                0,
                0,
                0,
                0,
            ],

            foraging: [
                0,
                0,
                0,
                0,
                0,
                0,
            ],

            farming: [
                0,
                0,
                0,
            ],

            fishing: [
                0,
                0,
                0,
                0,
            ],
        },

        recipeUnlocks: [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ],

        shopUnlocks: [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
        ],

        combatLog: [],

        fishingLog: [],
    }
})