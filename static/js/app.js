// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);
  
  // Get a reference to the table body
  var tbody = d3.select("tbody");
  
  console.log(filteredData);

    // Loop through the ufo sightings reports and console.log each report
    filteredData.forEach(function(sightingsReport) {
      console.log(sightingsReport);
      // Use d3 to append one table row `tr` for each ufo report object
      var row = tbody.append("tr");
      // Use `Object.entries` to console.log each ufo report value
      Object.entries(sightingsReport).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value in the ufo report object
        var cell = row.append("td");
        cell.text(value);
      });
    });
});
