# PACKER

A roguelike game using procedural map generation.


## Installation

First, install required packages using `apt`:

    sudo apt install -y cmake libxrandr-dev libxinerama-dev \
        libxcursor-dev libxi-dev mesa-common-dev libgl1-mesa-dev \
        libgles2-mesa-dev


Also you need to install `emsdk` manually:

    git clone https://github.com/emscripten-core/emsdk.git
    cd emsdk
    ./emsdk install latest
    ./emsdk activate latest
    source ./emsdk_env.sh


Then, run this commands to build project:

    emcmake cmake -S . -B build -DPLATFORM=Web
    cd build
    make
    emrun packer.html


After the `emrun` command, it will be worked automatically on your
browser.


## Sources

- https://itch.io/jam/rlejam
- http://www.roguebasin.com/index.php/Basic_BSP_Dungeon_generation
- https://eskerda.com/bsp-dungeon-generation/
- https://gamedevelopment.tutsplus.com/tutorials/how-to-use-bsp-trees-to-generate-game-maps--gamedev-12268
- https://github.com/raysan5/raylib/wiki/Working-on-GNU-Linux
- https://github.com/thebracket/roguelike-celebration-2020
- https://varav.in/archive/dungeon/
- https://www.reddit.com/r/roguelikedev/comments/6df0aw/my_implementation_of_a_bunch_of_dungeon_algorithms/
- https://www.davideaversa.it/blog/random-maps-with-cellular-automata/ **(If we choose cellular automata to generate the levels, it should be iterated at least 10 times for a well generated map.)**
- https://gamedevelopment.tutsplus.com/tutorials/generate-random-cave-levels-using-cellular-automata--gamedev-9664
- http://roguebasin.com/?title=Cellular_Automata_Method_for_Generating_Random_Cave-Like_Levels
- https://medium.com/@yvanscher/cellular-automata-how-to-create-realistic-worlds-for-your-game-2a9ec35f5ba9
- http://www.roguebasin.com/index.php/Articles
- https://www.albertford.com/shadowcasting/
- https://www.youtube.com/watch?v=slTEz6555Ts
- https://www.youtube.com/watch?v=F7kYCCgVlTU
- https://www.youtube.com/watch?v=u62b52xGiF0&t=4s
- https://www.youtube.com/watch?v=fnFj3dOKcIQ
- https://github.com/tcoxon/metazelda

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
- (Roguelike dev resources) - https://github.com/marukrap/RoguelikeDevResources


## TODO

- [ ] mockups
- [ ] dungeon/room generation (porklike)
- [ ] turn-based movement
- [ ] state management
- [ ] carriage movement (cutter)
- [ ] player stats
- [ ] items
- [ ] inventory or limited item slots
- [ ] mobs
- [X] web export
- [X] create project structure
