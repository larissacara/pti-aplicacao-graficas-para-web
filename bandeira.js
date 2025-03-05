const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const rectWidth = 400;
const rectHeight = 250;
const rectX = (canvas.width - rectWidth) / 2;
const rectY = 10;

ctx.strokeStyle = '#000000';
ctx.lineWidth = 3;
ctx.strokeRect(rectX, rectY, rectWidth, rectHeight);

const centerX = rectX + rectWidth / 2; 
const centerY = rectY + rectHeight / 2; 
const radius = 60; 

ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
ctx.fillStyle = '#FF0000';
ctx.fill();