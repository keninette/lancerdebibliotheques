function drawGrid(gridData) {
    var c   = document.getElementById("grid");
    var ctx = c.getContext("2d");
    
    // get canva size
    gridData.gridHeight = parseInt($(c).attr('height'));
    gridData.gridWidth  = parseInt($(c).attr('width'));

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
}

function setMagnetControl(x, y, gridData){    
    console.log(x+","+y);
    console.log(gridData.gridPosX);
    console.log(gridData.gridPosY);
    
    
    
}

function getCloserGridIntersection(x, y, gridData){
    /*var iterator    = 0;
    var smallerX    = 0;
    var biggerX     = 0;
    
    // Get closer X position
    iterator = gridData.gridPosX; // sooooooooo wrong
    while(iterator <= (gridData.gridWidth + gridData.gridPosX)) {
        
        // If current i+1 position is bigger than x, then
        if (x === gridData.)
        
    }*/
}
