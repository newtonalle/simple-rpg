export const EQUIPMENTS = [

    // Armors

    // Leather Set

    {
        id: 0,
        label: 'Leather Helmet',
        slot: 'helmet',
        slotLabel: 'Helmet',
        setLabel: 'Leather',
        healthBonus: 2,
    },

    {
        id: 1,
        label: 'Leather Chestplate',
        slot: 'chestplate',
        slotLabel: 'Chestplate',
        setLabel: 'Leather',
        healthBonus: 2,
    },

    {
        id: 2,
        label: 'Leather Leggings',
        slot: 'leggings',
        slotLabel: 'Leggings',
        setLabel: 'Leather',
        healthBonus: 2,
    },

    {
        id: 3,
        label: 'Leather Boots',
        slot: 'boots',
        slotLabel: 'Boots',
        setLabel: 'Leather',
        healthBonus: 2,
    },

    // Chainmail Armor

    {
        id: 4,
        label: 'Chainmail Helmet',
        slot: 'helmet',
        slotLabel: 'Helmet',
        set: 'chainmail',
        setLabel: 'Chainmail',
        healthBonus: 2,
        defenseBonus: 1,
        equipSkillRequirement: {
            combat: 1
        }
    },

    {
        id: 5,
        label: 'Chainmail Chestplate',
        slot: 'chestplate',
        slotLabel: 'Chestplate',
        set: 'chainmail',
        setLabel: 'Chainmail',
        healthBonus: 2,
        defenseBonus: 1,
        equipSkillRequirement: {
            combat: 1
        }
    },

    {
        id: 6,
        label: 'Chainmail Leggings',
        slot: 'leggings',
        slotLabel: 'Leggings',
        set: 'chainmail',
        setLabel: 'Chainmail',
        healthBonus: 2,
        defenseBonus: 1,
        equipSkillRequirement: {
            combat: 1
        }
    },

    {
        id: 7,
        label: 'Chainmail Boots',
        slot: 'boots',
        slotLabel: 'Boots',
        set: 'chainmail',
        setLabel: 'Chainmail',
        healthBonus: 2,
        defenseBonus: 1,
        equipSkillRequirement: {
            combat: 1
        }
    },

    // Iron Armor

    {
        id: 8,
        label: 'Iron Helmet',
        slot: 'helmet',
        slotLabel: 'Helmet',
        set: 'iron',
        setLabel: 'Iron',
        healthBonus: 3,
        defenseBonus: 1,
        equipSkillRequirement: {
            combat: 2
        }
    },

    {
        id: 9,
        label: 'Iron Chestplate',
        slot: 'chestplate',
        slotLabel: 'Chestplate',
        set: 'iron',
        setLabel: 'Iron',
        healthBonus: 3,
        defenseBonus: 1,
        equipSkillRequirement: {
            combat: 2
        }
    },

    {
        id: 10,
        label: 'Iron Leggings',
        slot: 'leggings',
        slotLabel: 'Leggings',
        set: 'iron',
        setLabel: 'Iron',
        healthBonus: 3,
        defenseBonus: 1,
        equipSkillRequirement: {
            combat: 2
        }
    },

    {
        id: 11,
        label: 'Iron Boots',
        slot: 'boots',
        slotLabel: 'Boots',
        set: 'iron',
        setLabel: 'Iron',
        healthBonus: 3,
        defenseBonus: 1,
        equipSkillRequirement: {
            combat: 2
        }
    },

    {
        id: 12,
        label: 'Wooden Stick',
        slot: 'weapon',
        slotLabel: 'Weapon',
        typeId: 0,
        strengthBonus: 1,
        critDamageMultiplierBonus: 1,
    },

    {
        id: 13,
        label: 'Stone Sword',
        slot: 'weapon',
        slotLabel: 'Weapon',
        typeId: 0,
        strengthBonus: 2,
        critChanceBonus: 10,
        critDamageMultiplierBonus: 0.5,
    },

    {
        id: 14,
        label: 'Iron Sword',
        slot: 'weapon',
        slotLabel: 'Weapon',
        typeId: 0,
        strengthBonus: 3,
        critChanceBonus: 20,
        critDamageMultiplierBonus: 0.3,
        equipSkillRequirement: {
            combat: 1
        }
    },

    {
        id: 15,
        label: 'Diamond Sword',
        slot: 'weapon',
        slotLabel: 'Weapon',
        typeId: 0,
        strengthBonus: 5,
        critChanceBonus: 20,
        critDamageMultiplierBonus: 0.3,
        equipSkillRequirement: {
            combat: 2
        }
    },

    {
        id: 16,
        label: 'Stone Waraxe',
        slot: 'weapon',
        slotLabel: 'Weapon',
        typeId: 0,
        strengthBonus: 5,
        critChanceBonus: 80,
        critDamageMultiplierBonus: 0.8,
    },

    {
        id: 17,
        label: 'Iron Waraxe',
        slot: 'weapon',
        slotLabel: 'Weapon',
        typeId: 0,
        strengthBonus: 8,
        critChanceBonus: 80,
        critDamageMultiplierBonus: 0.8,
        equipSkillRequirement: {
            combat: 1
        }
    },

    {
        id: 18,
        label: 'Iron Dagger',
        slot: 'weapon',
        slotLabel: 'Weapon',
        typeId: 0,
        strengthBonus: 3,
        critChanceBonus: 20,
        critDamageMultiplierBonus: 0.2,
        attackSpeedBonus: 2,
        equipSkillRequirement: {
            combat: 2
        }
    },


    {
        id: 19,
        label: "Oak Bow",
        slot: 'weapon',
        slotLabel: 'Weapon',
        typeId: 1,
        strengthBonus: 5,
        aimingAccuracyBonus: 50,
        critChanceBonus: 50,
        critDamageMultiplierBonus: 0.5,
        equipSkillRequirement: {
            combat: 1
        }
    },

    {
        id: 20,
        label: "Oak Shortbow",
        slot: 'weapon',
        slotLabel: 'Weapon',
        typeId: 1,
        strengthBonus: 7,
        aimingAccuracyBonus: 40,
        critChanceBonus: 50,
        critDamageMultiplierBonus: 0.5,
        attackSpeedBonus: 1,
        equipSkillRequirement: {
            combat: 1
        }
    },

    {
        id: 21,
        label: "Wooden Pickaxe",
        slot: 'pickaxe',
        slotLabel: 'Pickaxe',
        miningLuckBonus: 5,
    },

    {
        id: 22,
        label: "Stone Pickaxe",
        slot: 'pickaxe',
        slotLabel: 'Pickaxe',
        miningLuckBonus: 10,
        miningSpeedBonus: 1,
    },

    {
        id: 23,
        label: "Iron Pickaxe",
        slot: 'pickaxe',
        slotLabel: 'Pickaxe',
        miningLuckBonus: 20,
        miningSpeedBonus: 2,
    },

    {
        id: 24,
        label: "Golden Pickaxe",
        slot: 'pickaxe',
        slotLabel: 'Pickaxe',
        miningLuckBonus: 40,
        miningSpeedBonus: 4,
    },

    {
        id: 25,
        label: "Diamond Pickaxe",
        slot: 'pickaxe',
        slotLabel: 'Pickaxe',
        miningLuckBonus: 60,
        miningSpeedBonus: 5,
    },

    {
        id: 26,
        label: "Wooden Axe",
        slot: 'axe',
        slotLabel: 'Axe',
        foragingLuckBonus: 1,
        foragingSpeedBonus: 1,
    },

    {
        id: 27,
        label: "Stone Axe",
        slot: 'axe',
        slotLabel: 'Axe',
        foragingLuckBonus: 2,
        foragingSpeedBonus: 1,
        equipSkillRequirement: {
            foraging: 1
        }
    },

    {
        id: 28,
        label: "Iron Axe",
        slot: 'axe',
        slotLabel: 'Axe',
        foragingLuckBonus: 3,
        foragingSpeedBonus: 2,
        equipSkillRequirement: {
            foraging: 1
        }
    },
]

