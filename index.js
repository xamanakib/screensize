let a = screen.width;
let b = screen.height;
let c= screen.colorDepth;
let d = screen.pixelDepth

// console.log(a,b);

document.getElementById("FirstInp").innerHTML = `Width= ${a} px`;
document.getElementById("SecondInp").innerHTML = `Height= ${b} px`;
document.getElementById("thirdInp").innerHTML = `${c} `;
document.getElementById("fourthInp").innerHTML = `${d} `;

function promptMe() {
   let code = prompt("Please Enter Your pin");

   const pin = 54672;
   if (code == pin) {
      document.body.oncontextmenu = "return true";
      

   }
   else {
      location.reload();

   }
}



document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

