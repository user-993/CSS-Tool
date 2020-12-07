const inputs = document.querySelectorAll('.variables input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
/* inputs.forEach(input => input.addEventListener('input', handleUpdate)); */

/*-------------------------------------------------------------------------------------------------------------*/

function handleNumbers() { /* Přepíše na všech potřebných místech aktuální hodnotu px podle slideru */
  const poradi = this.dataset.order; /* data-order */
  
  if (poradi === '1') {
    var ys = document.querySelectorAll('.border-shadow-content .demo1');
    ys.forEach(y => y.innerHTML = this.value);
  } else if (poradi === '2') {
    var ys = document.querySelectorAll('.border-shadow-content .demo2');
    ys.forEach(y => y.innerHTML = this.value);
  } else if (poradi === '3') {
    var ys = document.querySelectorAll('.border-shadow-content .demo3');
    ys.forEach(y => y.innerHTML = this.value);
  } else if (poradi === '4') {
    var ys = document.querySelectorAll('.border-shadow-content .demo4');
    ys.forEach(y => y.innerHTML = this.value);
  } else if (poradi === '5') {
    var ys = document.querySelectorAll('.border-shadow-content .demo5');
    ys.forEach(y => y.innerHTML = this.value);
  }
}

inputs.forEach(input => input.addEventListener('change', handleNumbers));
inputs.forEach(input => input.addEventListener('mousemove', handleNumbers));

/*-------------------------------------------------------------------------------------------------------------*/

/* COPY BTN */

/* Udělá výstup jako text bez html tags */
function handleCopyBtn () {
  document.getElementById("copy-btn").onclick = function() {
    /*
    var oblast = document.getElementById("textarea");
    var text = oblast.innerText; /* oblast.textContent ||  */
    
    var text = document.getElementById("textarea").innerText;
    console.log(text);
    

    /*console.log(oblast);*/
    
    var copyText = document.getElementById("pokus");
    
    copyText.value = text;
    console.log(copyText.value);
    copyText.select();
    document.execCommand("copy");

  }
  
}

inputs.forEach(input => input.addEventListener('change', handleCopyBtn));
inputs.forEach(input => input.addEventListener('mousemove', handleCopyBtn));




/*
document.getElementById("copy-btn").onclick = function(){

  document.getElementById("textarea").select();
  document.execCommand('copy');
}

*/


/*-------------------------------------------------------------------------------------------------------------*/


var color = document.getElementById("base1");
var colorCode = color.value;
console.log(colorCode);

/* Získám HEX color kód, který se napíše do input okna */
function getHexColorCode() { 
document.getElementById("shadow").value = color.value; /* document.getElementById("shadow").innerHTML = color.value; */
console.log(color.value);
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
    b = "0x" + h[5] + h[6];
  }
  
  // RGB kód, např. rgb(106,37,37)
  rgbValue = ("rgb("+ +r + "," + +g + "," + +b + ")");
  
  // Udělá z rgbValue object
  function getRGB(str){
    var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    return match ? {
      red: match[1],
      green: match[2],
      blue: match[3]
    } : {};
  }

  const barvicky = getRGB(rgbValue);

  // Získám jednotlivé hodnoty barev (red, green, blue) v RGB
  const redCode = barvicky[Object.keys(barvicky)[0]];
  const greenCode = barvicky[Object.keys(barvicky)[1]];
  const blueCode = barvicky[Object.keys(barvicky)[2]];

  
  // Přepíše hodnoty rgb napravo
  var redColors = document.querySelectorAll('.border-shadow-content .demo6');
  redColors.forEach(redColor => redColor.innerHTML = redCode);
  document.documentElement.style.setProperty('--red', redCode);
  

  var greenColors = document.querySelectorAll('.border-shadow-content .demo7');
  greenColors.forEach(greenColor => greenColor.innerHTML = greenCode);
  document.documentElement.style.setProperty('--green', greenCode);

  var blueColors = document.querySelectorAll('.border-shadow-content .demo8');
  blueColors.forEach(blueColor => blueColor.innerHTML = blueCode);
  document.documentElement.style.setProperty('--blue', blueCode);

  

}

/* Event listeners */
color.addEventListener("input", getHexColorCode);
color.addEventListener("input", getRgbColorCode);

/*-------------------------------------------------------------------------------------------------------------*/

// BACKGROUND COLOR 

// Background color input field
var backgroundColor = document.getElementById("base2"); 

// Function for getting the current HEX color code and making the actual background color change
function getHexBackgroundColorCode() { 
  document.getElementById("background-color").value = backgroundColor.value; /* document.getElementById("shadow").innerHTML = color.value; */
}

// Event listener for input, which triggers the function getHexBackgroundColorCode
backgroundColor.addEventListener("input", getHexBackgroundColorCode);

/*-------------------------------------------------------------------------------------------------------------*/

// BOX COLOR 

// Box color input field
var boxColor = document.getElementById("base3"); 

// Function for getting the current HEX color code and making the actual box color change
function getHexBoxColorCode() { 
  document.getElementById("box-color").value = boxColor.value; /* document.getElementById("shadow").innerHTML = color.value; */
}

// Event listener for input, which triggers the function getHexBoxColorCode
boxColor.addEventListener("input", getHexBoxColorCode);



/*-------------------------------------------------------------------------------------------------------------*/

// SWITCHING PAGES - BORDER RADIUS x BOX SHADOW

// Targeting the Border radius and Border shadow pages = contents
const borderRadiusPage = document.getElementById('border-radius-page');
const borderShadowPage = document.getElementById('border-shadow-page');

// Targeting the buttons for Border radius and Border shadow pages
const borderRadiusBtn = document.getElementById('border-radius-btn');
const borderShadowBtn = document.getElementById('border-shadow-btn');

// Function for turning to Border radius page
function toBorderRadiusPage() {
  borderShadowPage.classList.add('hide');
  borderRadiusPage.classList.remove('hide');
};

// Function for turning to Border shadow page
function toBorderShadowPage() {
  borderRadiusPage.classList.add('hide');
  borderShadowPage.classList.remove('hide');
};

// Event listeners for turning to Border radius or Border shadow page
borderRadiusBtn.addEventListener('click', toBorderRadiusPage);
borderShadowBtn.addEventListener('click', toBorderShadowPage);


















/*
var oblast = document.getElementById("textarea");
var text = oblast.innerText; /* oblast.textContent ||  */
/*
oblast.innerHTML = text;

console.log(oblast);
console.log(text);
*/

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