import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 9],
  ["Eat", 3],
  ["Commute", 5],
  ["Watch TV", 1],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"600px"}
    />
  );
}
