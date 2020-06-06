import axios from "axios";

const getAllCountries = "https://api.covid19api.com/summary";


export const fetchSummary = async () => {
  try {
     const response = await axios.get(getAllCountries);
     
    return response.data;
    
  } catch (error) {
    console.log(error);
  }
};


let getACountry = "https://api.smartable.ai/coronavirus/stats";

export const fetchCountry = async (countryCode) => {
  try {
    const response = await axios.get(`${getACountry}/${countryCode}`, {
      headers: { "Subscription-Key": "3009d4ccc29e4808af1ccc25c69b4d5d" },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

//let globalCases = "https://corona.lmao.ninja/all";

export const fetchGlobalCases = async () => {
  try {
    const response = await axios.get(getAllCountries);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};


export  const fetchNews = async (code) => {
   try {
     const response = await axios.get("https://api.smartable.ai/coronavirus/news/"+code+"?Subscription-Key=3009d4ccc29e4808af1ccc25c69b4d5d");
      if(response.data === null || response.data === undefined)
       {
         return undefined;
       }
     return response.data.news ;
   }catch(err){
     console.log(err);
   }
}

