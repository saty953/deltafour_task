import React from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts';
function Graph() {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title:{
      text: "Total Permits Made "
    },
    axisY: {
      includeZero: true
    },
    data: [{
      type: "column",
      indexLabelFontColor: "#5A5757",
      indexLabelPlacement: "outside",
      dataPoints: [
        { x: 10, y: 71 },
        { x: 20, y: 55 },
        { x: 30, y: 50 },
        { x: 0, y: 65 },
        { x: 50, y: 71 },
        { x: 60, y: 68 },
        { x: 70, y: 38 },
        { x: 0, y: 92, indexLabel: "Highest" },
        { x: 90, y: 54 },
        { x: 100, y: 60 },
        { x: 110, y: 21 },
        { x: 0, y: 49 },
        { x: 130, y: 36 }
      ]
    }]
  }

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default Graph;
