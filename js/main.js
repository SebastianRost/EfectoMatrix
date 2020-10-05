let elemento = document.getElementById("matrix");
let ctx = elemento.getContext("2d");
let width = document.body.clientWidth;
let height = document.body.clientHeight;

elemento.width = width;
elemento.height = height;

let posicion = Array(300).join(0).split("");

function initMatrix() {
  ctx.fillStyle = "rgba(0,20,1,0.5)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "rgba(0,255,0,1";

  ctx.font = "11pt arial";

  posicion.map(function (y, index) {
    let texto = String.fromCharCode(1e2 + Math.random() * 30);
    let x = index * 15 + 15;

    matrix.getContext("2d").fillText(texto, x, y);
    if (y > 100 + Math.random() * 1e5) {
      posicion[index] = 0;
    } else {
      posicion[index] = y + 15;
    }
  });
}

setInterval(initMatrix, 50);
