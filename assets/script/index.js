`use strict`;

// Connecting HTML elements to JS
const button = document.querySelector('button');
const info = document.querySelector('.info');


// Creating the class Shape
class Shape {
  #name;
  #color;
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  set name(name) { this.#name = name };
  set color(color) { this.#color = color };

  get name() { return this.#name };
  get color() { return this.#color };

  getInfo() {
    return `${this.#color} ${this.#name}`;
  }
}


// Creating a function for color code
function createColorCode(color) {
  if (color == 'Blue') return '#09f';
  if (color == 'Green') return '#9f0';
  if (color == 'Orange') return '#f90';
  if (color == 'Pink') return '#f09';
  return '#90f';
} 

// Determining shape's border radius
function getRadius(shape) {
  if (shape == 'Circle') return '50%';
  return '5px';
}


// Creating the Shape Object
let shapeArray = [];
let count = 0;
let row = 5;
let column = 0;

button.addEventListener('click', function() {
  count++;
  if (count == 31) {
    info.innerHTML = 'The Grid is full!';
  } else {

    const name = document.querySelector('.shapes').value;
    const color = document.querySelector('.color').value;    

    // Creating new shape object
    const createShape = new Shape(name, color);
    shapeArray.push(createShape);

    // Creating new div to be added to the grid
    const divCreated = document.createElement('div');

    // Determining the background color
    divCreated.style.backgroundColor = createColorCode(createShape.color);

    // Determing the border-radius
    divCreated.style.borderRadius = getRadius(createShape.name);

    // Determining the position of the the div
    const grid = document.querySelector('.grid');
    column++;
    divCreated.style.gridColumnStart = column;
    divCreated.style.gridRowStart = row;

    if (column == 6) {
      row = row - 1;
      column = 0;
    };

    grid.append(divCreated);

    // Adding click function to the div created
    divCreated.addEventListener('click', () => {
      unitNumber = shapeArray.indexOf(createShape) + 1;
      info.innerHTML = `Unit ${unitNumber}: ${createShape.color} ${createShape.name}`;
    });

  };
})

