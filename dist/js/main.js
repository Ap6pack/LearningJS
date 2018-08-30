var stage;
// called when the body is loaded
function init() {
    /* Setting Up the Stage */
    stage = new createjs.Stage(document.getElementById('canvas'));

    //RECTANGLE
    var rectangle = new createjs.Shape();
    rectangle.graphics.beginStroke('#000');
    rectangle.graphics.beginFill('#FF0000');
    rectangle.graphics.drawRect(0, 0, 150, 100);
    rectangle.x = rectangle.y = 20;
    stage.addChild(rectangle);

    //CIRCLE
    var circle = new createjs.Shape();
    circle.graphics.beginStroke('#000');
    circle.graphics.beginFill('#FFF000');
    circle.graphics.drawCircle(0, 0, 50);
    circle.x = 250;
    circle.y = 70;
    stage.addChild(circle);

    //STAR
    var poly = new createjs.Shape();
    poly.graphics.beginStroke('#000');
    poly.graphics.beginFill('#90ABC2');
    poly.graphics.drawPolyStar(0, 0, 60, 6, 0.6);
    poly.x = 400;
    poly.y = 70;
    stage.addChild(poly);

    //TRIANGLE
    var tri = new createjs.Shape();
    tri.graphics.beginStroke('#000');
    tri.graphics.beginFill('#00FF00');
    tri.graphics.moveTo(50, 0)
        .lineTo(0, 100)
        .lineTo(100, 100)
        .lineTo(50, 0);
    tri.x = 20;
    tri.y = 150;
    stage.addChild(tri);

    //ROUNDED RECTANGLE
    var roundedRectangle = new createjs.Shape();
    roundedRectangle.graphics.beginStroke('#000');
    roundedRectangle.graphics.beginFill('#F7D0D1');
    roundedRectangle.graphics.drawRoundRect(0, 0, 300, 100, 10);
    roundedRectangle.x = roundedRectangle.y = 150;
    stage.addChild(roundedRectangle);

    // Updating the stage
    stage.update();
}