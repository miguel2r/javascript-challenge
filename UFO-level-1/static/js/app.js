// from data.js
var tableData = data;
var inp_val =[]

// YOUR CODE HERE!

/*

function buildTable(mdata) {

    var table = document.getElementById('ufo-table')   
    for (var i =0; i < data.length; i++) {
        
        var row = `<tr>
                     <td>${mdata[i].datetime}</td>
                     <td>${mdata[i].city}</td>
                     <td>${mdata[i].state}</td>
                     <td>${mdata[i].country}</td>
                     <td>${mdata[i].shape}</td>
                     <td>${mdata[i].durationMinutes}</td>
                     <td>${mdata[i].comments}</td>
                   </tr>`
          table.innerHTML += row 
     } 
   }   

buildTable(tableData)  */

// fill  a table with the current data selection
function fill_table (data) 
   {
        var table = d3.select("table");
        
        table.innerHTML=''
        var tbody = d3.select("tbody");
        //console.log(data);
        data.forEach(function(witness) 
                        {
                            var row = tbody.append("tr");
                            Object.entries(witness).forEach(function([key, value])
                                {
   
                                    var cell = row.append("td");
                                    cell.text(value);  
                                });
                         });             



      // Select the button

      var button = d3.select("#filter-btn");
      var button2 = d3.select("#filter-btn2");

      // Select the form
      var form = d3.select("#form01");

      // Create event handlers for clicking the button or pressing the enter key
      button.on("click", runEnter);
      form.on("submit", runEnter);
      button2.on("click", resetable);



}

// display the orinal jason table provided

function resetable() {

  fill_table (data) 
}


function runEnter(tableData) {
     // Prevent the page from refreshing
     d3.event.preventDefault();

     // Select the input element and get the raw HTML node
     var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
   

    // Print the value to the console
     console.log('inside the function',inputValue); 
    
    var filteredData = data.filter(events => events.datetime == inputValue);

    removetable()
    fill_table (filteredData) 
  }
  
// remove current tables rows displayed on screen
function removetable() {
d3.selectAll('td').remove(); }

//step1 fill the initial table
fill_table(data)







