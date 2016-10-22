const loadLevel3 = (stage) => {

  let block1 = new createjs.Shape();
  let block2 = new createjs.Shape();
  let block3 = new createjs.Shape();
  let block4 = new createjs.Shape();
  let block5 = new createjs.Shape();
  let block6 = new createjs.Shape();
  let block7 = new createjs.Shape();
  let block8 = new createjs.Shape();
  let block9 = new createjs.Shape();
  let block10 = new createjs.Shape();
  let block11 = new createjs.Shape();

  const imgV = new Image();
  imgV.src = "./oak-v.jpg";
  imgV.onload = () => {

    block3.graphics.setStrokeStyle(3).beginStroke("black").beginBitmapFill(imgV).drawRoundRect(0, 0, 100, 200, 10);
    block4.graphics.setStrokeStyle(3).beginStroke("black").beginBitmapFill(imgV).drawRoundRect(0, 0, 100, 200, 10);
    block5.graphics.setStrokeStyle(3).beginStroke("black").beginBitmapFill(imgV).drawRoundRect(0, 0, 100, 200, 10);
    block6.graphics.setStrokeStyle(3).beginStroke("black").beginBitmapFill(imgV).drawRoundRect(0, 0, 100, 200, 10);
    block8.graphics.setStrokeStyle(3).beginStroke("black").beginBitmapFill(imgV).drawRoundRect(0, 0, 100, 200, 10);
    block9.graphics.setStrokeStyle(3).beginStroke("black").beginBitmapFill(imgV).drawRoundRect(0, 0, 100, 200, 10);
    block10.graphics.setStrokeStyle(3).beginStroke("black").beginBitmapFill(imgV).drawRoundRect(0, 0, 100, 300, 10);
    block11.graphics.setStrokeStyle(3).beginStroke("black").beginBitmapFill(imgV).drawRoundRect(0, 0, 100, 200, 10);

    stage.update();
  }

  const imgH = new Image();
  imgH.src = "./oak-h.jpg";
  imgH.onload = () => {
    block1.graphics.setStrokeStyle(3).beginStroke("black").beginFill("red").drawRoundRect(0, 0, 200, 100, 10);
    block2.graphics.setStrokeStyle(3).beginStroke("black").beginBitmapFill(imgH).drawRoundRect(0, 0, 200, 100, 10);
    block7.graphics.setStrokeStyle(3).beginStroke("black").beginBitmapFill(imgH).drawRoundRect(0, 0, 200, 100, 10);
    stage.update();
  }

  block1.x = 0;
  block1.y = 200;

  block2.x = 0;
  block2.y = 300;

  block3.x = 0;
  block3.y = 400;

  block4.x = 100;
  block4.y = 400;

  block5.x = 200;
  block5.y = 0;

  block6.x = 200;
  block6.y = 200;

  block7.x = 200;
  block7.y = 400;

  block8.x = 300;
  block8.y = 0;

  block9.x = 300;
  block9.y = 200;

  block10.x = 400;
  block10.y = 200;

  block11.x = 500;
  block11.y = 100;

  block1.setBounds(0, 0, 200, 100);
  block2.setBounds(0, 0, 200, 100);
  block3.setBounds(0, 0, 100, 200);
  block4.setBounds(0, 0, 100, 200);
  block5.setBounds(0, 0, 100, 200);
  block6.setBounds(0, 0, 100, 200);
  block7.setBounds(0, 0, 200, 100);
  block8.setBounds(0, 0, 100, 200);
  block9.setBounds(0, 0, 100, 200);
  block10.setBounds(0, 0, 100, 300);
  block11.setBounds(0, 0, 100, 200);

  const blocks = [block1, block2, block3, block4,
                  block5, block6, block7, block8,
                  block9, block10, block11];
  return blocks;
}

module.exports = loadLevel3;
