
var svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400)


var circle = svg.append("circle")
                .attr("cx", 150)
                .attr("cy", 200)
                .attr("r", 70)
                .attr("fill", "grey");


// var rectange = svg.append("rect")
//                     .attr("width", 100)
//                     .attr("height", 100)
//                     .attr("fill", "blue");
