import React from 'react';
import Card from './card'
import './summary.css';
import up from '../assets/Up.svg';
import down from '../assets/Down.svg';

const summary = (props) => {
    const { TotalConfirmed, TotalRecovered ,TotalDeaths , NewConfirmed,NewRecovered, NewDeaths} = props.summary;
    const Active = TotalConfirmed -( TotalRecovered + TotalDeaths );
    return  ( <div className="Summary">
        <Card  title="Total Cases" value={TotalConfirmed} src={NewConfirmed >= NewRecovered ? up : down} />
        <Card  title="Recoverd &nbsp;&nbsp;" value={TotalRecovered} src = {down}  />
        <Card  title="Active Case" value= {Active} src = {NewConfirmed >= ( NewRecovered + NewDeaths) ? up : down} />
        <Card  title="Total Death" value={TotalDeaths}  src={up}/>
        <Card  title="New Cases" value={NewConfirmed}  src={up}/>
    </div>

    );
}



export default summary;