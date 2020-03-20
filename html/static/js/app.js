//see UFO-level-2's app.js for a fully commented javascript file
var button = d3.select("#filter-btn");
var inputFieldsqft = d3.select("#sqft-control");
var inputFieldbathroom = d3.select("#bathroom-control");
var inputFieldbedroom = d3.select("#bedroom-control");
var tbody = d3.select("tbody");

function handleClick() {
  console.log("click occurred");
  d3.event.preventDefault();
  var inputfieldvaluebed = inputFieldbedroom.property('value');
  var inputfieldvaluebath = inputFieldbathroom.property('value');
  var inputfieldvaluesqft = inputFieldsqft.property('value');
  tbody.selectAll("tr").remove();
  var prediction = -93230.82004203*inputfieldvaluebed + -49327.53138228*inputfieldvaluebath + 397.54552998*inputfieldvaluesqft;
  var row =tbody.append("tr");
  var cell=row.append("td");
  cell.text(prediction);
  console.log(prediction);
}

button.on("click", handleClick);