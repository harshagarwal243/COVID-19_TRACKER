import React from "react";
import './news.css';



const News = (props) => {
    console.log(props.articles);
     
    const setDisplay = (id)=>{
        let button = document.getElementById(id);
        let content = document.getElementById("A"+id);
      
       if(button.innerHTML === "Read More ....")
        {
            button.innerHTML = "Read Less ....";
            content.style.display = "block";
        }
        else {
            button.innerHTML = "Read More ....";
            content.style.display = "none";
        }
    }
    let count = 0;
    let articlediv = null;
    if(props.articles !== "No Feed")
      {   console.log(props.articles)
          articlediv =  props.articles.map((article,index) => {   //update
          const id = count++;
          
          return (
               <div className="Article" key={article.title+index}>  {/* update */}
                    <img src={article.images ? article.images[0].url : null}  className="Image" alt="nothing"/>
                  <div className="Side">
                  <b className="Title"> {article.title} </b>
                    <button className="Readmore" onClick={() => {setDisplay(id)}} id={id}>Read More ....</button>
                  </div>
                    <p className="Content" id={"A"+id} > {article.excerpt}</p>
               </div>
          )
      });
      }
      else {
        articlediv = 
        <p style={{textAlign : "center",fontWeight : "bolder",position : "relative",top : "100px",fontSize : "150%",color:"red"}}> 
                    { "No Feed"} </p>;
      }
    
     return (
          <div className="News">
            <h1  className="Heading"><i>News And Updates</i></h1>
            {articlediv}
          </div>
      );
}


export default News ;