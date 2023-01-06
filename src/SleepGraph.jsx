import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

export function SleepGraph() {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
  //   let sleepDate = [];
  //   let sleepDuration = [];
  //   axios.get("http://localhost:3000/sleeps.json").then((response) => {
  //     console.log("response")
  //     for(constSleepDuration of response.);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  return (
    <div>
      <h1>graph</h1>
      <Line data={data} />
    </div>
  );
}
