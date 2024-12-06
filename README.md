# Bouncing Balls

This project simulates a simple physics-based animation of multiple bouncing balls within a defined canvas.

**Key Concepts Covered:**

* **Functions:** 
    * Used to encapsulate reusable code blocks, such as:
        * `createBall()`: Creates a new ball object with random properties (color, size, speed, direction).
        * `drawBall()`: Draws a single ball on the canvas.
        * `updateBall()`: Updates the ball's position and handles bouncing behavior.
* **Random:** 
    * Utilized to generate random values for:
        * Ball colors (RGB values)
        * Ball sizes
        * Ball speeds
        * Ball directions (x and y velocities)
* **If-else Statements:**
    * Implement collision detection with the canvas boundaries.
    * Determine the direction of the ball's movement after a collision.
* **Event Listeners:**
    * Used to handle user interactions (optional):
        * `resize` event: Adjust canvas size dynamically to fit the browser window.
        * `click` event: Potentially add new balls on click.

**Project Structure:**

* **index.html:** Contains the HTML structure, including the canvas element.
* **style.css:** Styles the canvas and any other necessary elements.
* **script.js:** Contains the JavaScript code for:
    * Creating and drawing balls.
    * Updating ball positions and handling collisions.
    * Implementing user interactions (if applicable).

**How to Run:**

1. **Open `index.html` in a web browser.** 

**Project Enhancements:**

* **Gravity:** Implement basic gravity to make the balls fall downwards.
* **Collisions:** Handle collisions between balls.
* **User Interaction:**
    * Allow users to add or remove balls.
    * Implement mouse interactions (e.g., attract/repel balls).
* **Visual Effects:**
    * Add trails or shadows to the balls.
    * Create a more visually appealing background.

**Note:**

This README provides a basic framework. You should adapt it to include specific details about your implementation, including any unique features or challenges you encountered.

This project is a great starting point for learning fundamental JavaScript concepts and experimenting with simple physics simulations.
