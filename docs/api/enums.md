# Enums and constants

Many functions take a value from a fixed list, like a direction, a block, or a mob.
In JavaScript you can write either the **constant** (for example `FORWARD`) or the full **enum name** (for example `SixDirection.Forward`). They mean the same thing. The editor uses the constants when it converts blocks to JavaScript.

[AgentAssist](#agentassist) · [AgentCommand](#agentcommand) · [AgentDetection](#agentdetection) · [AgentInspection](#agentinspection) · [AnimalMob](#animalmob) · [Axis](#axis) · [Block](#block) · [BlockColor](#blockcolor) · [CardinalDirection](#cardinaldirection) · [ChatArgument](#chatargument) · [CloneMask](#clonemask) · [CloneMode](#clonemode) · [ColoredBlock](#coloredblock) · [ComparatorMode](#comparatormode) · [CompassDirection](#compassdirection) · [CreatureMob](#creaturemob) · [DayTime](#daytime) · [Effect](#effect) · [ExplorationMode](#explorationmode) · [ExplorationRule](#explorationrule) · [ExplorationTimeQuery](#explorationtimequery) · [FillOperation](#filloperation) · [FourDirection](#fourdirection) · [GameDifficulty](#gamedifficulty) · [GameMode](#gamemode) · [GameRule](#gamerule) · [Item](#item) · [LeverPosition](#leverposition) · [MonsterMob](#monstermob) · [Particle](#particle) · [ProjectileMob](#projectilemob) · [ShapeOperation](#shapeoperation) · [SixDirection](#sixdirection) · [StructureAnimationMode](#structureanimationmode) · [StructureMirrorAxis](#structuremirroraxis) · [StructureRotation](#structurerotation) · [StructureSaveMode](#structuresavemode) · [TargetSelectorKind](#targetselectorkind) · [TargetUserSelectorKind](#targetuserselectorkind) · [TestForBlocksMask](#testforblocksmask) · [TimeQuery](#timequery) · [TravelMethod](#travelmethod) · [TurnDirection](#turndirection) · [Weather](#weather)

## AgentAssist

Agent assist action

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `PLACE_ON_MOVE` | `AgentAssist.PlaceOnMove` | place on move |
| `PLACE_FROM_ANY_SLOT` | `AgentAssist.PlaceFromAnySlot` | place from any slot |
| `DESTROY_OBSTACLES` | `AgentAssist.DestroyObstacles` | destroy obstacles |
|  | `AgentAssist.DetroyObstacles` |  |

## AgentCommand

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `ATTACK` | `AgentCommand.Attack` | attack |
| `DESTROY` | `AgentCommand.Destroy` | destroy |
| `TILL` | `AgentCommand.Till` | till |
| `DROP_ALL` | `AgentCommand.DropAll` | dropall |

## AgentDetection

| Constant | Enum member | Shown in blocks as |
|---|---|---|
|  | `AgentDetection.Block` | block |
|  | `AgentDetection.Redstone` | redstone |

## AgentInspection

| Constant | Enum member | Shown in blocks as |
|---|---|---|
|  | `AgentInspection.Block` | block |
|  | `AgentInspection.Data` | data |

## AnimalMob

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `CHICKEN` | `AnimalMob.Chicken` | chicken |
| `COW` | `AnimalMob.Cow` | cow |
| `PIG` | `AnimalMob.Pig` | pig |
| `SHEEP` | `AnimalMob.Sheep` | sheep |
| `WOLF` | `AnimalMob.Wolf` | wolf |
| `VILLAGER` | `AnimalMob.Villager` | villager |
| `MUSHROOM_COW` | `AnimalMob.MushroomCow` | mooshroom |
| `SQUID` | `AnimalMob.Squid` | squid |
| `RABBIT` | `AnimalMob.Rabbit` | rabbit |
| `BAT` | `AnimalMob.Bat` | bat |
| `OCELOT` | `AnimalMob.Ocelot` | ocelot |
| `HORSE` | `AnimalMob.Horse` | horse |
| `DONKEY` | `AnimalMob.Donkey` | donkey |
| `MULE` | `AnimalMob.Mule` | mule |
| `SKELETON_HORSE` | `AnimalMob.SkeletonHorse` | skeleton horse |
| `ZOMBIE_HORSE` | `AnimalMob.ZombieHorse` | zombie horse |
| `POLAR_BEAR` | `AnimalMob.PolarBear` | polar bear |
| `LLAMA` | `AnimalMob.Llama` | llama |
| `PARROT` | `AnimalMob.Parrot` | parrot |
| `DOLPHIN` | `AnimalMob.Dolphin` | dolphin |
| `SEA_TURTLE` | `AnimalMob.SeaTurtle` | sea turtle |
| `CAT` | `AnimalMob.Cat` | cat |
| `PUFFERFISH` | `AnimalMob.Pufferfish` | pufferfish |
| `SALMON` | `AnimalMob.Salmon` | salmon |
| `TROPICAL_FISH` | `AnimalMob.TropicalFish` | tropical fish |
| `COD` | `AnimalMob.Cod` | cod |
| `PANDA` | `AnimalMob.Panda` | panda |
| `WANDERING_TRADER` | `AnimalMob.WanderingTrader` | wandering trader |
| `FOX` | `AnimalMob.Fox` | fox |
| `BEE` | `AnimalMob.Bee` | bee |
| `AXOLOTL` | `AnimalMob.Axolotl` | axolotl |
| `GLOW_SQUID` | `AnimalMob.GlowSquid` | glow squid |
| `GOAT` | `AnimalMob.Goat` | goat |
| `STRIDER` | `AnimalMob.Strider` | strider |
| `ALLAY` | `AnimalMob.Allay` | allay |
| `FROG` | `AnimalMob.Frog` | frog |
| `TADPOLE` | `AnimalMob.Tadpole` | tadpole |
| `CAMEL` | `AnimalMob.Camel` | camel |
| `SNIFFER` | `AnimalMob.Sniffer` | sniffer |
| `ARMADILLO` | `AnimalMob.Armadillo` | armadillo |
| `AGENT` | `AnimalMob.Agent` | agent |
| `HAPPY_GHAST` | `AnimalMob.HappyGhast` | happy ghast |

## Axis

| Constant | Enum member | Shown in blocks as |
|---|---|---|
|  | `Axis.X` | x (East/West) |
|  | `Axis.Y` | y (Up/Down) |
|  | `Axis.Z` | z (South/North) |

## Block

Minecraft block types: Grass, Stone, Air, etc...

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `AIR` | `Block.Air` | Air |
| `STONE` | `Block.Stone` | Stone |
| `GRASS` | `Block.Grass` | Grass Block |
| `DIRT` | `Block.Dirt` | Dirt |
| `COBBLESTONE` | `Block.Cobblestone` | Cobblestone |
| `PLANKS_OAK` | `Block.PlanksOak` | Oak Planks |
| `OAK_SAPLING` | `Block.OakSapling` | Oak Sapling |
| `BEDROCK` | `Block.Bedrock` | Bedrock |
| `WATER` | `Block.Water` | Water |
| `LAVA` | `Block.Lava` | Lava |
| `SAND` | `Block.Sand` | Sand |
| `GRAVEL` | `Block.Gravel` | Gravel |
| `GOLD_ORE` | `Block.GoldOre` | Gold Ore |
| `IRON_ORE` | `Block.IronOre` | Iron Ore |
| `COAL_ORE` | `Block.CoalOre` | Coal Ore |
| `LOG_OAK` | `Block.LogOak` | Oak Log |
| `LEAVES_OAK` | `Block.LeavesOak` | Oak Leaves |
| `SPONGE` | `Block.Sponge` | Sponge |
| `GLASS` | `Block.Glass` | Glass |
| `LAPIS_ORE` | `Block.LapisOre` | Lapis Lazuli Ore |
| `LAPIS_LAZULI_BLOCK` | `Block.LapisLazuliBlock` | Block Of Lapis Lazuli |
| `SANDSTONE` | `Block.Sandstone` | Sandstone |
| `NOTE_BLOCK` | `Block.NoteBlock` | Note Block |
| `BED` | `Block.Bed` | Bed |
| `POWERED_RAIL` | `Block.PoweredRail` | Powered Rail |
| `DETECTOR_RAIL` | `Block.DetectorRail` | Detector Rail |
| `STICKY_PISTON` | `Block.StickyPiston` | Sticky Piston |
| `COBWEB` | `Block.Cobweb` | Cobweb |
| `DEAD_BUSH` | `Block.DeadBush` | Dead Bush |
| `PISTON` | `Block.Piston` | Piston |
| `WOOL` | `Block.Wool` | White Wool |
| `YELLOW_FLOWER` | `Block.YellowFlower` | Dandelion |
| `POPPY` | `Block.Poppy` | Poppy |
| `BROWN_MUSHROOM` | `Block.BrownMushroom` | Brown Mushroom |
| `RED_MUSHROOM` | `Block.RedMushroom` | Red Mushroom |
| `GOLD_BLOCK` | `Block.GoldBlock` | Block of Gold |
| `IRON_BLOCK` | `Block.IronBlock` | Block of Iron |
| `DOUBLE_STONE_SLAB` | `Block.DoubleStoneSlab` | Double Stone Slab |
| `SMOOTH_STONE_SLAB` | `Block.SmoothStoneSlab` | Smooth Stone Slab |
| `BRICKS` | `Block.Bricks` | Brick Block |
| `TNT` | `Block.TNT` | TNT |
| `BOOKSHELF` | `Block.Bookshelf` | Bookshelf |
| `MOSS_STONE` | `Block.MossStone` | Mossy Cobblestone |
| `OBSIDIAN` | `Block.Obsidian` | Obsidian |
| `TORCH` | `Block.Torch` | Torch |
| `FIRE` | `Block.Fire` | Fire |
| `MONSTER_SPAWNER` | `Block.MonsterSpawner` | Monster Spawner |
| `OAK_WOOD_STAIRS` | `Block.OakWoodStairs` | Oak Stairs |
| `CHEST` | `Block.Chest` | Chest |
| `REDSTONE_WIRE` | `Block.RedstoneWire` | Redstone Dust |
| `DIAMOND_ORE` | `Block.DiamondOre` | Diamond Ore |
| `DIAMOND_BLOCK` | `Block.DiamondBlock` | Block of Diamond |
| `CRAFTING_TABLE` | `Block.CraftingTable` | Crafting Table |
| `CROPS` | `Block.Crops` | Crops |
| `FARMLAND` | `Block.Farmland` | Farmland |
| `FURNACE` | `Block.Furnace` | Furnace |
| `LADDER` | `Block.Ladder` | Ladder |
| `RAIL` | `Block.Rail` | Rail |
| `COBBLESTONE_STAIRS` | `Block.CobblestoneStairs` | Cobblestone Stairs |
| `LEVER` | `Block.Lever` | Lever |
| `STONE_PRESSURE_PLATE` | `Block.StonePressurePlate` | Stone Pressure Plate |
| `WOODEN_PRESSURE_PLATE` | `Block.WoodenPressurePlate` | Oak Pressure Plate |
| `REDSTONE_ORE` | `Block.RedstoneOre` | Redstone Ore |
| `REDSTONE_TORCH` | `Block.RedstoneTorch` | Redstone Torch |
| `TOP_SNOW` | `Block.TopSnow` | Top Snow |
| `ICE` | `Block.Ice` | Ice |
| `SNOW` | `Block.Snow` | Snow |
| `CACTUS` | `Block.Cactus` | Cactus |
| `CLAY` | `Block.Clay` | Clay Block |
| `SUGAR_CANE` | `Block.SugarCane` | Sugar cane |
| `JUKEBOX` | `Block.Jukebox` | Jukebox |
| `OAK_FENCE` | `Block.OakFence` | Oak Fence |
| `PUMPKIN` | `Block.Pumpkin` | Pumpkin |
| `NETHERRACK` | `Block.Netherrack` | Netherrack |
| `SOUL_SAND` | `Block.SoulSand` | Soul Sand |
| `GLOWSTONE` | `Block.Glowstone` | Glowstone |
| `JACK_O_LANTERN` | `Block.JackOLantern` | Jack o'Lantern |
| `CAKE` | `Block.Cake` | Cake |
| `UNPOWERED_REPEATER` | `Block.UnpoweredRepeater` | Redstone Repeater |
| `WOODEN_TRAPDOOR` | `Block.WoodenTrapdoor` | Oak Trapdoor |
| `STONE_MONSTER_EGG` | `Block.StoneMonsterEgg` | Infested Stone |
| `STONE_BRICKS` | `Block.StoneBricks` | Stone Bricks |
| `MUSHROOM0` | `Block.Mushroom0` | Mushroom |
| `IRON_BARS` | `Block.IronBars` | Iron Bars |
| `GLASS_PANE` | `Block.GlassPane` | Glass Pane |
| `MELON_BLOCK` | `Block.MelonBlock` | Melon |
| `PUMPKIN_STEM` | `Block.PumpkinStem` | Pumpkin Stem |
| `MELON_STEM` | `Block.MelonStem` | Melon Stem |
| `VINES` | `Block.Vines` | Vines |
| `OAK_FENCE_GATE` | `Block.OakFenceGate` | Oak Fence Gate |
| `BRICK_STAIRS` | `Block.BrickStairs` | Brick Stairs |
| `STONE_BRICK_STAIRS` | `Block.StoneBrickStairs` | Stone Brick Stairs |
| `MYCELIUM` | `Block.Mycelium` | Mycelium |
| `LILY_PAD` | `Block.LilyPad` | Lily Pad |
| `NETHER_BRICK` | `Block.NetherBrick` | Nether Brick Block |
| `NETHER_BRICK_FENCE` | `Block.NetherBrickFence` | Nether Brick Fence |
| `NETHER_BRICK_STAIRS` | `Block.NetherBrickStairs` | Nether Brick Stairs |
| `NETHER_WART` | `Block.NetherWart` | Nether Wart |
| `ENCHANTMENT_TABLE` | `Block.EnchantmentTable` | Enchantment Table |
| `BREWING_STAND` | `Block.BrewingStand` | Brewing Stand |
| `CAULDRON` | `Block.Cauldron` | Cauldron |
| `END_PORTAL` | `Block.EndPortal` | End Portal Frame |
| `ENDSTONE` | `Block.Endstone` | End Stone |
| `DRAGON_EGG` | `Block.DragonEgg` | Dragon Egg |
| `REDSTONE_LAMP` | `Block.RedstoneLamp` | Redstone Lamp |
| `ACTIVATOR_RAIL` | `Block.ActivatorRail` | Activator Rail |
| `COCOA` | `Block.Cocoa` | Cocoa |
| `SANDSTONE_STAIRS` | `Block.SandstoneStairs` | Sandstone Stairs |
| `EMERALD_ORE` | `Block.EmeraldOre` | Emerald Ore |
| `ENDER_CHEST` | `Block.EnderChest` | Ender Chest |
| `TRIPWIRE_HOOK` | `Block.TripwireHook` | Tripwire Hook |
| `TRIPWIRE` | `Block.Tripwire` | Tripwire |
| `EMERALD_BLOCK` | `Block.EmeraldBlock` | Block of Emerald |
| `SPRUCE_WOOD_STAIRS` | `Block.SpruceWoodStairs` | Spruce Stairs |
| `BIRCH_WOOD_STAIRS` | `Block.BirchWoodStairs` | Birch Stairs |
| `JUNGLE_WOOD_STAIRS` | `Block.JungleWoodStairs` | Jungle Stairs |
| `BEACON` | `Block.Beacon` | Beacon |
| `COBBLESTONE_WALL` | `Block.CobblestoneWall` | Cobblestone Wall |
| `FLOWER_POT` | `Block.FlowerPot` | Flower Pot |
| `CARROTS` | `Block.Carrots` | Carrots |
| `POTATOES` | `Block.Potatoes` | Potatoes |
| `SKELETON_SKULL` | `Block.SkeletonSkull` | Skeleton Skull |
| `ANVIL` | `Block.Anvil` | Anvil |
| `TRAPPED_CHEST` | `Block.TrappedChest` | Trapped Chest |
| `WEIGHTED_PRESSURE_PLATE_LIGHT` | `Block.WeightedPressurePlateLight` | Weighted Pressure Plate (Light) |
| `WEIGHTED_PRESSURE_PLATE_HEAVY` | `Block.WeightedPressurePlateHeavy` | Weighted Pressure Plate (Heavy) |
| `UNPOWERED_COMPARATOR` | `Block.UnpoweredComparator` | Redstone Comparator |
| `DAYLIGHT_SENSOR` | `Block.DaylightSensor` | Daylight Sensor |
| `REDSTONE_BLOCK` | `Block.RedstoneBlock` | Block of Redstone |
| `QUARTZ_ORE` | `Block.QuartzOre` | Nether Quartz Ore |
| `HOPPER` | `Block.Hopper` | Hopper |
| `BLOCK_OF_QUARTZ` | `Block.BlockOfQuartz` | Block of Quartz |
| `QUARTZ_STAIRS` | `Block.QuartzStairs` | Quartz Stairs |
| `DOUBLE_WOODEN_SLAB` | `Block.DoubleWoodenSlab` | Double Wooden Slab |
| `OAK_WOOD_SLAB` | `Block.OakWoodSlab` | Oak Slab |
| `WHITE_TERRACOTTA` | `Block.WhiteTerracotta` | White Terracotta |
| `WHITE_STAINED_GLASS_PANE` | `Block.WhiteStainedGlassPane` | White Stained Glass Pane |
| `ACACIA_LEAVES` | `Block.AcaciaLeaves` | Acacia Leaves |
| `LOG_ACACIA` | `Block.LogAcacia` | Acacia Log |
| `ACACIA_WOOD_STAIRS` | `Block.AcaciaWoodStairs` | Acacia Stairs |
| `DARK_OAK_WOOD_STAIRS` | `Block.DarkOakWoodStairs` | Dark Oak Stairs |
| `SLIME_BLOCK` | `Block.SlimeBlock` | Slime Block |
| `IRON_TRAPDOOR` | `Block.IronTrapdoor` | Iron Trapdoor |
| `PRISMARINE` | `Block.Prismarine` | Prismarine |
| `SEA_LANTERN` | `Block.SeaLantern` | Sea Lantern |
| `HAY_BLOCK` | `Block.HayBlock` | Hay Bale |
| `WHITE_CARPET` | `Block.WhiteCarpet` | White Carpet |
| `HARDENED_CLAY` | `Block.HardenedClay` | Terracotta |
| `COAL_BLOCK` | `Block.CoalBlock` | Block of Coal |
| `PACKED_ICE` | `Block.PackedIce` | Packed Ice |
| `SUNFLOWER` | `Block.Sunflower` | Sunflower |
| `RED_SANDSTONE` | `Block.RedSandstone` | Red Sandstone |
| `RED_SANDSTONE_STAIRS` | `Block.RedSandstoneStairs` | Red Sandstone Stairs |
| `DOUBLE_RED_SANDSTONE_SLAB` | `Block.DoubleRedSandstoneSlab` | Double Red Sandstone Slab |
| `RED_SANDSTONE_SLAB` | `Block.RedSandstoneSlab` | Red Sandstone Slab |
| `SPRUCE_FENCE_GATE` | `Block.SpruceFenceGate` | Spruce Fence Gate |
| `BIRCH_FENCE_GATE` | `Block.BirchFenceGate` | Birch Fence Gate |
| `JUNGLE_FENCE_GATE` | `Block.JungleFenceGate` | Jungle Fence Gate |
| `DARK_OAK_FENCE_GATE` | `Block.DarkOakFenceGate` | Dark Oak Fence Gate |
| `ACACIA_FENCE_GATE` | `Block.AcaciaFenceGate` | Acacia Fence Gate |
| `GRASS_PATH` | `Block.GrassPath` | Grass Path |
| `FRAME` | `Block.Frame` | Frame |
| `CHORUS_FLOWER` | `Block.ChorusFlower` | Chorus Flower |
| `PURPUR_BLOCK` | `Block.PurpurBlock` | Purpur Block |
| `PURPUR_STAIRS` | `Block.PurpurStairs` | Purpur Stairs |
| `END_STONE_BRICKS` | `Block.EndStoneBricks` | End Stone Bricks |
| `END_ROD` | `Block.EndRod` | End Rod |
| `MAGMA_BLOCK` | `Block.MagmaBlock` | Magma Block |
| `NETHER_WART_BLOCK` | `Block.NetherWartBlock` | Nether Wart Block |
| `RED_NETHER_BRICK` | `Block.RedNetherBrick` | Red Nether Brick |
| `BONE_BLOCK` | `Block.BoneBlock` | Bone Block |
| `WHITE_SHULKER_BOX` | `Block.WhiteShulkerBox` | White Shulker Box |
| `PURPLE_GLAZED_TERRACOTTA` | `Block.PurpleGlazedTerracotta` | Purple Glazed Terracotta |
| `WHITE_GLAZED_TERRACOTTA` | `Block.WhiteGlazedTerracotta` | White Glazed Terracotta |
| `ORANGE_GLAZED_TERRACOTTA` | `Block.OrangeGlazedTerracotta` | Orange Glazed Terracotta |
| `MAGENTA_GLAZED_TERRACOTTA` | `Block.MagentaGlazedTerracotta` | Magenta Glazed Terracotta |
| `LIGHT_BLUE_GLAZED_TERRACOTTA` | `Block.LightBlueGlazedTerracotta` | Light Blue Glazed Terracotta |
| `YELLOW_GLAZED_TERRACOTTA` | `Block.YellowGlazedTerracotta` | Yellow Glazed Terracotta |
| `LIME_GLAZED_TERRACOTTA` | `Block.LimeGlazedTerracotta` | Lime Glazed Terracotta |
| `PINK_GLAZED_TERRACOTTA` | `Block.PinkGlazedTerracotta` | Pink Glazed Terracotta |
| `GRAY_GLAZED_TERRACOTTA` | `Block.GrayGlazedTerracotta` | Gray Glazed Terracotta |
| `LIGHT_GRAY_GLAZED_TERRACOTTA` | `Block.LightGrayGlazedTerracotta` | Light Gray Glazed Terracotta |
| `CYAN_GLAZED_TERRACOTTA` | `Block.CyanGlazedTerracotta` | Cyan Glazed Terracotta |
| `BLUE_GLAZED_TERRACOTTA` | `Block.BlueGlazedTerracotta` | Blue Glazed Terracotta |
| `BROWN_GLAZED_TERRACOTTA` | `Block.BrownGlazedTerracotta` | Brown Glazed Terracotta |
| `GREEN_GLAZED_TERRACOTTA` | `Block.GreenGlazedTerracotta` | Green Glazed Terracotta |
| `RED_GLAZED_TERRACOTTA` | `Block.RedGlazedTerracotta` | Red Glazed Terracotta |
| `BLACK_GLAZED_TERRACOTTA` | `Block.BlackGlazedTerracotta` | Black Glazed Terracotta |
| `WHITE_CONCRETE` | `Block.WhiteConcrete` | White Concrete |
| `WHITE_CONCRETE_POWDER` | `Block.WhiteConcretePowder` | White Concrete Powder |
| `CHORUS_PLANT` | `Block.ChorusPlant` | Chorus Plant |
| `WHITE_STAINED_GLASS` | `Block.WhiteStainedGlass` | White Stained Glass |
| `PODZOL` | `Block.Podzol` | Podzol |
| `BEETROOT` | `Block.Beetroot` | Beetroot |
| `STONECUTTER` | `Block.Stonecutter` | Stonecutter |
| `OBSERVER` | `Block.Observer` | Observer |
| `STRUCTURE_BLOCK` | `Block.StructureBlock` | Structure Block |
| `PRISMARINE_STAIRS` | `Block.PrismarineStairs` | Prismarine Stairs |
| `DARK_PRISMARINE_STAIRS` | `Block.DarkPrismarineStairs` | Dark Prismarine Stairs |
| `PRISMARINE_BRICK_STAIRS` | `Block.PrismarineBrickStairs` | Prismarine Brick Stairs |
| `STRIPPED_SPRUCE_WOOD` | `Block.StrippedSpruceWood` | Stripped Spruce Log |
| `STRIPPED_BIRCH_WOOD` | `Block.StrippedBirchWood` | Stripped Birch Log |
| `STRIPPED_JUNGLE_WOOD` | `Block.StrippedJungleWood` | Stripped Jungle Log |
| `STRIPPED_ACACIA_WOOD` | `Block.StrippedAcaciaWood` | Stripped Acacia Log |
| `STRIPPED_DARK_OAK_WOOD` | `Block.StrippedDarkOakWood` | Stripped Dark Oak Log |
| `STRIPPED_OAK_WOOD` | `Block.StrippedOakWood` | Stripped Oak Log |
| `BLUE_ICE` | `Block.BlueIce` | Blue Ice |
| `SEAGRASS` | `Block.Seagrass` | Seagrass |
| `TUBE_CORAL` | `Block.TubeCoral` | Tube Coral |
| `TUBE_CORAL_BLOCK` | `Block.TubeCoralBlock` | Tube Coral Block |
| `TUBE_CORAL_FAN` | `Block.TubeCoralFan` | Tube Coral Fan |
| `DEAD_TUBE_CORAL_FAN` | `Block.DeadTubeCoralFan` | Dead Tube Coral Fan |
| `KELP` | `Block.Kelp` | Kelp |
| `DRIED_KELP_BLOCK` | `Block.DriedKelpBlock` | Dried Kelp Block |
| `ACACIA_BUTTON` | `Block.AcaciaButton` | Acacia Button |
| `BIRCH_BUTTON` | `Block.BirchButton` | Birch Button |
| `DARK_OAK_BUTTON` | `Block.DarkOakButton` | Dark Oak Button |
| `JUNGLE_BUTTON` | `Block.JungleButton` | Jungle Button |
| `SPRUCE_BUTTON` | `Block.SpruceButton` | Spruce Button |
| `ACACIA_TRAPDOOR` | `Block.AcaciaTrapdoor` | Acacia Trapdoor |
| `BIRCH_TRAPDOOR` | `Block.BirchTrapdoor` | Birch Trapdoor |
| `DARK_OAK_TRAPDOOR` | `Block.DarkOakTrapdoor` | Dark Oak Trapdoor |
| `JUNGLE_TRAPDOOR` | `Block.JungleTrapdoor` | Jungle Trapdoor |
| `SPRUCE_TRAPDOOR` | `Block.SpruceTrapdoor` | Spruce Trapdoor |
| `ACACIA_PRESSURE_PLATE` | `Block.AcaciaPressurePlate` | Acacia Pressure Plate |
| `BIRCH_PRESSURE_PLATE` | `Block.BirchPressurePlate` | Birch Pressure Plate |
| `DARK_OAK_PRESSURE_PLATE` | `Block.DarkOakPressurePlate` | Dark Oak Pressure Plate |
| `JUNGLE_PRESSURE_PLATE` | `Block.JunglePressurePlate` | Jungle Pressure Plate |
| `SPRUCE_PRESSURE_PLATE` | `Block.SprucePressurePlate` | Spruce Pressure Plate |
| `CARVED_PUMPKIN` | `Block.CarvedPumpkin` | Carved Pumpkin |
| `SEA_PICKLE` | `Block.SeaPickle` | Sea Pickle |
| `BAMBOO` | `Block.Bamboo` | Bamboo |
| `SCAFFOLDING` | `Block.Scaffolding` | Scaffolding |
| `BLAST_FURNACE` | `Block.BlastFurnace` | Blast Furnace |
| `STONECUTTER_BLOCK` | `Block.StonecutterBlock` | Stonecutter |
| `SMOKER` | `Block.Smoker` | Smoker |
| `CARTOGRAPHY_TABLE` | `Block.CartographyTable` | Cartography Table |
| `FLETCHING_TABLE` | `Block.FletchingTable` | Fletching Table |
| `SMITHING_TABLE` | `Block.SmithingTable` | Smithing Table |
| `BARREL` | `Block.Barrel` | Barrel |
| `LOOM` | `Block.Loom` | Loom |
| `BELL` | `Block.Bell` | Bell |
| `CAMPFIRE` | `Block.Campfire` | Campfire |
| `COMPOSTER` | `Block.Composter` | Composter |
| `BEE_NEST` | `Block.BeeNest` | Bee Nest |
| `BEEHIVE` | `Block.Beehive` | Beehive |
| `HONEY_BLOCK` | `Block.HoneyBlock` | Honey Block |
| `HONEYCOMB_BLOCK` | `Block.HoneycombBlock` | Honeycomb Block |
| `CRIMSON_PLANKS` | `Block.CrimsonPlanks` | Crimson Planks |
| `WARPED_PLANKS` | `Block.WarpedPlanks` | Warped Planks |
| `BLACKSTONE_WALL` | `Block.BlackstoneWall` | Blackstone Wall |
| `CRIMSON_FENCE` | `Block.CrimsonFence` | Crimson Fence |
| `WARPED_FENCE` | `Block.WarpedFence` | Warped Fence |
| `CRIMSON_FENCE_GATE` | `Block.CrimsonFenceGate` | Crimson Fence Gate |
| `WARPED_FENCE_GATE` | `Block.WarpedFenceGate` | Warped Fence Gate |
| `CHAIN` | `Block.Chain` | Chain |
| `SMALL_DRIPLEAF` | `Block.SmallDripleaf` | Small Dripleaf |
| `CRIMSON_STAIRS` | `Block.CrimsonStairs` | Crimson Stairs |
| `WARPED_STAIRS` | `Block.WarpedStairs` | Warped Stairs |
| `BLACKSTONE_STAIRS` | `Block.BlackstoneStairs` | Blackstone Stairs |
| `GLOW_LICHEN` | `Block.GlowLichen` | Glow Lichen |
| `CRIMSON_BUTTON` | `Block.CrimsonButton` | Crimson Button |
| `ANCIENT_DEBRIS` | `Block.AncientDebris` | Ancient Debris |
| `RESPAWN_ANCHOR` | `Block.RespawnAnchor` | Respawn Anchor |
| `TINTED_GLASS` | `Block.TintedGlass` | Tinted Glass |
| `SOUL_SOIL` | `Block.SoulSoil` | Soul Soil |
| `CRIMSON_SLAB` | `Block.CrimsonSlab` | Crimson Slab |
| `WARPED_SLAB` | `Block.WarpedSlab` | Warped Slab |
| `BLACKSTONE_SLAB` | `Block.BlackstoneSlab` | Blackstone Slab |
| `CHISELED_NETHER_BRICKS` | `Block.ChiseledNetherBricks` | Chiseled Nether Bricks |
| `CRACKED_NETHER_BRICKS` | `Block.CrackedNetherBricks` | Cracked Nether Bricks |
| `BLOCK_OF_COPPER` | `Block.BlockOfCopper` | Block of Copper |
| `EXPOSED_COPPER` | `Block.ExposedCopper` | Exposed Copper |
| `WEATHERED_COPPER` | `Block.WeatheredCopper` | Weathered Copper |
| `OXIDIZED_COPPER` | `Block.OxidizedCopper` | Oxidized Copper |
| `BLOCK_OF_NETHERITE` | `Block.BlockOfNetherite` | Block of Netherite |
| `SHROOMLIGHT` | `Block.Shroomlight` | Shroomlight |
| `CRIMSON_DOOR` | `Block.CrimsonDoor` | Crimson Door |
| `BASALT` | `Block.Basalt` | Basalt |
| `POLISHED_BASALT` | `Block.PolishedBasalt` | Polished Basalt |
| `BLACKSTONE` | `Block.Blackstone` | Blackstone |
| `POLISHED_BLACKSTONE` | `Block.PolishedBlackstone` | Polished Blackstone |
| `AZALEA_LEAVES` | `Block.AzaleaLeaves` | Azalea Leaves |
| `POINTED_DRIPSTONE` | `Block.PointedDripstone` | Pointed Dripstone |
| `BIG_DRIPLEAF` | `Block.BigDripleaf` | Big Dripleaf |
| `AZALEA` | `Block.Azalea` | Azalea |
| `FLOWERING_AZALEA` | `Block.FloweringAzalea` | Flowering Azalea |
| `AMETHYST_BLOCK` | `Block.AmethystBlock` | Amethyst Block |
| `AMETHYST_CLUSTER` | `Block.AmethystCluster` | Amethyst Cluster |
| `CRYING_OBSIDIAN` | `Block.CryingObsidian` | Crying Obsidian |
| `LIGHTNING_ROD` | `Block.LightningRod` | Lightning Rod |
| `WARPED_BUTTON` | `Block.WarpedButton` | Warped Button |
| `CRIMSON_PRESSURE_PLATE` | `Block.CrimsonPressurePlate` | Crimson Pressure Plate |
| `WARPED_PRESSURE_PLATE` | `Block.WarpedPressurePlate` | Warped Pressure Plate |
| `TARGET` | `Block.Target` | Target |
| `WARPED_DOOR` | `Block.WarpedDoor` | Warped Door |
| `POWDER_SNOW` | `Block.PowderSnow` | Powder Snow |
| `IRON_DOOR` | `Block.IronDoor` | Iron Door |
| `SOUL_CAMPFIRE` | `Block.SoulCampfire` | Soul Campfire |
| `ACACIA_SIGN` | `Block.AcaciaSign` | Acacia Sign |
| `BIRCH_SIGN` | `Block.BirchSign` | Birch Sign |
| `SLATE` | `Block.Slate` | Slate |
| `CRIMSON_SIGN` | `Block.CrimsonSign` | Crimson Sign |
| `DARK_OAK_SIGN` | `Block.DarkOakSign` | Dark Oak Sign |
| `JUNGLE_SIGN` | `Block.JungleSign` | Jungle Sign |
| `MANGROVE_BUTTON` | `Block.MangroveButton` | Mangrove Button |
| `MANGROVE_DOOR` | `Block.MangroveDoor` | Mangrove Door |
| `MANGROVE_FENCE` | `Block.MangroveFence` | Mangrove Fence |
| `MANGROVE_FENCE_GATE` | `Block.MangroveFenceGate` | Mangrove Fence Gate |
| `MANGROVE_LEAVES` | `Block.MangroveLeaves` | Mangrove Leaves |
| `MANGROVE_LOG` | `Block.MangroveLog` | Mangrove Log |
| `MANGROVE_PLANKS` | `Block.MangrovePlanks` | Mangrove Planks |
| `MANGROVE_PRESSURE_PLATE` | `Block.MangrovePressurePlate` | Mangrove Pressure Plate |
| `MANGROVE_PROPAGULE` | `Block.MangrovePropagule` | Mangrove Propagule |
| `MANGROVE_ROOTS` | `Block.MangroveRoots` | Mangrove Roots |
| `MANGROVE_SLAB` | `Block.MangroveSlab` | Mangrove Slab |
| `MANGROVE_STAIRS` | `Block.MangroveStairs` | Mangrove Stairs |
| `MANGROVE_SIGN` | `Block.MangroveSign` | Mangrove Sign |
| `MANGROVE_TRAPDOOR` | `Block.MangroveTrapdoor` | Mangrove Trapdoor |
| `MANGROVE_WOOD` | `Block.MangroveWood` | Mangrove Wood |
| `MUD` | `Block.Mud` | Mud |
| `MUD_BRICKS` | `Block.MudBricks` | Mud Bricks |
| `MUDDY_MANGROVE_ROOTS` | `Block.MuddyMangroveRoots` | Muddy Mangrove Roots |
| `OCHRE_FROGLIGHT` | `Block.OchreFroglight` | Ochre Froglight |
| `PACKED_MUD` | `Block.PackedMud` | Packed Mud |
| `PEARLESCENT_FROGLIGHT` | `Block.PearlescentFroglight` | Pearlescent Froglight |
| `REINFORCED_DEEPSLATE` | `Block.ReinforcedDeepslate` | Reinforced Deepslate |
| `SCULK` | `Block.Sculk` | Sculk |
| `SCULK_CATALYST` | `Block.SculkCatalyst` | Sculk Catalyst |
| `SCULK_SHRIEKER` | `Block.SculkShrieker` | Sculk Shrieker |
| `SCULK_VEIN` | `Block.SculkVein` | Sculk Vein |
| `SPRUCE_SIGN` | `Block.SpruceSign` | Spruce Sign |
| `STRIPPED_MANGROVE_LOG` | `Block.StrippedMangroveLog` | Stripped Mangrove Log |
| `STRIPPED_MANGROVE_WOOD` | `Block.StrippedMangroveWood` | Stripped Mangrove Wood |
| `VERDANT_FROGLIGHT` | `Block.VerdantFroglight` | Verdant Froglight |
| `WARPED_SIGN` | `Block.WarpedSign` | Warped Sign |
| `ACACIA_DOOR` | `Block.AcaciaDoor` | Acacia Door |
| `FLOWERING_AZALEA_LEAVES` | `Block.FloweringAzaleaLeaves` | Flowering Azalea Leaves |
| `BIRCH_DOOR` | `Block.BirchDoor` | Birch Door |
| `DARK_OAK_DOOR` | `Block.DarkOakDoor` | Dark Oak Door |
| `JUNGLE_DOOR` | `Block.JungleDoor` | Jungle Door |
| `SPRUCE_DOOR` | `Block.SpruceDoor` | Spruce Door |
| `OAK_DOOR` | `Block.OakDoor` | Oak Door |
| `MOSSY_STONE_BRICK_SLAB` | `Block.MossyStoneBrickSlab` | Mossy Stone Brick Slab |
| `BLOCK_OF_RAW_IRON` | `Block.BlockOfRawIron` | Block Of Raw Iron |
| `BANNER` | `Block.Banner` | Banner |
| `OAK_SIGN` | `Block.OakSign` | Oak Sign |
| `WARPED_FUNGUS` | `Block.WarpedFungus` | Warped Fungus |
| `BLOCK_OF_BAMBOO` | `Block.BlockOfBamboo` | Block Of Bamboo |
| `BAMBOO_BUTTON` | `Block.BambooButton` | Bamboo Button |
| `BAMBOO_FENCE` | `Block.BambooFence` | Bamboo Fence |
| `BAMBOO_FENCE_GATE` | `Block.BambooFenceGate` | Bamboo Fence Gate |
| `BAMBOO_MOSAIC` | `Block.BambooMosaic` | Bamboo Mosaic |
| `BAMBOO_MOSAIC_SLAB` | `Block.BambooMosaicSlab` | Bamboo Mosaic Slab |
| `BAMBOO_MOSAIC_STAIRS` | `Block.BambooMosaicStairs` | Bamboo Mosaic Stairs |
| `BAMBOO_PLANKS` | `Block.BambooPlanks` | Bamboo Planks |
| `BAMBOO_PRESSURE_PLATE` | `Block.BambooPressurePlate` | Bamboo Pressure Plate |
| `BAMBOO_SLAB` | `Block.BambooSlab` | Bamboo Slab |
| `BAMBOO_STAIRS` | `Block.BambooStairs` | Bamboo Stairs |
| `BAMBOO_STANDING_SIGN` | `Block.BambooStandingSign` | Bamboo Standing Sign |
| `BAMBOO_TRAPDOOR` | `Block.BambooTrapdoor` | Bamboo Trapdoor |
| `CHERRY_BUTTON` | `Block.CherryButton` | Cherry Button |
| `CHERRY_FENCE` | `Block.CherryFence` | Cherry Fence |
| `CHERRY_FENCE_GATE` | `Block.CherryFenceGate` | Cherry Fence Gate |
| `CHERRY_LEAVES` | `Block.CherryLeaves` | Cherry Leaves |
| `CHERRY_LOG` | `Block.CherryLog` | Cherry Log |
| `CHERRY_PLANKS` | `Block.CherryPlanks` | Cherry Planks |
| `CHERRY_PRESSURE_PLATE` | `Block.CherryPressurePlate` | Cherry Pressure Plate |
| `CHERRY_SAPLING` | `Block.CherrySapling` | Cherry Sapling |
| `CHERRY_SLAB` | `Block.CherrySlab` | Cherry Slab |
| `CHERRY_STAIRS` | `Block.CherryStairs` | Cherry Stairs |
| `CHERRY_STANDING_SIGN` | `Block.CherryStandingSign` | Cherry Standing Sign |
| `CHERRY_TRAPDOOR` | `Block.CherryTrapdoor` | Cherry Trapdoor |
| `CHERRY_WOOD` | `Block.CherryWood` | Cherry Wood |
| `CHISELED_BOOKSHELF` | `Block.ChiseledBookshelf` | Chiseled Bookshelf |
| `MOSS_BLOCK` | `Block.MossBlock` | Moss Block |
| `BLOCK_OF_STRIPPED_BAMBOO` | `Block.BlockOfStrippedBamboo` | Block Of Stripped Bamboo |
| `STRIPPED_CHERRY_LOG` | `Block.StrippedCherryLog` | Stripped Cherry Log |
| `STRIPPED_CHERRY_WOOD` | `Block.StrippedCherryWood` | Stripped Cherry Wood |
| `SUSPICIOUS_GRAVEL` | `Block.SuspiciousGravel` | Suspicious Gravel |
| `SUSPICIOUS_SAND` | `Block.SuspiciousSand` | Suspicious Sand |
| `TORCHFLOWER` | `Block.Torchflower` | Torchflower |
| `CHISELED_TUFF` | `Block.ChiseledTuff` | Chiseled Tuff |
| `CHISELED_TUFF_BRICKS` | `Block.ChiseledTuffBricks` | Chiseled Tuff Bricks |
| `COPPER_DOOR` | `Block.CopperDoor` | Copper Door |
| `COPPER_TRAPDOOR` | `Block.CopperTrapdoor` | Copper Trapdoor |
| `CRAFTER` | `Block.Crafter` | Crafter |
| `POLISHED_TUFF` | `Block.PolishedTuff` | Polished Tuff |
| `POLISHED_TUFF_SLAB` | `Block.PolishedTuffSlab` | Polished Tuff Slab |
| `POLISHED_TUFF_STAIRS` | `Block.PolishedTuffStairs` | Polished Tuff Stairs |
| `POLISHED_TUFF_WALL` | `Block.PolishedTuffWall` | Polished Tuff Wall |
| `SHORT_GRASS` | `Block.ShortGrass` | Short Grass |
| `TUFF` | `Block.Tuff` | Tuff |
| `TUFF_BRICK_SLAB` | `Block.TuffBrickSlab` | Tuff Brick Slab |
| `TUFF_BRICK_STAIRS` | `Block.TuffBrickStairs` | Tuff Brick Stairs |
| `TUFF_BRICK_WALL` | `Block.TuffBrickWall` | Tuff Brick Wall |
| `TUFF_BRICKS` | `Block.TuffBricks` | Tuff Bricks |
| `TUFF_SLAB` | `Block.TuffSlab` | Tuff Slab |
| `TUFF_STAIRS` | `Block.TuffStairs` | Tuff Stairs |
| `TUFF_WALL` | `Block.TuffWall` | Tuff Wall |
| `BLACK_CANDLE` | `Block.BlackCandle` | Black Candle |
| `BLUE_CANDLE` | `Block.BlueCandle` | Blue Candle |
| `BROWN_CANDLE` | `Block.BrownCandle` | Brown Candle |
| `BUSH` | `Block.Bush` | Bush |
| `CACTUS_FLOWER` | `Block.CactusFlower` | Cactus Flower |
| `CANDLE` | `Block.Candle` | Candle |
| `CLOSED_EYEBLOSSOM` | `Block.ClosedEyeblossom` | Closed Eyeblossom |
| `CREAKING_HEART` | `Block.CreakingHeart` | Creaking Heart |
| `CYAN_CANDLE` | `Block.CyanCandle` | Cyan Candle |
| `DRIED_GHAST` | `Block.DriedGhast` | Dried Ghast |
| `FIREFLY_BUSH` | `Block.FireflyBush` | Firefly Bush |
| `GRAY_CANDLE` | `Block.GrayCandle` | Gray Candle |
| `GREEN_CANDLE` | `Block.GreenCandle` | Green Candle |
| `LEAF_LITTER` | `Block.LeafLitter` | Leaf Litter |
| `LIGHT_BLUE_CANDLE` | `Block.LightBlueCandle` | Light Blue Candle |
| `LIGHT_GRAY_CANDLE` | `Block.LightGrayCandle` | Light Gray Candle |
| `LIME_CANDLE` | `Block.LimeCandle` | Lime Candle |
| `MAGENTA_CANDLE` | `Block.MagentaCandle` | Magenta Candle |
| `OPEN_EYEBLOSSOM` | `Block.OpenEyeblossom` | Open Eyeblossom |
| `ORANGE_CANDLE` | `Block.OrangeCandle` | Orange Candle |
| `PALE_HANGING_MOSS` | `Block.PaleHangingMoss` | Pale Hanging Moss |
| `PALE_MOSS_BLOCK` | `Block.PaleMossBlock` | Pale Moss Block |
| `PALE_MOSS_CARPET` | `Block.PaleMossCarpet` | Pale Moss Carpet |
| `PALE_OAK_BUTTON` | `Block.PaleOakButton` | Pale Oak Button |
| `PALE_OAK_DOOR` | `Block.PaleOakDoor` | Pale Oak Door |
| `PALE_OAK_FENCE` | `Block.PaleOakFence` | Pale Oak Fence |
| `PALE_OAK_FENCE_GATE` | `Block.PaleOakFenceGate` | Pale Oak Fence Gate |
| `PALE_OAK_HANGING_SIGN` | `Block.PaleOakHangingSign` | Pale Oak Hanging Sign |
| `PALE_OAK_LEAVES` | `Block.PaleOakLeaves` | Pale Oak Leaves |
| `PALE_OAK_LOG` | `Block.PaleOakLog` | Pale Oak Log |
| `PALE_OAK_PLANKS` | `Block.PaleOakPlanks` | Pale Oak Planks |
| `PALE_OAK_PRESSURE_PLATE` | `Block.PaleOakPressurePlate` | Pale Oak Pressure Plate |
| `PALE_OAK_SAPLING` | `Block.PaleOakSapling` | Pale Oak Sapling |
| `PALE_OAK_SLAB` | `Block.PaleOakSlab` | Pale Oak Slab |
| `PALE_OAK_STAIRS` | `Block.PaleOakStairs` | Pale Oak Stairs |
| `PALE_OAK_STANDING_SIGN` | `Block.PaleOakStandingSign` | Pale Oak Standing Sign |
| `PALE_OAK_TRAPDOOR` | `Block.PaleOakTrapdoor` | Pale Oak Trapdoor |
| `PALE_OAK_WOOD` | `Block.PaleOakWood` | Pale Oak Wood |
| `PINK_CANDLE` | `Block.PinkCandle` | Pink Candle |
| `PURPLE_CANDLE` | `Block.PurpleCandle` | Purple Candle |
| `RED_CANDLE` | `Block.RedCandle` | Red Candle |
| `BLOCK_OF_RESIN` | `Block.BlockOfResin` | Block Of Resin |
| `TALL_DRY_GRASS` | `Block.TallDryGrass` | Tall Dry Grass |
| `WHITE_CANDLE` | `Block.WhiteCandle` | White Candle |
| `WILDFLOWERS` | `Block.Wildflowers` | Wildflowers |
| `YELLOW_CANDLE` | `Block.YellowCandle` | Yellow Candle |
| `GRANITE` | `Block.Granite` | Granite |
| `COARSE_DIRT` | `Block.CoarseDirt` | Coarse Dirt |
| `PLANKS_SPRUCE` | `Block.PlanksSpruce` | Spruce Planks |
| `SPRUCE_SAPLING` | `Block.SpruceSapling` | Spruce Sapling |
| `RED_SAND` | `Block.RedSand` | Red Sand |
| `LOG_SPRUCE` | `Block.LogSpruce` | Spruce Log |
| `LEAVES_SPRUCE` | `Block.LeavesSpruce` | Spruce Leaves |
| `WET_SPONGE` | `Block.WetSponge` | Wet Sponge |
| `CHISELED_SANDSTONE` | `Block.ChiseledSandstone` | Chiseled Sandstone |
| `TALLGRASS` | `Block.Tallgrass` | Grass |
| `ORANGE_WOOL` | `Block.OrangeWool` | Orange Wool |
| `BLUE_ORCHID` | `Block.BlueOrchid` | Blue Orchid |
| `SANDSTONE_SLAB` | `Block.SandstoneSlab` | Sandstone Slab |
| `SPRUCE_FENCE` | `Block.SpruceFence` | Spruce Fence |
| `COBBLESTONE_MONSTER_EGG` | `Block.CobblestoneMonsterEgg` | Infested Cobblestone |
| `MOSSY_STONE_BRICKS` | `Block.MossyStoneBricks` | Mossy Stone Bricks |
| `MOSSY_COBBLESTONE_WALL` | `Block.MossyCobblestoneWall` | Mossy Cobblestone Wall |
| `SLIGHTLY_DAMAGED_ANVIL` | `Block.SlightlyDamagedAnvil` | Slightly Damaged Anvil |
| `CHISELED_QUARTZ_BLOCK` | `Block.ChiseledQuartzBlock` | Chiseled Quartz Block |
| `SPRUCE_WOOD_SLAB` | `Block.SpruceWoodSlab` | Spruce Slab |
| `ORANGE_TERRACOTTA` | `Block.OrangeTerracotta` | Orange Terracotta |
| `ORANGE_STAINED_GLASS_PANE` | `Block.OrangeStainedGlassPane` | Orange Stained Glass Pane |
| `DARK_OAK_LEAVES` | `Block.DarkOakLeaves` | Dark Oak Leaves |
| `LOG_DARK_OAK` | `Block.LogDarkOak` | Dark Oak Log |
| `DARK_PRISMARINE` | `Block.DarkPrismarine` | Dark Prismarine |
| `ORANGE_CARPET` | `Block.OrangeCarpet` | Orange Carpet |
| `LILAC` | `Block.Lilac` | Lilac |
| `CHISELED_RED_SANDSTONE` | `Block.ChiseledRedSandstone` | Chiseled Red Sandstone |
| `PURPUR_SLAB` | `Block.PurpurSlab` | Purpur Slab |
| `ORANGE_SHULKER_BOX` | `Block.OrangeShulkerBox` | Orange Shulker Box |
| `ORANGE_CONCRETE` | `Block.OrangeConcrete` | Orange Concrete |
| `ORANGE_CONCRETE_POWDER` | `Block.OrangeConcretePowder` | Orange Concrete Powder |
| `ORANGE_STAINED_GLASS` | `Block.OrangeStainedGlass` | Orange Stained Glass |
| `BRAIN_CORAL` | `Block.BrainCoral` | Brain Coral |
| `BRAIN_CORAL_BLOCK` | `Block.BrainCoralBlock` | Brain Coral Block |
| `BRAIN_CORAL_FAN` | `Block.BrainCoralFan` | Brain Coral Fan |
| `DEAD_BRAIN_CORAL_FAN` | `Block.DeadBrainCoralFan` | Dead Brain Coral Fan |
| `POSTER` | `Block.Poster` | Poster |
| `SMOOTH_RED_SANDSTONE_SLAB` | `Block.SmoothRedSandstoneSlab` | Smooth Red Sandstone Slab |
| `POLISHED_GRANITE` | `Block.PolishedGranite` | Polished Granite |
| `PLANKS_BIRCH` | `Block.PlanksBirch` | Birch Planks |
| `BIRCH_SAPLING` | `Block.BirchSapling` | Birch Sapling |
| `LOG_BIRCH` | `Block.LogBirch` | Birch Log |
| `LEAVES_BIRCH` | `Block.LeavesBirch` | Birch Leaves |
| `SMOOTH_SANDSTONE` | `Block.SmoothSandstone` | Smooth Sandstone |
| `FERN` | `Block.Fern` | Fern |
| `MAGENTA_WOOL` | `Block.MagentaWool` | Magenta Wool |
| `ALLIUM` | `Block.Allium` | Allium |
| `BIRCH_FENCE` | `Block.BirchFence` | Birch Fence |
| `STONE_BRICK_MONSTER_EGG` | `Block.StoneBrickMonsterEgg` | Infested Stone Brick |
| `CRACKED_STONE_BRICKS` | `Block.CrackedStoneBricks` | Cracked Stone Bricks |
| `VERY_DAMAGED_ANVIL` | `Block.VeryDamagedAnvil` | Very Damaged Anvil |
| `PILLAR_QUARTZ_BLOCK` | `Block.PillarQuartzBlock` | Pillar Quartz Block |
| `BIRCH_WOOD_SLAB` | `Block.BirchWoodSlab` | Birch Slab |
| `MAGENTA_TERRACOTTA` | `Block.MagentaTerracotta` | Magenta Terracotta |
| `MAGENTA_STAINED_GLASS_PANE` | `Block.MagentaStainedGlassPane` | Magenta Stained Glass Pane |
| `PRISMARINE_BRICKS` | `Block.PrismarineBricks` | Prismarine Bricks |
| `MAGENTA_CARPET` | `Block.MagentaCarpet` | Magenta Carpet |
| `DOUBLE_TALLGRASS` | `Block.DoubleTallgrass` | Double Tallgrass |
| `SMOOTH_RED_SANDSTONE` | `Block.SmoothRedSandstone` | Smooth Red Sandstone |
| `PRISMARINE_SLAB` | `Block.PrismarineSlab` | Prismarine Slab |
| `PURPUR_PILLAR` | `Block.PurpurPillar` | Purpur Pillar |
| `MAGENTA_SHULKER_BOX` | `Block.MagentaShulkerBox` | Magenta Shulker Box |
| `MAGENTA_CONCRETE` | `Block.MagentaConcrete` | Magenta Concrete |
| `MAGENTA_CONCRETE_POWDER` | `Block.MagentaConcretePowder` | Magenta Concrete Powder |
| `MAGENTA_STAINED_GLASS` | `Block.MagentaStainedGlass` | Magenta Stained Glass |
| `BUBBLE_CORAL` | `Block.BubbleCoral` | Bubble Coral |
| `BUBBLE_CORAL_BLOCK` | `Block.BubbleCoralBlock` | Bubble Coral Block |
| `BUBBLE_CORAL_FAN` | `Block.BubbleCoralFan` | Bubble Coral Fan |
| `DEAD_BUBBLE_CORAL_FAN` | `Block.DeadBubbleCoralFan` | Dead Bubble Coral Fan |
| `BOARD` | `Block.Board` | Board |
| `BIRCH_WOOD` | `Block.BirchWood` | Birch Wood |
| `STONE_SLAB` | `Block.StoneSlab` | Stone Slab |
| `DIORITE` | `Block.Diorite` | Diorite |
| `PLANKS_JUNGLE` | `Block.PlanksJungle` | Jungle Planks |
| `JUNGLE_SAPLING` | `Block.JungleSapling` | Jungle Sapling |
| `LOG_JUNGLE` | `Block.LogJungle` | Jungle Log |
| `LEAVES_JUNGLE` | `Block.LeavesJungle` | Jungle Leaves |
| `DISPENSER` | `Block.Dispenser` | Dispenser |
| `LIGHT_BLUE_WOOL` | `Block.LightBlueWool` | Light Blue Wool |
| `AZURE_BLUET` | `Block.AzureBluet` | Azure Bluet |
| `COBBLESTONE_SLAB` | `Block.CobblestoneSlab` | Cobblestone Slab |
| `JUNGLE_FENCE` | `Block.JungleFence` | Jungle Fence |
| `MOSSY_STONE_BRICK_MONSTER_EGG` | `Block.MossyStoneBrickMonsterEgg` | Infested Mossy Stone Brick |
| `CHISELED_STONE_BRICKS` | `Block.ChiseledStoneBricks` | Chiseled Stone Bricks |
| `DROPPER` | `Block.Dropper` | Dropper |
| `JUNGLE_WOOD_SLAB` | `Block.JungleWoodSlab` | Jungle Slab |
| `LIGHT_BLUE_TERRACOTTA` | `Block.LightBlueTerracotta` | Light Blue Terracotta |
| `LIGHT_BLUE_STAINED_GLASS_PANE` | `Block.LightBlueStainedGlassPane` | Light Blue Stained Glass Pane |
| `LIGHT_BLUE_CARPET` | `Block.LightBlueCarpet` | Light Blue Carpet |
| `LARGE_FERN` | `Block.LargeFern` | Large Fern |
| `DARK_PRISMARINE_SLAB` | `Block.DarkPrismarineSlab` | Dark Prismarine Slab |
| `LIGHT_BLUE_SHULKER_BOX` | `Block.LightBlueShulkerBox` | Light Blue Shulker Box |
| `LIGHT_BLUE_CONCRETE` | `Block.LightBlueConcrete` | Light Blue Concrete |
| `LIGHT_BLUE_CONCRETE_POWDER` | `Block.LightBlueConcretePowder` | Light Blue Concrete Powder |
| `LIGHT_BLUE_STAINED_GLASS` | `Block.LightBlueStainedGlass` | Light Blue Stained Glass |
| `FIRE_CORAL` | `Block.FireCoral` | Fire Coral |
| `FIRE_CORAL_BLOCK` | `Block.FireCoralBlock` | Fire Coral Block |
| `FIRE_CORAL_FAN` | `Block.FireCoralFan` | Fire Coral Fan |
| `DEAD_FIRE_CORAL_FAN` | `Block.DeadFireCoralFan` | Dead Fire Coral Fan |
| `POLISHED_DIORITE` | `Block.PolishedDiorite` | Polished Diorite |
| `PLANKS_ACACIA` | `Block.PlanksAcacia` | Acacia Planks |
| `ACACIA_SAPLING` | `Block.AcaciaSapling` | Acacia Sapling |
| `YELLOW_WOOL` | `Block.YellowWool` | Yellow Wool |
| `RED_TULIP` | `Block.RedTulip` | Red Tulip |
| `BRICKS_SLAB` | `Block.BricksSlab` | Bricks Slab |
| `ACACIA_FENCE` | `Block.AcaciaFence` | Acacia Fence |
| `CRACKED_STONE_BRICK_MONSTER_EGG` | `Block.CrackedStoneBrickMonsterEgg` | Infested Cracked Stone Brick |
| `ACACIA_WOOD_SLAB` | `Block.AcaciaWoodSlab` | Acacia Slab |
| `YELLOW_TERRACOTTA` | `Block.YellowTerracotta` | Yellow Terracotta |
| `YELLOW_STAINED_GLASS_PANE` | `Block.YellowStainedGlassPane` | Yellow Stained Glass Pane |
| `YELLOW_CARPET` | `Block.YellowCarpet` | Yellow Carpet |
| `ROSE_BUSH` | `Block.RoseBush` | Rose Bush |
| `PRISMARINE_BRICK_SLAB` | `Block.PrismarineBrickSlab` | Prismarine Bricks Slab |
| `YELLOW_SHULKER_BOX` | `Block.YellowShulkerBox` | Yellow Shulker Box |
| `YELLOW_CONCRETE` | `Block.YellowConcrete` | Yellow Concrete |
| `YELLOW_CONCRETE_POWDER` | `Block.YellowConcretePowder` | Yellow Concrete Powder |
| `YELLOW_STAINED_GLASS` | `Block.YellowStainedGlass` | Yellow Stained Glass |
| `HORN_CORAL` | `Block.HornCoral` | Horn Coral |
| `HORN_CORAL_BLOCK` | `Block.HornCoralBlock` | Horn Coral Block |
| `HORN_CORAL_FAN` | `Block.HornCoralFan` | Horn Coral Fan |
| `DEAD_HORN_CORAL_FAN` | `Block.DeadHornCoralFan` | Dead Horn Coral Fan |
| `ACACIA_WOOD` | `Block.AcaciaWood` | Acacia Wood |
| `ANDESITE` | `Block.Andesite` | Andesite |
| `PLANKS_DARK_OAK` | `Block.PlanksDarkOak` | Dark Oak Planks |
| `DARK_OAK_SAPLING` | `Block.DarkOakSapling` | Dark Oak Sapling |
| `LIME_WOOL` | `Block.LimeWool` | Lime Wool |
| `ORANGE_TULIP` | `Block.OrangeTulip` | Orange Tulip |
| `STONE_BRICKS_SLAB` | `Block.StoneBricksSlab` | Stone Bricks Slab |
| `STONE_BUTTON` | `Block.StoneButton` | Stone Button |
| `DARK_OAK_FENCE` | `Block.DarkOakFence` | Dark Oak Fence |
| `CHISELED_STONE_BRICK_MONSTER_EGG` | `Block.ChiseledStoneBrickMonsterEgg` | Infested Chiseled Stone Brick |
| `WOODEN_BUTTON` | `Block.WoodenButton` | Oak Button |
| `DARK_OAK_WOOD_SLAB` | `Block.DarkOakWoodSlab` | Dark Oak Slab |
| `LIME_TERRACOTTA` | `Block.LimeTerracotta` | Lime Terracotta |
| `LIME_STAINED_GLASS_PANE` | `Block.LimeStainedGlassPane` | Lime Stained Glass Pane |
| `LIME_CARPET` | `Block.LimeCarpet` | Lime Carpet |
| `PEONY` | `Block.Peony` | Peony |
| `LIME_SHULKER_BOX` | `Block.LimeShulkerBox` | Lime Shulker Box |
| `LIME_CONCRETE` | `Block.LimeConcrete` | Lime Concrete |
| `LIME_CONCRETE_POWDER` | `Block.LimeConcretePowder` | Lime Concrete Powder |
| `LIME_STAINED_GLASS` | `Block.LimeStainedGlass` | Lime Stained Glass |
| `DEAD_TUBE_CORAL_BLOCK` | `Block.DeadTubeCoralBlock` | Dead Tube Coral Block |
| `POLISHED_ANDESITE` | `Block.PolishedAndesite` | Polished Andesite |
| `PINK_WOOL` | `Block.PinkWool` | Pink Wool |
| `WHITE_TULIP` | `Block.WhiteTulip` | White Tulip |
| `QUARTZ_SLAB` | `Block.QuartzSlab` | Quartz Slab |
| `PINK_TERRACOTTA` | `Block.PinkTerracotta` | Pink Terracotta |
| `PINK_STAINED_GLASS_PANE` | `Block.PinkStainedGlassPane` | Pink Stained Glass Pane |
| `PINK_CARPET` | `Block.PinkCarpet` | Pink Carpet |
| `PINK_SHULKER_BOX` | `Block.PinkShulkerBox` | Pink Shulker Box |
| `PINK_CONCRETE` | `Block.PinkConcrete` | Pink Concrete |
| `PINK_CONCRETE_POWDER` | `Block.PinkConcretePowder` | Pink Concrete Powder |
| `PINK_STAINED_GLASS` | `Block.PinkStainedGlass` | Pink Stained Glass |
| `DEAD_BRAIN_CORAL_BLOCK` | `Block.DeadBrainCoralBlock` | Dead Brain Coral Block |
| `GRAY_WOOL` | `Block.GrayWool` | Gray Wool |
| `PINK_TULIP` | `Block.PinkTulip` | Pink Tulip |
| `NETHER_BRICK_SLAB` | `Block.NetherBrickSlab` | Nether Brick Slab |
| `GRAY_TERRACOTTA` | `Block.GrayTerracotta` | Gray Terracotta |
| `GRAY_STAINED_GLASS_PANE` | `Block.GrayStainedGlassPane` | Gray Stained Glass Pane |
| `GRAY_CARPET` | `Block.GrayCarpet` | Gray Carpet |
| `GRAY_SHULKER_BOX` | `Block.GrayShulkerBox` | Gray Shulker Box |
| `GRAY_CONCRETE` | `Block.GrayConcrete` | Gray Concrete |
| `GRAY_CONCRETE_POWDER` | `Block.GrayConcretePowder` | Gray Concrete Powder |
| `GRAY_STAINED_GLASS` | `Block.GrayStainedGlass` | Gray Stained Glass |
| `DEAD_BUBBLE_CORAL_BLOCK` | `Block.DeadBubbleCoralBlock` | Dead Bubble Coral Block |
| `LIGHT_GRAY_WOOL` | `Block.LightGrayWool` | Light Gray Wool |
| `OXEYE_DAISY` | `Block.OxeyeDaisy` | Oxeye Daisy |
| `LIGHT_GRAY_TERRACOTTA` | `Block.LightGrayTerracotta` | Light Gray Terracotta |
| `LIGHT_GRAY_STAINED_GLASS_PANE` | `Block.LightGrayStainedGlassPane` | Light Gray Stained Glass Pane |
| `LIGHT_GRAY_CARPET` | `Block.LightGrayCarpet` | Light Gray Carpet |
| `SILVER_SHULKER_BOX` | `Block.SilverShulkerBox` | Silver Shulker Box |
| `LIGHT_GRAY_CONCRETE` | `Block.LightGrayConcrete` | Light Gray Concrete |
| `LIGHT_GRAY_CONCRETE_POWDER` | `Block.LightGrayConcretePowder` | Light Gray Concrete Powder |
| `LIGHT_GRAY_STAINED_GLASS` | `Block.LightGrayStainedGlass` | Light Gray Stained Glass |
| `CYAN_WOOL` | `Block.CyanWool` | Cyan Wool |
| `CORNFLOWER` | `Block.Cornflower` | Cornflower |
| `CYAN_TERRACOTTA` | `Block.CyanTerracotta` | Cyan Terracotta |
| `CYAN_STAINED_GLASS_PANE` | `Block.CyanStainedGlassPane` | Cyan Stained Glass Pane |
| `CYAN_CARPET` | `Block.CyanCarpet` | Cyan Carpet |
| `CYAN_SHULKER_BOX` | `Block.CyanShulkerBox` | Cyan Shulker Box |
| `CYAN_CONCRETE` | `Block.CyanConcrete` | Cyan Concrete |
| `CYAN_CONCRETE_POWDER` | `Block.CyanConcretePowder` | Cyan Concrete Powder |
| `CYAN_STAINED_GLASS` | `Block.CyanStainedGlass` | Cyan Stained Glass |
| `PURPLE_WOOL` | `Block.PurpleWool` | Purple Wool |
| `LILY_OF_THE_VALLEY` | `Block.LilyOfTheValley` | Lily of the Valley |
| `PURPLE_TERRACOTTA` | `Block.PurpleTerracotta` | Purple Terracotta |
| `PURPLE_STAINED_GLASS_PANE` | `Block.PurpleStainedGlassPane` | Purple Stained Glass Pane |
| `PURPLE_CARPET` | `Block.PurpleCarpet` | Purple Carpet |
| `PURPLE_SHULKER_BOX` | `Block.PurpleShulkerBox` | Purple Shulker Box |
| `PURPLE_CONCRETE` | `Block.PurpleConcrete` | Purple Concrete |
| `PURPLE_CONCRETE_POWDER` | `Block.PurpleConcretePowder` | Purple Concrete Powder |
| `PURPLE_STAINED_GLASS` | `Block.PurpleStainedGlass` | Purple Stained Glass |
| `BLUE_WOOL` | `Block.BlueWool` | Blue Wool |
| `BLUE_TERRACOTTA` | `Block.BlueTerracotta` | Blue Terracotta |
| `BLUE_STAINED_GLASS_PANE` | `Block.BlueStainedGlassPane` | Blue Stained Glass Pane |
| `BLUE_CARPET` | `Block.BlueCarpet` | Blue Carpet |
| `BLUE_SHULKER_BOX` | `Block.BlueShulkerBox` | Blue Shulker Box |
| `BLUE_CONCRETE` | `Block.BlueConcrete` | Blue Concrete |
| `BLUE_CONCRETE_POWDER` | `Block.BlueConcretePowder` | Blue Concrete Powder |
| `BLUE_STAINED_GLASS` | `Block.BlueStainedGlass` | Blue Stained Glass |
| `DEAD_FIRE_CORAL_BLOCK` | `Block.DeadFireCoralBlock` | Dead Fire Coral Block |
| `BROWN_WOOL` | `Block.BrownWool` | Brown Wool |
| `BROWN_TERRACOTTA` | `Block.BrownTerracotta` | Brown Terracotta |
| `BROWN_STAINED_GLASS_PANE` | `Block.BrownStainedGlassPane` | Brown Stained Glass Pane |
| `BROWN_CARPET` | `Block.BrownCarpet` | Brown Carpet |
| `BROWN_SHULKER_BOX` | `Block.BrownShulkerBox` | Brown Shulker Box |
| `BROWN_CONCRETE` | `Block.BrownConcrete` | Brown Concrete |
| `BROWN_CONCRETE_POWDER` | `Block.BrownConcretePowder` | Brown Concrete Powder |
| `BROWN_STAINED_GLASS` | `Block.BrownStainedGlass` | Brown Stained Glass |
| `DEAD_HORN_CORAL_BLOCK` | `Block.DeadHornCoralBlock` | Dead Horn Coral Block |
| `GREEN_WOOL` | `Block.GreenWool` | Green Wool |
| `GREEN_TERRACOTTA` | `Block.GreenTerracotta` | Green Terracotta |
| `GREEN_STAINED_GLASS_PANE` | `Block.GreenStainedGlassPane` | Green Stained Glass Pane |
| `GREEN_CARPET` | `Block.GreenCarpet` | Green Carpet |
| `GREEN_SHULKER_BOX` | `Block.GreenShulkerBox` | Green Shulker Box |
| `GREEN_CONCRETE` | `Block.GreenConcrete` | Green Concrete |
| `GREEN_CONCRETE_POWDER` | `Block.GreenConcretePowder` | Green Concrete Powder |
| `GREEN_STAINED_GLASS` | `Block.GreenStainedGlass` | Green Stained Glass |
| `RED_WOOL` | `Block.RedWool` | Red Wool |
| `MUSHROOM14` | `Block.Mushroom14` | Mushroom |
| `RED_MUSHROOM_BLOCK` | `Block.RedMushroomBlock` | Red Mushroom Block |
| `RED_TERRACOTTA` | `Block.RedTerracotta` | Red Terracotta |
| `RED_STAINED_GLASS_PANE` | `Block.RedStainedGlassPane` | Red Stained Glass Pane |
| `RED_CARPET` | `Block.RedCarpet` | Red Carpet |
| `RED_SHULKER_BOX` | `Block.RedShulkerBox` | Red Shulker Box |
| `RED_CONCRETE` | `Block.RedConcrete` | Red Concrete |
| `RED_CONCRETE_POWDER` | `Block.RedConcretePowder` | Red Concrete Powder |
| `RED_STAINED_GLASS` | `Block.RedStainedGlass` | Red Stained Glass |
| `BLACK_WOOL` | `Block.BlackWool` | Black Wool |
| `MUSHROOM15` | `Block.Mushroom15` | Mushroom |
| `BLACK_TERRACOTTA` | `Block.BlackTerracotta` | Black Terracotta |
| `BLACK_STAINED_GLASS_PANE` | `Block.BlackStainedGlassPane` | Black Stained Glass Pane |
| `BLACK_CARPET` | `Block.BlackCarpet` | Black Carpet |
| `BLACK_SHULKER_BOX` | `Block.BlackShulkerBox` | Black Shulker Box |
| `BLACK_CONCRETE` | `Block.BlackConcrete` | Black Concrete |
| `BLACK_CONCRETE_POWDER` | `Block.BlackConcretePowder` | Black Concrete Powder |
| `BLACK_STAINED_GLASS` | `Block.BlackStainedGlass` | Black Stained Glass |
| `SHULKER_BOX` | `Block.ShulkerBox` | Shulker Box |

## BlockColor

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `BLACK` | `BlockColor.Black` | black |
| `BLUE` | `BlockColor.Blue` | blue |
| `CYAN` | `BlockColor.Cyan` | cyan |
| `GREEN` | `BlockColor.Green` | green |
| `GRAY` | `BlockColor.Gray` | gray |
| `LIME` | `BlockColor.Lime` | lime |
| `BROWN` | `BlockColor.Brown` | brown |
| `LIGHT_BLUE` | `BlockColor.LightBlue` | light blue |
| `PURPLE` | `BlockColor.Purple` | purple |
| `RED` | `BlockColor.Red` | red |
| `LIGHT_GRAY` | `BlockColor.LightGray` | light gray |
| `YELLOW` | `BlockColor.Yellow` | yellow |
| `MAGENTA` | `BlockColor.Magenta` | magenta |
| `PINK` | `BlockColor.Pink` | pink |
| `ORANGE` | `BlockColor.Orange` | orange |
| `WHITE` | `BlockColor.White` | white |

## CardinalDirection

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `NORTH_CARDINAL_DIRECTION` | `CardinalDirection.North` | North (negative Z) |
| `EAST_CARDINAL_DIRECTION` | `CardinalDirection.East` | East (positive X) |
| `SOUTH_CARDINAL_DIRECTION` | `CardinalDirection.South` | South (positive Z) |
| `UP_CARDINAL_DIRECTION` | `CardinalDirection.Up` | up (positive Y) |
| `WEST_CARDINAL_DIRECTION` | `CardinalDirection.West` | West (negative X) |
| `DOWN_CARDINAL_DIRECTION` | `CardinalDirection.Down` | down (negative Y) |

## ChatArgument

Arguments valid for chat commands

| Constant | Enum member | Shown in blocks as |
|---|---|---|
|  | `ChatArgument.number` |  |
|  | `ChatArgument.number2` |  |
|  | `ChatArgument.string` |  |
|  | `ChatArgument.string2` |  |
|  | `ChatArgument.position` |  |
|  | `ChatArgument.position2` |  |
|  | `ChatArgument.selector` |  |
|  | `ChatArgument.selector2` |  |

## CloneMask

| Constant | Enum member | Shown in blocks as |
|---|---|---|
|  | `CloneMask.Replace` | replace |
|  | `CloneMask.Masked` | masked |

## CloneMode

| Constant | Enum member | Shown in blocks as |
|---|---|---|
|  | `CloneMode.Normal` | normal |
|  | `CloneMode.Move` | move |
|  | `CloneMode.Force` | force |

## ColoredBlock

Blocks that can change color

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `WOOL_COLORED_BLOCK` | `ColoredBlock.Wool` | wool |
| `CONCRETE` | `ColoredBlock.Concrete` | concrete |

## ComparatorMode

Comparator modes

| Constant | Enum member | Shown in blocks as |
|---|---|---|
|  | `ComparatorMode.Compare` | compare |
|  | `ComparatorMode.Substract` | substract |

## CompassDirection

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `WEST` | `CompassDirection.West` | West (negative X) |
| `EAST` | `CompassDirection.East` | East (positive X) |
| `NORTH` | `CompassDirection.North` | North (negative Z) |
| `SOUTH` | `CompassDirection.South` | South (positive Z) |

## CreatureMob

| Constant | Enum member | Shown in blocks as |
|---|---|---|
|  | `CreatureMob.Freak` | freak |
|  | `CreatureMob.Creeper` | creeper |
|  | `CreatureMob.Skeleton` | skeleton |
|  | `CreatureMob.Spider` | spider |
|  | `CreatureMob.PigZombie` | zombie pigman |
|  | `CreatureMob.Slime` | slime |
|  | `CreatureMob.Enderman` | enderman |
|  | `CreatureMob.Silverfish` | silverfish |
|  | `CreatureMob.CaveSpider` | cave spider |
|  | `CreatureMob.BigFreak` | big freak |
|  | `CreatureMob.LavaSlime` | magma cube |
|  | `CreatureMob.Blaze` | blaze |
|  | `CreatureMob.ZombieVillager` | zombie villager |
|  | `CreatureMob.Witch` | witch |
|  | `CreatureMob.Stray` | stray |
|  | `CreatureMob.Husk` | husk |
|  | `CreatureMob.WitherSkeleton` | wither skeleton |
|  | `CreatureMob.Guardian` | guardian |
|  | `CreatureMob.ElderGuardian` | elder guardian |
|  | `CreatureMob.Shulker` | shulker |
|  | `CreatureMob.Endermite` | endermite |
|  | `CreatureMob.Vindicator` | vindicator |
|  | `CreatureMob.Phantom` | phantom |
|  | `CreatureMob.Evoker` | evoker |
|  | `CreatureMob.Vex` | vex |
|  | `CreatureMob.Drowned` | drowned |

## DayTime

The time of day

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `DAY` | `DayTime.Day` | day |
| `MIDDAY` | `DayTime.Midday` | midday |
| `DUSK` | `DayTime.Dusk` | dusk |
| `NIGHT` | `DayTime.Night` | night |
| `MIDNIGHT` | `DayTime.Midnight` | midnight |
| `DAWN` | `DayTime.Dawn` | dawn |

## Effect

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `SPEED` | `Effect.Speed` | Speed |
| `SLOWNESS` | `Effect.Slowness` | Slowness |
| `HASTE` | `Effect.Haste` | Haste |
| `MINING_FATIGUE` | `Effect.MiningFatigue` | Mining Fatigue |
| `STRENGTH` | `Effect.Strength` | Strength |
| `JUMP_BOOST` | `Effect.JumpBoost` | Jump Boost |
| `NAUSEA` | `Effect.Nausea` | Nausea |
| `REGENERATION` | `Effect.Regeneration` | Regeneration |
| `RESISTANCE` | `Effect.Resistance` | Resistance |
| `FIRE_RESISTANCE` | `Effect.FireResistance` | Fire Resistance |
| `WATER_BREATHING` | `Effect.WaterBreathing` | Water Breathing |
| `INVISIBILITY` | `Effect.Invisibility` | Invisibility |
| `BLINDNESS` | `Effect.Blindness` | Blindness |
| `NIGHT_VISION` | `Effect.NightVision` | Night Vision |
| `HUNGER` | `Effect.Hunger` | Hunger |
| `WEAKNESS` | `Effect.Weakness` | Weakness |
| `POISON` | `Effect.Poison` | Poison |
| `WITHER` | `Effect.Wither` | Wither |
| `HEALTH_BOOST` | `Effect.HealthBoost` | Health Boost |
| `ABSORPTION` | `Effect.Absorption` | Absorption |
| `LEVITATION` | `Effect.Levitation` | Levitation |

## ExplorationMode

| Constant | Enum member | Shown in blocks as |
|---|---|---|
|  | `ExplorationMode.Survival` | survival |
|  | `ExplorationMode.Creative` | creative |
|  | `ExplorationMode.Adventure` | adventure |

## ExplorationRule

Rule for exploration settings

| Constant | Enum member | Shown in blocks as |
|---|---|---|
|  | `ExplorationRule.PvP` | PvP |
|  | `ExplorationRule.DrowningDamage` | drowning damage |
|  | `ExplorationRule.FallDamage` | fall damage |
|  | `ExplorationRule.FireDamage` | fire damage |
|  | `ExplorationRule.DaylightCycle` | daylight cycle |
|  | `ExplorationRule.MobLoot` | mob loot |
|  | `ExplorationRule.MobSpawning` | mob spawning |
|  | `ExplorationRule.WeatherCycle` | weather cycle |
|  | `ExplorationRule.MobGriefing` | mob griefing |
|  | `ExplorationRule.TileDrops` | block drops |
|  | `ExplorationRule.KeepInventory` | keep inventory |
|  | `ExplorationRule.TntExplodes` | tnt explodes |
|  | `ExplorationRule.NaturalRegeneration` | natural regeneration |
|  | `ExplorationRule.CommandBlockOutput` | command block output |
|  | `ExplorationRule.EntityDrops` | entity drops |
|  | `ExplorationRule.DoFireTick` | fire spreads |
|  | `ExplorationRule.ShowCoordinates` | show user coordinate |

## ExplorationTimeQuery

Time value type for time queries

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `MINECRAFT_TIME` | `ExplorationTimeQuery.MinecraftTime` | minecraft time |
| `DAY_TIME_EXPLORATION_TIME_QUERY` | `ExplorationTimeQuery.DayTime` | daytime |
| `DAY_EXPLORATION_TIME_QUERY` | `ExplorationTimeQuery.Day` | day |
| `REAL_LIFE_EXPLORATION_TIME_QUERY` | `ExplorationTimeQuery.RealLife` | real life |

## FillOperation

Fill options for exixting blocks. Control keeping, replacing, or destroying existing blocks

| Constant | Enum member | Shown in blocks as |
|---|---|---|
|  | `FillOperation.Replace` | replace |
|  | `FillOperation.Hollow` | hollow |
|  | `FillOperation.Outline` | outline |
|  | `FillOperation.Keep` | keep |
|  | `FillOperation.Destroy` | destroy |

## FourDirection

| Constant | Enum member | Shown in blocks as |
|---|---|---|
|  | `FourDirection.Forward` | forward |
|  | `FourDirection.Back` | back |
|  | `FourDirection.Left` | left |
|  | `FourDirection.Right` | right |

## GameDifficulty

Game difficulty for gameplay settings

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `PEACEFUL` | `GameDifficulty.Peaceful` | peaceful |
| `EASY` | `GameDifficulty.Easy` | easy |
| `NORMAL` | `GameDifficulty.Normal` | normal |
| `HARD` | `GameDifficulty.Hard` | hard |

## GameMode

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `SURVIVAL` | `GameMode.Survival` | survival |
| `CREATIVE` | `GameMode.Creative` | creative |
| `ADVENTURE` | `GameMode.Adventure` | adventure |

## GameRule

Game rule for gameplay settings

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `PV_P` | `GameRule.PvP` | PvP |
| `DROWNING_DAMAGE` | `GameRule.DrowningDamage` | drowning damage |
| `FALL_DAMAGE` | `GameRule.FallDamage` | fall damage |
| `FIRE_DAMAGE` | `GameRule.FireDamage` | fire damage |
| `DAYLIGHT_CYCLE` | `GameRule.DaylightCycle` | daylight cycle |
| `MOB_LOOT` | `GameRule.MobLoot` | mob loot |
| `MOB_SPAWNING` | `GameRule.MobSpawning` | mob spawning |
| `WEATHER_CYCLE` | `GameRule.WeatherCycle` | weather cycle |
| `MOB_GRIEFING` | `GameRule.MobGriefing` | mob griefing |
| `TILE_DROPS` | `GameRule.TileDrops` | block drops |
| `KEEP_INVENTORY` | `GameRule.KeepInventory` | keep inventory |
| `TNT_EXPLODES` | `GameRule.TntExplodes` | tnt explodes |
| `NATURAL_REGENERATION` | `GameRule.NaturalRegeneration` | natural regeneration |
| `COMMAND_BLOCK_OUTPUT` | `GameRule.CommandBlockOutput` | command block output |
| `ENTITY_DROPS` | `GameRule.EntityDrops` | entity drops |
| `DO_FIRE_TICK` | `GameRule.DoFireTick` | fire spreads |
| `SHOW_COORDINATES` | `GameRule.ShowCoordinates` | show player coordinate |

## Item

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `IRON_SHOVEL` | `Item.IronShovel` | Iron Shovel |
| `IRON_PICKAXE` | `Item.IronPickaxe` | Iron Pickaxe |
| `IRON_AXE` | `Item.IronAxe` | Iron Axe |
| `FLINT_AND_STEEL` | `Item.FlintAndSteel` | Flint and Steel |
| `APPLE` | `Item.Apple` | Apple |
| `BOW` | `Item.Bow` | Bow |
| `ARROW` | `Item.Arrow` | Arrow |
| `COAL` | `Item.Coal` | Coal |
| `DIAMOND` | `Item.Diamond` | Diamond |
| `IRON_INGOT` | `Item.IronIngot` | Iron Ingot |
| `GOLD_INGOT` | `Item.GoldIngot` | Gold Ingot |
| `IRON_SWORD` | `Item.IronSword` | Iron Sword |
| `WOODEN_SWORD` | `Item.WoodenSword` | Wooden Sword |
| `WOODEN_SHOVEL` | `Item.WoodenShovel` | Wooden Shovel |
| `WOODEN_PICKAXE` | `Item.WoodenPickaxe` | Wooden Pickaxe |
| `WOODEN_AXE` | `Item.WoodenAxe` | Wooden Axe |
| `STONE_SWORD` | `Item.StoneSword` | Stone Sword |
| `STONE_SHOVEL` | `Item.StoneShovel` | Stone Shovel |
| `STONE_PICKAXE` | `Item.StonePickaxe` | Stone Pickaxe |
| `STONE_AXE` | `Item.StoneAxe` | Stone Axe |
| `DIAMOND_SWORD` | `Item.DiamondSword` | Diamond Sword |
| `DIAMOND_SHOVEL` | `Item.DiamondShovel` | Diamond Shovel |
| `DIAMOND_PICKAXE` | `Item.DiamondPickaxe` | Diamond Pickaxe |
| `DIAMOND_AXE` | `Item.DiamondAxe` | Diamond Axe |
| `STICK` | `Item.Stick` | Stick |
| `BOWL` | `Item.Bowl` | Bowl |
| `MUSHROOM_STEW` | `Item.MushroomStew` | Mushroom Stew |
| `GOLDEN_SWORD` | `Item.GoldenSword` | Golden Sword |
| `GOLDEN_SHOVEL` | `Item.GoldenShovel` | Golden Shovel |
| `GOLDEN_PICKAXE` | `Item.GoldenPickaxe` | Golden Pickaxe |
| `GOLDEN_AXE` | `Item.GoldenAxe` | Golden Axe |
| `STRING` | `Item.String` | String |
| `FEATHER` | `Item.Feather` | Feather |
| `GUNPOWDER` | `Item.Gunpowder` | Gunpowder |
| `WOODEN_HOE` | `Item.WoodenHoe` | Wooden Hoe |
| `STONE_HOE` | `Item.StoneHoe` | Stone Hoe |
| `IRON_HOE` | `Item.IronHoe` | Iron Hoe |
| `DIAMOND_HOE` | `Item.DiamondHoe` | Diamond Hoe |
| `GOLDEN_HOE` | `Item.GoldenHoe` | Golden Hoe |
| `SEEDS` | `Item.Seeds` | Seeds |
| `WHEAT` | `Item.Wheat` | Wheat |
| `BREAD` | `Item.Bread` | Bread |
| `LEATHER_CAP` | `Item.LeatherCap` | Leather Cap |
| `LEATHER_CHESTPLATE` | `Item.LeatherChestplate` | Leather Tunic |
| `LEATHER_PANTS` | `Item.LeatherPants` | Leather Pants |
| `LEATHER_BOOTS` | `Item.LeatherBoots` | Leather Boots |
| `CHAINMAIL_HELMET` | `Item.ChainmailHelmet` | Chain Helmet |
| `CHAINMAIL_CHESTPLATE` | `Item.ChainmailChestplate` | Chain Chestplate |
| `CHAINMAIL_LEGGINGS` | `Item.ChainmailLeggings` | Chain Leggings |
| `CHAINMAIL_BOOTS` | `Item.ChainmailBoots` | Chain Boots |
| `IRON_HELMET` | `Item.IronHelmet` | Iron Helmet |
| `IRON_CHESTPLATE` | `Item.IronChestplate` | Iron Chestplate |
| `IRON_LEGGINGS` | `Item.IronLeggings` | Iron Leggings |
| `IRON_BOOTS` | `Item.IronBoots` | Iron Boots |
| `DIAMOND_HELMET` | `Item.DiamondHelmet` | Diamond Helmet |
| `DIAMOND_CHESTPLATE` | `Item.DiamondChestplate` | Diamond Chestplate |
| `DIAMOND_LEGGINGS` | `Item.DiamondLeggings` | Diamond Leggings |
| `DIAMOND_BOOTS` | `Item.DiamondBoots` | Diamond Boots |
| `GOLDEN_HELMET` | `Item.GoldenHelmet` | Golden Helmet |
| `GOLDEN_CHESTPLATE` | `Item.GoldenChestplate` | Golden Chestplate |
| `GOLDEN_LEGGINGS` | `Item.GoldenLeggings` | Golden Leggings |
| `GOLDEN_BOOTS` | `Item.GoldenBoots` | Golden Boots |
| `FLINT` | `Item.Flint` | Flint |
| `RAW_PORKCHOP` | `Item.RawPorkchop` | Raw Porkchop |
| `COOKED_PORKCHOP` | `Item.CookedPorkchop` | Cooked Porkchop |
| `PAINTING` | `Item.Painting` | Painting |
| `GOLDEN_APPLE` | `Item.GoldenApple` | Golden Apple |
| `OAK_DOOR_ITEM` | `Item.OakDoor` | Oak Door |
| `BUCKET` | `Item.Bucket` | Bucket |
| `MINECART` | `Item.Minecart` | Minecart |
| `SADDLE` | `Item.Saddle` | Saddle |
| `IRON_DOOR_ITEM` | `Item.IronDoor` | Iron Door |
| `REDSTONE` | `Item.Redstone` | Redstone |
| `SNOWBALL` | `Item.Snowball` | Snowball |
| `BOAT` | `Item.Boat` | Oak Boat |
| `LEATHER` | `Item.Leather` | Leather |
| `KELP_ITEM` | `Item.Kelp` | Kelp |
| `BRICK` | `Item.Brick` | Brick |
| `CLAY_BALL` | `Item.ClayBall` | Clay |
| `REEDS` | `Item.Reeds` | Sugar Canes |
| `PAPER` | `Item.Paper` | Paper |
| `BOOK` | `Item.Book` | Book |
| `SLIMEBALL` | `Item.Slimeball` | Slimeball |
| `MINECART_WITH_CHEST` | `Item.MinecartWithChest` | Minecart with Chest |
| `EGG` | `Item.Egg` | Egg |
| `COMPASS` | `Item.Compass` | Compass |
| `FISHING_ROD` | `Item.FishingRod` | Fishing Rod |
| `CLOCK` | `Item.Clock` | Clock |
| `GLOWSTONE_DUST` | `Item.GlowstoneDust` | Glowstone Dust |
| `RAW_FISH` | `Item.RawFish` | Raw Cod |
| `COOKED_FISH` | `Item.CookedFish` | Cooked Cod |
| `INK_SAC` | `Item.InkSac` | Ink Sac |
| `BONE` | `Item.Bone` | Bone |
| `SUGAR` | `Item.Sugar` | Sugar |
| `CAKE_ITEM` | `Item.Cake` | Cake |
| `BED_ITEM` | `Item.Bed` | White Bed |
| `REPEATER` | `Item.Repeater` | Redstone Repeater |
| `COOKIE` | `Item.Cookie` | Cookie |
| `MAP` | `Item.Map` | Filled Map |
| `SHEARS` | `Item.Shears` | Shears |
| `MELON` | `Item.Melon` | Melon |
| `PUMPKIN_SEEDS` | `Item.PumpkinSeeds` | Pumpkin Seeds |
| `MELON_SEEDS` | `Item.MelonSeeds` | Melon Seeds |
| `RAW_BEEF` | `Item.RawBeef` | Raw Beef |
| `COOKED_BEEF` | `Item.CookedBeef` | Cooked Beef |
| `RAW_CHICKEN` | `Item.RawChicken` | Raw Chicken |
| `COOKED_CHICKEN` | `Item.CookedChicken` | Cooked Chicken |
| `ROTTEN_FLESH` | `Item.RottenFlesh` | Rotten Flesh |
| `ENDER_PEARL` | `Item.EnderPearl` | Ender Pearl |
| `BLAZE_ROD` | `Item.BlazeRod` | Blaze Rod |
| `GHAST_TEAR` | `Item.GhastTear` | Ghast Tear |
| `GOLD_NUGGET` | `Item.GoldNugget` | Gold Nugget |
| `NETHER_WART_ITEM` | `Item.NetherWart` | Nether Wart |
| `GLASS_BOTTLE` | `Item.GlassBottle` | Glass Bottle |
| `SPIDER_EYE` | `Item.SpiderEye` | Spider Eye |
| `FERMENTED_SPIDER_EYE` | `Item.FermentedSpiderEye` | Fermented Spider Eye |
| `BLAZE_POWDER` | `Item.BlazePowder` | Blaze Powder |
| `MAGMA_CREAM` | `Item.MagmaCream` | Magma Cream |
| `BREWING_STAND_ITEM` | `Item.BrewingStand` | Brewing Stand |
| `CAULDRON_ITEM` | `Item.Cauldron` | Cauldron |
| `ENDER_EYE` | `Item.EnderEye` | Eye of Ender |
| `GLISTERING_MELON` | `Item.GlisteringMelon` | Glistering Melon |
| `EXPERIENCE_BOTTLE` | `Item.ExperienceBottle` | Bottle o' Enchanting |
| `FIREBALL` | `Item.Fireball` | Fire Charge |
| `BOOK_QUILL` | `Item.BookQuill` | Book & Quill |
| `EMERALD` | `Item.Emerald` | Emerald |
| `ITEM_FRAME` | `Item.ItemFrame` | Item Frame |
| `FLOWER_POT_ITEM` | `Item.FlowerPot` | Flower Pot |
| `CARROT` | `Item.Carrot` | Carrot |
| `POTATO` | `Item.Potato` | Potato |
| `BAKED_POTATO` | `Item.BakedPotato` | Baked Potato |
| `POISONOUS_POTATO` | `Item.PoisonousPotato` | Poisonous Potato |
| `EMPTY_MAP` | `Item.EmptyMap` | Empty Map |
| `GOLDEN_CARROT` | `Item.GoldenCarrot` | Golden Carrot |
| `CARROT_ON_A_STICK` | `Item.CarrotOnAStick` | Carrot on a Stick |
| `NETHER_STAR` | `Item.NetherStar` | Nether Star |
| `PUMPKIN_PIE` | `Item.PumpkinPie` | Pumpkin Pie |
| `ENCHANTED_BOOK` | `Item.EnchantedBook` | Enchanted Book |
| `COMPARATOR` | `Item.Comparator` | Redstone Comparator |
| `NETHERBRICK` | `Item.Netherbrick` | Nether Brick |
| `QUARTZ` | `Item.Quartz` | Nether Quartz |
| `MINECART_WITH_T_N_T` | `Item.MinecartWithTNT` | Minecart with TNT |
| `MINECART_WITH_HOPPER` | `Item.MinecartWithHopper` | Minecart with Hopper |
| `PRISMARINE_SHARD` | `Item.PrismarineShard` | Prismarine Shard |
| `HOPPER_ITEM` | `Item.Hopper` | Hopper |
| `RAW_RABBIT` | `Item.RawRabbit` | Raw Rabbit |
| `COOKED_RABBIT` | `Item.CookedRabbit` | Cooked Rabbit |
| `RABBIT_STEW` | `Item.RabbitStew` | Rabbit Stew |
| `RABBIT_FOOT` | `Item.RabbitFoot` | Rabbit's Foot |
| `RABBIT_HIDE` | `Item.RabbitHide` | Rabbit Hide |
| `LEATHER_HORSE_ARMOR` | `Item.LeatherHorseArmor` | Leather Horse Armor |
| `IRON_HORSE_ARMOR` | `Item.IronHorseArmor` | Iron Horse Armor |
| `GOLD_HORSE_ARMOR` | `Item.GoldHorseArmor` | Gold Horse Armor |
| `DIAMOND_HORSE_ARMOR` | `Item.DiamondHorseArmor` | Diamond Horse Armor |
| `LEAD` | `Item.Lead` | Lead |
| `NAME_TAG` | `Item.NameTag` | Name Tag |
| `PRISMARINE_CRYSTALS` | `Item.PrismarineCrystals` | Prismarine Crystals |
| `RAW_MUTTON` | `Item.RawMutton` | Raw Mutton |
| `COOKED_MUTTON` | `Item.CookedMutton` | Cooked Mutton |
| `ARMOR_STAND` | `Item.ArmorStand` | Armor Stand |
| `END_CRYSTAL` | `Item.EndCrystal` | End Crystal |
| `SPRUCE_DOOR_ITEM` | `Item.SpruceDoor` | Spruce Door |
| `BIRCH_DOOR_ITEM` | `Item.BirchDoor` | Birch Door |
| `JUNGLE_DOOR_ITEM` | `Item.JungleDoor` | Jungle Door |
| `ACACIA_DOOR_ITEM` | `Item.AcaciaDoor` | Acacia Door |
| `DARK_OAK_DOOR_ITEM` | `Item.DarkOakDoor` | Dark Oak Door |
| `CHORUS_FRUIT` | `Item.ChorusFruit` | Chorus Fruit |
| `CHORUS_FRUIT_POPPED` | `Item.ChorusFruitPopped` | Popped Chorus Fruit |
| `DRAGON_S_BREATH` | `Item.DragonSBreath` | Dragon's Breath |
| `ELYTRA` | `Item.Elytra` | Elytra Wings |
| `SHULKER_SHELL` | `Item.ShulkerShell` | Shulker Shell |
| `TOTEM` | `Item.Totem` | Totem of Undying |
| `IRON_NUGGET` | `Item.IronNugget` | Iron Nugget |
| `TRIDENT` | `Item.Trident` | Trident |
| `BEETROOT_ITEM` | `Item.Beetroot` | Beetroot |
| `BEETROOT_SEEDS` | `Item.BeetrootSeeds` | Beetroot Seeds |
| `BEETROOT_SOUP` | `Item.BeetrootSoup` | Beetroot Soup |
| `RAW_SALMON` | `Item.RawSalmon` | Raw Salmon |
| `CLOWNFISH` | `Item.Clownfish` | Clownfish |
| `PUFFERFISH_ITEM` | `Item.Pufferfish` | Pufferfish |
| `COOKED_SALMON` | `Item.CookedSalmon` | Cooked Salmon |
| `DRIED_KELP` | `Item.DriedKelp` | Dried Kelp |
| `ENCHANTED_APPLE` | `Item.EnchantedApple` | Enchanted Apple |
| `HEART_OF_THE_SEA` | `Item.HeartOfTheSea` | Heart of the Sea |
| `SWEET_BERRIES` | `Item.SweetBerries` | Sweet Berries |
| `CAMPFIRE_ITEM` | `Item.Campfire` | Campfire |
| `HONEYCOMB` | `Item.Honeycomb` | Honeycomb |
| `HONEY_BOTTLE` | `Item.HoneyBottle` | Honey Bottle |
| `SPAWN_PIGLIN` | `Item.SpawnPiglin` | Spawn Piglin |
| `NETHERITE_INGOT` | `Item.NetheriteIngot` | Netherite Ingot |
| `COPPER_INGOT` | `Item.CopperIngot` | Copper Ingot |
| `GREEN_DYE` | `Item.GreenDye` | Green Dye |
| `GLOW_BERRIES` | `Item.GlowBerries` | Glow Berries |
| `RED_DYE` | `Item.RedDye` | Red Dye |
| `YELLOW_DYE` | `Item.YellowDye` | Yellow Dye |
| `GLOW_INK_SAC` | `Item.GlowInkSac` | Glow Ink Sac |
| `NETHERITE_SWORD` | `Item.NetheriteSword` | Netherite Sword |
| `SPAWN_ZOMBIFIED_PIGLIN` | `Item.SpawnZombifiedPiglin` | Spawn Zombified Piglin |
| `SPAWN_GLOW_SQUID` | `Item.SpawnGlowSquid` | Spawn Glow Squid |
| `SPAWN_STRIDER` | `Item.SpawnStrider` | Spawn Strider |
| `SPAWN_HOGLIN` | `Item.SpawnHoglin` | Spawn Hoglin |
| `SPAWN_ZOGLIN` | `Item.SpawnZoglin` | Spawn Zoglin |
| `SPAWN_GOAT` | `Item.SpawnGoat` | Spawn Goat |
| `SPAWN_AXOLOTL` | `Item.SpawnAxolotl` | Spawn Axolotl |
| `NETHERITE_HELMET` | `Item.NetheriteHelmet` | Netherite Helmet |
| `NETHERITE_CHESTPLATE` | `Item.NetheriteChestplate` | Netherite Chestplate |
| `NETHERITE_LEGGINGS` | `Item.NetheriteLeggings` | Netherite Leggings |
| `NETHERITE_BOOTS` | `Item.NetheriteBoots` | Netherite Boots |
| `NETHERITE_AXE` | `Item.NetheriteAxe` | Netherite Axe |
| `NETHERITE_PICKAXE` | `Item.NetheritePickaxe` | Netherite Pickaxe |
| `RAW_COPPER` | `Item.RawCopper` | Raw Copper |
| `NETHERITE_SHOVEL` | `Item.NetheriteShovel` | Netherite Shovel |
| `NETHERITE_HOE` | `Item.NetheriteHoe` | Netherite Hoe |
| `WARPED_FUNGUS_ON_A_STICK` | `Item.WarpedFungusOnAStick` | Warped Fungus on a Stick |
| `POWDER_SNOW_BUCKET` | `Item.PowderSnowBucket` | Powder Snow Bucket |
| `BUCKET_OF_AXOLOTL` | `Item.BucketOfAxolotl` | Bucket of Axolotl |
| `RAW_IRON` | `Item.RawIron` | Block Of Raw Iron |
| `RAW_GOLD` | `Item.RawGold` | Raw Gold |
| `NETHERITE_SCRAP` | `Item.NetheriteScrap` | Netherite Scrap |
| `SPAWN_ALLAY` | `Item.SpawnAllay` | Spawn Allay |
| `ECHO_SHARD` | `Item.EchoShard` | Echo Shard |
| `SPAWN_FROG` | `Item.SpawnFrog` | Spawn Frog |
| `GOAT_HORN` | `Item.GoatHorn` | Goat Horn |
| `MANGROVE_BOAT` | `Item.MangroveBoat` | Mangrove Boat |
| `MANGROVE_BOAT_WITH_CHEST` | `Item.MangroveBoatWithChest` | Mangrove Boat With Chest |
| `RECOVERY_COMPASS` | `Item.RecoveryCompass` | Recovery Compass |
| `BUCKET_OF_TADPOLE` | `Item.BucketOfTadpole` | Bucket Of Tadpole |
| `SPAWN_TADPOLE` | `Item.SpawnTadpole` | Spawn Tadpole |
| `SPAWN_WARDEN` | `Item.SpawnWarden` | Spawn Warden |
| `SPAWN_TRADER_LLAMA` | `Item.SpawnTraderLlama` | Spawn Trader Llama |
| `TROPICAL_FISH_ITEM` | `Item.TropicalFish` | Tropical Fish |
| `BAMBOO_RAFT` | `Item.BambooRaft` | Bamboo Raft |
| `SPAWN_CAMEL` | `Item.SpawnCamel` | Spawn Camel |
| `SPAWN_SNIFFER` | `Item.SpawnSniffer` | Spawn Sniffer |
| `SHIELD` | `Item.Shield` | Shield |
| `MACE` | `Item.Mace` | Mace |
| `WIND_CHARGE` | `Item.WindCharge` | Wind Charge |
| `WOLF_ARMOR` | `Item.WolfArmor` | Wolf Armor |
| `SPAWN_ARMADILLO` | `Item.SpawnArmadillo` | Spawn Armadillo |
| `SPAWN_BREEZE` | `Item.SpawnBreeze` | Spawn Breeze |
| `BLACK_HARNESS` | `Item.BlackHarness` | Black Harness |
| `BLUE_HARNESS` | `Item.BlueHarness` | Blue Harness |
| `BROWN_HARNESS` | `Item.BrownHarness` | Brown Harness |
| `CYAN_HARNESS` | `Item.CyanHarness` | Cyan Harness |
| `GRAY_HARNESS` | `Item.GrayHarness` | Gray Harness |
| `GREEN_HARNESS` | `Item.GreenHarness` | Green Harness |
| `LIGHT_BLUE_HARNESS` | `Item.LightBlueHarness` | Light Blue Harness |
| `LIGHT_GRAY_HARNESS` | `Item.LightGrayHarness` | Light Gray Harness |
| `LIME_HARNESS` | `Item.LimeHarness` | Lime Harness |
| `PALE_OAK_BOAT_WITH_CHEST` | `Item.PaleOakBoatWithChest` | Pale Oak Boat With Chest |
| `PURPLE_HARNESS` | `Item.PurpleHarness` | Purple Harness |
| `RED_HARNESS` | `Item.RedHarness` | Red Harness |
| `WHITE_HARNESS` | `Item.WhiteHarness` | White Harness |
| `YELLOW_HARNESS` | `Item.YellowHarness` | Yellow Harness |
| `CHARCOAL` | `Item.Charcoal` | Charcoal |
| `MILK` | `Item.Milk` | Milk |
| `SPRUCE_BOAT` | `Item.SpruceBoat` | Spruce Boat |
| `ROSE_RED` | `Item.RoseRed` | Rose Red |
| `ORANGE_BED` | `Item.OrangeBed` | Orange Bed |
| `BUCKET_OF_COD` | `Item.BucketOfCod` | Bucket of Cod |
| `BIRCH_BOAT` | `Item.BirchBoat` | Birch Boat |
| `CACTUS_GREEN` | `Item.CactusGreen` | Cactus Green |
| `MAGENTA_BED` | `Item.MagentaBed` | Magenta Bed |
| `EMPTY_LOCATOR_MAP` | `Item.EmptyLocatorMap` | Empty Locator Map |
| `BUCKET_OF_SALMON` | `Item.BucketOfSalmon` | Bucket of Salmon |
| `JUNGLE_BOAT` | `Item.JungleBoat` | Jungle Boat |
| `COCOA_BEANS` | `Item.CocoaBeans` | Cocoa Beans |
| `LIGHT_BLUE_BED` | `Item.LightBlueBed` | Light Blue Bed |
| `BUCKET_OF_TROPICAL_FISH` | `Item.BucketOfTropicalFish` | Bucket of Tropical Fish |
| `ACACIA_BOAT` | `Item.AcaciaBoat` | Acacia Boat |
| `LAPIS_LAZULI` | `Item.LapisLazuli` | Lapis Lazuli |
| `YELLOW_BED` | `Item.YellowBed` | Yellow Bed |
| `DARK_OAK_BOAT` | `Item.DarkOakBoat` | Dark Oak Boat |
| `PURPLE_DYE` | `Item.PurpleDye` | Purple Dye |
| `LIME_BED` | `Item.LimeBed` | Lime Bed |
| `CYAN_DYE` | `Item.CyanDye` | Cyan Dye |
| `PINK_BED` | `Item.PinkBed` | Pink Bed |
| `LIGHT_GRAY_DYE` | `Item.LightGrayDye` | Light Gray Dye |
| `GRAY_BED` | `Item.GrayBed` | Gray Bed |
| `WATER_BUCKET` | `Item.WaterBucket` | Water Bucket |
| `GRAY_DYE` | `Item.GrayDye` | Gray Dye |
| `LIGHT_GRAY_BED` | `Item.LightGrayBed` | Light Gray Bed |
| `PINK_DYE` | `Item.PinkDye` | Pink Dye |
| `CYAN_BED` | `Item.CyanBed` | Cyan Bed |
| `LAVA_BUCKET` | `Item.LavaBucket` | Lava Bucket |
| `LIME_DYE` | `Item.LimeDye` | Lime Dye |
| `PURPLE_BED` | `Item.PurpleBed` | Purple Bed |
| `SPAWN_CHICKEN` | `Item.SpawnChicken` | Spawn Chicken |
| `DANDELION_YELLOW` | `Item.DandelionYellow` | Dandelion Yellow |
| `BLUE_BED` | `Item.BlueBed` | Blue Bed |
| `SPAWN_COW` | `Item.SpawnCow` | Spawn Cow |
| `LIGHT_BLUE_DYE` | `Item.LightBlueDye` | Light Blue Dye |
| `BROWN_BED` | `Item.BrownBed` | Brown Bed |
| `SPAWN_PIG` | `Item.SpawnPig` | Spawn Pig |
| `MAGENTA_DYE` | `Item.MagentaDye` | Magenta Dye |
| `GREEN_BED` | `Item.GreenBed` | Green Bed |
| `SPAWN_SHEEP` | `Item.SpawnSheep` | Spawn Sheep |
| `ORANGE_DYE` | `Item.OrangeDye` | Orange Dye |
| `RED_BED` | `Item.RedBed` | Red Bed |
| `SPAWN_WOLF` | `Item.SpawnWolf` | Spawn Wolf |
| `BONE_MEAL` | `Item.BoneMeal` | Bone Meal |
| `BLACK_BED` | `Item.BlackBed` | Black Bed |
| `SPAWN_VILLAGER` | `Item.SpawnVillager` | Spawn Villager |
| `SPAWN_MOOSHROOM` | `Item.SpawnMooshroom` | Spawn Mooshroom |
| `SPAWN_SQUID` | `Item.SpawnSquid` | Spawn Squid |
| `SPAWN_RABBIT` | `Item.SpawnRabbit` | Spawn Rabbit |
| `SPAWN_BAT` | `Item.SpawnBat` | Spawn Bat |
| `SPAWN_OCELOT` | `Item.SpawnOcelot` | Spawn Ocelot |
| `SPAWN_HORSE` | `Item.SpawnHorse` | Spawn Horse |
| `SPAWN_DONKEY` | `Item.SpawnDonkey` | Spawn Donkey |
| `SPAWN_MULE` | `Item.SpawnMule` | Spawn Mule |
| `SPAWN_SKELETON_HORSE` | `Item.SpawnSkeletonHorse` | Spawn Skeleton Horse |
| `SPAWN_ZOMBIE_HORSE` | `Item.SpawnZombieHorse` | Spawn Zombie Horse |
| `SPAWN_POLAR_BEAR` | `Item.SpawnPolarBear` | Spawn Polar Bear |
| `SPAWN_LLAMA` | `Item.SpawnLlama` | Spawn Llama |
| `SPAWN_PARROT` | `Item.SpawnParrot` | Spawn Parrot |
| `SPAWN_DOLPHIN` | `Item.SpawnDolphin` | Spawn Dolphin |
| `SPAWN_ZOMBIE` | `Item.SpawnZombie` | Spawn Zombie |
| `SPAWN_CREEPER` | `Item.SpawnCreeper` | Spawn Creeper |
| `SPAWN_SKELETON` | `Item.SpawnSkeleton` | Spawn Skeleton |
| `SPAWN_SPIDER` | `Item.SpawnSpider` | Spawn Spider |
| `SPAWN_ZOMBIE_PIGMAN` | `Item.SpawnZombiePigman` | Spawn Zombie Pigman |
| `SPAWN_SLIME` | `Item.SpawnSlime` | Spawn Slime |
| `SPAWN_ENDERMAN` | `Item.SpawnEnderman` | Spawn Enderman |
| `SPAWN_SILVERFISH` | `Item.SpawnSilverfish` | Spawn Silverfish |
| `SPAWN_CAVE_SPIDER` | `Item.SpawnCaveSpider` | Spawn Cave Spider |
| `SPAWN_GHAST` | `Item.SpawnGhast` | Spawn Ghast |
| `SPAWN_MAGMA_CUBE` | `Item.SpawnMagmaCube` | Spawn Magma Cube |
| `SPAWN_BLAZE` | `Item.SpawnBlaze` | Spawn Blaze |
| `SPAWN_ZOMBIE_VILLAGER` | `Item.SpawnZombieVillager` | Spawn Zombie Villager |
| `SPAWN_WITCH` | `Item.SpawnWitch` | Spawn Witch |
| `SPAWN_STRAY` | `Item.SpawnStray` | Spawn Stray |
| `SPAWN_HUSK` | `Item.SpawnHusk` | Spawn Husk |
| `SPAWN_WITHER_SKELETON` | `Item.SpawnWitherSkeleton` | Spawn Wither Skeleton |
| `SPAWN_GUARDIAN` | `Item.SpawnGuardian` | Spawn Guardian |
| `SPAWN_ELDER_GUARDIAN` | `Item.SpawnElderGuardian` | Spawn Elder Guardian |
| `SPAWN_SHULKER` | `Item.SpawnShulker` | Spawn Shulker |
| `SPAWN_ENDERMITE` | `Item.SpawnEndermite` | Spawn Endermite |
| `SPAWN_VINDICATOR` | `Item.SpawnVindicator` | Spawn Vindicator |
| `SPAWN_PHANTOM` | `Item.SpawnPhantom` | Spawn Phantom |
| `SPAWN_RAVAGER` | `Item.SpawnRavager` | Spawn Ravager |
| `SPAWN_SEA_TURTLE` | `Item.SpawnSeaTurtle` | Spawn Sea Turtle |
| `SPAWN_CAT` | `Item.SpawnCat` | Spawn Cat |
| `SPAWN_EVOKER` | `Item.SpawnEvoker` | Spawn Evoker |
| `SPAWN_VEX` | `Item.SpawnVex` | Spawn Vex |
| `SPAWN_PUFFERFISH` | `Item.SpawnPufferfish` | Spawn Pufferfish |
| `SPAWN_SALMON` | `Item.SpawnSalmon` | Spawn Salmon |
| `SPAWN_DROWNED` | `Item.SpawnDrowned` | Spawn Drowned |
| `SPAWN_TROPICAL_FISH` | `Item.SpawnTropicalFish` | Spawn Tropical Fish |
| `SPAWN_COD` | `Item.SpawnCod` | Spawn Cod |
| `SPAWN_PANDA` | `Item.SpawnPanda` | Spawn Panda |
| `SPAWN_PILLAGER` | `Item.SpawnPillager` | Spawn Pillager |
| `SPAWN_WANDERING_TRADER` | `Item.SpawnWanderingTrader` | Spawn Wandering Trader |
| `SPAWN_FOX` | `Item.SpawnFox` | Spawn Fox |
| `SPAWN_BEE` | `Item.SpawnBee` | Spawn Bee |

## LeverPosition

Positions for aligning a lever when on or off

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `BLOCK_BOTTOM_EAST_WHEN_OFF` | `LeverPosition.BlockBottomEastWhenOff` | on block bottom pointing West |
| `BLOCK_SIDE_FACING_EAST` | `LeverPosition.BlockSideFacingEast` | on block East side |
| `BLOCK_SIDE_FACING_WEST` | `LeverPosition.BlockSideFacingWest` | on block West side |
| `BLOCK_SIDE_FACING_SOUTH` | `LeverPosition.BlockSideFacingSouth` | on block South side |
| `BLOCK_SIDE_FACING_NORTH` | `LeverPosition.BlockSideFacingNorth` | on block North side |
| `BLOCK_TOP_POINTS_SOUTH_WHEN_OFF` | `LeverPosition.BlockTopPointsSouthWhenOff` | on block top pointing South |
| `BLOCK_TOP_POINTS_EAST_WHEN_OFF` | `LeverPosition.BlockTopPointsEastWhenOff` | on block top pointing West |
| `BLOCK_BOTTOM_POINTS_SOUTH_WHEN_OFF` | `LeverPosition.BlockBottomPointsSouthWhenOff` | on block bottom pointing South |

## MonsterMob

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `ZOMBIE` | `MonsterMob.Zombie` | zombie |
| `CREEPER` | `MonsterMob.Creeper` | creeper |
| `SKELETON` | `MonsterMob.Skeleton` | skeleton |
| `SPIDER` | `MonsterMob.Spider` | spider |
| `PIG_ZOMBIE` | `MonsterMob.PigZombie` | zombie pigman |
| `SLIME` | `MonsterMob.Slime` | slime |
| `ENDERMAN` | `MonsterMob.Enderman` | enderman |
| `SILVERFISH` | `MonsterMob.Silverfish` | silverfish |
| `CAVE_SPIDER` | `MonsterMob.CaveSpider` | cave spider |
| `GHAST` | `MonsterMob.Ghast` | ghast |
| `LAVA_SLIME` | `MonsterMob.LavaSlime` | magma cube |
| `BLAZE` | `MonsterMob.Blaze` | blaze |
| `ZOMBIE_VILLAGER` | `MonsterMob.ZombieVillager` | zombie villager |
| `WITCH` | `MonsterMob.Witch` | witch |
| `STRAY` | `MonsterMob.Stray` | stray |
| `HUSK` | `MonsterMob.Husk` | husk |
| `WITHER_SKELETON` | `MonsterMob.WitherSkeleton` | wither skeleton |
| `GUARDIAN` | `MonsterMob.Guardian` | guardian |
| `ELDER_GUARDIAN` | `MonsterMob.ElderGuardian` | elder guardian |
| `SHULKER` | `MonsterMob.Shulker` | shulker |
| `ENDERMITE` | `MonsterMob.Endermite` | endermite |
| `VINDICATOR` | `MonsterMob.Vindicator` | vindicator |
| `PHANTOM` | `MonsterMob.Phantom` | phantom |
| `RAVAGER` | `MonsterMob.Ravager` | ravager |
| `EVOKER` | `MonsterMob.Evoker` | evoker |
| `VEX` | `MonsterMob.Vex` | vex |
| `DROWNED` | `MonsterMob.Drowned` | drowned |
| `PILLAGER` | `MonsterMob.Pillager` | pillager |
| `HOGLIN` | `MonsterMob.Hoglin` | hoglin |
| `PIGLIN` | `MonsterMob.Piglin` | piglin |
| `ZOGLIN` | `MonsterMob.Zoglin` | zoglin |
| `WARDEN` | `MonsterMob.Warden` | warden |
| `BREEZE` | `MonsterMob.Breeze` | breeze |
| `CREAKING` | `MonsterMob.Creaking` | creaking |
| `ENDER_DRAGON` | `MonsterMob.EnderDragon` | ender dragon |
| `IRON_GOLEM` | `MonsterMob.IronGolem` | iron golem |
| `PIGLIN_BRUTE` | `MonsterMob.PiglinBrute` | piglin brute |
| `SNOW_GOLEM` | `MonsterMob.SnowGolem` | snow golem |
| `WITHER_MONSTER_MOB` | `MonsterMob.Wither` | wither |

## Particle

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `EXPLOSION_HUGE` | `Particle.ExplosionHuge` | huge explosion |
| `BALLOON_GAS` | `Particle.BalloonGas` | balloon gas |
| `BASIC_CRIT` | `Particle.BasicCrit` | basic crit |
| `BASIC_FLAME` | `Particle.BasicFlame` | basic flame |
| `BASIC_PORTAL` | `Particle.BasicPortal` | basic portal |
| `BLEACH` | `Particle.Bleach` | bleach |
| `BLUE_FLAME` | `Particle.BlueFlame` | blue flame |
| `CANDLE_FLAME` | `Particle.CandleFlame` | candle flame |
| `COLORED_FLAME` | `Particle.ColoredFlame` | colored flame |
| `CRITICAL_HIT` | `Particle.CriticalHit` | critical hit |
| `CROP_GROWTH` | `Particle.CropGrowth` | crop growth |
| `CROP_GROWTH_AREA` | `Particle.CropGrowthArea` | crop growth area |
| `DRAGON_BREATH_FIRE` | `Particle.DragonBreathFire` | dragon breath fire |
| `DRAGON_BREATH_TRAIL` | `Particle.DragonBreathTrail` | dragon breath trail |
| `DRAGON_DESTROY_BLOCK` | `Particle.DragonDestroyBlock` | dragon destroy block |
| `DRIP_HONEY` | `Particle.DripHoney` | drip honey |
| `DRIP_LAVA` | `Particle.DripLava` | drip lava |
| `DRIP_NECTAR` | `Particle.DripNectar` | drip nectar |
| `DRIP_STALACTITE_LAVA` | `Particle.DripStalactiteLava` | drip stalactite lava |
| `DRIP_STALACTITE_WATER` | `Particle.DripStalactiteWater` | drip stalactite water |
| `DRIP_WATER` | `Particle.DripWater` | drip water |
| `DUST_FALLING` | `Particle.DustFalling` | dust falling |
| `DUST_FALLING_BORDER` | `Particle.DustFallingBorder` | dust falling border |
| `DUST_FALLING_CONCRETE_POWDER` | `Particle.DustFallingConcretePowder` | dust falling concrete powder |
| `DUST_FALLING_DRAGON_EGG` | `Particle.DustFallingDragonEgg` | dust falling dragon egg |
| `DUST_FALLING_GRAVEL` | `Particle.DustFallingGravel` | dust falling gravel |
| `DUST_FALLING_RED_SAND` | `Particle.DustFallingRedSand` | dust falling red sand |
| `DUST_FALLING_SAND` | `Particle.DustFallingSand` | dust falling sand |
| `DUST_FALLING_SCAFFOLDING` | `Particle.DustFallingScaffolding` | dust falling scaffolding |
| `DUST_FALLING_TOP_SNOW` | `Particle.DustFallingTopSnow` | dust falling top snow |
| `DUST_LAB_TABLE_HEATBLOCK` | `Particle.DustLabTableHeatblock` | dust lab table heatblock |
| `DUST_MYCELIUM` | `Particle.DustMycelium` | dust mycelium |
| `DUST_OBSIDIAN_GLOW` | `Particle.DustObsidianGlow` | dust obsidian glow |
| `DUST_REDSTONE_ORE` | `Particle.DustRedstoneOre` | dust redstone ore |
| `DUST_REDSTONE_REPEATER` | `Particle.DustRedstoneRepeater` | dust redstone repeater |
| `DUST_REDSTONE_TORCH` | `Particle.DustRedstoneTorch` | dust redstone torch |
| `DUST_REDSTONE_WIRE` | `Particle.DustRedstoneWire` | dust redstone wire |
| `DUST_RISING_BORDER` | `Particle.DustRisingBorder` | dust rising border |
| `EGG_DESTROY` | `Particle.EggDestroy` | egg destroy |
| `ELEPHANT_TOOTH_PASTE_VAPOR` | `Particle.ElephantToothPasteVapor` | elephant tooth paste vapor |
| `ENCHANTING_TABLE` | `Particle.EnchantingTable` | enchanting table |
| `END_CHEST` | `Particle.EndChest` | ender chest |
| `ENDROD` | `Particle.Endrod` | end rod |
| `EVOCATION_FANG_PARTICLE` | `Particle.EvocationFang` | evocation fang |
| `EXPLOSION` | `Particle.Explosion` | explosion |
| `EXPLOSION_CAMERA_SHOOT` | `Particle.ExplosionCameraShoot` | explosion camera shoot |
| `EXPLOSION_CAULDRON` | `Particle.ExplosionCauldron` | explosion cauldron |
| `EXPLOSION_DEATH` | `Particle.ExplosionDeath` | explosion death |
| `EXPLOSION_DRAGON_DEATH` | `Particle.ExplosionDragonDeath` | explosion dragon death |
| `EXPLOSION_DRAGON_DYING` | `Particle.ExplosionDragonDying` | explosion dragon dying |
| `EXPLOSION_HUGE_LAB` | `Particle.ExplosionHugeLab` | explosion huge lab |
| `EXPLOSION_LARGE` | `Particle.ExplosionLarge` | explosion large |
| `EXPLOSION_SINGLE` | `Particle.ExplosionSingle` | explosion single |
| `EYEOFENDER_DEATH_EXPLODE` | `Particle.EyeofenderDeathExplode` | eyeofender death explode |
| `FIRE_VAPOR` | `Particle.FireVapor` | fire vapor |
| `HEART` | `Particle.Heart` | heart |
| `ICE_EVAPORATION` | `Particle.IceEvaporation` | ice evaporation |
| `KNOCKBACK_ROAR` | `Particle.KnockbackRoar` | knockback roar |
| `LAB_TABLE_MYSTICAL` | `Particle.LabTableMystical` | lab table mystical |
| `LAVA_PARTICLE` | `Particle.Lava` | lava |
| `MAGNESIUM_SALTS` | `Particle.MagnesiumSalts` | magnesium salts |
| `MOB_BLOCK_SPAWN` | `Particle.MobBlockSpawn` | mob block spawn |
| `MOB_PORTAL` | `Particle.MobPortal` | mob portal |
| `MOBFLAME` | `Particle.Mobflame` | mobflame |
| `MOBFLAME_SINGLE` | `Particle.MobflameSingle` | mobflame single |
| `MOBSPELL` | `Particle.Mobspell` | mobspell |
| `NOTE` | `Particle.Note` | note |
| `OBSIDIAN_TEAR` | `Particle.ObsidianTear` | obsidian tear |
| `PHANTOM_TRAIL` | `Particle.PhantomTrail` | phantom trail |
| `PORTAL_DIRECTIONAL` | `Particle.PortalDirectional` | portal directional |
| `PORTAL_REVERSE` | `Particle.PortalReverse` | portal reverse |
| `RAIN_SPLASH` | `Particle.RainSplash` | rain splash |
| `SCULK_SENSOR_REDSTONE` | `Particle.SculkSensorRedstone` | sculk sensor redstone |
| `SHRIEK` | `Particle.Shriek` | shriek |
| `SHULKER_BULLET` | `Particle.ShulkerBullet` | shulker bullet |
| `SILVERFISH_GRIEF` | `Particle.SilverfishGrief` | silverfish grief |
| `SMOKE_BASIC` | `Particle.SmokeBasic` | smoke basic |
| `SMOKE_CAMPFIRE` | `Particle.SmokeCampfire` | smoke campfire |
| `SMOKE_CAMPFIRE_TALL` | `Particle.SmokeCampfireTall` | smoke campfire tall |
| `SMOKE_LLAMA_SPIT` | `Particle.SmokeLlamaSpit` | smoke llama spit |
| `SNOWFLAKE` | `Particle.Snowflake` | snowflake |
| `SOUL` | `Particle.Soul` | soul |
| `SOUL_SCULK` | `Particle.SoulSculk` | soul sculk |
| `SPARKLER` | `Particle.Sparkler` | sparkler |
| `SPELL_ARROW` | `Particle.SpellArrow` | spell arrow |
| `SPELL_EVOKER` | `Particle.SpellEvoker` | spell evoker |
| `SPELL_SPLASH` | `Particle.SpellSplash` | spell splash |
| `SPORE_BLOSSOM_AMBIENT` | `Particle.SporeBlossomAmbient` | spore blossom ambient |
| `SPORE_BLOSSOM_SHOWER` | `Particle.SporeBlossomShower` | spore blossom shower |
| `STUNNED` | `Particle.Stunned` | stunned |
| `TOTEM_PARTICLE` | `Particle.Totem` | totem |
| `TOTEM_SINGLE` | `Particle.TotemSingle` | totem single |
| `VILLAGER_ANGRY` | `Particle.VillagerAngry` | villager angry |
| `VILLAGER_HAPPY` | `Particle.VillagerHappy` | villager happy |
| `WATER_EVAPORATION_ACTOR` | `Particle.WaterEvaporationActor` | water evaporation actor |
| `WATER_EVAPORATION_BUCKET` | `Particle.WaterEvaporationBucket` | water evaporation bucket |
| `WATER_EVAPORATION_SINGLE` | `Particle.WaterEvaporationSingle` | water evaporation single |
| `WATER_SPLASH` | `Particle.WaterSplash` | water splash |
| `WATER_SPLASH_SINGLE` | `Particle.WaterSplashSingle` | water splash single |
| `WATER_WAKE` | `Particle.WaterWake` | water wake |
| `WITHER_BOSS_INVULNERABLE` | `Particle.WitherBossInvulnerable` | wither boss invulnerable |

## ProjectileMob

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `PRIMED_TNT` | `ProjectileMob.PrimedTnt` | primed tnt |
| `XP_BOTTLE` | `ProjectileMob.XpBottle` | xp bottle |
| `XP_ORB` | `ProjectileMob.XpOrb` | xp orb |
| `FIREWORKS_ROCKET` | `ProjectileMob.FireworksRocket` | fireworks rocket |
| `ARROW_PROJECTILE_MOB` | `ProjectileMob.Arrow` | arrow |
| `SNOWBALL_PROJECTILE_MOB` | `ProjectileMob.Snowball` | snowball |
| `EGG_PROJECTILE_MOB` | `ProjectileMob.Egg` | egg |
| `SPLASH_POTION` | `ProjectileMob.SplashPotion` | splash potion |
| `LIGHTNING_BOLT` | `ProjectileMob.LightningBolt` | lightning bolt |
| `EVOCATION_FANG` | `ProjectileMob.EvocationFang` | evocation fang |

## ShapeOperation

Shape fill operators

| Constant | Enum member | Shown in blocks as |
|---|---|---|
|  | `ShapeOperation.Replace` | replace |
|  | `ShapeOperation.Hollow` | hollow |
|  | `ShapeOperation.Outline` | outline |

## SixDirection

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `FORWARD` | `SixDirection.Forward` | forward |
| `BACK` | `SixDirection.Back` | back |
| `LEFT` | `SixDirection.Left` | left |
| `RIGHT` | `SixDirection.Right` | right |
| `UP` | `SixDirection.Up` | up |
| `DOWN` | `SixDirection.Down` | down |

## StructureAnimationMode

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `NONE_STRUCTURE_ANIMATION_MODE` | `StructureAnimationMode.None` | none |
| `BLOCK_BY_BLOCK` | `StructureAnimationMode.BlockByBlock` | block-by-block |
| `LAYER_BY_LAYER` | `StructureAnimationMode.LayerByLayer` | layer-by-layer |

## StructureMirrorAxis

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `NONE` | `StructureMirrorAxis.None` | none |
| `X` | `StructureMirrorAxis.X` | x axis |
| `Z` | `StructureMirrorAxis.Z` | z axis |
| `XZ` | `StructureMirrorAxis.XZ` | xz axis |

## StructureRotation

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `DEGREES0` | `StructureRotation.Degrees0` | 0° |
| `DEGREES90` | `StructureRotation.Degrees90` | 90° |
| `DEGREES180` | `StructureRotation.Degrees180` | 180° |
| `DEGREES270` | `StructureRotation.Degrees270` | 270° |

## StructureSaveMode

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `MEMORY` | `StructureSaveMode.Memory` | memory |
| `DISK` | `StructureSaveMode.Disk` | disk |

## TargetSelectorKind

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `NEAREST_PLAYER` | `TargetSelectorKind.NearestPlayer` | nearest player (@p) |
| `LOCAL_PLAYER` | `TargetSelectorKind.LocalPlayer` | yourself (@s) |
| `RANDOM_PLAYER` | `TargetSelectorKind.RandomPlayer` | random player (@r) |
| `ALL_PLAYERS` | `TargetSelectorKind.AllPlayers` | all players (@a) |
| `ALL_ENTITIES` | `TargetSelectorKind.AllEntities` | all entities (@e) |
| `MY_AGENT` | `TargetSelectorKind.MyAgent` | my Agent (@c) |

## TargetUserSelectorKind

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `NEAREST_USER` | `TargetUserSelectorKind.NearestUser` | nearest user |
| `LOCAL_USER` | `TargetUserSelectorKind.LocalUser` | yourself |
| `RANDOM_USER` | `TargetUserSelectorKind.RandomUser` | random user |
| `ALL_USERS` | `TargetUserSelectorKind.AllUsers` | all users |
| `ALL_ENTITIES_TARGET_USER_SELECTOR_KIND` | `TargetUserSelectorKind.AllEntities` | all entities |

## TestForBlocksMask

| Constant | Enum member | Shown in blocks as |
|---|---|---|
|  | `TestForBlocksMask.All` | all |
|  | `TestForBlocksMask.Masked` | masked |

## TimeQuery

Time value type for time queries

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `GAME_TIME` | `TimeQuery.GameTime` | gametime |
| `DAY_TIME` | `TimeQuery.DayTime` | daytime |
| `DAY_TIME_QUERY` | `TimeQuery.Day` | day |
| `REAL_LIFE` | `TimeQuery.RealLife` | real life |

## TravelMethod

The method of travel for player or mob

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `UNKNOWN` | `TravelMethod.Unknown` | unknown |
| `WALK` | `TravelMethod.Walk` | walk |
| `SWIM_WATER` | `TravelMethod.SwimWater` | swim water |
| `FALL` | `TravelMethod.Fall` | fall |
| `CLIMB` | `TravelMethod.Climb` | climb |
| `SWIM_LAVA` | `TravelMethod.SwimLava` | swim lava |
| `FLY` | `TravelMethod.Fly` | fly |
| `RIDING` | `TravelMethod.Riding` | riding |
| `SNEAK` | `TravelMethod.Sneak` | sneak |
| `SPRINT` | `TravelMethod.Sprint` | sprint |
| `BOUNCE` | `TravelMethod.Bounce` | bounce |
| `FROST_WALK` | `TravelMethod.FrostWalk` | frost walk |
| `TELEPORT` | `TravelMethod.Teleport` | teleport |

## TurnDirection

| Constant | Enum member | Shown in blocks as |
|---|---|---|
|  | `TurnDirection.Left` | left |
|  | `TurnDirection.Right` | right |

## Weather

| Constant | Enum member | Shown in blocks as |
|---|---|---|
| `CLEAR` | `Weather.Clear` | clear |
| `RAIN` | `Weather.Rain` | rain |
| `THUNDER` | `Weather.Thunder` | thunder |
