import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = [
  "6 am",
  "7 am",
  "8 am",
  "9 am",
  "10 am",
  "11 am",
  "12 pm",
  "1 pm",
  "2 pm",
  "3 pm",
  "4 pm",
  "5 pm",
  "6 pm",
  "7 pm",
  "8 pm",
  "9 pm",
  "10 pm",
  "11 pm",
  "12 am",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "1/01",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(132, 99, 255)",
      data: [5, 4, 4, 5, 5, 4, 3, 2, 1, 1, 3, 2, 4, 3, 5, 4, 3, 4, 2],
    },

    {
      label: "1/02",
      backgroundColor: "rgb(255, 100, 132)",
      borderColor: "rgb(132, 99, 255)",
      data: [4, 5, 5, 3, 3, 4, 5, 5, 4, 3, 2, 3, 4, 3, 4, 3, 5, 3, 1],
    },

    {
      label: "1/03",
      backgroundColor: "rgb(255, 255, 132)",
      borderColor: "rgb(132, 99, 255)",
      data: [2, 4, 3, 3, 1, 1, 2, 3, 2, 4, 5, 2, 1, 2, 3, 4, 5, 3, 2],
    },
  ],
};

const ProductivityGraph = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default ProductivityGraph;
