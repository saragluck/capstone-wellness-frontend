import { Line } from "react-chartjs-2";



const SleepGraph = ({ sleepData }) => {

  const labels = sleepData.map((data) => data.date); // sets the labels of the graph x-axis to be the dates
  const durationData = sleepData.map((data) => data.duration); // grabs the duration data

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Sleep Duration",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(132, 99, 255)",
        data: durationData,
        fill: false,
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default SleepGraph;

