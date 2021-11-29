# ROOM

A roguelike game using procedural map generation.


## INSTALLATION

First, install required packages using `apt`:

    sudo apt install -y cmake libxrandr-dev libxinerama-dev \
        libxcursor-dev libxi-dev mesa-common-dev libgl1-mesa-dev \
        libgles2-mesa-dev


Then, run this commands to build project:

    mkdir build && cd build
    cmake ..
    make


After the `make` command, you will see a binary named `room`.


## SOURCES

- https://itch.io/jam/rlejam
- http://www.roguebasin.com/index.php/Basic_BSP_Dungeon_generation
- https://eskerda.com/bsp-dungeon-generation/
- https://gamedevelopment.tutsplus.com/tutorials/how-to-use-bsp-trees-to-generate-game-maps--gamedev-12268
- https://github.com/raysan5/raylib/wiki/Working-on-GNU-Linux
- https://github.com/thebracket/roguelike-celebration-2020


## TODO

- [ ] use an algorithm for generating map procedurally.
- [X] create project structure.