export const ENEMIES = [
    {
        id: 0,
        label: 'Worm',
        type: 'common',
        stats: {
            maxHealth: 5,
            health: 5,
            defense: 0,
            strength: 1,
            critChance: 10,
            critDamageMultiplier: 2,
            attackDelay: 3,
        },
        experience: 1,

        drops: [
            {
                weigth: 0.5,
                drop: { id: -1, type: "coin" },
                amount: 1,
            },
            {
                weigth: 0.5,
                drop: { id: 0, type: "material" },
                amount: 1,
            }
        ]
    },

    {
        id: 1,
        label: 'Bat',
        type: 'common',
        stats: {
            maxHealth: 8,
            health: 8,
            defense: 0,
            strength: 2,
            critChance: 10,
            critDamageMultiplier: 2,
            attackDelay: 3,
        },
        experience: 2,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 0
        },
        requiredMilestoneAmount: 25,
        drops: [
            {
                weigth: 1,
                drop: { id: -1, type: "coin" },
                amount: 2,
            },
        ]
    },

    {
        id: 2,
        label: 'Rat',
        type: 'common',
        stats: {
            maxHealth: 5,
            health: 5,
            defense: 2,
            strength: 3,
            critChance: 10,
            critDamageMultiplier: 2,
            attackDelay: 3,
        },
        experience: 3,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 1
        },
        requiredMilestoneAmount: 25,

        drops: [
            {
                weigth: 0.89,
                drop: { id: -1, type: "coin" },
                amount: 3,
            },
            {
                weigth: 0.10,
                drop: { id: 23, type: "material" },
                amount: 1,
            },
            {
                weigth: 0.01,
                drop: { id: 24, type: "material" },
                amount: 1,
            },
        ]
    },

    {
        id: 3,
        label: 'Spider',
        type: 'common',
        stats: {
            maxHealth: 20,
            health: 20,
            defense: 5,
            strength: 3,
            critChance: 10,
            critDamageMultiplier: 2,
            attackDelay: 3,
        },
        experience: 4,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 2
        },
        requiredMilestoneAmount: 25,
        drops: [
            {
                weigth: 0.9,
                drop: { id: -1, type: "coin" },
                amount: 4,
            },
            {
                weigth: 0.1,
                drop: { id: 1, type: "material" },
                amount: 1,
            }
        ]
    },

    {
        id: 4,
        label: 'Wolf',
        type: 'common',
        stats: {
            maxHealth: 30,
            health: 30,
            defense: 8,
            strength: 8,
            critChance: 20,
            critDamageMultiplier: 2,
            attackDelay: 3,
        },
        experience: 5,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 3
        },
        requiredMilestoneAmount: 25,
        drops: [
            {
                weigth: 0.9,
                drop: { id: -1, type: "coin" },
                amount: 6,
            },
            {
                weigth: 0.1,
                drop: { id: 2, type: "material" },
                amount: 1,
            }
        ]
    },

    {
        id: 5,
        label: 'Bear',
        type: 'common',
        stats: {
            maxHealth: 50,
            health: 50,
            defense: 10,
            strength: 15,
            critChance: 20,
            critDamageMultiplier: 2,
            attackDelay: 3,
        },
        experience: 8,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 4
        },
        requiredMilestoneAmount: 25,
        drops: [
            {
                weigth: 1,
                drop: { id: -1, type: "coin" },
                amount: 8,
            },
        ]
    },


    {
        id: 6,
        label: 'Giant Worm',
        type: 'common',
        stats: {
            maxHealth: 75,
            health: 75,
            defense: 12,
            strength: 20,
            critChance: 25,
            critDamageMultiplier: 2,
            attackDelay: 10,
        },
        experience: 10,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 5
        },
        requiredMilestoneAmount: 25,
        drops: [
            {
                weigth: 0.5,
                drop: { id: -1, type: "coin" },
                amount: 10,
            },
            {
                weigth: 0.5,
                drop: { id: 0, type: "material" },
                amount: 2,
            }
        ]
    },

    {
        id: 7,
        label: 'Giant Spider',
        type: 'common',
        stats: {
            maxHealth: 100,
            health: 100,
            defense: 15,
            strength: 25,
            critChance: 25,
            critDamageMultiplier: 2,
            attackDelay: 10,
        },
        experience: 15,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 6
        },
        requiredMilestoneAmount: 25,
        drops: [
            {
                weigth: 0.5,
                drop: { id: -1, type: "coin" },
                amount: 15,
            },
            {
                weigth: 0.5,
                drop: { id: 1, type: "material" },
                amount: 1,
            }
        ]
    },

    {
        id: 8,
        label: 'Giant Wolf',
        type: 'common',
        stats: {
            maxHealth: 150,
            health: 150,
            defense: 20,
            strength: 35,
            critChance: 25,
            critDamageMultiplier: 2,
            attackDelay: 10,
        },
        experience: 20,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 7
        },
        requiredMilestoneAmount: 25,
        drops: [
            {
                weigth: 0.5,
                drop: { id: -1, type: "coin" },
                amount: 20,
            },
            {
                weigth: 0.5,
                drop: { id: 2, type: "material" },
                amount: 1,
            }
        ]
    },

    {
        id: 9,
        label: 'Giant Bear',
        type: 'common',
        stats: {
            maxHealth: 250,
            health: 250,
            defense: 20,
            strength: 40,
            critChance: 30,
            critDamageMultiplier: 2,
            attackDelay: 10,
        },
        experience: 30,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 8
        },
        requiredMilestoneAmount: 25,
        drops: [
            {
                weigth: 1,
                drop: { id: -1, type: "coin" },
                amount: 30,
            },
        ]
    },

    {
        id: 10,
        label: 'Worm King',
        type: 'boss',
        bossStats: {
            patternStepDelay: 0.5,
            startingPatternId: 5,
            attackPatternIds: [0, 1, 2, 3, 4],
            gridAttackDamage: {
                type: "true-percentage",
                amount: 30
            }
        },
        stats: {
            maxHealth: 300,
            health: 300,
            defense: 25,
            strength: 20,
            critChance: 30,
            critDamageMultiplier: 2,
            attackDelay: 10,
        },
        experience: 50,

        drops: [
            {
                weigth: 0.5,
                drop: { id: -1, type: "coin" },
                amount: 50,
            },
            {
                weigth: 0.5,
                drop: { id: 0, type: "material" },
                amount: 25,
            }
        ]
    },
]

