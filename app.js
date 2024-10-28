
// Task 1 (in index.html file): Set up the HTML Structure

// Task: 2: Configure the Javascript for Drawing Context

const canvas = document.getElementById('canvasDrawing'); 
const ctx = canvas.getContext('2d'); // 2D drawing context

let draw = false; 
let startX, startY; 
let selectedTool = 'line'; 

// Add event listeners
canvas.addEventListener('mousedown', beginDrawing);
canvas.addEventListener('mousemove', continueDrawing); 
canvas.addEventListener('mouseup', endDrawing); 

// Track user input to draw shapes dynamically
function beginDrawing(event) {
    draw = true; 
    startX = event.offsetX; 
    startY = event.offsetY; 
}
function endDrawing() {
    draw = false;
    ctx.closePath();
}
function continueDrawing(event) {
    if (draw) {
        let currentX = event.offsetX; 
        let currentY = event.offsetY; 
        drawShape(startX, startY, currentX, currentY); 
    }
}

