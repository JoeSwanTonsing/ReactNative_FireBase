import React, {useState} from 'react';
import {auth, database} from './Setup';



export const SignupUser = (email, password) => {
  return new Promise(function (resolve, reject) {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((snapshot) => {
        resolve('Signup Successful');
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const SigninUser = (email, password) => {
  return new Promise(function (resolve, reject) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((snapshot) => {
        resolve('Sign In Successful');
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const SignOutUser = () => {
  return new Promise(function (resolve, reject) {
    auth()
      .signOut()
      .then((snapshot) => {
        resolve('Sign Out Successful');
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const savePost = (Id, Date, Title, Message) => {
  return new Promise(function (resolve, reject) {
    let key;
    if (Id != null) {
      key = Id;
    } else {
      key = database().ref().push().key;
    }

    let dataToSave = {
      Id: key,
      Date: Date,
      Title: Title,
      Message: Message,
    };
    database()
      .ref('posts/' + key)
      .update(dataToSave)
      .then((snapshot) => {
        resolve(snapshot);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// export const deleteAllPost = () => {
//   const [posts, setPosts] = useState([]);
//   return new Promise(function (resolve, reject) {
//     database()
//       .ref('posts')
//       .remove()
//       .then(() => {
//         setPosts([]);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   };
// };
