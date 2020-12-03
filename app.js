
greenBox = document.getElementById('big-box');

var slider1 = document.getElementById("myRange1");
var output1 = document.querySelectorAll(".demo1");
output1.innerHTML = slider1.value;



console.log(slider1.value);

slider1.oninput = function() {
  /*output1.innerHTML = this.value;*/
  output1.forEach(output => output.innerHTML = this.value);

  greenBox.style.boxShadow = `${this.value}px 0px 0px black`;

  
}





console.log(greenBox);

greenBox.style.boxShadow










/*
Pro zobrazení aktuální hodnoty u slideru

function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}

<input type="range" name="rangeInput" min="0" max="100" onchange="updateTextInput(this.value);">
<input type="text" id="textInput" value="">

*/