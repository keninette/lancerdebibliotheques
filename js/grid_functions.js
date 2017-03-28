/**
 * Draw a grid inside a canva HTML object
 * @param {Object} gridData :contains information about grid (position, cell space, ...)
 */
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

/**
 * Move draggable element on closest grid intersection
 * @param {Integer} x : cursor X position
 * @param {Integer} y : cursor Y position
 * @param {Object} gridData : contains information about grid (position, dimensions, cell space, ...)
 */
function setMagnetControl(x, y, gridData){    
    console.log(x+","+y);
    console.log(gridData.gridPosX);
    console.log(gridData.gridPosY);
    
    var newCoordinates = getClosestGridIntersection(x,y, gridData);
    console.log(newCoordinates.x +"," +newCoordinates.y);
    
}

/**
 * Get closest intersection coordinates on grid depending on cursor's position
 * @param {Integer} x : cursor X position
 * @param {Integer} y : cursor Y position
 * @param {Object} gridData : contains information about grid (position, dimensions, cell space, ...)
 * @returns {getClosestGridIntersection.coordinates}
 */
function getClosestGridIntersection(x, y, gridData){

    var coordinates = {
        "x": 0
        ,"y": 0
    };

    // Get closest x and y positions of closest lines on grid
    var xs = getClosestLines(gridData.gridPosX, x, (gridData.gridPosX + gridData.gridWidth), gridData.cellWidth);
    var ys = getClosestLines(gridData.gridPosY, y, (gridData.gridPosY + gridData.gridHeight), gridData.cellHeight);

    // Find which one of these two positions is the closest to mouse cursor
    coordinates.x = findClosestValue(x, xs);
    coordinates.y = findClosestValue(y, ys);

    return coordinates;
}

/**
 * Get closest grid lines (horizontal or vertical) for cursor position
 * Will return smaller grid line position and bigger grid line position
 * @param {Integer} currentGridLine : position of first grid line
 * @param {Integer} currentCursorPosition :cursor position (x or y)
 * @param {Integer} maxPosition : position of last grid line
 * @param {Integer} lineSpace : space between two grid lines
 * @returns {getClosestLines.positions} contains smaller and bigger line position on grid
 */
function getClosestLines(currentGridLine, currentCursorPosition, maxPosition, lineSpace){
    
    var positions = {
        "smallerLinePosition"   : 0
        , "biggerLinePosition"  : 0
    };
    
    while (positions.biggerLinePosition === 0 
            && currentGridLine <= maxPosition) {
        
        // If cursor position is already on the grid, its value won't change
        if (currentCursorPosition === currentGridLine) {
            positions.biggerLinePosition    = currentCursorPosition;
            positions.smallerLinePosition   = currentCursorPosition;
        }
        
        // If cursor position is bigger than currentGridLine position
        // Set smaller position = currentGridLine
        else if (currentCursorPosition > currentGridLine) {
            positions.smallerLinePosition = currentGridLine;
            
        // If cursor position is smaller than currentGridLine position
        // Set bigger position = currentGridLine position
        // smaller position will already have been set
        } else if (currentCursorPosition < currentGridLine) {
            positions.biggerLinePosition = currentGridLine;
        }
        
        // Go to next grid line
        currentGridLine += lineSpace;
    }
    
    return positions;
}

/**
 * Find closest position to cursor between two choices
 * @param {Integer} cursorPosition   : cursor position
 * @param {Object} gridLinePositions : contains smaller and bigger grid line positions
 * @returns {Integer} closest grid line position between the two 
 */
function findClosestValue(cursorPosition, gridLinePositions) {
    
    // If both values are equal, cursor is already on grid
    if (gridLinePositions.smallerLinePosition ===  gridLinePositions.biggerLinePosition) {
        return cursorPosition;
    
    // Else find which position is closer to cursorPosition
    } else {
        return (gridLinePositions.biggerLinePosition - cursorPosition) > (cursorPosition - gridLinePositions.smallerLinePosition) 
                ? gridLinePositions.smallerLinePosition
                : gridLinePositions.biggerLinePosition;
    }
}