import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment/moment";

const SleepGraph = () => {
  const [graph, setGraph] = useState([]);
  const jwt =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE2NzM1NDMwNDl9.bxcjqfqtTEr2JLjjqBiEMfqSn2XywCz9qjOLOQAFWlo";

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:3000/sleeps.json", {
        method: "GET",
        headers: { Authorization: "Bearer" + localStorage.getItem("jwt") },
        headers: {
          Authorization: "Bearer" + jwt,
        },
      })
        .then((response) => {
          response.json().then((json) => {
            console.log(json);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, ["http://localhost:3000/sleeps.json"]);

  const data = {
    labels: graph?.data?.map((x) => x.date),
    datasets: [
      {
        label: "Sleep Duration",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(132, 99, 255)",
        data: graph?.data?.map((x) => x.asleep),
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
