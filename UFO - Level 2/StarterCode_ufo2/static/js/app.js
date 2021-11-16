// from data.js
var tableData = data;
console.log(tableData);



// YOUR CODE HERE!
// Saving references to our html elements
var tbody = d3.select("tbody");
var filterButton = d3.select("#filter-btn");
var dateInput = d3.select("#datetime");
var cityInput = d3.select("#city");
var stateInput= d3.select("#state");
var countryInput= d3.select("#country");
var shapeInput= d3.select("#shape");
var form = d3.select("#form")
console.log(form)

//Event handler
filterButton.on("click",renderTable);
form.on("submit",renderTable);

// Complete the event handler function for the form
function renderTable() {
    // //reset
    tbody.html("")

    // tableData.forEach((UFOsight) => {
    //     console.log(UFOsight);
    //     var row = tbody.append("tr");
    //     Object.entries(UFOsight).forEach(([key,value]) => {
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
   
    //Prevent the page from refreshing
    // d3.event.preventDefault();

    
    // Read the filter values, transform to lowercase to keep everything consistent
    var dateFilterValue = dateInput.property("value");
    var cityFilterValue = cityInput.property("value").toLowerCase();
    var stateFilterValue = stateInput.property("value").toLowerCase();
    var countryFilterValue = countryInput.property("value").toLowerCase();
    var shapeFilterValue = shapeInput.property("value").toLowerCase();
    // console.log({ dateFilterValue, cityFilterValue });
    
    //Print the value to the console
    // console.log({dateFiltervalue,cityFilterValue,stateFilterValue});

 
    //Filter out anything not matching the filter
    var filteredUFO = tableData.filter((UFO) => {

        // // By default set the match to false
        var matchesdate = false;
        var matchescity = false;
        var matchesstate = false;
        var matchescountry = false;
        var matchesshape = false;


         // If user has entered a value to the date field, check if it is included in data

        if (dateFilterValue !='' && dateFilterValue === UFO.datetime) { 
            matchesdate = true ;
        }
        // If the user didn't enter anything in the name field, we will set match to true by default
        if (dateFilterValue== ''){
            matchesdate = true ;
        }
        // If user has entered a value to the city field, check if it is included in the data

        if (cityFilterValue !='' && cityFilterValue === UFO.city.toLowerCase()) { 
            matchescity = true ;
        }                           
        // If the user didn't enter anything in the name field, we will set match to true by default
        if (cityFilterValue== ''){
            matchescity = true ;
        }
        if (stateFilterValue !='' && stateFilterValue === UFO.state.toLowerCase()) { 
            matchesstate = true ;
        }
        // If the user didn't enter anything in the name field, we will set match to true by default
        if (stateFilterValue== ''){
            matchesstate = true ;
        }
        if (countryFilterValue !='' && countryFilterValue === UFO.country.toLowerCase()) { 
            matchesstate = true ;
        }
        // If the user didn't enter anything in the name field, we will set match to true by default
        if (countryFilterValue== ''){
            matchescountry = true ;
        }
        if (shapeFilterValue !='' && shapeFilterValue === UFO.shape.toLowerCase()) { 
            matchesshape = true ;
        }
        // If the user didn't enter anything in the name field, we will set match to true by default
        if (shapeFilterValue== ''){
            matchesshape = true ;
        }
        // Will return true if BOTH position and name match
         return matchesdate && matchescity && matchesstate && matchescountry&&matchesshape;
    });
    
    // var filterdata = tableData.filter(d=>d.datetime === dateFilterValue ) 
    filteredUFO.forEach((UFOsight) => {
        var row = tbody.append("tr");
        Object.entries(UFOsight).forEach(([key,value]) =>{
            var cell = row.append("td");
            cell.text(value);
        });

    });

    
};
renderTable();
