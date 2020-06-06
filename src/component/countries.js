import "./countries.css";
import  down from "../assets/Down.svg";
import  up  from "../assets/Up.svg";
import React , {useState} from "react";
import Country from "./country";

const Countries = (props) => {

    
     let countries = [ ...props.summary.Countries ,{...props.summary.Global,"Country" : "World"}];
     countries = countries.sort(function(a,b){ return b.TotalConfirmed - (b.TotalRecovered + b.TotalDeaths) -
                                                       (  a.TotalConfirmed - (a.TotalRecovered + a.TotalDeaths)  ) });
     const [Countries , setCountries] = useState(countries); 
     const countrycards =  (
               Countries.map((info) => {
                          return <Country info={info} key={info.Country} 
                                          src={info.NewConfirmed >= ( info.NewRecovered + info.NewDeaths) ? up : down}
                                          clicked={props.clicked}/>
                                      }) 
                           );
   
     return ( 
        <div className='Countries' >
        <input type="text"  onChange={(event)=> 
                                           setCountries(
                                            countries.filter((country) => {
                                              return country.Country.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 ;
                                                })
                                           )} 
                                           className="SearchBox"
                                           placeholder="Search Location"/> 
                                       
             {countrycards}
        </div>
        
     );
}

export default Countries ;