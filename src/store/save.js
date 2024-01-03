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
        equipSkillRequirement: {
            combat: 2
        }
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
    },

    // Iron Armor

    {
        id: 8,
        label: 'Iron Helmet',
        slot: 'helmet',
        slotLabel: 'Helmet',
        set: 'iron',
        setLabel: 'Iron',
        healthBonus: 2,
        defenseBonus: 1,
        strengthBonus: 1,
    },

    {
        id: 9,
        label: 'Iron Chestplate',
        slot: 'chestplate',
        slotLabel: 'Chestplate',
        set: 'iron',
        setLabel: 'Iron',
        healthBonus: 2,
        defenseBonus: 1,
        strengthBonus: 1,
    },

    {
        id: 10,
        label: 'Iron Leggings',
        slot: 'leggings',
        slotLabel: 'Leggings',
        set: 'iron',
        setLabel: 'Iron',
        healthBonus: 2,
        defenseBonus: 1,
        strengthBonus: 1,
    },

    {
        id: 11,
        label: 'Iron Boots',
        slot: 'boots',
        slotLabel: 'Boots',
        set: 'iron',
        setLabel: 'Iron',
        healthBonus: 2,
        defenseBonus: 1,
        strengthBonus: 1,
    },

    // Diamond Armor

    {
        id: 12,
        label: 'Diamond Helmet',
        slot: 'helmet',
        slotLabel: 'Helmet',
        set: 'diamond',
        setLabel: 'Diamond',
        healthBonus: 3,
        defenseBonus: 1,
        strengthBonus: 2,
    },

    {
        id: 13,
        label: 'Diamond Chestplate',
        slot: 'chestplate',
        slotLabel: 'Chestplate',
        set: 'diamond',
        setLabel: 'Diamond',
        healthBonus: 3,
        defenseBonus: 1,
        strengthBonus: 2,
    },

    {
        id: 14,
        label: 'Diamond Leggings',
        slot: 'leggings',
        slotLabel: 'Leggings',
        set: 'diamond',
        setLabel: 'Diamond',
        healthBonus: 3,
        defenseBonus: 1,
        strengthBonus: 2,
    },

    {
        id: 15,
        label: 'Diamond Boots',
        slot: 'boots',
        slotLabel: 'Boots',
        set: 'diamond',
        setLabel: 'Diamond',
        healthBonus: 3,
        defenseBonus: 1,
        strengthBonus: 2,
    },

    // Reinforced Diamond Armor

    {
        id: 16,
        label: 'Reinforced Diamond Helmet',
        slot: 'helmet',
        slotLabel: 'Helmet',
        set: 'reinforcedDiamond',
        setLabel: 'Reinforced Diamond',
        healthBonus: 5,
        defenseBonus: 2,
        strengthBonus: 3,
    },

    {
        id: 17,
        label: 'Reinforced Diamond Chestplate',
        slot: 'chestplate',
        slotLabel: 'Chestplate',
        set: 'reinforcedDiamond',
        setLabel: 'Reinforced Diamond',
        healthBonus: 5,
        defenseBonus: 2,
        strengthBonus: 3,
    },

    {
        id: 18,
        label: 'Reinforced Diamond Leggings',
        slot: 'leggings',
        slotLabel: 'Leggings',
        set: 'reinforcedDiamond',
        setLabel: 'Reinforced Diamond',
        healthBonus: 5,
        defenseBonus: 2,
        strengthBonus: 3,
    },

    {
        id: 19,
        label: 'Reinforced Diamond Boots',
        slot: 'boots',
        slotLabel: 'Boots',
        set: 'reinforcedDiamond',
        setLabel: 'Reinforced Diamond',
        healthBonus: 5,
        defenseBonus: 2,
        strengthBonus: 3,
    },

    // Special Armors

    // Worm Slayer

    {
        id: 20,
        label: 'Worm Skull',
        slot: 'helmet',
        slotLabel: 'Helmet',
        healthBonus: 10,
        defenseBonus: 2,
        regeneration: 3,
    },

    // Spider Slayer

    {
        id: 21,
        label: 'Venomous Helmet',
        slot: 'helmet',
        slotLabel: 'Helmet',
        strengthBonus: 10,
    },

    {
        id: 22,
        label: 'Voracious Helmet',
        slot: 'helmet',
        slotLabel: 'Helmet',
        healthBonus: 3,
        defenseBonus: 3,
        strengthBonus: 15,
    },

    // Wolf Slayer

    {
        id: 23,
        label: 'Pack Shield',
        specialEffect: 'ignoresEnemyDefense',
        effectLore: "Ignores the enemy's defense",
        slot: 'accessory',
    },

    // Werewolf Armor

    {
        id: 24,
        label: 'Werewolf Helmet',
        slot: 'helmet',
        slotLabel: 'Helmet',
        set: 'werewolf',
        defenseBonus: 10,
    },

    {
        id: 25,
        label: 'Werewolf Chestplate',
        slot: 'chestplate',
        slotLabel: 'Chestplate',
        set: 'werewolf',
        defenseBonus: 10,
    },

    {
        id: 26,
        label: 'Werewolf Leggings',
        slot: 'leggings',
        slotLabel: 'Leggings',
        set: 'werewolf',
        defenseBonus: 10,
    },

    {
        id: 27,
        label: 'Werewolf Boots',
        slot: 'boots',
        slotLabel: 'Boots',
        set: 'werewolf',
        defenseBonus: 10,
    },

    // Fishing Armors

    // Whitetip Shark Armor

    {
        id: 28,
        label: 'Whitetip Shark Helmet',
        slot: 'helmet',
        slotLabel: 'Helmet',
        set: 'whitetipShark',
        fullsetEffect: {
            effect: 'skipFishingTier',
            tier: 1
        },
        fishingLuckBonus: 3,
    },

    {
        id: 29,
        label: 'Whitetip Shark Chestplate',
        slot: 'chestplate',
        slotLabel: 'Chestplate',
        set: 'whitetipShark',
        fullsetEffect: {
            effect: 'skipFishingTier',
            tier: 1
        },
        fishingLuckBonus: 3,
    },

    {
        id: 30,
        label: 'Whitetip Shark Leggings',
        slot: 'leggings',
        slotLabel: 'Leggings',
        set: 'whitetipShark',
        fullsetEffect: {
            effect: 'skipFishingTier',
            tier: 1
        },
        fishingLuckBonus: 3,
    },

    {
        id: 31,
        label: 'Whitetip Shark Boots',
        slot: 'boots',
        slotLabel: 'Boots',
        set: 'whitetipShark',
        fullsetEffect: {
            effect: 'skipFishingTier',
            tier: 1
        },
        fishingLuckBonus: 3,
    },

    // Tiger Shark Armor

    {
        id: 32,
        label: 'Tiger Shark Helmet',
        slot: 'helmet',
        slotLabel: 'Helmet',
        set: 'tigerShark',
        fullsetEffect: {
            effect: 'skipFishingTier',
            tier: 2
        },
        fishingLuckBonus: 5,
    },

    {
        id: 33,
        label: 'Tiger Shark Chestplate',
        slot: 'chestplate',
        slotLabel: 'Chestplate',
        set: 'tigerShark',
        fullsetEffect: {
            effect: 'skipFishingTier',
            tier: 2
        },
        fishingLuckBonus: 5,
    },

    {
        id: 34,
        label: 'Tiger Shark Leggings',
        slot: 'leggings',
        slotLabel: 'Leggings',
        set: 'tigerShark',
        fullsetEffect: {
            effect: 'skipFishingTier',
            tier: 2
        },
        fishingLuckBonus: 5,
    },

    {
        id: 35,
        label: 'Tiger Shark Boots',
        slot: 'boots',
        slotLabel: 'Boots',
        set: 'tigerShark',
        fullsetEffect: {
            effect: 'skipFishingTier',
            tier: 2
        },
        fishingLuckBonus: 5,
    },

    // Great White Shark Armor

    {
        id: 36,
        label: 'Great White Shark Helmet',
        slot: 'helmet',
        slotLabel: 'Helmet',
        set: 'greatWhiteShark',
        fullsetEffect: {
            effect: 'skipFishingTier',
            tier: 3
        },
        fishingLuckBonus: 7,
    },

    {
        id: 37,
        label: 'Great White Shark Chestplate',
        slot: 'chestplate',
        slotLabel: 'Chestplate',
        set: 'greatWhiteShark',
        fullsetEffect: {
            effect: 'skipFishingTier',
            tier: 3
        },
        fishingLuckBonus: 7,
    },

    {
        id: 38,
        label: 'Great White Shark Leggings',
        slot: 'leggings',
        slotLabel: 'Leggings',
        set: 'greatWhiteShark',
        fullsetEffect: {
            effect: 'skipFishingTier',
            tier: 3
        },
        fishingLuckBonus: 7,
    },

    {
        id: 39,
        label: 'Great White Shark Boots',
        slot: 'boots',
        slotLabel: 'Boots',
        set: 'greatWhiteShark',
        fullsetEffect: {
            effect: 'skipFishingTier',
            tier: 3
        },
        fishingLuckBonus: 7,
    },

    // Megalodon Shark Armor

    {
        id: 40,
        label: 'Megalodon Shark Helmet',
        slot: 'helmet',
        slotLabel: 'Helmet',
        set: 'megalodonShark',
        fullsetEffect: {
            effect: 'skipFishingTier',
            tier: 4
        },
        fishingLuckBonus: 10,
    },

    {
        id: 41,
        label: 'Megalodon Shark Chestplate',
        slot: 'chestplate',
        slotLabel: 'Chestplate',
        set: 'megalodonShark',
        fullsetEffect: {
            effect: 'skipFishingTier',
            tier: 4
        },
        fishingLuckBonus: 10,
    },

    {
        id: 42,
        label: 'Megalodon Shark Leggings',
        slot: 'leggings',
        slotLabel: 'Leggings',
        set: 'megalodonShark',
        fullsetEffect: {
            effect: 'skipFishingTier',
            tier: 4
        },
        fishingLuckBonus: 10,
    },

    {
        id: 43,
        label: 'Megalodon Shark Boots',
        slot: 'boots',
        slotLabel: 'Boots',
        set: 'megalodonShark',
        fullsetEffect: {
            effect: 'skipFishingTier',
            tier: 4
        },
        fishingLuckBonus: 10,
    },

    // Wands

    {
        id: 44,
        label: 'Wand of Healing',
        slot: 'wand',
        slotLabel: 'Wand',
        manaCost: 1,
        healing: 3,
    },

    {
        id: 45,
        label: 'Wand of Mending',
        slot: 'wand',
        slotLabel: 'Wand',
        manaCost: 1,
        healing: 5,
    },


    // Weapons

    {
        id: 46,
        label: 'Bronze Sword',
        slot: 'weapon',
        slotLabel: 'Weapon',
        typeId: 0,
        strengthBonus: 2,
    },

    {
        id: 47,
        label: 'Iron Sword',
        slot: 'weapon',
        slotLabel: 'Weapon',
        typeId: 0,
        strengthBonus: 3,
    },

    {
        id: 48,
        label: 'Diamond Sword',
        slot: 'weapon',
        slotLabel: 'Weapon',
        typeId: 0,
        strengthBonus: 5,
    },

    {
        id: 49,
        label: 'Sharp Diamond Sword',
        slot: 'weapon',
        slotLabel: 'Weapon',
        typeId: 0,
        strengthBonus: 7,
    },

    {
        id: 50,
        label: 'Mithril Sword',
        slot: 'weapon',
        slotLabel: 'Weapon',
        typeId: 0,
        strengthBonus: 12,
    },

    // Pickaxes

    {
        id: 51,
        label: 'Iron Pickaxe',
        slot: 'pickaxe',
        slotLabel: 'Pickaxe',
        miningLuckBonus: 1,
    },

    {
        id: 52,
        label: 'Gold Pickaxe',
        slot: 'pickaxe',
        slotLabel: 'Pickaxe',
        miningLuckBonus: 2,
    },

    {
        id: 53,
        label: 'Diamond Pickaxe',
        slot: 'pickaxe',
        slotLabel: 'Pickaxe',
        miningSpeedBonus: 1,
        miningLuckBonus: 3,
    },

    {
        id: 54,
        label: 'Reinforced Diamond Pickaxe',
        slot: 'pickaxe',
        slotLabel: 'Pickaxe',
        miningSpeedBonus: 1,
        miningLuckBonus: 5,
    },

    {
        id: 55,
        label: 'Mithril Pickaxe',
        slot: 'pickaxe',
        slotLabel: 'Pickaxe',
        miningSpeedBonus: 20,
        miningLuckBonus: 0,
    },

    // Fishing Rods

    {
        id: 56,
        label: 'Fishing Rod',
        slot: 'rod',
        slotLabel: 'Fishing Rod',
        fishingLuckBonus: 5,
    },

    {
        id: 57,
        label: 'Rod of the Sea',
        slot: 'rod',
        slotLabel: 'Fishing Rod',
        fishingLuckBonus: 15,
    },

    {
        id: 58,
        label: 'Lucky Rod',
        slot: 'rod',
        slotLabel: 'Fishing Rod',
        fishingLuckBonus: 30,
    },

    {
        id: 59,
        label: 'Blessed Rod',
        slot: 'rod',
        slotLabel: 'Fishing Rod',
        fishingLuckBonus: 50,
    },

    // Axes

    {
        id: 60,
        label: 'Enchanted Axe',
        slot: 'axe',
        slotLabel: 'Axe',
        foragingSpeedBonus: 15,
        foragingLuckBonus: 10,
        strengthBonus: 3,
    },

    // Bows

    {
        id: 61,
        label: "Oak Bow",
        slot: 'weapon',
        slotLabel: 'Weapon',
        typeId: 1,
        aimingAccuracyBonus: 50,
        strengthBonus: 3,
    },

    {
        id: 61,
        label: "Infernal Bow",
        slot: 'weapon',
        slotLabel: 'Weapon',
        typeId: 1,
        aimingAccuracyBonus: 90,
        critChanceBonus: 50,
        strengthBonus: 1,
    }
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
        type: 'specialCrafting',
        symbol: '🧵',
    },

    {
        id: 22,
        label: 'Werewolf Tooth',
        type: 'specialCrafting',
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
        price: 3,
    },

    {
        id: 26,
        label: 'Birch Log',
        type: 'foragingDrop',
        symbol: '🪵',
        price: 5,
    },

    {
        id: 27,
        label: 'Spruce Log',
        type: 'foragingDrop',
        symbol: '🪵',
        price: 8,
    },

    {
        id: 28,
        label: 'Dark Oak Log',
        type: 'foragingDrop',
        symbol: '🪵',
        price: 12,
    },

    {
        id: 29,
        label: 'Acacia Log',
        type: 'foragingDrop',
        symbol: '🪵',
        price: 17,
    },

    {
        id: 30,
        label: 'Jungle Log',
        type: 'foragingDrop',
        symbol: '🪵',
        price: 23,
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
        price: 137,
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

export const ORE_VEINS = [
    {
        id: 0,
        label: 'Stone',
        drop: {
            id: 3,
            amount: 1
        },
        experience: 1,
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
        experience: 2,
        baseMiningCooldown: 10,
        minMiningCooldown: 1,
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
        experience: 4,
        baseMiningCooldown: 10,
        minMiningCooldown: 1,
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
        experience: 5,
        baseMiningCooldown: 10,
        minMiningCooldown: 1,
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
        experience: 7,
        baseMiningCooldown: 10,
        minMiningCooldown: 1,
        requiredSkill: {
            skill: 'mining',
            level: 8,
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
        minForagingCooldown: 1,
    },

    {
        id: 1,
        label: 'Birch Tree',
        drop: {
            id: 26,
            amount: 1
        },
        experience: 2,
        baseForagingCooldown: 10,
        minForagingCooldown: 1,
        requiredSkill: {
            skill: 'foraging',
            level: 1,
        },
    },

    {
        id: 2,
        label: 'Spruce Tree',
        drop: {
            id: 27,
            amount: 1
        },
        experience: 4,
        baseForagingCooldown: 10,
        minForagingCooldown: 1,
        requiredSkill: {
            skill: 'foraging',
            level: 3,
        },
    },

    {
        id: 3,
        label: 'Dark Oak Tree',
        drop: {
            id: 28,
            amount: 1
        },
        experience: 5,
        baseForagingCooldown: 10,
        minForagingCooldown: 1,
        requiredSkill: {
            skill: 'foraging',
            level: 5,
        },
    },

    {
        id: 4,
        label: 'Acacia Tree',
        drop: {
            id: 29,
            amount: 1
        },
        experience: 7,
        baseForagingCooldown: 10,
        minForagingCooldown: 1,
        requiredSkill: {
            skill: 'foraging',
            level: 8,
        },
    },

    {
        id: 5,
        label: 'Jungle Tree',
        drop: {
            id: 30,
            amount: 1
        },
        experience: 10,
        baseForagingCooldown: 10,
        minForagingCooldown: 1,
        requiredSkill: {
            skill: 'foraging',
            level: 12,
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

    // Worm Slayers

    {
        id: 0,
        result: { id: 44, type: 'equipment' },
        materialCosts: [
            { id: 0, amount: 300 },
        ],
        goldCost: 1000,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 0
        },
        requiredMilestoneAmount: 250,
    },

    {
        id: 1,
        result: { id: 45, type: 'equipment' },
        materialCosts: [
            { id: 0, amount: 500 },
        ],
        equipmentCosts: [{
            id: 44,
            amount: 1,
        }],
        goldCost: 2500,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 0
        },
        requiredMilestoneAmount: 500,
    },

    {
        id: 2,
        result: { id: 20, type: 'equipment' },
        equipmentCosts: [{
            id: 44,
            amount: 2,
        }],
        goldCost: 10000,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 0
        },
        requiredMilestoneAmount: 1000,
    },

    // Spider Slayers

    {
        id: 3,
        result: { id: 21, type: 'material' },
        materialCosts: [
            { id: 1, amount: 10 },
        ],
        goldCost: 0,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 3
        },
        requiredMilestoneAmount: 250,
    },

    {
        id: 4,
        result: { id: 21, type: 'equipment' },
        materialCosts: [
            { id: 21, amount: 100 },
        ],
        goldCost: 5000,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 3
        },
        requiredMilestoneAmount: 750,
    },

    {
        id: 5,
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

    // Wolf Slayers

    {
        id: 6,
        result: { id: 22, type: 'material' },
        materialCosts: [
            { id: 2, amount: 10 },
        ],
        goldCost: 0,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 4
        },
        requiredMilestoneAmount: 250,
    },

    {
        id: 7,
        result: { id: 23, type: 'equipment' },
        materialCosts: [
            { id: 22, amount: 25 },
        ],
        goldCost: 5000,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 4
        },
        requiredMilestoneAmount: 500,
    },

    // Werewolf Armor

    {
        id: 8,
        result: { id: 24, type: 'equipment' },
        materialCosts: [
            { id: 22, amount: 50 },
        ],
        goldCost: 10000,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 4
        },
        requiredMilestoneAmount: 1000,
    },

    {
        id: 9,
        result: { id: 25, type: 'equipment' },
        materialCosts: [
            { id: 22, amount: 50 },
        ],
        goldCost: 10000,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 4
        },
        requiredMilestoneAmount: 1000,
    },

    {
        id: 10,
        result: { id: 26, type: 'equipment' },
        materialCosts: [
            { id: 22, amount: 50 },
        ],
        goldCost: 10000,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 4
        },
        requiredMilestoneAmount: 1000,
    },

    {
        id: 11,
        result: { id: 27, type: 'equipment' },
        materialCosts: [
            { id: 22, amount: 50 },
        ],
        goldCost: 10000,
        requiredMilestoneType: {
            categoryType: 'enemies',
            subcategoryType: 4
        },
        requiredMilestoneAmount: 1000,
    },

    // Fishing Armors

    // Whitetip Shark Armor

    {
        id: 12,
        result: { id: 28, type: 'equipment' },
        materialCosts: [
            { id: 13, amount: 25 },
            { id: 9, amount: 125 },
        ],
        goldCost: 0,
        requiredMilestoneType: {
            categoryType: 'fishing',
            subcategoryType: 0
        },
        requiredMilestoneAmount: 1,
    },

    {
        id: 13,
        result: { id: 29, type: 'equipment' },
        materialCosts: [
            { id: 13, amount: 25 },
            { id: 9, amount: 125 },
        ],
        goldCost: 0,
        requiredMilestoneType: {
            categoryType: 'fishing',
            subcategoryType: 0
        },
        requiredMilestoneAmount: 1,
    },

    {
        id: 14,
        result: { id: 30, type: 'equipment' },
        materialCosts: [
            { id: 13, amount: 25 },
            { id: 9, amount: 125 },
        ],
        goldCost: 0,
        requiredMilestoneType: {
            categoryType: 'fishing',
            subcategoryType: 0
        },
        requiredMilestoneAmount: 1,
    },

    {
        id: 15,
        result: { id: 31, type: 'equipment' },
        materialCosts: [
            { id: 13, amount: 25 },
            { id: 9, amount: 125 },
        ],
        goldCost: 0,
        requiredMilestoneType: {
            categoryType: 'fishing',
            subcategoryType: 0
        },
        requiredMilestoneAmount: 1,
    },

    // Tiger Shark Armor

    {
        id: 16,
        result: { id: 32, type: 'equipment' },
        materialCosts: [
            { id: 14, amount: 25 },
            { id: 10, amount: 625 },
        ],
        goldCost: 0,
        requiredMilestoneType: {
            categoryType: 'fishing',
            subcategoryType: 1
        },
        requiredMilestoneAmount: 1,
    },

    {
        id: 17,
        result: { id: 33, type: 'equipment' },
        materialCosts: [
            { id: 14, amount: 25 },
            { id: 10, amount: 625 },
        ],
        goldCost: 0,
        requiredMilestoneType: {
            categoryType: 'fishing',
            subcategoryType: 1
        },
        requiredMilestoneAmount: 1,
    },

    {
        id: 18,
        result: { id: 34, type: 'equipment' },
        materialCosts: [
            { id: 14, amount: 25 },
            { id: 10, amount: 625 },
        ],
        goldCost: 0,
        requiredMilestoneType: {
            categoryType: 'fishing',
            subcategoryType: 1
        },
        requiredMilestoneAmount: 1,
    },

    {
        id: 19,
        result: { id: 35, type: 'equipment' },
        materialCosts: [
            { id: 14, amount: 25 },
            { id: 10, amount: 625 },
        ],
        goldCost: 0,
        requiredMilestoneType: {
            categoryType: 'fishing',
            subcategoryType: 1
        },
        requiredMilestoneAmount: 1,
    },

    // Great White Shark Armor

    {
        id: 20,
        result: { id: 36, type: 'equipment' },
        materialCosts: [
            { id: 15, amount: 25 },
            { id: 11, amount: 1250 },
        ],
        goldCost: 0,
        requiredMilestoneType: {
            categoryType: 'fishing',
            subcategoryType: 2
        },
        requiredMilestoneAmount: 1,
    },

    {
        id: 21,
        result: { id: 37, type: 'equipment' },
        materialCosts: [
            { id: 15, amount: 25 },
            { id: 11, amount: 1250 },
        ],
        goldCost: 0,
        requiredMilestoneType: {
            categoryType: 'fishing',
            subcategoryType: 2
        },
        requiredMilestoneAmount: 1,
    },

    {
        id: 22,
        result: { id: 38, type: 'equipment' },
        materialCosts: [
            { id: 15, amount: 25 },
            { id: 11, amount: 1250 },
        ],
        goldCost: 0,
        requiredMilestoneType: {
            categoryType: 'fishing',
            subcategoryType: 2
        },
        requiredMilestoneAmount: 1,
    },

    {
        id: 23,
        result: { id: 39, type: 'equipment' },
        materialCosts: [
            { id: 15, amount: 25 },
            { id: 11, amount: 1250 },
        ],
        goldCost: 0,
        requiredMilestoneType: {
            categoryType: 'fishing',
            subcategoryType: 2
        },
        requiredMilestoneAmount: 1,
    },

    // Megalodon Shark Armor

    {
        id: 24,
        result: { id: 40, type: 'equipment' },
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
        id: 25,
        result: { id: 41, type: 'equipment' },
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
        id: 26,
        result: { id: 42, type: 'equipment' },
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
        id: 27,
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

]

