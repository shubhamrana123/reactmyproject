import React from 'react';
import LoginView from './pages/auth/LoginView';
import './App.css';
import ViewCard from './component/layout/Card';
import Navbar from './component/layout/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
 <LoginView></LoginView>
 {/* <ViewCard></ViewCard> */}
    </div>
  );
}

export default App;
