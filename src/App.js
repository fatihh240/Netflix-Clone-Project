import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firesabe';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged In
        console.log(userAuth);
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
      );
      } else {
        // Log Out
        dispatch(logout());
      }
    });

    return unsubscribe;
    
}, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ): (
          <Routes>
          <Route path='/profile' element={<ProfileScreen/>} />
          <Route exact path="/" element={<HomeScreen/>} />
        </Routes>
        )}
    </Router>
    </div>
  );
}

export default App;
