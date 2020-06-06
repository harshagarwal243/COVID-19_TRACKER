import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import HelpfulLinks from "../component/HelpfulLinks/HelpfulLinks";
import Faq from "../component/FAQ/Faq";


const App = () => {
  return (
    <BrowserRouter>
      
        <Route path="/" exact component={Home} />
        <Route path="/faq" exact component={Faq} />
        <Route path="/helpfullinks" exact component={HelpfulLinks} />
      
    </BrowserRouter>
  );
};

export default App;