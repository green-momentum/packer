#include "raylib.h"

int main(void) {
  const char APP_NAME[10] = "packer";
  const int cellSize = 25;
  const int screenWidth = cellSize * 32;
  const int screenHeight = cellSize * 18;

  InitWindow(screenWidth, screenHeight, APP_NAME);

  SetTargetFPS(60); // Set our game to run at 60 frames-per-second

  Vector2 heroPosition = {(float)screenWidth / 2, (float)screenHeight / 2};

  // GAME LOOP
  while (!WindowShouldClose()) // Detect window close button or ESC key
  {
    // UPDATE
    if (IsKeyPressed(KEY_RIGHT)) {
      heroPosition.x += cellSize;
    } else if (IsKeyPressed(KEY_LEFT)) {
      heroPosition.x -= cellSize;
    } else if (IsKeyPressed(KEY_UP)) {
      heroPosition.y -= cellSize;
    } else if (IsKeyPressed(KEY_DOWN)) {
      heroPosition.y += cellSize;
    }

    // DRAW
    BeginDrawing();

    ClearBackground(RAYWHITE);

    DrawText("move the ball with arrow keys", 10, 10, 20, DARKGRAY);

    // DrawCircleV(heroPosition, cellSize, MAROON);
    DrawRectangle(heroPosition.x, heroPosition.y, cellSize, cellSize, MAROON);

    EndDrawing();
  }

  CloseWindow(); // Close window and OpenGL context

  return 0;
}
