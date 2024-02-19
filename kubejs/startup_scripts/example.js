StartupEvents.registry('item', e => {
    e.create('example_iron_farm')
    e.create('example_gold_farm')
    e.create('oreo_thin').rarity('epic').unstackable()
    e.create('oreo_wafer_bottom').rarity('uncommon')
    e.create('oreo_wafer_top').rarity('uncommon')
    e.create('oreo_cream').rarity('uncommon')
    /*
    e.create('refined_explosive_powder').rarity('uncommon')
    e.create('nether_star_fragment').rarity('uncommon')
    e.create('unstable_crushed_nether_star').rarity('uncommon')
    e.create('stabilized_crushed_nether_star').rarity('rare')
    */
})
const EnchantedBookItem = Java.loadClass("net.minecraft.world.item.EnchantedBookItem");
global.onAnvilUpdate = (event) => {
    if (!event.left.hasTag("simplyswords:uniques") && !event.left.hasTag("minecraft:swords") && !event.left.hasTag("minecraft:axes") && event.left.hasTag("minecraft:tools")) {
        return;
    }

    const enchantments = EnchantedBookItem.getEnchantments(event.right);
    for(let e of enchantments) {
        if(e.getString("id") === "ars_elemental:soulbound") {
            event.setCanceled(true);
            return;
        }
    }
}
ForgeEvents.onEvent("net.minecraftforge.event.AnvilUpdateEvent", event => {
    global.onAnvilUpdate(event)
})