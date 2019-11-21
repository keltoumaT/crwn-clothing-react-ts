import React from 'react';
import {Switch,  Route } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component"
import HatsPage from "./pages/hatspage/hatspage.component";
import ShopPage from './pages/shoppage/shoppage.component'


const App: React.FC = () => {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage
      }/>
       <Route path='/shop/hats' component={HatsPage}/>
       <Route path='/shop' component={ShopPage}/>

       </Switch>
    </div>
  );
}

export default App;
