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
	
	event.remove({ output: 'createarmory:barrel_part'})
	event.remove({ output: 'createarmory:nine_mm'})
	event.remove({ output: 'createarmory:five_five_six'})
	event.remove({ output: 'createarmory:shotgun_shell'})
	event.remove({ output: 'createarmory:fifty_cal'})
	event.remove({ output: 'createarmory:rpg_rocket'})
	
    event.remove({ output: 'createarmory:four_sixteen_upper'})
    event.remove({ output: 'createarmory:m_four_upper'})
    event.remove({ output: 'createarmory:m_four_lower'})
    event.remove({ output: 'createarmory:empty_mac_ten'})
    event.remove({ output: 'createarmory:empty_double_barrel'})
    event.remove({ output: 'createarmory:barret_upper'})
    event.remove({ output: 'createarmory:barret_lower'})
    event.remove({ output: 'createarmory:minigun_barrel'})
    event.remove({ output: 'createarmory:minigun_base'})
    event.remove({ output: 'createarmory:empty_rpg'})
    
	let itr = 'createarmory:unfinished_nine_mm'
	event.recipes.create.sequenced_assembly(['createarmory:nine_mm'],
		'createarmory:nine_mm_casing',
		[
			event.recipes.createDeploying(itr, [itr,'minecraft:gunpowder']),
			event.recipes.createDeploying(itr, [itr,'minecraft:gunpowder']),
			event.recipes.createPressing(itr,itr)
		]
	).transitionalItem(itr).loops(1)

	itr = 'createarmory:unfinished_five_five_six_casing'
	event.recipes.create.sequenced_assembly(['createarmory:five_five_six'],
		'createarmory:five_five_six_casing',
		[
			event.recipes.createDeploying(itr, [itr,'kubejs:refined_explosive_powder']),
			event.recipes.createPressing(itr,itr)
		]
	).transitionalItem(itr).loops(1)

	itr = 'createarmory:unfinished_shotgun_shell'
	event.recipes.create.sequenced_assembly(['createarmory:shotgun_shell'],
		'minecraft:red_candle',
		[
			event.recipes.createDeploying(itr, [itr,'createdeco:industrial_iron_nugget']),
			event.recipes.createDeploying(itr, [itr,'createdeco:industrial_iron_nugget']),
			event.recipes.createDeploying(itr, [itr,'kubejs:refined_explosive_powder']),
			event.recipes.createPressing(itr,itr)
		]
	).transitionalItem(itr).loops(1)

	itr = 'createarmory:unfinished_fifty_cal_casing'
	event.recipes.create.sequenced_assembly(['createarmory:fifty_cal'],
		'createarmory:fifty_cal_casing',
		[
			event.recipes.createDeploying(itr, [itr,'kubejs:stabilized_crushed_nether_star']),
			event.recipes.createDeploying(itr, [itr,'kubejs:stabilized_crushed_nether_star']),
			event.recipes.createDeploying(itr, [itr,'createdeco:netherite_nugget']),
			event.recipes.createPressing(itr,itr),
			event.recipes.createPressing(itr,itr)
		]
	).transitionalItem(itr).loops(1)
	
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

	event.shaped('createarmory:barrel_part', [
        'aaa', 
        'bbb',
        'aaa'  
    ], {
        a: 'create:sturdy_sheet', 
        b: 'create:andesite_alloy'
    })

	event.shaped('createarmory:smoke_nade', [
        'b ',
        'cd',
        'a '
    ], {
        a: 'minecraft:glass_bottle', 
        b: 'minecraft:gunpowder',
		c: 'supplementaries:ash',
		d: 'minecraft:stone_button'
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

	event.recipes.create.filling('lapis_lazuli', [Fluid.of('create_enchantment_industry:experience', 10), 'quartz'])

    event.recipes.create.compacting('kubejs:oreo_thin', ['kubejs:oreo_wafer_top','kubejs:oreo_cream','kubejs:oreo_wafer_bottom']).superheated()
    
    event.recipes.create.haunting('create:zinc_ingot','iron_ingot')

	event.recipes.create.crushing('4x kubejs:nether_star_fragment','nether_star')
	
	event.recipes.create.crushing('2x kubejs:unstable_crushed_nether_star','kubejs:nether_star_fragment')
	
	event.recipes.create.mixing(['2x create:cinder_flour','glass_bottle'],['supplementaries:ash','irons_spellbooks:blood_vial']).heated()

	event.recipes.create.mixing('kubejs:refined_explosive_powder',['2x alexscaves:sulfur_dust','blaze_powder','gunpowder']).heated()

	event.recipes.create.mixing('32x kubejs:stabilized_crushed_nether_star',['32x kubejs:unstable_crushed_nether_star','cataclysm:ignitium_ingot','kubejs:refined_explosive_powder']).superheated()

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

    // CREATE ARMORY STUFF
    event.recipes.createMechanicalCrafting('createarmory:four_sixteen_upper', [
		' caaa',
		'bbbaa',
		'  aaa'
	], {
		a: 'create:brass_ingot',
		b: 'createarmory:barrel_part',
		c: 'create:electron_tube'
        
	})

    event.recipes.createMechanicalCrafting('createarmory:m_four_upper', [
		' aaa',
		'bbca',
		' aaa'
	], {
		a: 'create:brass_ingot',
		b: 'createarmory:barrel_part',
		c: 'createdeco:industrial_iron_ingot'
        
	})

    event.recipes.createMechanicalCrafting('createarmory:m_four_lower', [
		'aaaa',
		'accd',
		'  bb'
	], {
		a: 'create:brass_ingot',
		b: 'create:brass_casing',
		c: 'createdeco:industrial_iron_ingot',
        d: 'create:precision_mechanism'
	})

    event.recipes.createMechanicalCrafting('createarmory:empty_mac_ten', [
		' aa ',
		'bbda',
		' aca',
        '  cc'
	], {
		a: 'create:brass_ingot',
		b: 'createarmory:barrel_part',
		c: 'createdeco:industrial_iron_ingot',
        d: 'create:precision_mechanism'
	})

    event.recipes.createMechanicalCrafting('createarmory:empty_double_barrel', [
		'bbaa  ',
		'bbda  ',
		'  acae',
	], {
		a: 'create:brass_ingot',
		b: 'createarmory:barrel_part',
		c: 'create:sturdy_sheet',
        d: 'create:precision_mechanism',
        e: 'create:brass_casing'
	})

    event.recipes.createMechanicalCrafting('createarmory:barret_upper', [
		'   daaa',
		'ebbbbfc',
		'    aaa',
	], {
		a: 'create:brass_ingot',
		b: 'createarmory:barrel_part',
		c: 'create:sturdy_sheet',
        d: 'create:electron_tube',
        e: 'cataclysm:ignitium_ingot',
		f: 'alexscaves:tesla_bulb'
	})

    event.recipes.createMechanicalCrafting('createarmory:barret_lower', [
		'aaaaa  ',
		'aadcab ',
		'  ecabb',
	], {
		a: 'create:brass_ingot',
		b: 'create:brass_casing',
		c: 'create:sturdy_sheet',
        d: 'create:precision_mechanism',
        e: 'cataclysm:ignitium_ingot'
	})

    event.recipes.createMechanicalCrafting('createarmory:minigun_barrel', [
		'babbb',
		'cd   ',
		'babbb',
	], {
		a: 'create:brass_ingot',
		b: 'createarmory:barrel_part',
		c: 'minecraft:netherite_ingot',
        d: 'cataclysm:ignitium_ingot'
	})

    event.recipes.createMechanicalCrafting('createarmory:minigun_base', [
		'aaaf ',
		'bdecc',
		'aaaf ',
	], {
		a: 'create:brass_ingot',
		b: 'create:flywheel',
		c: 'create:railway_casing',
        d: 'create:precision_mechanism',
        e: 'create:large_cogwheel',
        f: 'minecraft:netherite_ingot'
	})

    event.recipes.createMechanicalCrafting('createarmory:empty_rpg', [
		'fccchae',
		'bbbbdgb',
		'fccchae',
		'   aaac',
	], {
		a: 'create:brass_ingot',
		b: 'createarmory:barrel_part',
		c: 'create:sturdy_sheet',
        d: 'create:precision_mechanism',
        e: 'create:electron_tube',
        f: 'cataclysm:ignitium_ingot',
        g: 'alexscaves:remote_detonator',
        h: 'minecraft:netherite_ingot'
	})

	event.recipes.createMechanicalCrafting('createarmory:rpg_rocket', [
		'a',
		'b',
		'b',
		'c',
		'd',
	], {
		a: 'createdeco:industrial_iron_ingot',
		b: 'tnt',
		c: 'blaze_rod',
        d: 'createarmory:barrel_part'
	})

})
MoreJSEvents.filterEnchantedBookTrade((event) => {
    event.remove("ars_elemental:soulbound");
});
LootJS.modifiers(event => {
    event.addLootTableModifier(/.*/)
        .removeLoot('tempad:he_who_remains_tempad')
        .removeLoot('ars_nouveau:warp_scroll')
		.removeLoot('simplehats:hatbag_epic')
		.removeLoot('simplehats:hatbag_rare')
})