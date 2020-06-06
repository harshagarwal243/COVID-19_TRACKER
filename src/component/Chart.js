import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { fetchCountry } from "../Fetcher/fetch";
import "./chart.css";

var confirm, drawChart = [];
  
  const Chart = ({ data }) => {
 
  const [deaths, setDeaths] = useState([]);
//  const [cname, setName] = useState("");

  useEffect(() => {
    console.log(data);
    const fetchData = async () => {
      confirm = await fetchCountry(data);
      console.log(confirm);
      if (confirm) {
        drawChart = confirm.data.stats.history;
        setDeaths(drawChart);
       // setName(name);
      }

     
    };
    fetchData();
  }, [data]);

  const convert = (data) => {
    const date = new Date(data);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
     return (day + "/" + month + "/" + year);
  }

  const lineChart = deaths.length ? (
    <div className="Inside">
      <Line
        data={{
          labels: drawChart.map(({ date }) => convert(date)),
          datasets: [
            {
              data: drawChart.map(({ confirmed }) => confirmed),
              label: "Confirmed",
              borderColor: "rgba(20, 72, 150, 0.8)",
              backgroundColor: "rgba(20, 72, 150, 0.2)",
              fill: true,
              borderWidth: "1.5",
              hoverBackgroundColor: "#BB2CD9",
              hoverBorderColor: "rgba(20, 72, 150, 0.8)",
              hoverBorderWidth: "1",
            },
            {
              data: drawChart.map(({ recovered }) => recovered),
              label: "Recovered",
              borderColor: "rgba(27, 202, 155, 0.8)",
              backgroundColor: "rgba(27, 202, 155, 0.2)",
              fill: true,
              borderWidth: "1.5",
              hoverBackgroundColor: "#FFF222",
              hoverBorderColor: "rgba(27, 202, 155, 0.8)",
              hoverBorderWidth: "1",
            },
            {
              data: drawChart.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "rgba(176, 27, 28, 0.8)",
              backgroundColor: "rgba(176, 27, 28, 0.5)",
              fill: true,
              borderWidth: "1.5",
              hoverBackgroundColor: "#45CE30",
              hoverBorderColor: "rgba(176, 27, 28, 0.8)",
              hoverBorderWidth: "1",
            },
          ],
        }}
      />
    
    
    </div>
  ) :  <center><h1 style={{color:"red"}}>Server Error</h1></center>; 
  return <div className="Chart">
          {lineChart}
         
        </div>;
};

export default Chart;
