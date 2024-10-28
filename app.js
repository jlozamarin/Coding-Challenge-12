
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
    }
}

// Task 3: Implement Shape Drawing Logic

 // Draw shape based on the selected tool
 switch (selectedTool) { 
    case 'line':
        drawLine(startX, startY, currentX, currentY); // draw a line
        break;
    case 'rectangle':
        drawRectangle(startX, startY, currentX, currentY); // draw a rectangle
        break;
    case 'circle':
        drawCircle(startX, startY, currentX, currentY); // draw a circle
        break;
}

function drawLine(x1, y1, x2, y2) { // draw a line between two points
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();
}
function drawRectangle(x1, y1, x2, y2) { // draw a rectangle
const width = x2 - x1;
const height = y2 - y1;
ctx.beginPath(); // Start a new shape
ctx.rect(x1, y1, width, height); 
ctx.stroke();
}
function drawCircle(x1, y1, x2, y2) { // draw a circle
const radius = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
ctx.beginPath(); // Start a new shape
ctx.arc(x1, y1, radius, 0, Math.PI * 2);
ctx.stroke();
}