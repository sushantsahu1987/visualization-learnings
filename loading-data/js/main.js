d3.csv("data/ages.csv").then(data => {
  // console.log(data);
  data.forEach(d => (d.age = +d.age));
  console.log(data);

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
      return d.age * 2;
    })
    .attr("fill", d => {
      return d.name === "Tony" ? "blue" : "red";
    });
}).catch(err => console.log(err));
