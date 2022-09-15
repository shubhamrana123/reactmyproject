import React from 'react';
import LoginView from './pages/auth/LoginView';
import './App.css';
import ViewCard from './component/layout/Card';
import Navbar from './component/layout/Navbar';
import CardView from './component/layout/Card';
import DashboardView from './pages/auth/DashboardView';
import FormDialog from './component/Modal';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <FormDialog buttonName="Login"></FormDialog> */}
       <CardView>
        <DashboardView></DashboardView>
      </CardView> 
    


      {/* <ViewCard></ViewCard> */}
    </div>
  );
}

export default App;
