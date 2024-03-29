import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const config = {
    apiKey: "AIzaSyCDaEIX_Q7o5yZd7QYy4MFv8ucpC9VfL0Q",
    authDomain: "crwn-db-82fc4.firebaseapp.com",
    databaseURL: "https://crwn-db-82fc4.firebaseio.com",
    projectId: "crwn-db-82fc4",
    storageBucket: "crwn-db-82fc4.appspot.com",
    messagingSenderId: "9166837912",
    appId: "1:9166837912:web:051cb7d3b9b294e2fb58ed"
  };



export const createUserProfileDocument = async(userAuth:any, additionalData?:any) =>{
    if(!userAuth) return;
    const userRef:any = firestore.doc(`users/${userAuth.uid}`);

    const snapShot:any = await userRef.get();
    if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error){
        console.log("error creating user ", error.message);
      }
    }

    return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;