export const FISHING_LOOT_TABLE = [

    // Tier I

    [{
        dropId: 9,
        amount: 1,
    }, {
        dropId: 10,
        amount: 1,
    }, {
        dropId: 11,
        amount: 1,
    }, {
        dropId: 12,
        amount: 1,
    }, {
        dropId: 13,
        amount: 1,
    }],

    // Tier II

    [{
        dropId: 10,
        amount: 10,
    }, {
        dropId: 11,
        amount: 10,
    }, {
        dropId: 12,
        amount: 10,
    }, {
        dropId: 17,
        amount: 1,
    }, {
        dropId: 14,
        amount: 1,
    }],

    // Tier III

    [{
        dropId: 11,
        amount: 25,
    }, {
        dropId: 12,
        amount: 25,
    }, {
        dropId: 18,
        amount: 1,
    }, {
        dropId: 19,
        amount: 1,
    }, {
        dropId: 15,
        amount: 1,
    }],

    // Tier IV

    [{
        dropId: 12,
        amount: 30,
    }, {
        dropId: 18,
        amount: 2,
    }, {
        dropId: 12,
        amount: 40,
    }, {
        dropId: 19,
        amount: 1,
    }, {
        dropId: 16,
        amount: 1,
    }],

    // Tier V

    [{
        dropId: 12,
        amount: 50,
    }, {
        dropId: 19,
        amount: 2,
    }, {
        dropId: 20,
        amount: 1,
    }, {
        dropId: 12,
        amount: 75,
    }, {
        dropId: 12,
        amount: 100,
    },
    {
        dropId: 20,
        amount: 2,
    }],
]

