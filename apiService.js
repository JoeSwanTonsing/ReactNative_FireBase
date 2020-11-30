import React from 'react';
import {auth} from './Setup';


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