export const SHOP = [

    // Armors

    // Leather Set

    {
        id: 0,
        equipmentId: 0,
        goldPrice: 250,
    },

    {
        id: 1,
        equipmentId: 1,
        goldPrice: 250,
    },

    {
        id: 2,
        equipmentId: 2,
        goldPrice: 250,
    },

    {
        id: 3,
        equipmentId: 3,
        goldPrice: 250,
    },

    // Chainmail Set

    {
        id: 4,
        equipmentId: 4,
        goldPrice: 1250,
    },

    {
        id: 5,
        equipmentId: 5,
        goldPrice: 1250,
    },

    {
        id: 6,
        equipmentId: 6,
        goldPrice: 1250,
    },

    {
        id: 7,
        equipmentId: 7,
        goldPrice: 1250,
    },

    // Iron Set

    {
        id: 8,
        equipmentId: 8,
        goldPrice: 2500,
    },

    {
        id: 9,
        equipmentId: 9,
        goldPrice: 2500,
    },

    {
        id: 10,
        equipmentId: 10,
        goldPrice: 2500,
    },

    {
        id: 11,
        equipmentId: 11,
        goldPrice: 2500,
    },

    // Diamond Set

    {
        id: 12,
        equipmentId: 12,
        goldPrice: 7500,
    },

    {
        id: 13,
        equipmentId: 13,
        goldPrice: 7500,
    },

    {
        id: 14,
        equipmentId: 14,
        goldPrice: 7500,
    },

    {
        id: 15,
        equipmentId: 15,
        goldPrice: 7500,
    },

    // Reinforced Diamond Set

    {
        id: 16,
        equipmentId: 16,
        goldPrice: 12500,
    },

    {
        id: 17,
        equipmentId: 17,
        goldPrice: 12500,
    },

    {
        id: 18,
        equipmentId: 18,
        goldPrice: 12500,
    },

    {
        id: 19,
        equipmentId: 19,
        goldPrice: 12500,
    },

    // Pickaxes

    {
        id: 20,
        equipmentId: 51,
        goldPrice: 1000,
    },

    {
        id: 21,
        equipmentId: 52,
        goldPrice: 2500,
        requiredSkill: {
            skill: 'mining',
            level: 1,
        }
    },

    {
        id: 22,
        equipmentId: 53,
        goldPrice: 10000,
        requiredSkill: {
            skill: 'mining',
            level: 3,
        }
    },

    {
        id: 23,
        equipmentId: 54,
        goldPrice: 25000,
        requiredSkill: {
            skill: 'mining',
            level: 5,
        }
    },

    {
        id: 24,
        equipmentId: 55,
        goldPrice: 100000,
        requiredSkill: {
            skill: 'mining',
            level: 8,
        }
    },

    // Weapons

    {
        id: 25,
        equipmentId: 46,
        goldPrice: 100,
    },

    {
        id: 26,
        equipmentId: 47,
        goldPrice: 500,
    },

    {
        id: 27,
        equipmentId: 48,
        goldPrice: 3000,
    },

    {
        id: 28,
        equipmentId: 49,
        goldPrice: 10000,
    },

    {
        id: 29,
        equipmentId: 50,
        goldPrice: 25000,
    },

    // Fishing Rods

    {
        id: 30,
        equipmentId: 56,
        goldPrice: 20000,
    },

    {
        id: 31,
        equipmentId: 57,
        goldPrice: 0,
        materialPrices: [
            { id: 12, amount: 200 },
        ],
        equipmentPrices: [{
            id: 56,
            amount: 1,
        }],
    },

    {
        id: 32,
        equipmentId: 58,
        goldPrice: 0,
        materialPrices: [
            { id: 12, amount: 2000 },
        ],
        equipmentPrices: [{
            id: 57,
            amount: 1,
        }],
    },

    {
        id: 33,
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

export const WEAPON_TYPES = [
    {
        id: 0,
        label: "Longsword",
        damageType: "melle",
    },
    {
        id: 1,
        label: "Bow",
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
            defenseBonus: 1
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

]