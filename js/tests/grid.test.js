QUnit.test("Grid : preliminary tests", function(assert) {
    
    // ==================== Find closest lines ====================
    // Testing if getting closest grid lines works ok
    // Grid X lines positions are 42, 62, 82, ... , 642
    // Grid Y lines positions are 42, 62, 82, ..., 242
    // getClosestLines(currentGridLine, currentCursorPosition, maxPosition, lineSpace)
    // In order to compare objects, we need to serialize them with $.param()
    
    // Test : cursorPosition equal to grid first line position
    assert.equal($.param(getClosestLines(42, 42, 642, 20)), $.param({
        "smallerLinePosition"   : 42
        , "biggerLinePosition"  : 42
    }));
    // Test : cursorPosition equal to grid first line position
    assert.equal($.param(getClosestLines(42, 642, 642, 20)), $.param({
        "smallerLinePosition"   : 642
        , "biggerLinePosition"  : 642
    }));
    // Test : cursorPosition smaller than grid first line position
    assert.equal($.param(getClosestLines(42, 0, 642, 20)), $.param({
        "smallerLinePosition"   : 42
        , "biggerLinePosition"  : 42
    }));
    // Test : cursorPosition bigger than grid first line position
    assert.equal($.param(getClosestLines(42, 940, 642, 20)), $.param({
        "smallerLinePosition"   : 642
        , "biggerLinePosition"  : 642
    }));
    // Test : cursorPosition bigger than grid first line position
    assert.equal($.param(getClosestLines(42, 57, 642, 20)), $.param({
        "smallerLinePosition"   : 42
        , "biggerLinePosition"  : 62
    }));
    // Test : cursorPosition bigger than grid first line position
    assert.equal($.param(getClosestLines(42, 134, 642, 20)), $.param({
        "smallerLinePosition"   : 122
        , "biggerLinePosition"  : 142
    }));
    // Test : cursorPosition bigger than grid first line position
    assert.equal($.param(getClosestLines(42, 640, 642, 20)), $.param({
        "smallerLinePosition"   : 622
        , "biggerLinePosition"  : 642
    }));
    
    // ==================== Find closest value between two ====================
    // findClosestValue(cursorPosition, gridLinePositions)
    
    // Test : cursorPosition is smaller than gridPosition
    assert.equal(findClosestValue(0, {
        "smallerLinePosition"   : 42
        , "biggerLinePosition"  : 42
    }), 42);
    // Test : cursorPosition is equal to gridPosition
    assert.equal(findClosestValue(42, {
        "smallerLinePosition"   : 42
        , "biggerLinePosition"  : 42
    }), 42);
    // Test : cursorPosition is equal to gridMaxPosition
    assert.equal(findClosestValue(642, {
        "smallerLinePosition"   : 642
        , "biggerLinePosition"  : 642
    }), 642);
    // Test : cursorPosition is between two lines
    assert.equal(findClosestValue(57, {
        "smallerLinePosition"   : 42
        , "biggerLinePosition"  : 62
    }), 62);
    // Test : cursorPosition is between two lines
    assert.equal(findClosestValue(134, {
        "smallerLinePosition"   : 122
        , "biggerLinePosition"  : 142
    }), 142);
    // Test : cursorPosition is between two lines
    assert.equal(findClosestValue(640, {
        "smallerLinePosition"   : 622
        , "biggerLinePosition"  : 642
    }), 642);
    
    
});

QUnit.test("Grid : final test", function(assert){
    
    var gridData = {
        "cellWidth"     : 20
        , "cellHeight"  : 20
        , "gridPosX"    : 42
        , "gridPosY"    : 42
        , "gridHeight"  : 200
        , "gridWidth"   : 600
    };
    
    // ==================== Find closest intersection ====================
    // In order to compare objects, we need to serialize them with $.param()
    // getClosestGridIntersection(x, y, gridData)
    
    // Test :   x position smaller than grid position
    //          y position smaller than grid position
    assert.equal($.param(getClosestGridIntersection(2, 13, gridData)), $.param({"x": gridData.gridPosX, "y": gridData.gridPosY}));
    // Test :   x position equal to grid position
    //          y position smaller than grid position
    assert.equal($.param(getClosestGridIntersection(42, 24, gridData)), $.param({"x": gridData.gridPosX, "y": gridData.gridPosY}));
    // Test :   x position in grid (smaller value must be chosen)
    //          y position smaller than grid position
    assert.equal($.param(getClosestGridIntersection(67, 24, gridData)), $.param({"x": 62, "y": gridData.gridPosY}));
    // Test :   x position in grid (bigger value must be chosen)
    //          y position smaller than grid position
    assert.equal($.param(getClosestGridIntersection(437, 24, gridData)), $.param({"x": 442, "y": gridData.gridPosY}));
    // Test :   x position in grid (on grid line)
    //          y position smaller than grid position
    assert.equal($.param(getClosestGridIntersection(242, 24, gridData)), $.param({"x": 242, "y": gridData.gridPosY}));
    // Test :   x position equal to max grid position
    //          y position smaller than grid position
    assert.equal($.param(getClosestGridIntersection(642, 24, gridData)), $.param({"x": (gridData.gridPosX + gridData.gridWidth), "y": gridData.gridPosY}));
    // Test :   x position bigger than max grid position
    //          y position smaller than grid position
    assert.equal($.param(getClosestGridIntersection(935, 24, gridData)), $.param({"x": (gridData.gridPosX + gridData.gridWidth), "y": gridData.gridPosY}));
     
    // Test :   y position equal to grid position
    //          x position smaller than grid position
    assert.equal($.param(getClosestGridIntersection(13, 42, gridData)), $.param({"x": gridData.gridPosX, "y": gridData.gridPosY}));
    // Test :   y position in grid (smaller value must be chosen)
    //          x position smaller than grid position
    assert.equal($.param(getClosestGridIntersection(13, 123, gridData)), $.param({"x": gridData.gridPosX, "y": 122}));
    // Test :   y position in grid (bigger value must be chosen)
    //          x position smaller than grid position
    assert.equal($.param(getClosestGridIntersection(13, 157, gridData)), $.param({"x": gridData.gridPosX, "y": 162}));
    // Test :   y position in grid (on grid line)
    //          x position smaller than grid position
    assert.equal($.param(getClosestGridIntersection(13, 122, gridData)), $.param({"x": gridData.gridPosX, "y": 122}));
    // Test :   y position equal to max grid position
    //          x position smaller than grid position
    assert.equal($.param(getClosestGridIntersection(24, 242, gridData)), $.param({"x": gridData.gridPosX, "y": (gridData.gridPosY + gridData.gridHeight)}));
    // Test :   y position bigger than max grid position
    //          x position smaller than grid position
    assert.equal($.param(getClosestGridIntersection(13,249, gridData)), $.param({"x": gridData.gridPosX, "y": (gridData.gridPosY + gridData.gridHeight)}));
});
