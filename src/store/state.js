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
                fishingLuck: 0,
                maxFishingTier: 4,
                critChance: 10,
                critDamageMultiplier: 2,
            },

            skills: {
                combat: 0,

                mining: 0,

                fishing: 0,
            },

            skillLimits: {
                combat: 333000,

                mining: 333000,

                fishing: 333000,
            },

            inventory: [],

            equippedItems: [],

            baseAttackCooldown: 0,
            baseMiningCooldown: 10,
            baseFishingCooldown: 10,

            currentAttackCooldown: 0,
            currentMiningCooldown: 0,
            currentFishingCooldown: 0,
        },

        currentEnemy: {},

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

        skillBonuses: {
            combat: [{ strengthBonus: 0 }, { strengthBonus: 1 }, { strengthBonus: 1 }, { strengthBonus: 1 }, { strengthBonus: 1 }, { strengthBonus: 5 }, { strengthBonus: 5 }, { strengthBonus: 5 }, { strengthBonus: 5 }, { strengthBonus: 5 }, { strengthBonus: 10 }, { strengthBonus: 10 }, { strengthBonus: 10 }, { strengthBonus: 10 }, { strengthBonus: 10 }, { strengthBonus: 20 }, { strengthBonus: 20 }, { strengthBonus: 20 }, { strengthBonus: 20 }, { strengthBonus: 20 }, { strengthBonus: 20 }],
            mining: [{
                miningSpeedBonus: 0,
                miningLuckBonus: 0,
            },

            {
                miningSpeedBonus: 0,
                miningLuckBonus: 0,
            },

            {
                miningSpeedBonus: 0,
                miningLuckBonus: 0,
            },

            {
                miningSpeedBonus: 1,
                miningLuckBonus: 1,
            },

            {
                miningSpeedBonus: 1,
                miningLuckBonus: 1,
            },

            {
                miningSpeedBonus: 2,
                miningLuckBonus: 2,
            },

            {
                miningSpeedBonus: 2,
                miningLuckBonus: 2,
            },

            {
                miningSpeedBonus: 2,
                miningLuckBonus: 2,
            },

            {
                miningSpeedBonus: 3,
                miningLuckBonus: 5,
            },

            {
                miningSpeedBonus: 3,
                miningLuckBonus: 5,
            },

            {
                miningSpeedBonus: 3,
                miningLuckBonus: 5,
            },

            {
                miningSpeedBonus: 3,
                miningLuckBonus: 5,
            },

            {
                miningSpeedBonus: 4,
                miningLuckBonus: 8,
            },

            {
                miningSpeedBonus: 4,
                miningLuckBonus: 8,
            },

            {
                miningSpeedBonus: 4,
                miningLuckBonus: 8,
            },

            {
                miningSpeedBonus: 6,
                miningLuckBonus: 10,
            },

            {
                miningSpeedBonus: 6,
                miningLuckBonus: 10,
            },

            {
                miningSpeedBonus: 6,
                miningLuckBonus: 10,
            },

            {
                miningSpeedBonus: 6,
                miningLuckBonus: 10,
            },

            {
                miningSpeedBonus: 6,
                miningLuckBonus: 10,
            },

            {
                miningSpeedBonus: 6,
                miningLuckBonus: 10,
            },

            ],
            fishing: [{
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            {
                fishingLuckBonus: 0,
            },
            ],
        }
    }
})