export const MATERIALS = [
    {
        id: 0,
        label: 'Worm Heart',
        type: 'enemyDrop',
        symbol: '💜',
        price: 2
    },

    {
        id: 1,
        label: 'String',
        type: 'enemyDrop',
        symbol: '➰',
        price: 5
    },

    {
        id: 2,
        label: 'Wolf Tooth',
        type: 'enemyDrop',
        symbol: '🦷',
        price: 10
    },

    {
        id: 3,
        label: 'Stone',
        type: 'miningDrop',
        symbol: '🪨',
        price: 5
    },

    {
        id: 4,
        label: 'Coal',
        type: 'miningDrop',
        symbol: '🌑',
        price: 7
    },

    {
        id: 5,
        label: 'Iron',
        type: 'miningDrop',
        symbol: '🔩',
        price: 10
    },

    {
        id: 6,
        label: 'Gold',
        type: 'miningDrop',
        symbol: '🌕',
        price: 20
    },

    {
        id: 7,
        label: 'Diamond',
        type: 'miningDrop',
        symbol: '💎',
        price: 30
    },

    {
        id: 8,
        label: 'Mithril',
        type: 'miningDrop',
        symbol: '🟢',
        price: 50
    },

    {
        id: 9,
        label: 'Cod',
        type: 'fishingDrop',
        symbol: '🐟',
        price: 10,
        experience: 1,
    },

    {
        id: 10,
        label: 'Salmon',
        type: 'fishingDrop',
        symbol: '🐠',
        price: 20,
        experience: 3,
    },

    {
        id: 11,
        label: 'Bass',
        type: 'fishingDrop',
        symbol: '🐠',
        price: 30,
        experience: 5,
    },

    {
        id: 12,
        label: 'Carp',
        type: 'fishingDrop',
        symbol: '🐡',
        price: 50,
        experience: 10,
    },

    {
        id: 13,
        label: 'Whitetip Shark Tooth',
        type: 'specialFishingDrop',
        symbol: '🦷',
        price: 50,
        experience: 25,
    },

    {
        id: 14,
        label: 'Tiger Shark Tooth',
        type: 'specialFishingDrop',
        symbol: '🦷',
        price: 50,
        experience: 50,
    },

    {
        id: 15,
        label: 'Great White Shark Tooth',
        type: 'specialFishingDrop',
        symbol: '🦷',
        price: 50,
        experience: 100,
    },

    {
        id: 16,
        label: 'Megalodon Shark Tooth',
        type: 'specialFishingDrop',
        symbol: '🦷',
        price: 50,
        experience: 500,
    },

    {
        id: 17,
        label: 'Common Treasure',
        type: 'fishingTreasure',
        symbol: '📦',
        prize: 2000,
        prizeNumbers: [1, 2, 3, 4, 5], // In an actual dice -> 2, 3, 4, 5 and 6
        experience: 0,
    },

    {
        id: 18,
        label: 'Rare Treasure',
        type: 'fishingTreasure',
        symbol: '📦',
        prize: 4000,
        prizeNumbers: [2, 3, 4, 5], // In an actual dice -> 3, 4, 5 and 6
        experience: 0,
    },

    {
        id: 19,
        label: 'Epic Treasure',
        type: 'fishingTreasure',
        symbol: '📦',
        prize: 8000,
        prizeNumbers: [3, 4, 5], // In an actual dice -> 4, 5 and 6
        experience: 0,
    },

    {
        id: 20,
        label: 'Legendary Treasure',
        type: 'fishingTreasure',
        symbol: '📦',
        prize: 15000,
        prizeNumbers: [5], // In an actual dice -> 6
        experience: 0,
    },

    {
        id: 21,
        label: 'Enchanted String',
        type: '',
        symbol: '🧵',
    },

    {
        id: 22,
        label: 'Werewolf Tooth',
        type: '',
        symbol: '🦷',
    },

    {
        id: 23,
        label: 'Yellow Cheese',
        type: 'enemyDrop',
        symbol: '🧀',
        price: 50,
    },

    {
        id: 24,
        label: 'Green Cheese',
        type: 'enemyDrop',
        symbol: '🟩',
        price: 100,
    },

    {
        id: 25,
        label: 'Oak Log',
        type: 'foragingDrop',
        symbol: '🪵',
        price: 10,
    },

    {
        id: 26,
        label: 'Willow Log',
        type: 'foragingDrop',
        symbol: '🪵',
        price: 20,
    },

    {
        id: 27,
        label: 'Ash Log',
        type: 'foragingDrop',
        symbol: '🪵',
        price: 30,
    },

    {
        id: 28,
        label: 'Oak Stick',
        type: 'specialCrafting',
        symbol: '🪵',
    },

    {
        id: 29,
        label: 'Willow Stick',
        type: 'specialCrafting',
        symbol: '🪵',
    },

    {
        id: 30,
        label: 'Ash Stick',
        type: 'specialCrafting',
        symbol: '🪵',
    },

    {
        id: 31,
        label: 'Wheat Seed',
        type: 'farmingSeed',
        symbol: '🫘',
    },

    {
        id: 32,
        label: 'Carrot Seed',
        type: 'farmingSeed',
        symbol: '🫘',
    },

    {
        id: 33,
        label: 'Potato Sprout',
        type: 'farmingSeed',
        symbol: '🌱',
    },

    {
        id: 34,
        label: 'Wheat',
        type: 'farmingDrop',
        symbol: '🌾',
        price: 50,
    },

    {
        id: 35,
        label: 'Carrot',
        type: 'farmingDrop',
        symbol: '🥕',
        price: 98,
    },

    {
        id: 36,
        label: 'Potato',
        type: 'farmingDrop',
        symbol: '🥔',
        price: 100,
    },

    {
        id: 37,
        label: '',
        type: '',
        symbol: '',
    },

    {
        id: 38,
        label: 'Iron Ingot',
        type: 'specialCrafting',
        symbol: '⛓️',
    },

    {
        id: 39,
        label: 'Gold Ingot',
        type: 'specialCrafting',
        symbol: '⚜️',
    },

    {
        id: 40,
        label: 'Refined Oak Stick',
        type: 'specialCrafting',
        symbol: '🪵✨',
    },
]

