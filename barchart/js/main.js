const margin = { left: 100, right: 10, top: 10, bottom: 100 };

const MAX_WIDTH = 600;
const MAX_HEIGHT = 400;

const width = MAX_WIDTH - margin.left - margin.right;
const height = MAX_HEIGHT - margin.top - margin.bottom;

d3.json("data/buildings.json")
  .then(data => {
    console.log(data);

    const svg = d3
      .select("#chart-area")
      .append("svg")
      .attr("width", MAX_WIDTH)
      .attr("height", MAX_HEIGHT);

    const group = svg
      .append("g")
      .attr(
        "transform",
        "translate(" + margin.left + "," + margin.top + ")"
      );

    const scale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.height)])
      .range([0, height]);

    const band = d3
      .scaleBand()
      .domain(data.map(d => d.name))
      .range([0, width])
      .paddingInner(0.2)
      .paddingOuter(0, 2);

    const rects = group.selectAll("rect").data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => {
        return band(d.name);
      })
      .attr("y", (d, i) => {
        return 20;
      })
      .attr("width", band.bandwidth)
      .attr("height", (d, i) => {
        return scale(d.height);
      })
      .attr("fill", "blue");
  })
  .catch(err => console.log(err));
