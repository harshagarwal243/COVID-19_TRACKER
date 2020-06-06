import React from 'react';
import './countries.css';
import World from '../assets/flag.svg';

const Country = (props) => {
           
           let val = World;
           let width="31px" , height = "28px";
         if(props.info.Country !== "World")
             {
              val = "https://www.countryflags.io/"+props.info.CountryCode.toLowerCase()+"/shiny/32.png";
             
             }
          
               return (
                    <div className="Country" onClick={()=>{props.clicked(props.info);}}>
               <p style={{textAlign : "left"}}> 
               <span style={{float : "left",marginRight : "8px",position:"relative",bottom:"3px"}}>
                  <img  alt="logo" src={val} width={width} height={height}/></span>
               <b>{props.info.Country.toUpperCase()}</b> </p> 
                         <p>
                         <span style={{color:"red"}}>{props.info.TotalConfirmed}</span> Affected |&nbsp;
                         <span style={{color:"green"}}>{props.info.TotalRecovered}</span> Recovered
                         < span style={{float:"right",position:"relative",bottom:"20px",left:"8px",marginLeft:"10px"}}>
                             <img  src={props.src} alt="logo" width="25px" height="25px"/></span> 
                          </p>
                    </div>
                  );
      
}

export default Country;