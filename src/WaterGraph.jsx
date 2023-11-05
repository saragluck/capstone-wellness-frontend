
import { Line } from "react-chartjs-2";



const WaterGraph = ({waterData}) => {
  const labels = waterData.map((data) => data.time); 
  const amountData = waterData.map((data) => data.amount); 

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Water Amount",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(132, 99, 255)",
        data: amountData,
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


export default WaterGraph;