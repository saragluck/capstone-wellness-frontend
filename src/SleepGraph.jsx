import { Line } from "react-chartjs-2";
import axios from "axios";
import { useState, useEffect } from "react";

const SleepGraph = () => {
  const [sleepData, setSleepData] = useState([]);
  const jwt = localStorage.getItem("jwt");
  const [dataChange, setDataChange] = useState(false);

  
  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/sleeps.json", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const data = response.data;
      setSleepData(data);
    }; // function to get the data associated with the current user (using JWT authorization)

    fetchData();
  }, [dataChange]);


  const labels = sleepData.map((data) => data.date); // sets the labels of the graph x axis to be the dates
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
// formats the data, then returns on the page
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default SleepGraph;


