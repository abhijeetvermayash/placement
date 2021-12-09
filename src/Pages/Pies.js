import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

const state = {
  labels: ["2017", "2018", "2019", "2020", "2021", "2022*"],
  datasets: [
    {
      backgroundColor: [
        "#ACDDDE",
        "#FFE7C7",
        "#F7D8BA",
        "#FFE5D9",
        "#FFE9EE",
        "#FFDDE4",
        "#ACDDDE",
      ],
      hoverBackgroundColor: ["white", "white", "white", "white", "white"],
      data: [561, 561, 662, 595, 608, 780],
    },
  ],
};

export default class Pies extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Pie
            data={state}
            options={{
              responsive: true,
              maintainAspectRatio: true,

              title: {
                display: true,
                text: "Branch wise Placements",
                fontSize: 20,
                weight: "bold",
              },
              legend: {
                display: true,
                position: "left",
              },
              plugins: {
                color: "white",
              },
              datalabels: {
                display: true,
                color: "white",
              },
              tooltips: {
                backgroundColor: "black",
              },
            }}
          />
        </div>
        <br />
      </div>
    );
  }
}
