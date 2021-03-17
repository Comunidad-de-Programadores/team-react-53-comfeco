import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
// import { firestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD6qcYOpfYtaQ6jN-Lgib90VAkFCFxShcM',
  authDomain: 'team-react-53-comfeco.firebaseapp.com',
  projectId: 'team-react-53-comfeco',
  storageBucket: 'team-react-53-comfeco.appspot.com',
  messagingSenderId: '528449037894',
  appId: '1:528449037894:web:040e77cd09933a55f9cc47',
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();

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
    console.log(normalizedUser);
    onchange(normalizedUser);
  });
};

export const userActive = () => {
  return firebase.auth().currentUser;
};

export const signInWithEmail = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
};
export const createUserWithEmail = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
};

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider);
};

export const loginWithFacebook = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(facebookProvider);
  // .then(user =>{
  //   return mapUserFromFirebaseAuth(user)
  // });
};

export const logOut = () => {
  return firebase.auth().signOut().then(() => {
    console.log('Signed Out');
  }).catch((error) => {
    console.error('Sign Out Error', error);
  });
};

export const createUserProfile = (uid, data) => {
  return firebase.firestore().collection('usuarios').doc(uid).set(data);
};
export const getUserProfile = (uid) => {
  return firebase.firestore().collection('usuarios').doc(uid).get();
};

export const sendRecoverPassword = (email) => {
  return firebase.auth().sendPasswordResetEmail(email);
};

export const recoveryPass = (code, newPassword) => {
  return firebase.auth().confirmPasswordReset(code, newPassword);
};
export const verifyPasswordResetCode = (code) => {
  return firebase.auth().verifyPasswordResetCode(code);
};

export const dateCreateUserProfile = () => {
  return firebase.firestore.Timestamp.fromDate(new Date());
};

export const getEvents = (id) => {
  return firebase
    .firestore()
    .collection('eventos')
    .where('enrolled', 'array-contains', id)
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const data = doc.data();
        const { id } = doc;
        return {
          ...data,
          id,
        };
      });
    })
    .catch((error) => {
      console.log('Error getting events', error);
    });
};

export const getWorkshopsToday = (startDay, endDay) => {
  return firebase
    .firestore()
    .collection('talleres')
    .where('hora', '>=', startDay)
    .where('hora', '<', endDay)
    .orderBy('hora', 'desc')
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const data = doc.data();
        const { id } = doc;
        const { hora } = data;
        console.log(hora, 'horas');
        // const date = new Date(hora.seconds * 1000);
        // const normalizedCreateAt = new Intl.DateTimeFormat('es-ES').format(date);
        const normalizedCreateAt = new Date(hora.seconds * 1000).toString();
        console.log(normalizedCreateAt, 'horitas');
        return {
          ...data,
          id,
          hora: normalizedCreateAt,
        };

      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });

};

export const getWorkshopsFilterArea = (valueArea) => {
  return (
    firebase
      .firestore()
      .collection('talleres')
      .where('area', '==', valueArea)
    // .orderBy('hora', 'desc')
      .get()
      .then((snapshot) => {
        return snapshot.docs.map((doc) => {
          const data = doc.data();
          const { id } = doc;
          const { hora } = data;
          const normalizedCreateAt = new Date(hora.seconds * 1000).toString();
          return {
            ...data,
            id,
            hora: normalizedCreateAt,
          };
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      })
  );
};

export const getCommunities = () => {
  return firebase
    .firestore()
    .collection('comunidades')
  //.orderBy('hora', 'desc')
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const data = doc.data();
        const { id } = doc;
        //const { hora } = data;
        // const date = new Date(hora.seconds * 1000);
        // const normalizedCreateAt = new Intl.DateTimeFormat('es-ES').format(date);
        //const normalizedCreateAt = new Date(hora.seconds * 1000).toString();
        return {
          ...data,
          id,
          //hora: normalizedCreateAt,
        };

      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });

};
export const setWorkshopStatus = (idWorkshop, estadoWorkshop) => {
  return firebase.firestore().collection('talleres').doc(idWorkshop).set({
    estado: estadoWorkshop,
  }, { merge: true });
};

export const updatePasword = (newPassword) => {
  const user = firebase.auth().currentUser;
  return user.updatePassword(newPassword);
};

export const uploadProfilePicture = (imagenFile, updateProfileImage, id) => {
  const storageRef = firebase.storage().ref(`images/${imagenFile.name}`).put(imagenFile);
  return storageRef.on('state_changed', (snapshot) => {}, (error) => {
    console.log(error);
  }, () => {
    firebase.storage().ref('images').child(imagenFile.name).getDownloadURL()
      .then((url) => {
        updateProfileImage(url, id);
        alert(id);
        // setDataEditProfile({
        //   ...dataEditProfile,
        //   photoUrl: url,
        // });
      });
  });
};

export const updateProfile = (data, id) => {
  return firebase.firestore().collection('usuarios').doc(id).update({
    name: data.name,
    email: data.email,
    // photoUrl: data.photoUrl,
    gender: data.gender,
    birth: data.birth,
    country: data.country,
    area: data.area,
    facebook: data.facebook,
    github: data.github,
    linkedin: data.linkedin,
    twitter: data.twitter,
    bibliography: data.bibliography,
  });
};

export const updateProfileImage = (url, id) => {
  return firebase.firestore().collection('usuarios').doc(id).update({
    photoUrl: url,
  });

};
