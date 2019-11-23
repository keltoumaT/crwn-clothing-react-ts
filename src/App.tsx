import React from 'react';
import {Switch,  Route } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component"
import HatsPage from "./pages/hatspage/hatspage.component";
import ShopPage from './pages/shoppage/shoppage.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component'

const App: React.FC = () => {
  return (
    <div>
        <Header />
      <Switch>
      <Route exact path='/' component={HomePage
      }/>
       <Route path='/shop/hats' component={HatsPage}/>
       <Route path='/shop' component={ShopPage}/>
       <Route path='/signin' component={SignInAndSignUp}/>


       </Switch>
    </div>
  );
}

export default App;
