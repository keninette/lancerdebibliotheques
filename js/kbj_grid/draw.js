//var c = document.getElementById("myCanvas");
//var ctx = c.getContext("2d");
//ctx.moveTo(0,0);
//ctx.lineTo(200,100);
//ctx.stroke();


// Get canva grid and 2d context
var c   = document.getElementById("grid");
var ctx = c.getContext("2d");

// get canva size
var gridHeight  = $(c).attr('height');
var gridWidth   = $(c).attr('width');

// customize grid
var gridData = {
    'cellWidth'     : 20
    , 'cellHeight'  : 20
    , 'gridWidth'   : parseInt(gridWidth)
    , 'gridHeight'  : parseInt(gridHeight)
};

// Draw horizontal lines
for (var i=gridData.cellHeight; i<gridData.gridHeight; i= i+gridData.cellHeight) {
    ctx.moveTo(0,i);
    ctx.lineTo(gridData.gridWidth, i);
}

// Draw vertical lines
for (var i=gridData.cellWidth; i<gridData.gridWidth; i= i+gridData.cellWidth) { 
    ctx.moveTo(i,0);
    ctx.lineTo(i, gridData.gridHeight);
}

ctx.stroke();