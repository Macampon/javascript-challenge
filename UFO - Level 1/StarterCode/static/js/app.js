// from data.js
var tableData = data;
console.log(tableData);



// YOUR CODE HERE!
// Saving references to our html elements
var tbody = d3.select("tbody");
var filterButton = d3.select("#filter-btn");
var dateInput = d3.select("#datetime");
var form = d3.select("#form")
console.log(form)

//Event handler
filterButton.on("click",renderTable);
form.on("submit",renderTable);

// Complete the event handler function for the form
function renderTable() {

    tableData.forEach((UFOsight) => {
        console.log(UFOsight);
        var row = tbody.append("tr");
        Object.entries(UFOsight).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });


    });

  
    //Prevent the page from refreshing
    d3.event.preventDefault();
    //Select the input element and get the raw HTML code
    // var dateInput = d3.select("#datetime");
    //Get value property of the input element
    var inputValue = dateInput.property("value");
    
    //Print the value to the console
    console.log(inputValue)

    //reset
    tbody.html("")

    var filterdata = tableData.filter(d=>d.datetime === inputValue ) 

    filterdata.forEach((UFOsight) => {
        var row = tbody.append("tr");
        Object.entries(UFOsight).forEach(([key,value]) =>{
            var cell = row.append("td");
            cell.text(value);
        });

    });

    
};
renderTable();
