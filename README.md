# Packer

A roguelike game using procedural map generation.


## Installation

First, install required packages using `apt`:

    sudo apt install -y cmake libxrandr-dev libxinerama-dev \
        libxcursor-dev libxi-dev mesa-common-dev libgl1-mesa-dev \
        libgles2-mesa-dev


Then, run this commands to build project:

    mkdir build && cd build
    cmake ..
    make


After the `make` command, you will see a binary named `room`.


## Sources

- https://itch.io/jam/rlejam
- http://www.roguebasin.com/index.php/Basic_BSP_Dungeon_generation
- https://eskerda.com/bsp-dungeon-generation/
- https://gamedevelopment.tutsplus.com/tutorials/how-to-use-bsp-trees-to-generate-game-maps--gamedev-12268
- https://github.com/raysan5/raylib/wiki/Working-on-GNU-Linux
- https://github.com/thebracket/roguelike-celebration-2020

## Mockups & Examples
- (Map - [8x8 = tile size, 16 tilex16 tile = map size ?]) - https://dribbble.com/shots/4168845-1-bit-mockup?utm_source=Pinterest_Shot&utm_campaign=pixelartm&utm_content=1+bit+mockup&utm_medium=Social_Share
- (Map - Can we make procedurally generated maps instead of dungeons rooms and corridors using cellular automata or something like that ?) - https://twitter.com/LootBndt/status/1426670883037401091
- (Map) - https://pixeljoint.com/pixelart/110803.htm
- (Map & Art-style) - https://tr.pinterest.com/pin/37295503154697948/
- (Map & Art-style) - https://zapchi.itch.io/2-bit-roguelike-tileset
- (Art-style) - https://coryschmitz.tumblr.com/post/95785006897/set-of-posters-for-sirvos-award-winning-video
- (Art-style) - https://mrmotarius.itch.io/miniadventures
- (Art-style) - https://twitter.com/LootBndt/status/1366889553894727686
- (Art-style) - https://twitter.com/LootBndt/status/1462207845106130946/photo/1
- (Art-style) - https://twitter.com/LootBndt/status/1459148475409514499/photo/1
- (Art-style) - https://twitter.com/LootBndt/status/1458173293278769154
- (Menu art-style) - http://oldcomputers.net/pics/grid-screen-1.jpg
- (In game icons) - https://itch.io/queue/c/1574970/game-assets?game_id=145784
- (Generation algorithm idea) - https://gamedev.stackexchange.com/questions/47917/procedural-house-with-rooms-generator
- (Porklike tutorial series) - https://www.youtube.com/playlist?list=PLea8cjCua_P3LL7J1Q9b6PJua0A-96uUS
- (Porklike tutorial pico8 bbs post) - https://www.lexaloffle.com/bbs/?tid=33121


## TODO

- [ ] mockups
- [ ] web export
- [ ] dungeon/room generation (porklike)
- [ ] turn-based movement
- [ ] state management
- [ ] carriage movement (cutter)
- [ ] player stats
- [ ] items
- [ ] inventory or limited item slots
- [ ] mobs
- [X] create project structure
