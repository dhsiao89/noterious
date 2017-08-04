'use strict';

angular.module('noterious.common')
  .factory('Auth', function ($firebaseAuth, ENDPOINT_URI) {
    var config = {
    apiKey: "AIzaSyB1_YmPcA73IRh8V2nYdkXC72pygUxng2Q",
    authDomain: "ngpractice-e567e.firebaseapp.com",
    databaseURL: ENDPOINT_URI,
    storageBucket: "ngpractice-e567e.appspot.com",
  };
  firebase.initializeApp(config);
  return $firebaseAuth(firebase.auth())
  })
;