export default () => ({
    gameState: {
        timeElapsed: 0,

        player: {
            label: 'Hero',
            coins: 0,
            health: 10,
            maxHealth: 10,
            mana: 10,
            maxMana: 10,
            defense: 0,
            strength: 0,
            miningLuck: 0,
            miningSpeed: 0,
            fishingLuck: 0,
            maxFishingTier: 4,
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

            baseAttackCooldown: 2,
            baseMiningCooldown: 10,
            baseFishingCooldown: 10,
            currentAttackCooldown: 0,
            currentMiningCooldown: 0,
            currentFishingCooldown: 0,
        },

        currentEnemy: {},

        enemies: [
            {
                unlocked: true,
                label: 'Worm',
                name: 'worm',
                maxHealth: 5,
                health: 5,
                defense: 0,
                strength: 1,
                drop: {
                    name: 'wormHeart',
                    amount: 1
                },
                coins: 1,
                experience: 1,
            },

            {
                unlocked: false,
                label: 'Bat',
                name: 'bat',
                maxHealth: 10,
                health: 10,
                defense: 0,
                strength: 2,
                coins: 2,
                experience: 2,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'worm'
                },
                requiredMilestoneAmount: 50,
            },

            {
                unlocked: false,
                label: 'Rat',
                name: 'rat',
                maxHealth: 5,
                health: 5,
                defense: 2,
                strength: 5,
                coins: {
                    min: 1,
                    max: 4
                },
                experience: 2,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'bat'
                },
                requiredMilestoneAmount: 50,
            },

            {
                unlocked: false,
                label: 'Spider',
                name: 'spider',
                maxHealth: 15,
                health: 15,
                defense: 0,
                strength: 3,
                drop: {
                    name: 'string',
                    amount: 1
                },
                coins: 3,
                experience: 3,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'rat'
                },
                requiredMilestoneAmount: 50,
            },

            {
                unlocked: false,
                label: 'Wolf',
                name: 'wolf',
                maxHealth: 25,
                health: 25,
                defense: 5,
                strength: 8,
                drop: {
                    name: 'wolfTooth',
                    amount: 1
                },
                coins: 5,
                experience: 3,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'spider'
                },
                requiredMilestoneAmount: 50,
            },

            {
                unlocked: false,
                label: 'Giant Wolf',
                name: 'giantWolf',
                maxHealth: 50,
                health: 50,
                defense: 10,
                strength: 10,
                drop: {
                    name: 'wolfTooth',
                    amount: 3
                },
                coins: 7,
                experience: 5,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'wolf'
                },
                requiredMilestoneAmount: 50,
            },

            {
                unlocked: false,
                label: 'Bear',
                name: 'bear',
                maxHealth: 60,
                health: 60,
                defense: 10,
                strength: 15,
                coins: 10,
                experience: 10,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'giantWolf'
                },
                requiredMilestoneAmount: 50,
            },

            {
                unlocked: false,
                label: 'Giant Spider',
                name: 'giantSpider',
                maxHealth: 75,
                health: 75,
                defense: 15,
                strength: 20,
                drop: {
                    name: 'string',
                    amount: 3
                },
                coins: 15,
                experience: 7,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'bear'
                },
                requiredMilestoneAmount: 50,
            },

            {
                unlocked: false,
                label: 'Giant Bear',
                name: 'giantBear',
                maxHealth: 100,
                health: 100,
                defense: 15,
                strength: 25,
                coins: 20,
                experience: 15,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'giantSpider'
                },
                requiredMilestoneAmount: 50,
            },

            {
                unlocked: false,
                label: 'Giant Worm',
                name: 'giantWorm',
                maxHealth: 200,
                health: 200,
                defense: 20,
                strength: 30,
                drop: {
                    name: 'wormHeart',
                    amount: 3
                },
                coins: 25,
                experience: 20,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'giantBear'
                },
                requiredMilestoneAmount: 50,
            },
        ],

        ores: [
            {
                unlocked: true,
                label: 'Stone',
                name: 'stone',
                drop: 'stone',
                experience: 1,
            },

            {
                unlocked: false,
                label: 'Coal',
                name: 'coal',
                drop: 'coal',
                experience: 2,
                requiredSkill: {
                    skill: 'mining',
                    level: 1,
                },
            },

            {
                unlocked: false,
                label: 'Iron',
                name: 'iron',
                drop: 'iron',
                experience: 4,
                requiredSkill: {
                    skill: 'mining',
                    level: 3,
                },
            },

            {
                unlocked: false,
                label: 'Gold',
                name: 'gold',
                drop: 'gold',
                experience: 5,
                requiredSkill: {
                    skill: 'mining',
                    level: 5,
                },
            },

            {
                unlocked: false,
                label: 'Diamond',
                name: 'diamond',
                drop: 'diamond',
                experience: 7,
                requiredSkill: {
                    skill: 'mining',
                    level: 8,
                },
            },

            {
                unlocked: false,
                label: 'Mithril',
                name: 'mithril',
                drop: 'mithril',
                experience: 10,
                requiredSkill: {
                    skill: 'mining',
                    level: 12,
                },
            },
        ],

        fishingLootTable: [

            // Tier I

            [{
                drop: 'cod',
                type: 'fishing',
                amount: 1,
            }, {
                drop: 'salmon',
                type: 'fishing',
                amount: 1,
            }, {
                drop: 'bass',
                type: 'fishing',
                amount: 1,
            }, {
                drop: 'carp',
                type: 'fishing',
                amount: 1,
            }, {
                drop: 'whitetipSharkTooth',
                type: 'specialDrops',
                amount: 1,
            }],

            // Tier II

            [{
                drop: 'salmon',
                type: 'fishing',
                amount: 10,
            }, {
                drop: 'bass',
                type: 'fishing',
                amount: 10,
            }, {
                drop: 'carp',
                type: 'fishing',
                amount: 10,
            }, {
                drop: 'commonTreasure',
                type: 'treasures',
                amount: 1,
            }, {
                drop: 'tigerSharkTooth',
                type: 'specialDrops',
                amount: 1,
            }],

            // Tier III

            [{
                drop: 'bass',
                type: 'fishing',
                amount: 25,
            }, {
                drop: 'carp',
                type: 'fishing',
                amount: 25,
            }, {
                drop: 'rareTreasure',
                type: 'treasures',
                amount: 1,
            }, {
                drop: 'epicTreasure',
                type: 'treasures',
                amount: 1,
            }, {
                drop: 'greatWhiteSharkTooth',
                type: 'specialDrops',
                amount: 1,
            }],

            // Tier IV

            [{
                drop: 'carp',
                type: 'fishing',
                amount: 30,
            }, {
                drop: 'rareTreasure',
                type: 'treasures',
                amount: 2,
            }, {
                drop: 'carp',
                type: 'fishing',
                amount: 40,
            }, {
                drop: 'epicTreasure',
                type: 'treasures',
                amount: 1,
            }, {
                drop: 'megalodonSharkTooth',
                type: 'specialDrops',
                amount: 1,
            }],

            // Tier V

            [{
                drop: 'carp',
                type: 'fishing',
                amount: 50,
            }, {
                drop: 'epicTreasure',
                type: 'treasures',
                amount: 2,
            }, {
                drop: 'legendaryTreasure',
                type: 'treasures',
                amount: 1,
            }, {
                drop: 'carp',
                type: 'fishing',
                amount: 75,
            }, {
                drop: 'carp',
                type: 'fishing',
                amount: 100,
            },
            {
                drop: 'legendaryTreasure',
                type: 'treasures',
                amount: 2,
            },],
        ],

        materials: {
            enemies: {
                wormHeart: {
                    label: 'Worm Heart',
                    name: 'wormHeart',
                    symbol: '💜',
                    amount: 0,
                    price: 2
                },

                string: {
                    label: 'String',
                    name: 'string',
                    symbol: '➰',
                    amount: 0,
                    price: 5
                },

                wolfTooth: {
                    label: 'Wolf Tooth',
                    name: 'wolfTooth',
                    symbol: '🦷',
                    amount: 0,
                    price: 10
                },
            },

            mining: {
                stone: {
                    label: 'Stone',
                    name: 'stone',
                    symbol: '🪨',
                    amount: 0,
                    price: 5
                },

                coal: {
                    label: 'Coal',
                    name: 'coal',
                    symbol: '🌑',
                    amount: 0,
                    price: 7
                },

                iron: {
                    label: 'Iron',
                    name: 'iron',
                    symbol: '🔩',
                    amount: 0,
                    price: 10
                },

                gold: {
                    label: 'Gold',
                    name: 'gold',
                    symbol: '🌕',
                    amount: 0,
                    price: 20
                },

                diamond: {
                    label: 'Diamond',
                    name: 'diamond',
                    symbol: '💎',
                    amount: 0,
                    price: 30
                },

                mithril: {
                    label: 'Mithril',
                    name: 'mithril',
                    symbol: '🟢',
                    amount: 0,
                    price: 50
                },
            },

            fishing: {
                cod: {
                    label: 'Cod',
                    name: 'cod',
                    symbol: '🐟',
                    amount: 0,
                    price: 10,
                    experience: 1,
                },

                salmon: {
                    label: 'Salmon',
                    name: 'salmon',
                    symbol: '🐠',
                    amount: 0,
                    price: 20,
                    experience: 3,
                },

                bass: {
                    label: 'Bass',
                    name: 'bass',
                    symbol: '🐠',
                    amount: 0,
                    price: 30,
                    experience: 5,
                },

                carp: {
                    label: 'Carp',
                    name: 'carp',
                    symbol: '🐡',
                    amount: 0,
                    price: 50,
                    experience: 10,
                },
            },

            specialDrops: {
                whitetipSharkTooth: {
                    label: 'Whitetip Shark Tooth',
                    name: 'whitetipSharkTooth',
                    symbol: '🦷',
                    amount: 0,
                    price: 50,
                    experience: 25,
                },
                tigerSharkTooth: {
                    label: 'Tiger Shark Tooth',
                    name: 'tigerSharkTooth',
                    symbol: '🦷',
                    amount: 0,
                    price: 50,
                    experience: 50,
                },
                greatWhiteSharkTooth: {
                    label: 'Great White Shark Tooth',
                    name: 'greatWhiteSharkTooth',
                    symbol: '🦷',
                    amount: 0,
                    price: 50,
                    experience: 100,
                },
                megalodonSharkTooth: {
                    label: 'Megalodon Shark Tooth',
                    name: 'megalodonSharkTooth',
                    symbol: '🦷',
                    amount: 0,
                    price: 50,
                    experience: 500,
                },
            },

            treasures: {
                commonTreasure: {
                    label: 'Common Treasure',
                    name: 'commonTreasure',
                    symbol: '📦',
                    amount: 0,
                    prize: 2000,
                    prizeNumbers: [1, 2, 3, 4, 5], // In an actual dice -> 2, 3, 4, 5 and 6
                    experience: 0,
                },

                rareTreasure: {
                    label: 'Rare Treasure',
                    name: 'rareTreasure',
                    symbol: '📦',
                    amount: 0,
                    prize: 4000,
                    prizeNumbers: [2, 3, 4, 5], // In an actual dice -> 3, 4, 5 and 6
                    experience: 0,
                },

                epicTreasure: {
                    label: 'Epic Treasure',
                    name: 'epicTreasure',
                    symbol: '📦',
                    amount: 0,
                    prize: 8000,
                    prizeNumbers: [3, 4, 5], // In an actual dice -> 4, 5 and 6
                    experience: 0,
                },

                legendaryTreasure: {
                    label: 'Legendary Treasure',
                    name: 'legendaryTreasure',
                    symbol: '📦',
                    amount: 0,
                    prize: 15000,
                    prizeNumbers: [5], // In an actual dice -> 6
                    experience: 0,
                },
            },

            specialCrafting: {
                enchantedString: {
                    label: 'Enchanted String',
                    symbol: '🧵',
                    amount: 0,
                },

                werewolfTooth: {
                    label: 'Werewolf Tooth',
                    symbol: '🦷',
                    amount: 0,
                },
            }

        },

        milestones: {
            enemies: {
                worm: {
                    label: 'Worm',
                    name: 'worm',
                    amount: 0,
                },

                bat: {
                    label: 'Bat',
                    name: 'bat',
                    amount: 0,
                },

                rat: {
                    label: 'Rat',
                    name: 'rat',
                    amount: 0,
                },

                spider: {
                    label: 'Spider',
                    name: 'spider',
                    amount: 0,
                },

                wolf: {
                    label: 'Wolf',
                    name: 'wolf',
                    amount: 0,
                },

                giantWolf: {
                    label: 'Giant Wolf',
                    name: 'giantWolf',
                    amount: 0,
                },

                bear: {
                    label: 'Bear',
                    name: 'bear',
                    amount: 0,
                },

                giantSpider: {
                    label: 'Giant Spider',
                    name: 'giantSpider',
                    amount: 0,
                },

                giantBear: {
                    label: 'Giant Bear',
                    name: 'giantBear',
                    amount: 0,
                },

                giantWorm: {
                    label: 'Giant Worm',
                    name: 'giantWorm',
                    amount: 0,
                },
            },

            mining: {
                stone: {
                    label: 'Stone',
                    name: 'stone',
                    amount: 0,
                },

                coal: {
                    label: 'Coal',
                    name: 'coal',
                    amount: 0,
                },

                iron: {
                    label: 'Iron',
                    name: 'iron',
                    amount: 0,
                },

                gold: {
                    label: 'Gold',
                    name: 'gold',
                    amount: 0,
                },

                diamond: {
                    label: 'Diamond',
                    name: 'diamond',
                    amount: 0,
                },

                mithril: {
                    label: 'Mithril',
                    name: 'mithril',
                    amount: 0,
                },
            },

            fishing: {
                cod: {
                    label: 'Cod',
                    name: 'cod',
                    amount: 0,
                },

                salmon: {
                    label: 'Salmon',
                    name: 'salmon',
                    amount: 0,
                },

                bass: {
                    label: 'Bass',
                    name: 'bass',
                    amount: 0,
                },

                carp: {
                    label: 'Carp',
                    name: 'carp',
                    amount: 0,
                },
            }
        },

        recipes: [

            // Worm Slayers

            {
                unlocked: false,
                result: { name: 'wandOfHealing', label: 'Wand of Healing', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'wormHeart', type: 'enemies' }, amount: 300 },
                ],
                goldCost: 1000,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'worm'
                },
                requiredMilestoneAmount: 250,
            },

            {
                unlocked: false,
                result: { name: 'wandOfMending', label: 'Wand of Mending', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'wormHeart', type: 'enemies' }, amount: 1000 },
                ],
                equipmentCosts: [{
                    label: 'Wand of Healing',
                    name: 'wandOfHealing',
                    amount: 1,
                }],
                goldCost: 10000,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'worm'
                },
                requiredMilestoneAmount: 500,
            },

            {
                unlocked: false,
                result: { name: 'wormSkull', label: 'Worm Skull', type: 'equipment' },
                equipmentCosts: [{
                    label: 'Wand of Healing',
                    name: 'wandOfHealing',
                    amount: 2,
                }],
                goldCost: 25000,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'worm'
                },
                requiredMilestoneAmount: 1000,
            },

            // Spider Slayers

            {
                unlocked: false,
                result: { name: 'enchantedString', label: 'Enchanted String', type: 'material' },
                materialCosts: [
                    { material: { name: 'string', type: 'enemies' }, amount: 10 },
                ],
                goldCost: 0,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'spider'
                },
                requiredMilestoneAmount: 250,
            },

            {
                unlocked: false,
                result: { name: 'venomousHelmet', label: 'Venomous Helmet', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'enchantedString', type: 'specialCrafting' }, amount: 100 },
                ],
                goldCost: 25000,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'spider'
                },
                requiredMilestoneAmount: 750,
            },

            {
                unlocked: false,
                result: { name: 'voraciousHelmet', label: 'Voracious Helmet', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'enchantedString', type: 'specialCrafting' }, amount: 250 },
                ],
                equipmentCosts: [{
                    label: 'Venomous Helmet',
                    name: 'venomousHelmet',
                    amount: 1,
                }],
                goldCost: 75000,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'spider'
                },
                requiredMilestoneAmount: 1500,
            },

            // Wolf Slayers

            {
                unlocked: false,
                result: { name: 'werewolfTooth', label: 'Werewolf Tooth', type: 'material' },
                materialCosts: [
                    { material: { name: 'wolfTooth', type: 'enemies' }, amount: 10 },
                ],
                goldCost: 0,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'wolf'
                },
                requiredMilestoneAmount: 500,
            },

            {
                unlocked: false,
                result: { name: 'packShield', label: 'Pack Shield', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'werewolfTooth', type: 'specialCrafting' }, amount: 100 },
                ],
                goldCost: 10000,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'wolf'
                },
                requiredMilestoneAmount: 750,
            },

            // Werewolf Armor

            {
                unlocked: false,
                result: { name: 'werewolfHelmet', label: 'werewolfHelmet', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'werewolfTooth', type: 'specialCrafting' }, amount: 50 },
                ],
                goldCost: 50000,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'wolf'
                },
                requiredMilestoneAmount: 1500,
            },

            {
                unlocked: false,
                result: { name: 'werewolfChestplate', label: 'werewolfChestplate', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'werewolfTooth', type: 'specialCrafting' }, amount: 50 },
                ],
                goldCost: 50000,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'wolf'
                },
                requiredMilestoneAmount: 1500,
            },

            {
                unlocked: false,
                result: { name: 'werewolfLeggings', label: 'werewolfLeggings', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'werewolfTooth', type: 'specialCrafting' }, amount: 50 },
                ],
                goldCost: 50000,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'wolf'
                },
                requiredMilestoneAmount: 1500,
            },

            {
                unlocked: false,
                result: { name: 'werewolfBoots', label: 'werewolfBoots', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'werewolfTooth', type: 'specialCrafting' }, amount: 50 },
                ],
                goldCost: 50000,
                requiredMilestoneType: {
                    categoryType: 'enemies',
                    subcategoryType: 'wolf'
                },
                requiredMilestoneAmount: 1500,
            },

            // Fishing Armors

            // Whitetip Shark Armor

            {
                unlocked: false,
                result: { name: 'whitetipSharkHelmet', label: 'Whitetip Shark Helmet', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'whitetipSharkTooth', type: 'specialDrops' }, amount: 25 },
                    { material: { name: 'cod', type: 'fishing' }, amount: 125 },
                ],
                goldCost: 0,
                requiredMilestoneType: {
                    categoryType: 'fishing',
                    subcategoryType: 'cod'
                },
                requiredMilestoneAmount: 1,
            },

            {
                unlocked: false,
                result: { name: 'whitetipSharkChestplate', label: 'Whitetip Shark Chestplate', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'whitetipSharkTooth', type: 'specialDrops' }, amount: 25 },
                    { material: { name: 'cod', type: 'fishing' }, amount: 125 },
                ],
                goldCost: 0,
                requiredMilestoneType: {
                    categoryType: 'fishing',
                    subcategoryType: 'cod'
                },
                requiredMilestoneAmount: 1,
            },

            {
                unlocked: false,
                result: { name: 'whitetipSharkLeggings', label: 'Whitetip Shark Leggings', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'whitetipSharkTooth', type: 'specialDrops' }, amount: 25 },
                    { material: { name: 'cod', type: 'fishing' }, amount: 125 },
                ],
                goldCost: 0,
                requiredMilestoneType: {
                    categoryType: 'fishing',
                    subcategoryType: 'cod'
                },
                requiredMilestoneAmount: 1,
            },

            {
                unlocked: false,
                result: { name: 'whitetipSharkBoots', label: 'Whitetip Shark Boots', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'whitetipSharkTooth', type: 'specialDrops' }, amount: 25 },
                    { material: { name: 'cod', type: 'fishing' }, amount: 125 },
                ],
                goldCost: 0,
                requiredMilestoneType: {
                    categoryType: 'fishing',
                    subcategoryType: 'cod'
                },
                requiredMilestoneAmount: 1,
            },

            // Tiger Shark Armor

            {
                unlocked: false,
                result: { name: 'tigerSharkHelmet', label: 'Tiger Shark Helmet', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'tigerSharkTooth', type: 'specialDrops' }, amount: 25 },
                    { material: { name: 'salmon', type: 'fishing' }, amount: 625 },
                ],
                goldCost: 0,
                requiredMilestoneType: {
                    categoryType: 'fishing',
                    subcategoryType: 'salmon'
                },
                requiredMilestoneAmount: 1,
            },

            {
                unlocked: false,
                result: { name: 'tigerSharkChestplate', label: 'Tiger Shark Chestplate', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'tigerSharkTooth', type: 'specialDrops' }, amount: 25 },
                    { material: { name: 'salmon', type: 'fishing' }, amount: 625 },
                ],
                goldCost: 0,
                requiredMilestoneType: {
                    categoryType: 'fishing',
                    subcategoryType: 'salmon'
                },
                requiredMilestoneAmount: 1,
            },

            {
                unlocked: false,
                result: { name: 'tigerSharkLeggings', label: 'Tiger Shark Leggings', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'tigerSharkTooth', type: 'specialDrops' }, amount: 25 },
                    { material: { name: 'salmon', type: 'fishing' }, amount: 625 },
                ],
                goldCost: 0,
                requiredMilestoneType: {
                    categoryType: 'fishing',
                    subcategoryType: 'salmon'
                },
                requiredMilestoneAmount: 1,
            },

            {
                unlocked: false,
                result: { name: 'tigerSharkBoots', label: 'Tiger Shark Boots', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'tigerSharkTooth', type: 'specialDrops' }, amount: 25 },
                    { material: { name: 'salmon', type: 'fishing' }, amount: 625 },
                ],
                goldCost: 0,
                requiredMilestoneType: {
                    categoryType: 'fishing',
                    subcategoryType: 'salmon'
                },
                requiredMilestoneAmount: 1,
            },

            // Great White Shark Armor

            {
                unlocked: false,
                result: { name: 'greatWhiteSharkHelmet', label: 'Great White Shark Helmet', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'greatWhiteSharkTooth', type: 'specialDrops' }, amount: 25 },
                    { material: { name: 'bass', type: 'fishing' }, amount: 1250 },
                ],
                goldCost: 0,
                requiredMilestoneType: {
                    categoryType: 'fishing',
                    subcategoryType: 'bass'
                },
                requiredMilestoneAmount: 1,
            },

            {
                unlocked: false,
                result: { name: 'greatWhiteSharkChestplate', label: 'Great White Shark Chestplate', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'greatWhiteSharkTooth', type: 'specialDrops' }, amount: 25 },
                    { material: { name: 'bass', type: 'fishing' }, amount: 1250 },
                ],
                goldCost: 0,
                requiredMilestoneType: {
                    categoryType: 'fishing',
                    subcategoryType: 'bass'
                },
                requiredMilestoneAmount: 1,
            },

            {
                unlocked: false,
                result: { name: 'greatWhiteSharkLeggings', label: 'Great White Shark Leggings', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'greatWhiteSharkTooth', type: 'specialDrops' }, amount: 25 },
                    { material: { name: 'bass', type: 'fishing' }, amount: 1250 },
                ],
                goldCost: 0,
                requiredMilestoneType: {
                    categoryType: 'fishing',
                    subcategoryType: 'bass'
                },
                requiredMilestoneAmount: 1,
            },

            {
                unlocked: false,
                result: { name: 'greatWhiteSharkBoots', label: 'Great White Shark Boots', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'greatWhiteSharkTooth', type: 'specialDrops' }, amount: 25 },
                    { material: { name: 'bass', type: 'fishing' }, amount: 1250 },
                ],
                goldCost: 0,
                requiredMilestoneType: {
                    categoryType: 'fishing',
                    subcategoryType: 'bass'
                },
                requiredMilestoneAmount: 1,
            },

            // Megalodon Shark Armor

            {
                unlocked: false,
                result: { name: 'megalodonSharkHelmet', label: 'Megalodon Shark Helmet', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'megalodonSharkTooth', type: 'specialDrops' }, amount: 25 },
                    { material: { name: 'carp', type: 'fishing' }, amount: 2500 },
                ],
                goldCost: 0,
                requiredMilestoneType: {
                    categoryType: 'fishing',
                    subcategoryType: 'carp'
                },
                requiredMilestoneAmount: 1,
            },

            {
                unlocked: false,
                result: { name: 'megalodonSharkChestplate', label: 'Megalodon Shark Chestplate', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'megalodonSharkTooth', type: 'specialDrops' }, amount: 25 },
                    { material: { name: 'carp', type: 'fishing' }, amount: 2500 },
                ],
                goldCost: 0,
                requiredMilestoneType: {
                    categoryType: 'fishing',
                    subcategoryType: 'carp'
                },
                requiredMilestoneAmount: 1,
            },

            {
                unlocked: false,
                result: { name: 'megalodonSharkLeggings', label: 'Megalodon Shark Leggings', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'megalodonSharkTooth', type: 'specialDrops' }, amount: 25 },
                    { material: { name: 'carp', type: 'fishing' }, amount: 2500 },
                ],
                goldCost: 0,
                requiredMilestoneType: {
                    categoryType: 'fishing',
                    subcategoryType: 'carp'
                },
                requiredMilestoneAmount: 1,
            },

            {
                unlocked: false,
                result: { name: 'megalodonSharkBoots', label: 'Megalodon Shark Boots', type: 'equipment' },
                materialCosts: [
                    { material: { name: 'megalodonSharkTooth', type: 'specialDrops' }, amount: 25 },
                    { material: { name: 'carp', type: 'fishing' }, amount: 2500 },
                ],
                goldCost: 0,
                requiredMilestoneType: {
                    categoryType: 'fishing',
                    subcategoryType: 'carp'
                },
                requiredMilestoneAmount: 1,
            },

        ],

        shop: [

            // Armors

            // Leather Set

            {
                unlocked: true,
                label: 'Leather Helmet',
                name: 'leatherHelmet',
                goldPrice: 500,
            },

            {
                unlocked: true,
                label: 'Leather Chestplate',
                name: 'leatherChestplate',
                goldPrice: 500,
            },

            {
                unlocked: true,
                label: 'Leather Leggings',
                name: 'leatherLeggings',
                goldPrice: 500,
            },

            {
                unlocked: true,
                label: 'Leather Boots',
                name: 'leatherBoots',
                goldPrice: 500,
            },

            // Chainmail Set

            {
                unlocked: true,
                label: 'Chainmail Helmet',
                name: 'chainmailHelmet',
                goldPrice: 1750,
            },

            {
                unlocked: true,
                label: 'Chainmail Chestplate',
                name: 'chainmailChestplate',
                goldPrice: 1750,
            },

            {
                unlocked: true,
                label: 'Chainmail Leggings',
                name: 'chainmailLeggings',
                goldPrice: 1750,
            },

            {
                unlocked: true,
                label: 'Chainmail Boots',
                name: 'chainmailBoots',
                goldPrice: 1750,
            },

            // Iron Set

            {
                unlocked: true,
                label: 'Iron Helmet',
                name: 'ironHelmet',
                goldPrice: 3000,
            },

            {
                unlocked: true,
                label: 'Iron Chestplate',
                name: 'ironChestplate',
                goldPrice: 3000,
            },

            {
                unlocked: true,
                label: 'Iron Leggings',
                name: 'ironLeggings',
                goldPrice: 3000,
            },

            {
                unlocked: true,
                label: 'Iron Boots',
                name: 'ironBoots',
                goldPrice: 3000,
            },

            // Diamond Set

            {
                unlocked: true,
                label: 'Diamond Helmet',
                name: 'diamondHelmet',
                goldPrice: 7500,
            },

            {
                unlocked: true,
                label: 'Diamond Chestplate',
                name: 'diamondChestplate',
                goldPrice: 7500,
            },

            {
                unlocked: true,
                label: 'Diamond Leggings',
                name: 'diamondLeggings',
                goldPrice: 7500,
            },

            {
                unlocked: true,
                label: 'Diamond Boots',
                name: 'diamondBoots',
                goldPrice: 7500,
            },

            // Reinforced Diamond Set

            {
                unlocked: true,
                label: 'Reinforced Diamond Helmet',
                name: 'reinforcedDiamondHelmet',
                goldPrice: 18750,
            },

            {
                unlocked: true,
                label: 'Reinforced Diamond Chestplate',
                name: 'reinforcedDiamondChestplate',
                goldPrice: 18750,
            },

            {
                unlocked: true,
                label: 'Reinforced Diamond Leggings',
                name: 'reinforcedDiamondLeggings',
                goldPrice: 18750,
            },

            {
                unlocked: true,
                label: 'Reinforced Diamond Boots',
                name: 'reinforcedDiamondBoots',
                goldPrice: 18750,
            },

            // Pickaxes

            {
                unlocked: true,
                label: 'Iron Pickaxe',
                name: 'ironPickaxe',
                goldPrice: 1000,
            },

            {
                unlocked: false,
                label: 'Gold Pickaxe',
                name: 'goldPickaxe',
                goldPrice: 5000,
                requiredSkill: {
                    skill: 'mining',
                    level: 1,
                }
            },

            {
                unlocked: false,
                label: 'Diamond Pickaxe',
                name: 'diamondPickaxe',
                goldPrice: 20000,
                requiredSkill: {
                    skill: 'mining',
                    level: 3,
                }
            },

            {
                unlocked: false,
                label: 'Reinforced Diamond Pickaxe',
                name: 'reinforcedDiamondPickaxe',
                goldPrice: 50000,
                requiredSkill: {
                    skill: 'mining',
                    level: 5,
                }
            },

            {
                unlocked: false,
                label: 'Mithril Pickaxe',
                name: 'mithrilPickaxe',
                goldPrice: 200000,
                requiredSkill: {
                    skill: 'mining',
                    level: 8,
                }
            },

            // Weapons

            {
                unlocked: true,
                label: 'Bronze Sword',
                name: 'bronzeSword',
                goldPrice: 100,
            },

            {
                unlocked: true,
                label: 'Iron Sword',
                name: 'ironSword',
                goldPrice: 750,
            },

            {
                unlocked: true,
                label: 'Diamond Sword',
                name: 'diamondSword',
                goldPrice: 3000,
            },

            {
                unlocked: true,
                label: 'Sharp Diamond Sword',
                name: 'sharpDiamondSword',
                goldPrice: 10000,
            },

            {
                unlocked: true,
                label: 'Mithril Sword',
                name: 'mithrilSword',
                goldPrice: 25000,
            },

            // Fishing Rods

            {
                unlocked: true,
                label: 'Fishing Rod',
                name: 'fishingRod',
                goldPrice: 50000,
            },

            {
                unlocked: true,
                label: 'Rod of the Sea',
                name: 'rodOfTheSea',
                goldPrice: 0,
                materialPrices: [
                    { material: { name: 'carp', type: 'fishing' }, amount: 200 },
                ],
                equipmentPrices: [{
                    label: 'Fishing Rod',
                    name: 'fishingRod',
                    amount: 1,
                }],
            },

            {
                unlocked: true,
                label: 'Lucky Rod',
                name: 'luckyRod',
                goldPrice: 0,
                materialPrices: [
                    { material: { name: 'carp', type: 'fishing' }, amount: 2000 },
                ],
                equipmentPrices: [{
                    label: 'Rod of the Sea',
                    name: 'rodOfTheSea',
                    amount: 1,
                }],
            },

            {
                unlocked: true,
                label: 'Blessed Rod',
                name: 'blessedRod',
                goldPrice: 0,
                materialPrices: [
                    { material: { name: 'carp', type: 'fishing' }, amount: 10000 },
                ],
                equipmentPrices: [{
                    label: 'Lucky Rod',
                    name: 'luckyRod',
                    amount: 1,
                }],
            },
        ],

        combatLog: [],

        fishingLog: [],

        skillBonuses: {
            combat: [{ strengthBonus: 1 }, { strengthBonus: 1 }, { strengthBonus: 1 }, { strengthBonus: 1 }, { strengthBonus: 1 }, { strengthBonus: 4 }, { strengthBonus: 4 }, { strengthBonus: 4 }, { strengthBonus: 4 }, { strengthBonus: 4 }, { strengthBonus: 5 }, { strengthBonus: 5 }, { strengthBonus: 5 }, { strengthBonus: 5 }, { strengthBonus: 5 }, { strengthBonus: 10 }, { strengthBonus: 10 }, { strengthBonus: 10 }, { strengthBonus: 10 }, { strengthBonus: 10 }, { strengthBonus: 10 }],
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