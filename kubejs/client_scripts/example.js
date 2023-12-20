Ponder.tags((event) => {
    event.createTag("kubejs:example_farms", "kubejs:example_iron_farm", "Example Farms", "Made by _Soi", [
        "kubejs:example_iron_farm",
        "kubejs:example_gold_farm"
    ]);
});
Ponder.registry((event) => {
    event
    .create("kubejs:example_iron_farm")
    .scene(
        "scene_iron_farm", 
        "Basic iron farm", 
        "kubejs:scene_iron_farm", 
        (scene, util) => {
            
            scene.world.showSection([0, 0, 0, 4, 0, 5], Facing.DOWN);
            scene.idle(20);

            scene.world.showSection([2, 1, 2], Facing.DOWN);
            scene.text(60, "Inventory slots all filled with at least 1 iron nugget/flint for a primitive filter", [2, 1, 2]).attachKeyFrame();
            scene.idle(60);

            scene.world.showSection([0, 2, 0, 4, 2, 3], Facing.DOWN);
            scene.text(60, "Fan to wash gravel into iron nuggets and flint", [2, 2, 3]).attachKeyFrame();
            scene.idle(60);

            scene.text(60, "Adding more fans and increasing rotation speed will speed up processing", [2, 2, 3]).attachKeyFrame();
            scene.idle(60);

            scene.world.showSection([0, 3, 0, 4, 3, 3], Facing.DOWN);
            scene.idle(20);

            scene.world.showSection([0, 4, 0, 4, 4, 3], Facing.DOWN);
            scene.text(60, "The main bottleneck in this farm is the millstone, grinding cobble into gravel", [2, 4, 3]).attachKeyFrame();
            scene.idle(60);
            
            scene.world.showSection([0, 5, 0, 4, 6, 3], Facing.DOWN);
            scene.text(60, "Simple cobblestone generator, using a drill to harvest blocks", [2, 5, 3]).attachKeyFrame();
            scene.idle(60);

            scene.world.showSection([0, 1, 4, 4, 6, 5], Facing.DOWN);
            scene.text(120, "This example is highly inefficient, but expandable for better rates", [2, 1, 2]).attachKeyFrame();
    });
});
Ponder.registry((event) => {
    event
    .create("kubejs:example_gold_farm")
    .scene(
        "scene_gold_farm", 
        "Basic gold farm", 
        "kubejs:scene_gold_farm", 
        (scene, util) => {
            scene.world.showSection([0, 0, 0, 6, 0, 6], Facing.DOWN);
            scene.idle(20);
            
            scene.world.showSection([2, 3, 5, 4, 9, 6], Facing.DOWN);
            scene.world.showSection([3, 7, 4], Facing.DOWN);
            scene.text(40, "Simple cobblestone generator, using a drill to harvest blocks", [3, 7, 5]).attachKeyFrame();
            scene.idle(40);
            scene.text(80, "2 sets of crushing wheels, crushing into gravel then into sand, clay balls, and flint", [3, 7, 5]).attachKeyFrame();
            scene.idle(80);
            
            scene.world.showSection([3, 2, 4, 3, 4, 4], Facing.DOWN);
            scene.world.showSection([3, 2, 5], Facing.DOWN);
            scene.text(60, "Wash sand to obtain more clay balls", [3, 4, 4]).attachKeyFrame();
            scene.idle(60);
            
            scene.world.showSection([2, 2, 3, 4, 5, 3], Facing.DOWN);
            scene.text(60, "Separate the byproduct flint from the clay output by filtering", [2, 2, 3]).attachKeyFrame();
            scene.idle(60);
            
            scene.world.showSection([4, 4, 2, 4, 6, 2], Facing.DOWN);
            scene.text(60, "Press the clay balls into clay blocks", [4, 6, 2]).attachKeyFrame();
            scene.idle(60);
            
            scene.world.showSection([2, 3, 2, 3, 6, 2], Facing.DOWN);
            scene.text(60, "Blast the clay blocks to obtain terracotta", [3, 6, 2]).attachKeyFrame();
            scene.idle(60);
            
            scene.world.showSection([2, 2, 2, 4, 2, 2], Facing.DOWN);
            scene.text(60, "Crush the terracotta to obtain red sand", [3, 2, 2]).attachKeyFrame();
            scene.idle(60);

            scene.world.showSection([3, 1, 1, 3, 3, 1], Facing.DOWN);
            scene.world.showSection([3, 1, 2], Facing.DOWN);
            scene.text(60, "Finally, wash the red sand to obtain golden nuggets", [3, 4, 1]).attachKeyFrame();
            scene.idle(20);
            
            scene.world.showSection([3, 2, 0], Facing.DOWN);
            scene.idle(40);
            scene.text(60, "Behold: successful transmutation from mere stone into pure golden nuggets", [3, 2, 0]).attachKeyFrame();
            scene.idle(60);

            scene.world.showSection([0, 1, 0, 6, 9, 6], Facing.UP);
            scene.text(60, "Just don't forget to wire everything up to spin the correct direction...", [3, 4, 3]).attachKeyFrame();
            scene.idle(120);
    });
});