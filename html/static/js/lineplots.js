
var url = "housesurrey.json" 

// Fetch the JSON data and console log it
prices=[];
bedrooms=[];
average={
  0:0, 
  1:0, 
  2:0,
  3:0,
  4:0,
  5:0,
  6:0,
  7:0,
  8:0,
  9:0,
  10:0
};
averagecount={
  0:0, 
  1:0, 
  2:0,
  3:0,
  4:0,
  5:0,
  6:0,
  7:0,
  8:0,
  9:0,
  10:0
};

d3.json(url).then(function(data) {

  for (i=0; i<Object.keys(data.bedrooms).length; i++){
  prices[i]=data.price[i];
  bedrooms[i]=data.bedrooms[i];
  average[data.bedrooms[i]] +=data.price[i];
  averagecount[data.bedrooms[i]] +=1;
  }
  for (i=0; i<11; i++){
    average[i]=average[i]/averagecount[i];
    console.log(average[i]);
  }
    
 var data = [{
   type: "scatter",
   mode: "markers",
   name: "All Data (Hover: Median)",
   x: bedrooms,
   y: prices,
   line: {
   color: "Black"
   }
 }, 
 {
  type: "scatter",
  mode: "markers",
  name: "Average",
  x: Object.keys(averagecount),
  y: Object.values(average),
  line: {
  color: "red"
  }
}];


 var layout = {
  paper_bgcolor: "White",
  plot_bgcolor: "White",
  title: {
    text: 'Number of Bedrooms vs. House Price',
    font: {
      family: 'sans-serif',
      size: 18,
      color: 'Black'
    }
  },
  xaxis: {
    tickfont: {
      family: 'sans-serif',
      size: 12,
      color: 'Black'
    },
    autorange: true,
    showline: true,
    showgrid: false,
    zeroline: false,
    title: {
      text: 'Number of Bedrooms',
      font: {
        family: 'sans-serif',
        size: 14,
        color: 'Black'
      }
    }
  },
  yaxis: {
    tickfont: {
      family: 'sans-serif',
      size: 12,
      color: 'Black'
    },
    autorange: true,
    showline: true,
    showgrid: true,
    tickformat: 'f',   
    title: {
      text: 'Cost (CAD)',
      font: {
        family: 'sans-serif',
        size: 14,
        color: 'Black'
      }}}
};

 Plotly.newPlot("plot", data, layout);

});
