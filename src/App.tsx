import React , {useState} from 'react';
import LoginView from './pages/auth/LoginView';
import './App.css';
import ViewCard from './component/layout/Card';
import Navbar from './component/layout/Navbar';
import CardView from './component/layout/Card';
import DashboardView from './pages/DashboardView';
import FormDialog from './component/Modal';
// import AgGridDemo from './pages/auth/AggridDemo';
import AgGrid from './component/ag-grid/agGrid';
import Autocompletes from './pages/Autocomplete';
import DatePicker from 'react-date-picker'
import GridExample from './component/ag-grid/agGrid';
import GridDateEditor from './component/ag-grid/customEditor';
import IndividualIntervalsExample from './component/layout/Carousel';
import ReactGallery from './component/ReactGallery';
import Gallery from "react-grid-gallery";
// import IMAGES from './component/constant/images';
import {
  Routes,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import ProductDetails from './pages/ProductDetails';
const images = [
  {
     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
     width: 320,
     height: 174,
     isSelected: true,
     caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
     width: 320,
     height: 212,
     tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
     ],
     alt: "Boats (Jeshu John - designerspics.com)",
  },

  {
     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
     width: 320,
     height: 212,
  },
];

function App() {
  // const [selectedDate, setSelectedDate] = useState(null)
  const [value, onChange] = useState(new Date());
  return (
    <div className="App">
      <>
      <Navbar></Navbar> 
      {/* <DashboardView/> */}

    <Routes>
        <Route path="/" element={<DashboardView />} />
        <Route path="/dashboard/*" element={<DashboardView/>}>
    
 </Route>
 <Route path="/productDetails" element={<ProductDetails/>} />
    </Routes>
</>
   
      {/* <Gallery images={images} /> */}
      {/* <ReactGallery/> */}
    </div>
  );
}
 

export default App;