export const MILESTONES = {
    enemies: [
        {
            id: 0,
        },

        {
            id: 1,
        },

        {
            id: 2,
        },

        {
            id: 3,
        },

        {
            id: 4,
        },

        {
            id: 5,
        },

        {
            id: 6,
        },

        {
            id: 7,
        },

        {
            id: 8,
        },

        {
            id: 9,
        },

        {
            id: 10,
        },
    ],

    mining: [

        {
            id: 0,
        },

        {
            id: 1,
        },

        {
            id: 2,
        },

        {
            id: 3,
        },

        {
            id: 4,
        },

    ],

    foraging: [

        {
            id: 0,
        },

        {
            id: 1,
        },

        {
            id: 2,
        },

        {
            id: 3,
        },

        {
            id: 4,
        },

        {
            id: 5,
        }

    ],

    farming: [

        {
            id: 0,
        },

        {
            id: 1,
        },

        {
            id: 2,
        },

    ],

    fishing: [

        {
            id: 0,
        },

        {
            id: 1,
        },

        {
            id: 2,
        },

        {
            id: 3,
        },

    ],
}

export const COLLECTIONS = [
    {
        id: 0,
        itemId: 0,
    },
    {
        id: 1,
        itemId: 1,
    },
    {
        id: 2,
        itemId: 2,
    },
    {
        id: 3,
        itemId: 23,
    },
]

export const ORE_VEINS = [
    {
        id: 0,
        label: 'Stone',
        drop: {
            id: 3,
            amount: 1
        },
        experience: 2,
        baseMiningCooldown: 10,
        minMiningCooldown: 1,
    },

    {
        id: 1,
        label: 'Coal',
        drop: {
            id: 4,
            amount: 1
        },
        experience: 4,
        baseMiningCooldown: 15,
        minMiningCooldown: 2,
        requiredSkill: {
            skill: 'mining',
            level: 1,
        },
    },

    {
        id: 2,
        label: 'Iron',
        drop: {
            id: 5,
            amount: 1
        },
        experience: 6,
        baseMiningCooldown: 20,
        minMiningCooldown: 4,
        requiredSkill: {
            skill: 'mining',
            level: 3,
        },
    },

    {
        id: 3,
        label: 'Gold',
        drop: {
            id: 6,
            amount: 1
        },
        experience: 10,
        baseMiningCooldown: 25,
        minMiningCooldown: 6,
        requiredSkill: {
            skill: 'mining',
            level: 5,
        },
    },

    {
        id: 4,
        label: 'Diamond',
        drop: {
            id: 7,
            amount: 1
        },
        experience: 25,
        baseMiningCooldown: 30,
        minMiningCooldown: 10,
        requiredSkill: {
            skill: 'mining',
            level: 7,
        },
    },
]

