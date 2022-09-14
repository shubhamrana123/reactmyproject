import React from 'react';
import LoginView from './pages/auth/LoginView';
import './App.css';
import ViewCard from './component/layout/Card';
import Navbar from './component/layout/Navbar';
import CardView from './component/layout/Card';
import DashboardView from './pages/auth/DashboardView';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CardView>
        <DashboardView></DashboardView>
      </CardView>
    


      {/* <ViewCard></ViewCard> */}
    </div>
  );
}

export default App;
