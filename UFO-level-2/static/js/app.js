// from data.js
var tableData = data;

// fill the base table
function fill_table (data) 
   {
        var table = d3.select("table");
        var tbody = d3.select("tbody");  
        data.forEach(function(witness) 
                        {                    
                           var row = tbody.append("tr");
                          //  console.log("one row was added")
                            Object.entries(witness).forEach(function([key, value])
                                {
                             
                                    var cell = row.append("td");
                                    cell.text(value);  
                                });
                         });             
}

// remove the  current table rows displayed
function removetable() {
d3.selectAll('td').remove(); }


// create an event handler
function filter_data()
{
  var button = d3.select("#myInput");
  // Create event handlers
  button.on("keyup", runsearch);
}


// perform a reserach base on  input value

function runsearch () { 
      /*
      $(document).ready(function(){
        $("#myInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      }); */
          
        var button = d3.select("#myInput");
        console.log("call to my search function")
        // Prevent the page from refreshing
        d3.event.preventDefault();
        // Get the value property of the input element
        var inputValue = button.property("value");
        var inputValue = inputValue.toLowerCase();
        //console.log("see the input value",inputValue)

        if (inputValue == "all") {
                //console.log("display all data available")
               // resetable()
                fill_table (data) 
              
        }
        else {
                // get data filtered
                var filteredData = tableData.filter((witness) => witness.datetime == inputValue || 
                                                                witness.city == inputValue || 
                                                                witness.state == inputValue || 
                                                                witness.country == inputValue || 
                                                                witness.shape == inputValue 
                                                                
                                                                );
                //console.log("data filtered",filteredData);
                removetable()
                fill_table (filteredData) 
          }
}

// call the functions to work with
fill_table(data)
filter_data()









