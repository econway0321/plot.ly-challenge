// d3.json("samples.json").then((samples)=> {
// 	console.log(samples)
// });

function updatePage(){
	var dropdownMenu=d3.selectAll("#selDataset");
	d3.json("samples.json").then((samples)=> {
	samples['names'].forEach((name)=>{
	dropdownMenu.append('option').text(name).property('value',name);	
	});
});
}
updatePage();

// 	var dropdownNames=dropdownMenu.id;
// 	var selectedDataset=drowdownMenu.value;

// 	console.log(dropdownNames);
// 	console.log(selectedDataset);
// }

// d3.selectAll("#selDataset").on("change", updatePlotly);

// function updatePlotly() {
//  	var dropdownMenu = d3.select("#selDataset");
//  	var dataset = dropdownMenu.property("");

//  	console.log(dropdownMenu);
//  	console.log(dataset);
// }
//slicedData = buttonData.slice(0,10);