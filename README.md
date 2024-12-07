# Bouncing Balls

This project simulates a simple physics-based animation of multiple bouncing balls within a defined canvas.

**Key Concepts Covered:**

* **Functions:**
    * `Ball()`: Constructor function to create ball objects with properties like color, size, position, and velocity.
    * `randomColor()`: Generates random RGB color values for the balls.
    * `animate()`: Main function that handles the animation loop, including ball updates, collision detection, and canvas clearing.
* **Random:**
    * Used to generate random values for:
        * Ball colors (RGB values)
        * Ball sizes
        * Ball speeds
        * Ball directions (x and y velocities)
* **If-else Statements:**
    * Implement collision detection with the canvas boundaries.
    * Determine the direction of the ball's movement after a collision.
    * Handle ball size changes based on mouse proximity.

**Project Structure:**

* **index.html:** Contains the HTML structure, including the canvas element.
* **bounce.css:** Styles the canvas and sets the background color.
* **script.js:** Contains the core JavaScript logic for:
    * Creating and drawing balls.
    * Updating ball positions and handling collisions.
    * Implementing basic mouse interaction.

**How to Run:**

1. **Save the files:** Save the provided code snippets as `index.html`, `bounce.css`, and `script.js` in the same directory.
2. **Open `index.html` in a web browser.**

**Code Explanation:**

* **HTML (`index.html`)**
    * Creates a basic HTML structure with a `<canvas>` element.
    * Includes a script tag to link the `script.js` file.

* **CSS (`style.css`)**
    * Styles the `body` element with a background color and removes default margins.

* **JavaScript (`script.js`)**
    * **Initialization:**
        * Gets the canvas element and its 2D rendering context.
        * Initializes canvas dimensions.
        * Sets up event listeners for mouse movement.
    * **`randomColor()` function:**
        * Generates random RGB values and returns an rgba color string.
    * **`Ball()` constructor function:**
        * Initializes ball properties: color, radius, starting position, velocity, etc.
        * Includes an `update()` method to draw the ball on the canvas.
    * **Ball creation:**
        * Creates an array of 50 `Ball` objects.
    * **`animate()` function:**
        * The main animation loop:
            * Clears the canvas.
            * Updates the position of each ball.
            * Handles ball-boundary collisions.
            * Handles ball size changes based on mouse proximity.
            * Requests the next animation frame using `requestAnimationFrame()`.
    * **Animation loop and ball creation:**
        * Starts the animation loop using `animate()`.
        * Creates a new ball every 400 milliseconds and removes the oldest ball.

**Project Enhancements:**

* **Implement gravity.**
* **Handle ball-ball collisions.**
* **Add more sophisticated user interactions.**
* **Improve visual effects (trails, shadows, etc.).**
* **Optimize performance for a larger number of balls.**

This README provides a comprehensive overview of the Bouncing Balls project, including its structure, key concepts, code explanations, and potential enhancements.