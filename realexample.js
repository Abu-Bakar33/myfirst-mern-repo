function update() {
  console.log("update");
  var input = document.getElementById("input");
  console.log(input.value);
  var output = document.getElementById("output");
  output.innerHTML = input.value;
}
