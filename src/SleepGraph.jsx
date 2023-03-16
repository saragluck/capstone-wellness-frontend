import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import moment from "moment";
import axios from "axios";
import { useState, useEffect } from "react";

const SleepGraph = () => {
  const [sleepData, setSleepData] = useState([]);
  const jwt = localStorage.getItem("jwt");
  const calculateDuration = (asleep, awake) => {
  return (24-Math.abs(
    moment
      .duration(moment(awake, "YYYY/MM/DD hh:mm").diff(moment(asleep, "YYYY/MM/DD hh:mm")))
      .asHours()
  )).toFixed(2)};
  
  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/sleeps.json", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const data = response.data;
      setSleepData(data);
    };

    fetchData();
  }, [jwt]);

  const sleepDataWithDuration = sleepData.map((sleep) => {
    const date = moment(sleep.date).format("MMM D");
    const duration = calculateDuration(sleep.asleep, sleep.awake);
    return { date, duration };
  });

  const labels = sleepDataWithDuration.map((data) => data.date);
  const durationData = sleepDataWithDuration.map((data) => data.duration);

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

// import { useEffect, useState } from "react";
// import moment from "moment/moment";
// import axios from "axios";
// import Chart from 'chart.js/auto';
// import { Line } from "react-chartjs-2";

// export function SleepGraph() {
//   const [sleepData, setSleepData] = useState([]);
//   const jwt = localStorage.getItem('jwt');

  
//   useEffect(() => {
//     const calculateDuration = (asleep, awake) => {
//       const start = moment(asleep, 'h:mm');
//       const end = moment(awake, 'h:mm');
//       const duration = moment.duration(end.diff(start));
//       return duration.asHours().toFixed(2);
//     };
    
//     const sleepDataWithDuration = sleepData.map((sleep) => {
//       const date = moment(sleep.date).format('MMM D');
//       const duration = calculateDuration(sleep.asleep, sleep.awake);
//       return { date, duration };
//     });
    
//     const myChart = new Chart('myChart', {
//       type: 'line',
//       data: {
//         labels: sleepDataWithDuration.map((data) => data.date),
//         datasets: [
//           {
//             label: 'Sleep Duration',
//             data: sleepDataWithDuration.map((data) => data.duration),
//             fill: false,
//             borderColor: 'rgb(75, 192, 192)',
//             tension: 0.1,
//           },
//         ],
//       }
//     });
  
//     const fetchData = async () => {
//       const response = await axios.get('http://localhost:3000/sleeps.json', {
//         headers: {
//           'Authorization': `Bearer ${jwt}`
//         },
//       });
//       const data = response.data;
//       setSleepData(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <canvas id="myChart"></canvas>
//     </div>
//   );
// };


// export function SleepGraph() {

// const MyChart = () => {
//   const [sleepData, setSleepData] = useState([]);
//   const jwt = localStorage.getItem('jwt');

//   useEffect(() => {
//     const calculateDuration = (asleep, awake) => {
//     const start = moment(asleep, 'h:mm A');
//     const end = moment(awake, 'h:mm A');
//     const duration = moment.duration(end.diff(start));
//     return duration.asHours().toFixed(2);
//   };
  
//   const sleepDataWithDuration = sleepData.map((sleep) => {
//     const date = moment(sleep.date).format('MMM D');
//     const duration = calculateDuration(sleep.asleep, sleep.awake);
//     return { date, duration };
//   });

//   const myChart = new Chart('myChart', {
//     type: 'line',
//     data: {
//       labels: sleepDataWithDuration.map((data) => data.date),
//       datasets: [
//         {
//           label: 'Sleep Duration',
//           data: sleepDataWithDuration.map((data) => data.duration),
//           fill: false,
//           borderColor: 'rgb(75, 192, 192)',
//           tension: 0.1,
//         },
//       ],
//     }
//   });
  
  
//     const fetchData = async () => {
//       const response = await axios.get('http://localhost:3000/sleeps.json', {
//         headers: {
//           'Authorization': `Bearer ${jwt}`
//         },
//       });
//       const data = response.data;
//       setSleepData(data);
//     };
//     fetchData();
//   }, []);
  

//   return (
//     <div>
//       <canvas id="myChart"></canvas>
//     </div>
//   );
// };}




// const jwt = localStorage.getItem('jwt');
// if (jwt) {
  //   axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  // }
  
  // const SleepGraph = () => {
    //   const [graph, setGraph] = useState([]);

    //   useEffect(() => {
//     const fetchData = async () => {
//       await fetch("http://localhost:3000/sleeps.json", {
//         method: "GET",
//         headers: {
//           Authorization: "Bearer" + jwt,
//         },
//       })
//         .then((response) => {
//           response.json().then((json) => {
//             console.log(json);
//           });
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     };
//     fetchData();
//   }, ["http://localhost:3000/sleeps.json"]);

//   const data = {
//     labels: graph?.data?.map((x) => x.date),
//     datasets: [
//       {
//         label: "Sleep Duration",
//         backgroundColor: "rgb(255, 99, 132)",
//         borderColor: "rgb(132, 99, 255)",
//         data: graph?.data?.map((x) => x.asleep),
//       },
//     ],
//   };

//   return (
//     <div>
//       <Line data={data} />
//     </div>
//   );
// };

// export default SleepGraph;
