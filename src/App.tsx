import React from 'react';
import {Switch,  Route } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component"
import HatsPage from "./pages/hatspage/hatspage.component";
import ShopPage from './pages/shoppage/shoppage.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

interface IState{
  currentUser:object | null;
}
class App extends React.Component<{}, IState> {
  constructor(props:any){
    super(props);

    this.state={
      currentUser: null,
    }
  }
 unsubscribeFromAuth:any;
  componentDidMount(){
   this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot:any) =>{
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data(),
            }
          });
          console.log(this.state);


        });
      }
      this.setState({
        currentUser:userAuth,
      })
      console.log(this.state);
    })
  
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }



  render(){
    return (
      <div>
          <Header currentUser={this.state.currentUser}/>
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

}

export default App;
