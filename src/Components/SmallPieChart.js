import React from "react";
import DonutChart from "react-donut-chart";
//import "../App.css"; // assuming you have a CSS file in your project

export default class SmallPieChart extends React.Component {
  render() {
    const data = [
      {
        label: "X",
        value: 12
      },
      {
        label: "Y",
        value: 545
      },
      {
        label: "A",
        value: 545
      },
      {
        label: "C",
        value: 54
      },
      {
        label: "D",
        value: 55
      },
      {
        label: "J",
        value: 45
      },
      {
        label: "K",
        value: 65
      },
      {
        label: "E",
        value: 100
      },
      {
        label: "F",
        value: 200
      },
      {
        label: "I",
        value: 300
      },
     
    ];

    const colors = ["#000000", "#60b644", "#ff4361", "#FFA500", "#8B0000", "#000080", "#006400", "#8B008B", "#DC143C", "#FFD700"];
    return (
      <section className="global-card">
        <DonutChart colors={colors} data={data} width={400} height={400}/>
      </section>
    );
  }
}
