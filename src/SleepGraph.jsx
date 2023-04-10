import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import moment from "moment";
import axios from "axios";
import { useState, useEffect } from "react";

const SleepGraph = () => {
  const [sleepData, setSleepData] = useState([]);
  const jwt = localStorage.getItem("jwt");
  const calculateDuration = (asleep, awake) => { //takes in params for asleep time and awake time
  return (24-Math.abs( 
    moment
      .duration(moment(awake, "YYYY/MM/DD hh:mm").diff(moment(asleep, "YYYY/MM/DD hh:mm")))
      .asHours()
  )).toFixed(2)}; // logical calculation using the moment library to determine duration
  
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
  }, []);

  const sleepDataWithDuration = sleepData.map((sleep) => {
    const date = moment(sleep.date).format("MMM D");
    const duration = calculateDuration(sleep.asleep, sleep.awake);
    return { date, duration };
  });  // grabs the date from the sleep instance, grabs the asleep and awake time and calls the calculateDuration function, then returns the date and associated duration

  const labels = sleepDataWithDuration.map((data) => data.date); // sets the labels of the graph x axis to be the dates
  const durationData = sleepDataWithDuration.map((data) => data.duration); // grabs the duration data

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


