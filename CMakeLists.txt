cmake_minimum_required(VERSION 3.11)
project(packer)

include(FindOpenGL)

set(CMAKE_BUILD_TYPE "Debug")
set(CMAKE_HAVE_LIBC_PTHREAD 1)

find_package(raylib 3.0 QUIET)
find_package(X11 QUIET)

if (NOT raylib_FOUND)
  include(FetchContent)

  FetchContent_Declare(
    raylib
    URL https://github.com/raysan5/raylib/archive/master.tar.gz
  )

  FetchContent_GetProperties(raylib)
  if (NOT raylib_POPULATED)
    set(FETCHCONTENT_QUIET NO)
    FetchContent_Populate(raylib)
    set(BUILD_EXAMPLES OFF CACHE BOOL "" FORCE)
    add_subdirectory(${raylib_SOURCE_DIR} ${raylib_BINARY_DIR})
  endif()
endif()

set(raylib_VERBOSE 1)

add_executable(${PROJECT_NAME} main.c)
add_compile_options(-Werror -Wfloat-conversion -Wpedantic)
set_property(TARGET ${PROJECT_NAME} PROPERTY C_STANDARD 99)
target_link_libraries(${PROJECT_NAME} raylib)

if (EMSCRIPTEN)
  set(PLATFORM Web CACHE STRING "Forcing PLATFORM_WEB because EMSCRIPTEN was detected")
  set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -s USE_GLFW=3 -s ASSERTIONS=1 -s WASM=1 -s ASYNCIFY")
  set(CMAKE_EXECUTABLE_SUFFIX ".html")
endif()
