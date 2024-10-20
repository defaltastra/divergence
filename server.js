const express = require('express');
const { createCanvas, loadImage } = require('canvas');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Set up lowdb to store visitor count
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

// Set default value for visits if not already set
db.defaults({ visits: 0 }).write();

// Set static files route to serve images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Endpoint to serve the divergence meter image
app.get('/counter', async (req, res) => {
  // Increment visitor count
  let visits = db.get('visits').value();
  db.set('visits', visits + 1).write();
  
  // Set canvas size to 1200x200 pixels
  const canvas = createCanvas(900, 200);  
  const ctx = canvas.getContext('2d');

  // Draw a black background
  ctx.fillStyle = 'black';  // Set fill color to black
  ctx.fillRect(0, 0, canvas.width, canvas.height);  // Fill the entire canvas with black

  // Convert visit count into a divergence percentage and pad with zeros
  const divergenceValue = (visits * 0.000001).toFixed(6).replace('.', ''); // Remove decimal point for simplicity

  // Function to load and draw each digit
  const drawDigit = async (digit, x, y) => {
    const digitImage = await loadImage(path.join(__dirname, 'images', `${digit}.png`)); // Load number image
    ctx.drawImage(digitImage, x, y, 100, 200); // Adjust size as needed
  };

  // Loop through each character of the divergence value and draw corresponding number images
  const startX = 50;  // Starting X position for the first digit (adjusted for bigger numbers)
  const startY = 5;   // Y position for digits
  for (let i = 0; i < divergenceValue.length; i++) {
    const digit = divergenceValue[i];  // Get the digit (or character) to draw
    await drawDigit(digit, startX + (i * 120), startY); // Increase spacing between digits for better alignment
  }

  // Send the image as the response
  res.setHeader('Content-Type', 'image/png');
  res.send(canvas.toBuffer('image/png'));
});

// Start server
app.listen(port, () => {
  console.log(`Divergence meter running on http://localhost:${port}`);
});
