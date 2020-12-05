const inputs = document.querySelectorAll('.variables input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

/*-------------------------------------------------------------------------------------------------------------*/

function handleNumbers() { /* Přepíše na všech potřebných místech aktuální hodnotu px podle slideru */
  const poradi = this.dataset.order; /* data-order */
  
  if (poradi === '1') {
    var ys = document.querySelectorAll('.main-content .demo1');
    ys.forEach(y => y.innerHTML = this.value);
  } else if (poradi === '2') {
    var ys = document.querySelectorAll('.main-content .demo2');
    ys.forEach(y => y.innerHTML = this.value);
  } else if (poradi === '3') {
    var ys = document.querySelectorAll('.main-content .demo3');
    ys.forEach(y => y.innerHTML = this.value);
  } else if (poradi === '4') {
    var ys = document.querySelectorAll('.main-content .demo4');
    ys.forEach(y => y.innerHTML = this.value);
  } else if (poradi === '5') {
    var ys = document.querySelectorAll('.main-content .demo5');
    ys.forEach(y => y.innerHTML = this.value);
  }
}

inputs.forEach(input => input.addEventListener('change', handleNumbers));
inputs.forEach(input => input.addEventListener('mousemove', handleNumbers));

/*-------------------------------------------------------------------------------------------------------------*/

var color = document.getElementById("base1");
var colorCode = color.value;
console.log(colorCode);



/* Získám HEX color kód */
function getHexColorCode() { 
document.getElementById("demo6").innerHTML = color.value;
}

/* Udělá z HEX color kódu RGB color kód */
function getRgbColorCode() { 
  h = color.value;
  
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];
  
  // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    

    g = "0x" + h[3] + h[4];
    var green = (h[3] + h[4]);

    b = "0x" + h[5] + h[6];
    var blue = (h[5] + h[6]);
  }

 


  console.log(green);
  console.log(blue);

  
  console.log("rgb("+ +r + "," + +g + "," + +b + ")");
  /* Přepsání hodnot v HTML */
  
  
  
 

}

/* Event listeners */
color.addEventListener("input", getHexColorCode);
color.addEventListener("input", getRgbColorCode);


var oblast = document.getElementById("textarea").innerHTML;
console.log(oblast);

/*-------------------------------------------------------------------------------------------------------------*/

/* Při kluknutí na tlačítko se zkopíruje obsah textarea do clipboardu */
/*
document.getElementById("copy-btn").onclick = function(){
  document.getElementById("textarea").select();
  document.execCommand('copy');
}

/*
const puvodniHodnota = document.getElementById("base1").value;


const barva = document.getElementById("base1");
const odstin = barva.value;
console.log(odstin);







/*
var slider1 = document.getElementById("myRange1");
var output1 = document.querySelectorAll(".demo1");
output1.innerHTML = slider1.value;

function handleNumbers() {
  output1.forEach(output => output.innerHTML = this.value);
}

slider1.addEventListener('change', handleNumbers);
slider1.addEventListener('mousemove', handleNumbers);
---------------------------*/



/*


greenBox = document.getElementById('big-box');



var slider1 = document.getElementById("myRange1");
var slider2 = document.getElementById("myRange2");


var output1 = document.querySelectorAll(".demo1");
output1.innerHTML = slider1.value;
var output2 = document.querySelectorAll(".demo2");
output2.innerHTML = slider2.value;




slider1.oninput = function() {
  output1.forEach(output => output.innerHTML = this.value);
  
  greenBox.style.boxShadow = `${this.value}px 0px 0px black`;

  slider1.value = (this.value);
 
  
} 

console.log(slider1.value);
/*
var sliders = document.querySelectorAll(".slider");

console.log(sliders[3]);


function makeSlidersWork() {
  
}

makeSlidersWork();
*/

/*




*/

/*
slider3.oninput = function() {
  output3.forEach(output => output.innerHTML = this.value);
  greenBox.style.boxShadow = `${this.value}px 0px 0px black`;
}

slider4.oninput = function() {
  output4.forEach(output => output.innerHTML = this.value);
  greenBox.style.boxShadow = `${this.value}px 0px 0px black`;
}

slider5.oninput = function() {
  output5.forEach(output => output.innerHTML = this.value);
  greenBox.style.boxShadow = `${this.value}px 0px 0px black`;
}

*/












/*output1.innerHTML = this.value;*/

/*
Pro zobrazení aktuální hodnoty u slideru

function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}

<input type="range" name="rangeInput" min="0" max="100" onchange="updateTextInput(this.value);">
<input type="text" id="textInput" value="">

*/