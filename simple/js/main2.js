var data = [20, 25, 15, 12, 10];

var svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400);

var circles = svg.selectAll("circle").data(data);

circles
  .enter()
  .append("circle")
  .attr("cx", (d, i) => {
    console.log(d);
    return 50 + 80 * i;
  })
  .attr("cy", 200)
  .attr("r", (d, i) => {
      return d;
  })
  .attr("fill", "red");
