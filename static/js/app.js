// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
    console.log(tbody);

//fill the table with data
function fillTable(data){
    tbody.html("");
    data.forEach(dataRow => {
         row =tbody.append("tr");

        Object.entries(dataRow).forEach(function([key, value]){
            cell = row.append("td").text(value)
        });
    });
}
fillTable(tableData)
console.log(tableData)

function filterSearch(){
    d3.event.preventDefault()

    date = d3.select("#datetime").property("value");
    filterData = tableData;

    if (date){
        filterData = filterData.filter((row) => row.datetime === date);
    }
    fillTable(filterData);
}

d3.selectAll("#filter-btn").on("click", filterSearch);
fillTable(tableData);