import { Line } from "react-chartjs-2";
import axios from "axios";
import { useState, useEffect } from "react";

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

    fetchData();
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

// import { Line } from 'react-chartjs-2';
// import React, { useEffect, useState } from 'react';

// const SleepGraph = ({ sleepData }) => {
//   // Initialize a local state variable to manage the data for the graph
//   const [data, setData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Sleep Duration',
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgb(132, 99, 255)',
//         data: [],
//         fill: false,
//         tension: 0.1,
//       },
//     ],
//   });

//   // Use the useEffect hook to listen for changes in the sleepData prop
//   useEffect(() => {
//     // Extract labels and duration data from the sleepData prop
//     const labels = sleepData.map((data) => data.date);
//     const durationData = sleepData.map((data) => data.duration);

//     // Update the local data state with the new labels and duration data
//     setData((sleepData) => ({
//       ...sleepData,
//       labels: labels,
//       datasets: [
//         {
//           ...sleepData.datasets[0], // Copy the previous dataset
//           data: durationData,     // Update the data with new duration data
//         },
//       ],
//     }));
//   }, [sleepData]); // This useEffect will run whenever sleepData changes

//   return (
//     <div>
//       <Line data={data} /> 
//     </div>
//   );
// };

// export default SleepGraph;



