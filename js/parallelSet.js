var chart = d3.parsets()
    .dimensions(["Survived", "Sex", "Age", "Class"])
    .width(800).height(500)
    .duration(3000);

var vis = d3.select("#dc-parallel-graph").append("svg")
    .attr("width", chart.width())
    .attr("height", chart.height());

var partition = d3.layout.partition()
    .sort(null)
    .size([chart.width(), chart.height() * 5 / 4])
    .children(function(d) { return d.children ? d3.values(d.children) : null; })
    .value(function(d) { return d.count; });

var das,root1,csv1;
var local_path_titanic = "data/titanic.csv";
var github_path_titanic = "https://raw.githubusercontent.com/amotupal/DVProject/master/Data/titanic.csv";

d3.csv(github_path_titanic, function(error, csv) {
    vis.datum(csv).call(chart);
    var newIce = this.checked,
        tension = chart.tension();
    var dimensions = [];
    vis.selectAll("g.dimension")
       .each(function(d) { dimensions.push(d); });
    dimensions.sort(function(a, b) { return a.y - b.y; });
    var root = d3.parsets.tree({children: {}}, csv, dimensions.map(function(d) { return d.name; }), function() { return 1; }),
        nodes = partition(root),
        nodesByPath = {};
        root1 = root;
        console.log("nodes: ",nodes);
    nodes.forEach(function(d) {
      das = d;
      console.log("d: ",d);
      var path = d.data.name,
          p = d;
      while ((p = p.parent) && p.data.name) {
        path = p.data.name + "\0" + path;
      }
      if (path) nodesByPath[path] = d;
    });
    var data = [];
    vis.on("mousedown.icicle", stopClick, true)
      .select(".ribbon").selectAll("path")
        .each(function(d) {
          var node = nodesByPath[d.path],
              s = d.source,
              t = d.target;
          s.node.x0 = t.node.x0 = 0;
          s.x0 = t.x0 = node.x;
          s.dx0 = s.dx;
          t.dx0 = t.dx;
          s.dx = t.dx = node.dx;
          data.push(d);
        });
    iceTransition(vis.selectAll("path"))
        .attr("d", function(d) {
          var s = d.source,
              t = d.target;
          return ribbonPath(s, t, tension);
        })
        .style("stroke-opacity", 1);
    iceTransition(vis.selectAll("text.icicle")
        .data(data)
      .enter().append("text")
        .attr("class", "icicle")
        .attr("text-anchor", "middle")
        .attr("dy", ".3em")
        .attr("transform", function(d) {
          return "translate(" + [d.source.x0 + d.source.dx / 2, d.source.dimension.y0 + d.target.dimension.y0 >> 1] + ")rotate(90)";
        })
        .text(function(d) { return d.source.dx > 15 ? d.node.name : null; })
        .style("opacity", 1e-6))
        .style("opacity", 1);
    iceTransition(vis.selectAll("g.dimension rect, g.category")
        .style("opacity", 1))
        .style("opacity", 1e-6)
        .each("end", function() { d3.select(this).attr("visibility", "hidden"); });
    iceTransition(vis.selectAll("text.dimension"))
        .attr("transform", "translate(0,-5)");
    vis.selectAll("tspan.sort").style("visibility", "hidden");
});

function iceTransition(g) {
  return g.transition().duration(5000);
}

function ribbonPath(s, t, tension) {
  var sx = s.node.x0 + s.x0,
      tx = t.node.x0 + t.x0,
      sy = s.dimension.y0,
      ty = t.dimension.y0;
  return (tension === 1 ? [
      "M", [sx, sy],
      "L", [tx, ty],
      "h", t.dx,
      "L", [sx + s.dx, sy],
      "Z"]
   : ["M", [sx, sy],
      "C", [sx, m0 = tension * sy + (1 - tension) * ty], " ",
           [tx, m1 = tension * ty + (1 - tension) * sy], " ", [tx, ty],
      "h", t.dx,
      "C", [tx + t.dx, m1], " ", [sx + s.dx, m0], " ", [sx + s.dx, sy],
      "Z"]).join("");
}

function stopClick() {
  d3.event.stopPropagation();
}

// Given a text function and width function, truncates the text if necessary to
// fit within the given width.
function truncateText(text, width) {
  return function(d, i) {
    var t = this.textContent = text(d, i),
        w = width(d, i);
    if (this.getComputedTextLength() < w) return t;
    this.textContent = "…" + t;
    var lo = 0,
        hi = t.length + 1,
        x;
    while (lo < hi) {
      var mid = lo + hi >> 1;
      if ((x = this.getSubStringLength(0, mid)) < w) lo = mid + 1;
      else hi = mid;
    }
    return lo > 1 ? t.substr(0, lo - 2) + "…" : "";
  };
}
