let magicElement = document.getElementById("matrix");
let magicContext = magicElement.getContext("2d");
let width;
let height;
let position;
let velocity;

position = Array(300).join(0).split("");

function resizeScreem()
{
  width = document.body.clientWidth;
  height = document.body.clientHeight;
  magicElement.width = width;
  magicElement.height = height;
}

function initMatrix()
{
  magicContext.fillStyle = "rgba(0,20,1,0.5)";
  magicContext.fillRect(0, 0, width, height);
  magicContext.fillStyle = "rgba(0,255,0,1";

  magicContext.font = "1.5rem Arial";

  position.map(function (y, index)
  {
    let texto = String.fromCharCode(1e2 + Math.random() * 30);
    let x = index * 15 + 15;

    matrix.getContext("2d").fillText(texto, x, y);
    if (y > (100 + Math.random() * 1e5) )
    {
      position[index] = 0;
    } 
    else
    {
      position[index] = y +15;
    }
  });
}

resizeScreem();

//to resposive devices
window.addEventListener("resize",()=>{resizeScreem();});

velocity=50;
setInterval(initMatrix, velocity);
