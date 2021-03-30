// var json = $.getJSON("samples.json",function(json) {
// 	console.log(json);
// });

d3.json("samples.json").then((samples)=> {
	console.log(samples)
});

// var tableData = samples:

// var tbody = d3.select("tbody");

// console.log()

// function init() {
// 	data = [{
// 		x: [0, 50, 100, 150],
// 		y: [otu_ids]}];

// 	Plotly.newPlot("plot",data);
// }

// d3.selectAll("#selDataset").on("change",updatePlotly);

// function updatePlotly(){
// 	var dropdownMenu = d3.select("#selDataset");
// 	var dataset = dropdownMeanu.property("value");
// 	var x = [];
// 	var y = [];

// 	if (dataset === 'dataset1') {
// 	  x = [0, 50, 100 ,150]
// 	  y = [otu_ids];
// 	}


// }