ServerEvents.recipes(event => {
    event.remove({ output: 'createdeco:brass_coin' })
    event.remove({ output: 'createdeco:copper_coin' })
    event.remove({ output: 'createdeco:netherite_coin' })
    event.remove({ output: 'ars_nouveau:warp_scroll' })
    event.remove({ output: 'tempad:tempad' })
    
    event.shapeless('kubejs:example_iron_farm', [
    'create:empty_schematic',
    'minecraft:iron_ingot'
    ])

    event.shapeless('kubejs:example_gold_farm', [
        'create:empty_schematic',
        'minecraft:gold_ingot'
    ])
    
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
LootJS.modifiers(event => {
    event.addLootTableModifier(/.*/)
        .removeLoot('tempad:he_who_remains_tempad')
})