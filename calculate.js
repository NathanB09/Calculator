var output = document.getElementById("output-box")

document.addEventListener("click", function(e) {
  //Ensures only a clicked button triggers any further event
  if(e.target.nodeName === "BUTTON") {
    //Sets a variable equal to the button clicked
    var b = e.target.innerHTML

    if (b === "=") {
      try {
        output.innerHTML = eval(output.innerHTML)
      } catch(err) {
        output.innerHTML = ""
        alert("Invalid entry.")
      }
    } else if (b === "AC") {
      output.innerHTML = ""
    } else if (b === "C") {
      output.innerHTML = output.innerHTML.slice(0, output.innerHTML.length - 1)
    } else {
      output.innerHTML += b
    }
  }
})
