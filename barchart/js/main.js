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
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const y = d3 // y
      .scaleLinear()
      .domain([0, d3.max(data, d => d.height)])
      .range([0, height]);

    const x = d3 // x
      .scaleBand()
      .domain(data.map(d => d.name))
      .range([0, width])
      .paddingInner(0.2)
      .paddingOuter(0.2);

    const xAxisCall = d3.axisBottom(x);

    group
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0, " + height + ")")
      .call(xAxisCall);

    const yAxisCall = d3.axisLeft(y);

    group
      .append("g")
      .attr("class", "y axis")
      .call(yAxisCall);

    const rects = group
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => {
        return x(d.name);
      })
      .attr("y", (d, i) => {
        return 0;
      })
      .attr("width", x.bandwidth)
      .attr("height", (d, i) => {
        return y(d.height);
      })
      .attr("fill", "blue");
  })
  .catch(err => console.log(err));
