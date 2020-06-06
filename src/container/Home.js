import React , { PureComponent} from 'react';
import './Home.css';
import Summary from '../component/summary';
import Map from '../component/map';
import {fetchSummary, fetchNews } from '../Fetcher/fetch';
import Countries from '../component/countries';
import News from '../component/news';
import Chart from '../component/Chart';
import Nav from '../component/Navbar/Navbar';

class Home extends PureComponent {

   state = { summary : null,data : false,global: null,news: null,article : false,code : "IN",slug : "india",
                   message : "Loading......."};
   componentDidMount()
    { 
      
     /* axios.get("https://api.covid19api.com/summary").then( response => {
                                                                        console.log(response);
                                                                        this.setState({ summary : response.data,data : true});
                                                                        }).catch( error => console.log(error)); */
      const setsummary = async() =>{
                                     const summary = await fetchSummary();
                                     if( summary !== undefined)
                                      {
                                        this.setState({summary:summary,data : true,global:summary.Global});
                                      }
                                      else {
                                        this.setState({message : "Server Error"});
                                      }
                                     
                                   } 
      setsummary(); 
      const setNews = async (code) => {                               
                                     const news = await fetchNews(code);
                                     console.log(news);
                                     if(news !== null && news !== undefined && news.length !== 0 ) 
                                      { 
                                        this.setState({news : news ,article : true})
                                      }
                                    else {
                                      this.setState({news : "No Feed",article : true})
                                    }
                                  } 
      setNews(this.state.code);                         
   }

   summaryHandler = (data) => {
    //this.setState({global:data,slug: data.Slug});
     
       if (data.Country === "World") {
      this.setState({ code : "IN", global: data, slug : "india" });
                                    } else {
                                        this.setState({  code  : data.CountryCode,
                                                         global: data,
                                                         slug  : data.Slug });
                                           }
        if(data.CountryCode )
        { 
          this.newsHandler(data.CountryCode.toUpperCase());
        }
        else {
        this.newsHandler("AG");
             } 
      
   
        }

   newsHandler = async (code) => {
                                    const news = await fetchNews(code);
                                    console.log(code);
                                    console.log(news);
                                    if(news === null  ||  news === undefined || news.length === 0)
                                     {
                                       this.setState({news : "No Feed",article : true,code : code})
                                     }
                                     else
                                     { this.setState({news : [...news] ,article : true, code:code}) }
                                 }

   

  render()
   {
    let show = (<h1> {this.state.message} </h1>);
    
    if(this.state.data && this.state.article)
     {
      show = (
        <div className="Home">
        
        <Summary summary={this.state.global} />
        <Countries summary={this.state.summary} clicked={this.summaryHandler}/>
        <Chart data={this.state.code} name={this.state.slug} />
        <Map  data={this.state.summary}/>
        <News  articles={this.state.news}/>      
        </div>

            );
     }
    
     return  (
         <div>
             <Nav />
             <span>{show}</span>;
         </div>
     );
   }
  
}

export default Home;
