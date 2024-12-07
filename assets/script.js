// Get the canvas element and its 2D rendering context
var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

// Get window dimensions for initial canvas size
var tx = window.innerWidth;
var ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;

// Track mouse position
var mousex = 0;
var mousey = 0;

// Event listener for mouse movement
addEventListener("mousemove", function() {
  mousex = event.clientX;
  mousey = event.clientY;
});

// Gravity constant
var grav = 0.99;

// Set stroke width for ball outlines (optional)
c.strokeWidth = 5; 

// Function to generate random colors for the balls
function randomColor() {
  return (
    "rgba(" +
    Math.round(Math.random() * 250) + 
    "," +
    Math.round(Math.random() * 250) + 
    "," +
    Math.round(Math.random() * 250) + 
    "," +
    Math.ceil(Math.random() * 10) / 10 + 
    ")"
  );
}

// Constructor function for Ball objects
function Ball() {
  this.color = randomColor(); 
  this.radius = Math.random() * 20 + 14; 
  this.startradius = this.radius; 
  this.x = Math.random() * (tx - this.radius * 2) + this.radius; 
  this.y = Math.random() * (ty - this.radius); 
  this.dy = Math.random() * 2; 
  this.dx = Math.round((Math.random() - 0.5) * 10); 
  this.vel = Math.random() / 5; 

  // Method to draw the ball on the canvas
  this.update = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    c.fillStyle = this.color;
    c.fill();
    //c.stroke(); // Uncomment to draw ball outlines
  };
}

// Create an array to hold ball objects
var bal = [];
for (var i = 0; i < 50; i++) {
  bal.push(new Ball());
}

// Main animation loop
function animate() {
  // Resize canvas if window size changes
  if (tx != window.innerWidth || ty != window.innerHeight) {
    tx = window.innerWidth;
    ty = window.innerHeight;
    canvas.width = tx;
    canvas.height = ty;
  }

  requestAnimationFrame(animate); 

  // Clear the canvas before drawing
  c.clearRect(0, 0, tx, ty);

  // Loop through each ball object
  for (var i = 0; i < bal.length; i++) {
    bal[i].update(); // Draw the ball

    // Update ball's y-position (vertical movement)
    bal[i].y += bal[i].dy; 

    // Update ball's x-position (horizontal movement)
    bal[i].x += bal[i].dx;

    // Handle collisions with the canvas bottom edge
    if (bal[i].y + bal[i].radius >= ty) {
      bal[i].dy = -bal[i].dy * grav; // Reverse y-direction and apply gravity
    } else {
      bal[i].dy += bal[i].vel; // Apply gravity
    }

    // Handle collisions with the canvas sides
    if (bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0) {
      bal[i].dx = -bal[i].dx; // Reverse x-direction
    }

    // Change ball size based on mouse proximity
    if (
      mousex > bal[i].x - 20 &&
      mousex < bal[i].x + 20 &&
      mousey > bal[i].y - 50 &&
      mousey < bal[i].y + 50 &&
      bal[i].radius < 70
    ) {
      bal[i].radius += 5; // Increase radius
    } else {
      if (bal[i].radius > bal[i].startradius) {
        bal[i].radius += -5; // Decrease radius back to original size
      }
    }
  } 
}

// Start the animation loop
animate();

// Create a new ball and remove the oldest ball every 400 milliseconds
setInterval(function() {
  bal.push(new Ball());
  bal.splice(0, 1); 
}, 400);
