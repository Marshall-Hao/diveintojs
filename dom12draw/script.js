const canvas = document.getElementById("canvas");
ctx2d = canvas.getContext("2d"); // * getContext has all the api
ctx2d.beginPath();
ctx2d.moveTo(100, 100);
ctx2d.lineTo(200, 100);
ctx2d.lineTo(200, 200);
ctx2d.lineTo(100, 200);
ctx2d.lineTo(50, 150);
ctx2d.stroke();

// * curve
ctx2d.beginPath();
ctx2d.moveTo(100, 200);
ctx2d.arcTo(50, 150, 100, 100, 50 * Math.sqrt(2));
ctx2d.fill();

ctx2d.beginPath();
ctx2d.moveTo(100, 100);
ctx2d.quadraticCurveTo(100, 300, 200, 200);
ctx2d.stroke();

ctx2d.beginPath();
ctx2d.moveTo(100, 200);
ctx2d.bezierCurveTo(200, 100, 400, 400, 400, 300);
ctx2d.stroke();

// * rect
ctx2d.strokeRect(300, 300, 100, 200);
ctx2d.fillRect(300, 300, 100, 200);

// * circle

ctx2d.beginPath();
ctx2d.arc(200, 200, 100, 0.5 * Math.PI, 2 * Math.PI, true);
ctx2d.stroke();

// !---------canvas Api-------------

// * canvas.toDataURL()

// * .toBlob(callbackfn)

// !------------2d context------------

// * context position play
// * context.save()

// * context.restore()

//  * context.scale(x,y)

// * context.rotate(angle)

// * context.translate(x,y)

// * context font play

// * context.font = ""

// * context.textAlign = "left right

// * context.textBaseline = " top middle bottom"

// * context.strokeText(text,x,y)

// * context.fillText()

// * context.measureText().width

// !--------------drawImage---------------

// * context.drawImage()

// * context.getImageData(sx,sy,sw,sh)

// * context.putImageData()

// !-----------------line-----------------

// * context.lineCap('butt round square)

// * context.lineJoin('mitel bevel round)

// * context.setLineDash(segments)

// * context.closePath()

// !-------------stroke & fill--------------------

// * context.fill() 需要知道什么时候能填充
