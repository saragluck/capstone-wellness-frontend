import { Line } from "react-chartjs-2";
import axios from "axios";
import { useState, useEffect } from "react";
import ActionCable from 'actioncable';


const SleepGraph = () => {
  const [sleepData, setSleepData] = useState([]);
  const jwt = localStorage.getItem("jwt");

  
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
    
  const cable = ActionCable.createConsumer("ws://localhost:3000/cable");
  const channel = cable.subscriptions.create({ channel: "SleepsChannel" }, {
    received: (data) => {
      // Handle the received message from the backend
      // Whenever a notification of an event is received, refetch data
      if (data.event === 'update') {
        fetchData();
      }
    }
  });

  // Fetch initial data when the component mounts
  fetchData();

  // Return a cleanup function to unsubscribe from the channel when the component unmounts
  return () => {
    channel.unsubscribe();
  };
}, []);


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



