let outputScreen = document.getElementById("output");

function Clear() {
  outputScreen.value = "";
}

function display(num) {
  outputScreen.value += num;
}

function del() {
  let val = outputScreen.value;
  outputScreen.value = val.slice(0, -1);
}

function calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (e) {
    alert("Invalid Input");
  }
}
