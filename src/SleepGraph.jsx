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
import moment from "moment";

export function SleepGraph(props) {
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
  const duration = props.sleeps.map((sleep) =>
    Math.abs(
      moment.duration(moment(sleep.awake, "YYYY/MM/DD hh:mm").diff(moment(sleep.asleep, "YYYY/MM/DD hh:mm"))).asHours()
    )
  );

  const data = {
    labels: [{ duration }],
    datasets: [
      {
        label: "First dataset",
        data: [{ duration }],
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
