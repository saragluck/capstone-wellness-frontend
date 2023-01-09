import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["1/01", "1/02", "1/03", "1/04", "1/05", "1/06", "1/07", "1/08", "1/09"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Sleep Duration",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(132, 99, 255)",
      data: [6, 6.5, 6.75, 4.5, 7.5, 5.5, 6, 6.75, 7],
    },
  ],
};

const SleepGraph = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default SleepGraph;
