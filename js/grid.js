$(function(){
    
    // customize grid
    var gridData = {
        'cellWidth'     : 20
        , 'cellHeight'  : 20
        , 'gridPosX'    : Math.round($("#grid").offset().left,0)
        , 'gridPosY'    : Math.round($("#grid").offset().top,0)
    };
    
    // Draw grid in canva
    drawGrid(gridData);
    
    // Set canva hover function
    // And get mouse and grid position on Document
    $("#grid").mousemove(function(e){
        var x = e.pageX;
        var y = e.pageY;
                
        setMagnetControl(x, y, gridData);
    });
});