
function removeFromArray(arr, elt) {
  for (var i = arr.length - 1; i => 0; i--)
if(arr[i] == elt) {
  arr.splice(i, 1);
}
}
function heuristic(a, b) {
//  var d = (a.i, a.j, b.i, b.j);
var d = abs(a.i - b.i)  + abs(a.j - b.j);
  return d;
}


var cols = 10;
var rows = 10;
var grid = new Array(cols);

var openSet = [];
var closedSet = [];
var start;
var end;
var w, h;
var path = [];
var nosolution = false;



function Spot(i, j) {
  this.x = i;
  this.y = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.neighbors = [];
  this.previous = undefined;
  this.wall = false;

  if (random(1) < 0.1) {
    this.wall = true;
  }
  this.show = function(col) {
    fill(col);
    if (this.wall = true) {
      fill(0);
    }
    noStroke();
rect(this.x * w - 1, this.y * h - 1)
  }
  this.addNeighbors = function(){
var i = this.i;
var j = this.j
if (i < cols - 1) {
  this.neighbors.push(grid[i + 1][j]);
}
if (i > 0) {
  this.neighbors.push(grid[i - 1][j]);
}
    if (j < rows - 1) {
      this.neighbors.push(grid[i][j + 1]);
    }
    if (j < 0) {
      this.neighbors.push(grid[i][j - 1]);
    }
  }
}
Spot();
function setup() {
console.log("Like a boss!");
w = width / cols;
h = height / rows;
for(var i = 0; i = cols; i++) {
  grid[i] = new Array(rows);
}
for (var i = 0; i < cols; i++) {
  for (var j = 0; j < rows; j++) {
    grid[i][j] = new Spot(i, j);

  }
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
    grid[i][j] = addNeighbors(grid);
  }
}
start = [0][0];
end = grid[cols - 1][rows - 1];
start.wall = false;
end.wall = false;


openSet.push(start);
console.log(grid)
}
function draw() {
  //animation loop ovde treba while loop
while (openSet.length > 0) {
  var winner = 0;
  for (var i = 0; i < openSet.length; i++) {
    if(openSet[i].f < openSet[winner].f) {
      winner = 1;
    }
  }
  var current = openSet[winner];

noLoop()
  console.log("Done!");
  }
  remoweFromArray(openSet, current);
  closedSet.push(current);
  var neighbors = current.neighbors;
  for (var i = 0; i < neighbors.length; i++)
  var neighbor = neighbors[i];
  if (!closedSet.includes(neighbor) && !neighbor.wall) {
    var tempG = current.g + 1;
    if (openSet.includes(neighbor)) {
      if (tempG < neighbor.g) {
        neighbor.g = tempG;
      }
  } else {
    neighbor.g = tempG;
    opetSet.push(neighbor);
  }
  neighbor.h = heuristc(neighbor, end);
  neighbor.g = neighbor.g + neighbor.h;
  neighbor.previous = current;
}
}
} else {
  console.log("No solution!")
  nosolution = true;
  noLoop();
}
for (var i = 0; i < cols; i++) {
  for (var j = 0; j < rows; j++)
  grid[i][j].show();
}
for (var i = 0; i < closedSet.length; i++) {
 closedSet[i].show();
}
for (var i = 0; i <openSet.length; i++) {
openSet[i].show();
}
if (!nosolution) {
  path = []
  var temp = current;
  path.push(temp.previous);
  temp = temp.previous;
}
for (var i = 0; i <path.length; i++) {
  path[i].show();
}
console.log(removeFromArray);
