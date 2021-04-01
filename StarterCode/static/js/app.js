

function updatePage(){
	var dropdownMenu=d3.selectAll("#selDataset");
	d3.json("samples.json").then((samples)=> {
	samples['names'].forEach((name)=>{
	dropdownMenu.append('option').text(name).property('value',name);	
	});
});
}

updatePage();

function buildPlot(sampleid){
d3.json("samples.json").then((samples)=> {
	var name = samples.names;
	var result = samples.samples.filter(x=>x.id==sampleid)[0]
	console.log(sampleid)
	var otuid = result.otu_ids;
	var samid = result.sample_values;
	
	console.log(samples.samples)
	console.log(otuid)
	console.log(samid)

	var y_tick = otuid.map(x=>`otu ${x}`).slice(0,10)

	var trace1 = {
	  	type: "bar",
	  	x: samid.slice(0,10),
	  	y: y_tick,
	  	orientation: 'h'
	  	
	};

	var bar_data = [trace1];

	var bar_layout = {
		title: 'Top 10 Bacteria Culters Found',
		margin: {
			t:30,
			l:150
		}
	}

	Plotly.newPlot('bar', bar_data,bar_layout);

});
}

buildPlot(940);	

function optionChanged(newsample){
	buildPlot(newsample)

}
