
const inputs = document.querySelectorAll('.variables input');


function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));












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