export const PLANTS = [
    {
        id: 0,
        label: 'Oak Tree',
        drop: {
            id: 25,
            amount: 1
        },
        experience: 1,
        baseForagingCooldown: 10,
        minForagingCooldown: 2,
    },

    {
        id: 1,
        label: 'Willow Tree',
        drop: {
            id: 26,
            amount: 1
        },
        experience: 2,
        baseForagingCooldown: 15,
        minForagingCooldown: 4,
        requiredSkill: {
            skill: 'foraging',
            level: 1,
        },
    },

    {
        id: 2,
        label: 'Ash Tree',
        drop: {
            id: 27,
            amount: 1
        },
        experience: 4,
        baseForagingCooldown: 20,
        minForagingCooldown: 5,
        requiredSkill: {
            skill: 'foraging',
            level: 3,
        },
    },
]

export const CROPS = [
    {
        id: 0,
        label: 'Wheat',
        seedLabel: 'Seed',
        growingIcon: '🌾',
        seedId: 31,
        growthTime: 10,
        drop: {
            id: 34,
            amount: [2, 7],
        },
        experience: 1,
    },

    {
        id: 1,
        label: 'Carrot',
        seedLabel: 'Seed',
        growingIcon: '🥕',
        seedId: 32,
        growthTime: 10,
        drop: {
            id: 35,
            amount: [1, 5],
        },
        experience: 2,
        requiredMilestoneType: {
            categoryType: 'farming',
            subcategoryType: 0
        },
        requiredMilestoneAmount: 25,
    },

    {
        id: 2,
        label: 'Potato',
        seedLabel: 'Sprout',
        growingIcon: '🥔',
        seedId: 33,
        growthTime: 10,
        drop: {
            id: 36,
            amount: [1, 3],
        },
        experience: 3,
        requiredMilestoneType: {
            categoryType: 'farming',
            subcategoryType: 1
        },
        requiredMilestoneAmount: 25,
    },
]

export const RECIPES = [

    // Chainmail Armor

    {
        id: 0,
        result: { id: 4, type: 'equipment' },
        materialCosts: [
            { id: 38, amount: 10 },
        ],
        requiredSkill: {
            skill: "combat",
            level: 1,
        }
    },

    {
        id: 1,
        result: { id: 5, type: 'equipment' },
        materialCosts: [
            { id: 38, amount: 10 },
        ],
        requiredSkill: {
            skill: "combat",
            level: 1,
        }
    },

    {
        id: 2,
        result: { id: 6, type: 'equipment' },
        materialCosts: [
            { id: 38, amount: 10 },
        ],
        requiredSkill: {
            skill: "combat",
            level: 1,
        }
    },

    {
        id: 3,
        result: { id: 7, type: 'equipment' },
        materialCosts: [
            { id: 38, amount: 10 },
        ],
        requiredSkill: {
            skill: "combat",
            level: 1,
        }
    },

    // Iron Armor

    {
        id: 4,
        result: { id: 8, type: 'equipment' },
        materialCosts: [
            { id: 38, amount: 20 },
        ],
        requiredSkill: {
            skill: "combat",
            level: 2,
        }
    },

    {
        id: 5,
        result: { id: 9, type: 'equipment' },
        materialCosts: [
            { id: 38, amount: 20 },
        ],
        requiredSkill: {
            skill: "combat",
            level: 2,
        }
    },

    {
        id: 6,
        result: { id: 10, type: 'equipment' },
        materialCosts: [
            { id: 38, amount: 20 },
        ],
        requiredSkill: {
            skill: "combat",
            level: 2,
        }
    },

    {
        id: 7,
        result: { id: 11, type: 'equipment' },
        materialCosts: [
            { id: 38, amount: 20 },
        ],
        requiredSkill: {
            skill: "combat",
            level: 2,
        }
    },

    {
        id: 8,
        result: { id: 12, type: 'equipment' },
        materialCosts: [
            { id: 28, amount: 10 },
        ],
        requiredCollection: {
            collectionId: 1,
            amount: 100,
        }
    },

    {
        id: 9,
        result: { id: 13, type: 'equipment' },
        materialCosts: [
            { id: 28, amount: 2 },
            { id: 3, amount: 5 },
        ],
    },

    {
        id: 10,
        result: { id: 14, type: 'equipment' },
        materialCosts: [
            { id: 28, amount: 2 },
            { id: 38, amount: 5 },
        ],
        requiredSkill: {
            skill: "combat",
            level: 1,
        }
    },

    {
        id: 11,
        result: { id: 15, type: 'equipment' },
        materialCosts: [
            { id: 28, amount: 2 },
            { id: 7, amount: 5 },
        ],
        requiredSkill: {
            skill: "combat",
            level: 2,
        }
    },

    {
        id: 12,
        result: { id: 16, type: 'equipment' },
        materialCosts: [
            { id: 28, amount: 2 },
            { id: 3, amount: 10 },
        ],
    },

    {
        id: 13,
        result: { id: 17, type: 'equipment' },
        materialCosts: [
            { id: 28, amount: 2 },
            { id: 38, amount: 10 },
        ],
        requiredSkill: {
            skill: "combat",
            level: 1,
        }
    },

    {
        id: 14,
        result: { id: 18, type: 'equipment' },
        materialCosts: [
            { id: 28, amount: 1 },
            { id: 38, amount: 5 },
        ],
        requiredSkill: {
            skill: "combat",
            level: 2,
        }
    },

    {
        id: 15,
        result: { id: 19, type: 'equipment' },
        materialCosts: [
            { id: 28, amount: 3 },
            { id: 1, amount: 5 },
        ],
        requiredSkill: {
            skill: "combat",
            level: 1,
        }
    },

    {
        id: 16,
        result: { id: 20, type: 'equipment' },
        materialCosts: [
            { id: 28, amount: 2 },
            { id: 1, amount: 10 },
        ],
        requiredSkill: {
            skill: "combat",
            level: 1,
        }
    },

    {
        id: 17,
        result: { id: 21, type: 'equipment' },
        materialCosts: [
            { id: 28, amount: 5 },
            { id: 25, amount: 5 },
        ],
    },

    {
        id: 18,
        result: { id: 22, type: 'equipment' },
        materialCosts: [
            { id: 28, amount: 5 },
            { id: 3, amount: 50 },
        ],
    },

    {
        id: 19,
        result: { id: 23, type: 'equipment' },
        materialCosts: [
            { id: 28, amount: 5 },
            { id: 38, amount: 25 },
        ],
    },

    {
        id: 20,
        result: { id: 24, type: 'equipment' },
        materialCosts: [
            { id: 28, amount: 5 },
            { id: 39, amount: 50 },
        ],
    },

    {
        id: 21,
        result: { id: 25, type: 'equipment' },
        materialCosts: [
            { id: 28, amount: 5 },
            { id: 7, amount: 1000 },
        ],
    },

    {
        id: 22,
        result: { id: 26, type: 'equipment' },
        materialCosts: [
            { id: 28, amount: 2 },
            { id: 25, amount: 5 },
        ],
    },

    {
        id: 23,
        result: { id: 27, type: 'equipment' },
        materialCosts: [
            { id: 28, amount: 2 },
            { id: 3, amount: 5 },
        ],
        requiredSkill: {
            skill: "foraging",
            level: 1,
        }
    },

    {
        id: 24,
        result: { id: 28, type: 'equipment' },
        materialCosts: [
            { id: 40, amount: 2 },
            { id: 38, amount: 5 },
        ],
        requiredSkill: {
            skill: "foraging",
            level: 1,
        }
    },

]

