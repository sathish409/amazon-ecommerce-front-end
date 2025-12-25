import React, { useEffect, useState } from 'react'
    import { Line } from 'react-chartjs-2';
    import {
      Chart as ChartJS,
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend,
    } from 'chart.js';
import { fetchData } from '../../helpers/axiosHelper';

    // Register the necessary components with Chart.js
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
 
export const LineGraph = () => {
  const [chartData, setChartData] = useState(null)
    const [totalSales, setTotalSales] = useState(0);
  useEffect(()=>{
   
const fetchSales =async()=>{
try {
  const data = await fetchData()
  const labels = data.map(item=> item.date)
  const values = data.map(item=> item.sales)

   setChartData({
    labels,
    datasets:[{
      label:"Daily sales",
      data: values,
      borderColor: "rgb(75, 192, 192)",
     fill: false
    }]

   })
   const total = values.reduce((acc, item)=> acc + item, 0)
   setTotalSales(total)
   console.log(chartData)
} catch (error) {
          console.error("Error fetching chart data:", error);
}
      }
 fetchSales()
  }, [])
   
    const options = {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  };

  return chartData ?(
    <div className='p-5'>
            <div className="total-sales shadow rounded p-2 mb-5">
        <h3>Total Sales: ${totalSales.toLocaleString()}</h3>
      </div>
        <Line  options={options} data={chartData} />
    </div>
  ):
  (
    <div className="">Loading.....</div>
  )
}
