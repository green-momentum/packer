let MAP_SIZE = 32;
let TILE_SIZE = 8;
let ITERATION_COUNT = 12;
const TILE_TYPES = {
  FLOOR: 0,
  WALL: 1
}
const ENTREANCE_DIR = {
  TOP: 0,
  BOTTOM: 1,
  LEFT: 2,
  RIGHT: 3
}

const SPRITE_SHEET = new Image();
SPRITE_SHEET.src = "assets/colored_tilemap_packed.png";

const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

const initializeMap = size => {
  const map = [];
  for (let row = 0; row < size; row++) {
    map.push([])
    for (let col = 0; col < size; col++) {
      if (col === 0 || row === 0 || col === size - 1 || row === size - 1) {
        map[row][col] = 1;
      } else if (row === Math.floor(size / 2) || col === Math.floor(size / 2)) {
        map[row][col] = 0;
      } else {
        map[row][col] = Math.random() < 0.4 ? TILE_TYPES.WALL : TILE_TYPES.FLOOR
      }
    }
  }
  return map;
}

const drawMap = map => {
  ctx.fillStyle = "#272828";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
      const tileType = map[row][col]
      if (tileType === TILE_TYPES.WALL) {
        ctx.drawImage(
          SPRITE_SHEET,
          8 * 5,
          8 * 5,
          8,
          8,
          col * TILE_SIZE,
          row * TILE_SIZE,
          TILE_SIZE,
          TILE_SIZE
        )
      }
    }
  }
}

const getNearbyTiles = (map, targetRow, targetCol, nAway) => {
  const tiles = [];
  for (let row = targetRow - nAway; row < targetRow + nAway + 1; row++) {
    for (let col = targetCol - nAway; col < targetCol + nAway + 1; col++) {
      if (row === targetRow && col === targetCol) continue;
      tiles.push(map[row] ? map[row][col] : undefined)
    }
  }
  return tiles
}

const iterate = (map, currentIteration, maxIteration) => {
  const iteratedMap = [];
  for (let row = 0; row < map.length; row++) {
    iteratedMap.push([]);
    for (let col = 0; col < map[row].length; col++) {
      const wallCount = getNearbyTiles(map, row, col, 1)
        .filter(tile => tile === undefined || tile === TILE_TYPES.WALL)
        .length;

      if (map[row][col] === TILE_TYPES.WALL) {
        if (wallCount >= 4) {
          iteratedMap[row][col] = 1;
        } else if (wallCount < 2) {
          iteratedMap[row][col] = 0;
        }
      } else {
          if (wallCount >= 5) {
            iteratedMap[row][col] = 1;
          } else {
            iteratedMap[row][col] = 0;
          }
      }
    }
  }

  return currentIteration < maxIteration
    ? iterate(iteratedMap, currentIteration + 1, maxIteration)
    : iteratedMap;
}

const createEntrance = (map, entranceDir) => {
  const arrClone = JSON.parse(JSON.stringify(map))

  let startRow = (entranceDir === ENTREANCE_DIR.LEFT || entranceDir === ENTREANCE_DIR.RIGHT)
    ? Math.floor(map.length / 2)
    : (entranceDir === ENTREANCE_DIR.TOP) ? 0 : map.length - 1

  const deltaRow = (entranceDir === ENTREANCE_DIR.LEFT || entranceDir === ENTREANCE_DIR.RIGHT)
    ? 0
    : (entranceDir === ENTREANCE_DIR.TOP) ? 1 : -1

  let startCol = (entranceDir === ENTREANCE_DIR.TOP || entranceDir === ENTREANCE_DIR.BOTTOM)
    ? Math.floor(map[0].length / 2)
    : (entranceDir === ENTREANCE_DIR.LEFT) ? 0 : map[0].length - 1

  const deltaCol = (entranceDir === ENTREANCE_DIR.TOP || entranceDir === ENTREANCE_DIR.BOTTOM)
    ? 0
    : (entranceDir === ENTREANCE_DIR.LEFT) ? 1 : -1

  while (startRow !== Math.floor(map.length / 2) || startCol !== Math.floor(map[0].length / 2)) {
    arrClone[startRow - deltaCol][startCol - deltaRow] = TILE_TYPES.FLOOR;
    arrClone[startRow][startCol] = TILE_TYPES.FLOOR;
    startRow += deltaRow
    startCol += deltaCol
  }

  return arrClone;
}

const generate = (mapSize, iterationCount, tileSize, entranceDir) => {
  console.log(entranceDir)
  MAP_SIZE = mapSize;
  ITERATION_COUNT = iterationCount;
  TILE_SIZE = tileSize;
  const map = initializeMap(MAP_SIZE);
  const iteratedMap = iterate(map, 0, ITERATION_COUNT);
  const finalVer = createEntrance(iteratedMap, Number(entranceDir))
  const CANVAS_SIZE = TILE_SIZE * MAP_SIZE;
  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;
  canvas.style.width = CANVAS_SIZE * 1.5;
  drawMap(finalVer);
}
SPRITE_SHEET.onload = () => generate(MAP_SIZE, ITERATION_COUNT, TILE_SIZE, ENTREANCE_DIR.TOP);


const tileSizeInput = document.querySelector("#tile_size");
tileSizeInput.value = TILE_SIZE;
const mapSizeInput = document.querySelector("#map_size");
mapSizeInput.value = MAP_SIZE;
const iterationCount = document.querySelector("#iteration_count");
iterationCount.value = ITERATION_COUNT;
const dir = document.querySelector("#entrance");
document.querySelector("#generate_btn").addEventListener("click", () => generate(mapSizeInput.value, iterationCount.value, tileSizeInput.value, dir.value));