export const SHOP = [

    // Leather Armor

    {
        id: 0,
        equipmentId: 0,
        goldPrice: 50,
    },

    {
        id: 1,
        equipmentId: 1,
        goldPrice: 50,
    },

    {
        id: 2,
        equipmentId: 2,
        goldPrice: 50,
    },


    {
        id: 3,
        equipmentId: 3,
        goldPrice: 50,
    },

    // Chainmail Armor

    {
        id: 4,
        equipmentId: 4,
        goldPrice: 100,
        requiredSkill: {
            skill: 'combat',
            level: 1,
        }
    },

    {
        id: 5,
        equipmentId: 5,
        goldPrice: 100,
        requiredSkill: {
            skill: 'combat',
            level: 1,
        }
    },

    {
        id: 6,
        equipmentId: 6,
        goldPrice: 100,
        requiredSkill: {
            skill: 'combat',
            level: 1,
        }
    },


    {
        id: 7,
        equipmentId: 7,
        goldPrice: 100,
        requiredSkill: {
            skill: 'combat',
            level: 1,
        }
    },

    // Iron Armor

    {
        id: 8,
        equipmentId: 8,
        goldPrice: 250,
        requiredSkill: {
            skill: 'combat',
            level: 2,
        }
    },

    {
        id: 9,
        equipmentId: 9,
        goldPrice: 250,
        requiredSkill: {
            skill: 'combat',
            level: 2,
        }
    },

    {
        id: 10,
        equipmentId: 10,
        goldPrice: 250,
        requiredSkill: {
            skill: 'combat',
            level: 2,
        }
    },


    {
        id: 11,
        equipmentId: 11,
        goldPrice: 250,
        requiredSkill: {
            skill: 'combat',
            level: 2,
        }
    },

    {
        id: 12,
        equipmentId: 12,
        goldPrice: 10,
    },

    {
        id: 13,
        equipmentId: 13,
        goldPrice: 25,
    },

    {
        id: 14,
        equipmentId: 14,
        goldPrice: 100,
        requiredSkill: {
            skill: 'combat',
            level: 1,
        }
    },

    {
        id: 15,
        equipmentId: 15,
        goldPrice: 250,
        requiredSkill: {
            skill: 'combat',
            level: 2,
        }
    },

    {
        id: 16,
        equipmentId: 16,
        goldPrice: 100,
    },

    {
        id: 17,
        equipmentId: 17,
        goldPrice: 250,
        requiredSkill: {
            skill: 'combat',
            level: 1,
        }
    },

    {
        id: 18,
        equipmentId: 18,
        goldPrice: 250,
        requiredSkill: {
            skill: 'combat',
            level: 2,
        }
    },

    {
        id: 19,
        equipmentId: 19,
        goldPrice: 100,
        requiredSkill: {
            skill: 'combat',
            level: 1,
        }
    },

    {
        id: 20,
        equipmentId: 19,
        goldPrice: 250,
        requiredSkill: {
            skill: 'combat',
            level: 1,
        }
    },

    {
        id: 21,
        equipmentId: 22,
        goldPrice: 100,
    },

    {
        id: 22,
        equipmentId: 26,
        goldPrice: 25,
    },

    {
        id: 23,
        equipmentId: 27,
        goldPrice: 100,
        requiredSkill: {
            skill: 'foraging',
            level: 1,
        }
    },

    {
        id: 24,
        equipmentId: 28,
        goldPrice: 250,
        requiredSkill: {
            skill: 'foraging',
            level: 1,
        }
    },
]

