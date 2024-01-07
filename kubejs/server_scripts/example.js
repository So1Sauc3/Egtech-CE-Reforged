ServerEvents.recipes(event => {
    event.remove({ output: 'createdeco:brass_coin' })
    event.remove({ output: 'createdeco:copper_coin' })
    event.remove({ output: 'createdeco:netherite_coin' })
    event.remove({ output: 'ars_nouveau:warp_scroll' })
    event.remove({ output: 'ars_nouveau:enchantment' })
    event.remove({ output: 'tempad:tempad' })
    event.remove({ output: 'witherstormmod:amulet' })
    event.remove({ output: 'a_man_with_plushies:golden_plush_box' })
    event.remove({ output: 'a_man_with_plushies:plush_box' })
    
    event.shaped('a_man_with_plushies:plush_box', [
        'ABA', 
        'CDC',
        'ABA'  
    ], {
        A: 'minecraft:spruce_slab', 
        B: 'minecraft:red_wool',
        C: 'minecraft:diamond',
        D: 'minecraft:nether_star'   
    })

    event.shapeless('kubejs:example_iron_farm', [
    'create:empty_schematic',
    'minecraft:iron_ingot'
    ])

    event.shapeless('kubejs:example_gold_farm', [
        'create:empty_schematic',
        'minecraft:gold_ingot'
    ])
    
    event.recipes.create.splashing('gold_nugget', 'red_sand')

    event.recipes.create.compacting('kubejs:oreo_thin', ['kubejs:oreo_wafer_top','kubejs:oreo_cream','kubejs:oreo_wafer_bottom']).superheated()
    
    event.recipes.create.haunting('create:zinc_ingot','iron_ingot')

    event.recipes.createMechanicalCrafting('minecraft:enchanted_golden_apple', [
		' AAA ',
		'AABAA',
		'ABCBA',
        'AABAA',
        ' AAA '
	], {
		A: 'minecraft:gold_block',
		B: 'create:experience_block',
		C: 'create:honeyed_apple'
	})
})
MoreJSEvents.filterEnchantedBookTrade((event) => {
    event.remove("ars_elemental:soulbound");
});
LootJS.modifiers(event => {
    event.addLootTableModifier(/.*/)
        .removeLoot('tempad:he_who_remains_tempad')
        .removeLoot('ars_nouveau:warp_scroll')
        .removeLoot('minecraft:enchanted_book{Enchantments: [{id:"ars_elemental:soulbound", lvl:1}]}')
})