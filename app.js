/*-------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------  BORDER SHADOW PAGE  ----------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------*/

// Targets all the inputs on both pages
const inputs = document.querySelectorAll('.variables input');

// Function that assigns the current value to the css variables
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Event listeners to trigger the handleUpdate function
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

/*-------------------------------------------------------------------------------------------------------------*/

// Function that overwrites the HTML to show the current value (takes the value from the slider)
function handleNumbers() {
  const order = this.dataset.order; // data-order attribute
  
  // For border shadow pages
  if (order === '1') {
    var classToBeChanged = document.querySelectorAll('.border-shadow-content .demo1');
    classToBeChanged.forEach(elementWithThisClass => elementWithThisClass.innerHTML = this.value);
  } else if (order === '2') {
    var classToBeChanged = document.querySelectorAll('.border-shadow-content .demo2');
    classToBeChanged.forEach(elementWithThisClass => elementWithThisClass.innerHTML = this.value);
  } else if (order === '3') {
    var classToBeChanged = document.querySelectorAll('.border-shadow-content .demo3');
    classToBeChanged.forEach(elementWithThisClass => elementWithThisClass.innerHTML = this.value);
  } else if (order === '4') {
    var classToBeChanged = document.querySelectorAll('.border-shadow-content .demo4');
    classToBeChanged.forEach(elementWithThisClass => elementWithThisClass.innerHTML = this.value);
  } else if (order === '5') {
    var classToBeChanged = document.querySelectorAll('.border-shadow-content .demo5');
    classToBeChanged.forEach(elementWithThisClass => elementWithThisClass.innerHTML = this.value);
  } else if (order === '6') { 
    var classToBeChanged = document.querySelectorAll('.border-radius-content .border-width-value');
    classToBeChanged.forEach(elementWithThisClass => elementWithThisClass.innerHTML = this.value);
  } else if (order === '7') {
    var classToBeChanged = document.querySelectorAll('.border-radius-content .top-left-corner-value');
    classToBeChanged.forEach(elementWithThisClass => elementWithThisClass.innerHTML = this.value);
  } else if (order === '8') {
    var classToBeChanged = document.querySelectorAll('.border-radius-content .top-right-corner-value');
    classToBeChanged.forEach(elementWithThisClass => elementWithThisClass.innerHTML = this.value);
  } else if (order === '9') {
    var classToBeChanged = document.querySelectorAll('.border-radius-content .bottom-left-corner-value');
    classToBeChanged.forEach(elementWithThisClass => elementWithThisClass.innerHTML = this.value);
  } else if (order === '10') {
    var classToBeChanged = document.querySelectorAll('.border-radius-content .bottom-right-corner-value');
    classToBeChanged.forEach(elementWithThisClass => elementWithThisClass.innerHTML = this.value);
  }
}

// Event listeners to trigger the handleNumbers function
inputs.forEach(input => input.addEventListener('change', handleNumbers));
inputs.forEach(input => input.addEventListener('mousemove', handleNumbers));

/*-------------------------------------------------------------------------------------------------------------*/

// COPY BTN

// Function that copies the current values to clipboard 
function handleCopyBtn () {
  // Function is triggered by clicking on the copy button
  document.getElementById("copy-btn").onclick = function() { 
    
    // Gets the inner text of the textarea
    var text = document.getElementById("textarea").innerText; 
    console.log(text);
    

   
    
    var copyText = document.getElementById("transfer-station");
    
    copyText.value = text;
    console.log(copyText.value);
    copyText.select();
    document.execCommand("copy");

  }

  document.getElementById("copy-btn2").onclick = function() {
    
    
    var text2 = document.getElementById("textarea2").innerText;
    console.log(text2);
    

    
    
    var copyText2 = document.getElementById("transfer-station2");
    
    copyText2.value = text2;
    console.log(copyText2.value);
    copyText2.select();
    document.execCommand("copy");

  }
}

// Event listeners to trigger the handleCopyBtn function 
inputs.forEach(input => input.addEventListener('change', handleCopyBtn));
inputs.forEach(input => input.addEventListener('mousemove', handleCopyBtn));

/*-------------------------------------------------------------------------------------------------------------*/


var color = document.getElementById("base1");
var colorCode = color.value;
console.log(colorCode);

var shadowColor = document.getElementById("shadow");

/* Získám HEX color kód, který se napíše do input okna */
function getHexColorCode() { 
document.getElementById("shadow").value = color.value; /* document.getElementById("shadow").innerHTML = color.value; */
console.log(color.value);
}




//------------------------- TEST
function changeColor() {
  
  color.value = shadowColor.value; // Changes color in the color input window
  color.value = color.input;
  var joj = color.value;
  
  

  document.documentElement.style.setProperty('--shadow-color', '#ae8989');
  
}

// Event listener for input in the shadow color window
shadowColor.addEventListener("input", changeColor);

//---------------------------






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

// Box color input field for border shadow page
var boxColor = document.getElementById("base3");
// Box color input field for border radius page 
var boxColorBr = document.getElementById("base4"); 

// Function for getting the current HEX color code and making the actual box color change
function getHexBoxColorCode() { 
  document.getElementById("border-shadow-box-color").value = boxColor.value; /* document.getElementById("shadow").innerHTML = color.value; */
}
// For border radius page
function getBrHexBoxColorCode() { 
  document.getElementById("border-radius-box-color").value = boxColorBr.value; /* document.getElementById("shadow").innerHTML = color.value; */
}

// Event listener for input, which triggers the function getHexBoxColorCode
boxColor.addEventListener("input", getHexBoxColorCode);
boxColorBr.addEventListener("input", getBrHexBoxColorCode);

/*-------------------------------------------------------------------------------------------------------------*/

// BORDER COLOR 

// Border color input field
var borderColor = document.getElementById("border-color-input"); 

// Function for getting the current HEX color code and making the actual border color change
function getHexBorderColorCode() { 
  // Changes the HEX border color value in the input field window
  document.getElementById("border-color").value = borderColor.value; /* document.getElementById("shadow").innerHTML = color.value; */
  // Changes the HEX border color value on the right side 
  document.getElementById("border-color-value").innerHTML = borderColor.value; 
}

// Event listener for input, which triggers the function getHexBorderColorCode
borderColor.addEventListener("input", getHexBorderColorCode);

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



/*-------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------  BORDER RADIUS PAGE  ----------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------*/

// HANDLE UPDATE FOR ALL CORNERS INPUT
const allCornersInput = document.getElementById('all-corners-input');
console.log(allCornersInput);
console.log(allCornersInput);

function handleAllCornersUpdate() {
  const suffix = this.dataset.sizing || '';

  // Targeting all corner
  var allCorners = document.querySelectorAll('.border-radius-content .corners-together');
  // Changes the value of every corner (all the sliders move together)
  allCorners.forEach(corner => corner.value = this.value);
  
  // Changes the style property in every corner
  document.documentElement.style.setProperty('--top-left', this.value + suffix);
  document.documentElement.style.setProperty('--top-right', this.value + suffix);
  document.documentElement.style.setProperty('--bottom-left', this.value + suffix);
  document.documentElement.style.setProperty('--bottom-right', this.value + suffix);

  // Changes all corners together
  var allCornersNumbers = document.querySelectorAll('.border-radius-content .all');
  allCornersNumbers.forEach(cornerNumber => cornerNumber.innerHTML = this.value);


}

// Event listeners for change and input to trigger the function
allCornersInput.addEventListener('change', handleAllCornersUpdate);
allCornersInput.addEventListener('input', handleAllCornersUpdate);

/*-------------------------------------------------------------------------------------------------------------*/





