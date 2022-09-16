import React, { useState } from 'react'
import { navbarDetails } from '../../dummyData/dummyData'
import { loginDetails } from '../../dummyData/dummyData'
import Login from '../../component/Login';
import FormDialog from '../Modal'


const Navbar = () => {

  const [loginModelVisibility,seLoginModelVisibility] = useState<boolean>(false);
  const [showList,setShowList] = useState<boolean>(false);
const loginInfo = () =>{
  alert('hi')
//   return  <> 
//    <select name='LoginDetails'>
//   {loginDetails.map((item)=>
//   (<>

//     {/* <option value="Login">Login</option> */}
//   <option value={item.name}>{item.name}</option>
//   </>
//   ))}

//   {/* <option className='form-control' value={item.name}><b>{item.name}</b></option> */}
// </select>
// </>
}
  const openModelHandler = ()=>
  {

    seLoginModelVisibility(true);
  }

  return (
    <>
   
      {loginModelVisibility && 
      <FormDialog 
          Title='Login'
          onClose={seLoginModelVisibility} 
          component={<Login />}/>}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><b>Flipcart</b> <br /> <b><a>Explore plus</a></b></a>

      
          <form className="d-flex">
            <input width='40px ' className="form-control me-4" type="search" placeholder="Search for  products and more" aria-label="Search" />
            {/* <button className="btn  btn-light" type="submit"><b>Login</b></button>
             */}
            
    {/* <FormDialog buttonName="Login" onmouseover={loginInfo}></FormDialog> */}
  
          </form>
          <button className='btn btn-danger' onClick={openModelHandler}>Login</button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><b>Become a Seller</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <b>More</b>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>

            </ul>

          </div>
        </div>
      </nav>
      <nav className="navbar navbar-light bg-light" >

        {navbarDetails.map((item) =>
        (<select name="Electronics" id="">
          {/* {navbarDetails.map((item)=>
        (<option value="Mobiles">{item.name}</option>))} */}
          <option className='form-control' value={item.name}><b>{item.name}</b></option>
        </select>))}

        <a>Flights</a>
        <a>offer zone</a>
      </nav>

    </>
  )
}

export default Navbar
