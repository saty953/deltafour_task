import React from "react";
import DonutChart from "react-donut-chart";
import "../App.css"; // assuming you have a CSS file in your project

export default class PieChart extends React.Component {
  render() {
    const data = [
      {
        label: "Hot work",
        value: 0.7
      },
      {
        label: "work at height",
        value: 67
      },
      {
        label: "confirm space",
        value: 26
      }
    ];

    const colors = ["#000000", "#60b644", "#ff4361"];
    return (
      <section className="global-card">
        <DonutChart colors={colors} data={data} width={210} height={210} />
      </section>
    );
  }
}
