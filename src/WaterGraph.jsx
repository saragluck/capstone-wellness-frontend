import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["1/01", "1/02", "1/03", "1/04", "1/05", "1/06", "1/07", "1/08", "1/09"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Water Intake",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(132, 99, 255)",
      data: [6, 7, 8, 10, 3, 5, 2, 9, 1],
    },
  ],
};

const WaterGraph = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default WaterGraph;