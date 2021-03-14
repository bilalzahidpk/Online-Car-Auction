import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Home from "./containers/Home/Home";
import BuyItNow from "./containers/BuyItNow/BuyItNow";
import OurFee from "./components/Support/OurFee/OurFee";
import FAQ from "./components/Support/FAQ/FAQ";
import BuyerTips from "./components/Support/BuyerTips/BuyerTips";
import SignUp from "./containers/Form/SignUp/SignUp";
import SignIn from "./containers/Form/SignIn/SignIn";
import Layout from "./hoc/Layout/Layout";
import CarDetail from "./components/CarDetail/CarDetail";

function App() {
  return (
    <Layout>
    <Switch>
      <Route path="/buyitnow" component={BuyItNow}/>
      <Route path="/buyertips" component={BuyerTips}/>
      <Route path="/ourfee" component={OurFee}/>
      <Route path="/faq" component={FAQ}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/signin" component={SignIn}/>
      <Route path="/cardetail" component={CarDetail}/>
      <Route path="/" exact component={Home}/>
    </Switch>
    </Layout>  
  );
}

export default App;

