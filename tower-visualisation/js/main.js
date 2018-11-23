d3.json("data/buildings.json").then(data => {
  
  console.log(data);

  data.forEach(d => (d.height = +d.height));

  var svg = d3
    .select("#chart-area")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

  var rectangles = svg.selectAll("rect").data(data);

  rectangles
    .enter()
    .append("rect")
    .attr("x",(d,i)=> { return (i * 40) + 30})
    .attr("y",(d,i)=> {return 40})
    .attr("width", (d, i) => {
      return 20 })
    .attr("height", (d, i) => {
      return (i == 0)?10: 80;
    })
    .attr("fill", "blue");
}).catch(err => console.log(err));
