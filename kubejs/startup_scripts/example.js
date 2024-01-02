StartupEvents.registry('item', e => {
    e.create('example_iron_farm')
    e.create('example_gold_farm')
    e.create('oreo_thin').rarity('epic').unstackable()
    e.create('oreo_wafer_bottom')
    e.create('oreo_wafer_top')
    e.create('oreo_cream')
    
})
const EnchantedBookItem = Java.loadClass("net.minecraft.world.item.EnchantedBookItem");
global.onAnvilUpdate = (event) => {
    if (!event.left.hasTag("simplyswords:uniques") && !event.left.hasTag("travelersbackpack:custom_travelers_backpack")) {
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