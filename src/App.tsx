import React , {useState} from 'react';
import LoginView from './pages/auth/LoginView';
import './App.css';
import ViewCard from './component/layout/Card';
import Navbar from './component/layout/Navbar';
import CardView from './component/layout/Card';
import DashboardView from './pages/auth/DashboardView';
import FormDialog from './component/Modal';
// import AgGridDemo from './pages/auth/AggridDemo';
// import AgGrid from './component/ag-grid/agGrid';
import Autocompletes from './pages/auth/Autocomplete';
import DatePicker from 'react-date-picker'
import GridExample from './component/ag-grid/agGrid';
function App() {
  // const [selectedDate, setSelectedDate] = useState(null)
  const [value, onChange] = useState(new Date());
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <FormDialog buttonName="Login"></FormDialog> */}
       {/* <CardView>
        <DashboardView></DashboardView>
      </CardView>  */}
    {/* <Autocompletes></Autocompletes> */}
      {/* <AgGrid/> */}
      <GridExample/>
      {/* <ViewCard></ViewCard> */}
      {/* <DatePicker onChange={onChange} value={value} /> */}
    </div>
  );
}

export default App;
