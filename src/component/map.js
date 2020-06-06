import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import React , {  useEffect }from "react";
import './map.css';




const Map = ({data}) => {
   const  ref = false ;
   const createMap = () => {
     let map = am4core.create("chartdiv", am4maps.MapChart);
   map.geodata = am4geodata_worldLow;
   map.projection = new am4maps.projections.Miller();
   

   let polygonSeries = new am4maps.MapPolygonSeries();
   polygonSeries.useGeodata = true;
   map.series.push(polygonSeries); 
  
   let polygonTemplate = polygonSeries.mapPolygons.template;
   polygonTemplate.tooltipText = "{name} : {value}";
   polygonTemplate.fill = am4core.color("#FFC4C6");
   
   // Create hover state and set alternative fill color
   let hs = polygonTemplate.states.create("hover");
   hs.properties.fill = am4core.color("red");
  
   
   polygonSeries.data = data.Countries.map(
        (country) => {
             let obj = {},color="";
             obj.id = country.CountryCode.toUpperCase();
             obj.name = country.Country;
             obj.value = country.TotalConfirmed;
             if(country.TotalConfirmed <= 2000)
              {
                color = "#FFC4C6"; 
              }
              else if(country.TotalConfirmed <= 20000)
              {
                color = "#FF6F7D";
              }
              else 
              {
                color = "#ff471a";
              }
              obj.fill = am4core.color(color);
              return obj;
          }         
     ); 
  
  
  
   polygonTemplate.propertyFields.fill = "fill";
   map.zoomControl = new am4maps.ZoomControl();
   map.zoomControl.slider.height = 120;
   map.zoomControl.marginRight = 15;
   map.zoomControl.marginBottom = 330;
  
  }

  useEffect(()=>{
    
    createMap();
    
  },[ref]);
 

  return (
     <div  className="Map">
         <span style={{display:"block",padding:"5px 10px 13px 5px"}}>
           <span style={{fontWeight:"bolder",color:"red",fontSize:"130%",marginLeft:"38px",marginRight:"290px"}}>COVID-19 Affected Areas</span>
           <div style={{display:"inline-block",width:"15px",height:"15px",backgroundColor:"red"}}></div>
           <span style={{color:"red",fontSize:"120%",marginRight:"90px"}}>&nbsp;&nbsp;Most Affected</span>
           <div style={{display:"inline-block",width:"15px",height:"15px",backgroundColor:"#FF6F7D"}}></div>
           <span style={{color:"#FF6F7D",fontSize:"120%",marginRight:"90px"}}>&nbsp;&nbsp;More Affected</span>
           <div style={{display:"inline-block",width:"15px",height:"15px",backgroundColor:"#FFC4C6"}}></div>
           <span style={{color:"#FFC4C6",fontSize:"120%"}}>&nbsp;&nbsp;Less Affected</span>
         </span>
         <div id = "chartdiv">

          </div>
     </div>
    );
}

export default  Map;