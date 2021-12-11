#include "raylib.h"

const char APP_NAME[10] = "packer";
const int CELL_SIZE = 25;
const int SCREEN_WIDTH = CELL_SIZE * 32;
const int SCREEN_HEIGHT = CELL_SIZE * 18;

void drawHUD() {
  int fontSize = 20;
  char msg[100] = "move hero with arrow keys.";
  float width = (SCREEN_WIDTH - MeasureText(msg, fontSize)) / 2;
  Vector2 posHUD = {width, (float)CELL_SIZE};
  DrawText(msg, posHUD.x, posHUD.y, 20, DARKGRAY);
}

void drawHero(Vector2 pos) {
  DrawRectangle(pos.x, pos.y, CELL_SIZE, CELL_SIZE, MAROON);
}

void drawCutter(Vector2 pos) {
  DrawRectangle(pos.x, pos.y, CELL_SIZE, CELL_SIZE, BLUE);
}

int main(void) {
  InitWindow(SCREEN_WIDTH, SCREEN_HEIGHT, APP_NAME);

  SetTargetFPS(60); // Set our game to run at 60 frames-per-second

  Vector2 posHero = {(float)SCREEN_WIDTH / 2, (float)SCREEN_HEIGHT / 2};
  Vector2 posCutter = {(float)5 * CELL_SIZE, (float)5 * CELL_SIZE};

  TraceLog(LOG_INFO, "posHero: {%.0f,%.0f} - posCutter: {%.0f,%.0f}\n",
           posHero.x, posHero.y, posCutter.x, posCutter.y);

  // GAME LOOP
  while (!WindowShouldClose()) // Detect window close button or ESC key
  {
    // UPDATE
    if (IsKeyPressed(KEY_RIGHT)) {
      posHero.x += CELL_SIZE;
    } else if (IsKeyPressed(KEY_LEFT)) {
      posHero.x -= CELL_SIZE;
    } else if (IsKeyPressed(KEY_UP)) {
      posHero.y -= CELL_SIZE;
    } else if (IsKeyPressed(KEY_DOWN)) {
      posHero.y += CELL_SIZE;
    }

    // DRAW
    BeginDrawing();

    ClearBackground(RAYWHITE);

    drawHUD();
    drawCutter(posCutter);
    drawHero(posHero);

    EndDrawing();
  }

  CloseWindow(); // Close window and OpenGL context

  return 0;
}