export const WEAPON_TYPES = [
    {
        id: 0,
        label: "Melle",
        damageType: "melle",
    },
    {
        id: 1,
        label: "Ranged",
        damageType: "ranged",
    }
]

export const SKILLS = {
    combat: {
        levelingXp: [
            10,
            60,
            310,
            810,
            1810,
            4310,
            9310,
            19310,
            44310,
        ],
        bonusPerLevel: {
            strengthBonus: 1,
            critChanceBonus: 2,
            critDamageMultiplierBonus: 0.05
        }
    },

    mining: {
        levelingXp: [
            10,
            60,
            310,
            810,
            1810,
            4310,
            9310,
            19310,
            44310,
        ],
        bonusPerLevel: {
            miningSpeedBonus: 1,
            miningLuckBonus: 5,
            defenseBonus: 0.5
        }
    },

    foraging: {
        levelingXp: [
            10,
            60,
            310,
            810,
            1810,
            4310,
            9310,
            19310,
            44310,
        ],
    },

    farming: {
        levelingXp: [
            10,
            60,
            310,
            810,
            1810,
            4310,
            9310,
            19310,
            44310,
        ],
    },

    fishing: {
        levelingXp: [
            10,
            60,
            310,
            810,
            1810,
            4310,
            9310,
            19310,
            44310,
        ],
    },
}

export const ATTACK_PATTERNS = [
    {
        id: 0,
        label: "Worm Slide I",
        pattern: [[[2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]], [[2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]]]
    },
    {
        id: 1,
        label: "Worm Slide II",
        pattern: [[[2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0]], [[0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0]], [[0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0]], [[0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]]]
    },
    {
        id: 2,
        label: "Help The King I",
        pattern: [[[2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]], [[2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]]]
    },
    {
        id: 3,
        label: "Help The King II",
        pattern: [[[0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0]], [[0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0]], [[0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]]]
    },
    {
        id: 4,
        label: "Worm Slide III",
        pattern: [[[2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]], [[0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0]], [[0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]]]
    },
    {
        id: 5,
        label: "Wait IV",
        pattern: [[[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]]
    },

]

export const SAVED_ITEMS_EFFECTS = [
    {
        fullsetEffect: {
            effect: 'skipFishingTier',
            tier: 3
        },
    },

    {
        id: 23,
        label: 'Pack Shield',
        specialEffect: 'ignoresEnemyDefense',
        effectLore: "Ignores the enemy's defense",
        slot: 'accessory',
    },

    // Wands

    {
        id: 12,
        label: 'Wand of Healing',
        slot: 'wand',
        slotLabel: 'Wand',
        manaCost: 1,
        healing: 3,
    },

    {
        id: 13,
        label: 'Wand of Mending',
        slot: 'wand',
        slotLabel: 'Wand',
        manaCost: 1,
        healing: 5,
    },

    {
        id: 0,
        result: { id: 22, type: 'equipment' },
        materialCosts: [
            { id: 21, amount: 150 },
        ],
        equipmentCosts: [{
            id: 21,
            amount: 1,
        }],
        goldCost: 25000,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 3
        },
        requiredMilestoneAmount: 1500,
    },

    {
        id: 1,
        result: { id: 43, type: 'equipment' },
        materialCosts: [
            { id: 16, amount: 25 },
            { id: 12, amount: 2500 },
        ],
        goldCost: 0,
        requiredMilestoneType: {
            categoryType: 'fishing',
            subcategoryType: 3
        },
        requiredMilestoneAmount: 1,
    },

    {
        id: 0,
        equipmentId: 55,
        goldPrice: 100000,
        requiredSkill: {
            skill: 'mining',
            level: 8,
        }
    },

    {
        id: 1,
        equipmentId: 59,
        goldPrice: 0,
        materialPrices: [
            { id: 12, amount: 10000 },
        ],
        equipmentPrices: [{
            id: 58,
            amount: 1,
        }],
    },
]
