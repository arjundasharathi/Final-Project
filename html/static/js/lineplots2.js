var url = "housesurrey.json" 

// Fetch the JSON data and console log it
prices=[];
squarefeet=[];
xmodel=[];
ymodel=[];

d3.json(url).then(function(data) {

  for (i=0; i<Object.keys(data.sqft).length; i++){
  prices[i]=data.price[i];
  squarefeet[i]=data.sqft[i];
  }

  for (i=0; i<8405; i++){
    xmodel[i]=i;
    ymodel[i]=397.54552998*i;
  }
    
 var data = [{
   type: "scatter",
   mode: "markers",
   name: "All Data",
   x: squarefeet,
   y: prices,
   line: {
   color: "Black"
   }
 },
 {
  type: "scatter",
  mode: "line",
  name: "Machine Learning Fit (Only Sq.Ft. Coeff.)",
  x: xmodel,
  y: ymodel,
  line: {
  color: "red"
  }
}
];


 var layout = {
  paper_bgcolor: "White",
  plot_bgcolor: "White",
  title: {
    text: 'Floor Area vs. House Price',
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
      text: 'Floor Area (Sq. ft.)',
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

 Plotly.newPlot("plot2", data, layout);

});
