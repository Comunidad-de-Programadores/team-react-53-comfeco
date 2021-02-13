import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6qcYOpfYtaQ6jN-Lgib90VAkFCFxShcM",
  authDomain: "team-react-53-comfeco.firebaseapp.com",
  projectId: "team-react-53-comfeco",
  storageBucket: "team-react-53-comfeco.appspot.com",
  messagingSenderId: "528449037894",
  appId: "1:528449037894:web:040e77cd09933a55f9cc47",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

const mapUserFromFirebaseAuth = (user) => {
  const { email, displayName, uid } = user;
  return {
    uid,
    name: displayName,
    email,
  };
};

export const onAuthStateChanged = (onchange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuth(user);
    console.log(normalizedUser)
    onchange(normalizedUser);
  });
};

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider);
};

export const loginWithFacebook = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(facebookProvider)
    // .then(user =>{
    //   return mapUserFromFirebaseAuth(user)
    // });
};

export const logOut = (onChangue) =>{
  return firebase.auth().signOut().then(() => {
    console.log('Signed Out');
    onChangue(null);
  }).catch((error) => {
    console.error('Sign Out Error', error);
  });
}
