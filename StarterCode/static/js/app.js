

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
	var name = samples.name;
	var result = samples.samples.filter(x=>x.id==sampleid)[0]
	console.log(sampleid)
	var otuid = result.otu_ids;
	var samid = result.sample_values;
	
	console.log(samples.samples)
	console.log(otuid)
	console.log(samid)
	

	var filtermeta=samples.metadata.filter(x=>x.id==sampleid)[0];
	console.log(filtermeta)

	// Object.entries(filtermeta[0]).forEach(function([key,value]){
	// 	var row = tbody.append("tr");
	// 	row.append("td").text(key.concat(":", value));
	// 	cell.text(value);
	//  	});
	//  });

	var y_tick = otuid.map(x=>`otu ${x}`).slice(0,10).reverse()

	var trace1 = {
	  	type: "bar",
	  	x: samid.slice(0,10).reverse(),
	  	y: y_tick,
	  	orientation: 'h'
	  	
	};

	var bar_data = [trace1];

	var bar_layout = {
		title: 'Top 10 Bacteria',
		margin: {
			t:30,
			l:150
		}
	}

	Plotly.newPlot('bar', bar_data,bar_layout);

	var trace2 = {
		type: bubble,
		x: otuid,
		y: samid,
		mode: 'markers',
		marker: {
			color: ['#1f77b4','#ff7f0e',
			'#2ca02c', '#d62728','#9467bd', '#8c564b', '#e377c2','#7f7f7f',  '#bcbd22', '#17becf'],
			size: [15,20,25,30,35,40,45,50,55,60]
		}
	};

	var bubble_data = [trace2];

	var bubble_layout = {
		title: 'Sample Values',
		height: 600,
		width: 600
	}


	Plotly.newPlot('bubble',bubble_data,bubble_layout);

});
}

buildPlot(940);	

function optionChanged(newsample){
	buildPlot(newsample)

}