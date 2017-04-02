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
    
    // Interact with drag&droppable divs
    interact(".dragndrop")
            .origin("self")
            .draggable({
                // allow multiple drags on the same element
                maxPerElement: Infinity
            })
            .on("dragmove", function(event){
                $(this).top = Document.pageY;
                $(this).left = Document.pageX;
            })
            .dropzone({
                accept: "#grid"
            });
    
    /*interact('.rainbow-pixel-canvas')
  .origin('self')
  .draggable({
    snap: {
        targets: [ interact.createSnapGrid({
          x: pixelSize, y: pixelSize
        }) ]
    },
    // allow multiple drags on the same element
    maxPerElement: Infinity
  })
  // draw colored squares on move
  .on('dragmove', function (event) {
    var context = event.target.getContext('2d'),
        // calculate the angle of the drag direction
        dragAngle = 180 * Math.atan2(event.dx, event.dy) / Math.PI;

    // set color based on drag angle and speed
    context.fillStyle = 'hsl(' + dragAngle + ', 86%, '
                        + (30 + Math.min(event.speed / 1000, 1) * 50) + '%)';

    // draw squares
    context.fillRect(event.pageX - pixelSize / 2, event.pageY - pixelSize / 2,
                     pixelSize, pixelSize);
  })
  // clear the canvas on doubletap
  .on('doubletap', function (event) {
    var context = event.target.getContext('2d');

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  });*/
});