import React from 'react'
import CardView from '../../component/layout/Card';
import { categoryHeadingList, categorySubList } from '../../dummyData/dummyData'

import Images from '../../component/constant/images';
const DashboardView = () => {

    console.log(categoryHeadingList);
    
  return (
  <>
  {
categoryHeadingList.map((item)=> 
(

<CardView className='cardgap'>
    <b>{item.name}</b>  <button className='btn btn-primary' >View All</button><hr></hr> <br/>
 { categorySubList.map((item)=>
  (
  <>
{/* <div className="container"> */}
<img src={Images.tshirt} height='50' width='50'></img> 
  {item.name}
{/* </div> */}


  


</>
  ))}
    </CardView>

))
  }
  </>
  )
}

export default DashboardView