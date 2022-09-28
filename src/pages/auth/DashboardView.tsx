import React from 'react'
import CardView from '../../component/layout/Card';
import { categoryHeadingList, categorySubList } from '../../dummyData/dummyData'

import Images from '../../component/constant/images';
import IndividualIntervalsExample from '../../component/layout/Carousel';
const DashboardView = () => {

    console.log(categoryHeadingList);
    
  return (
  <>
<IndividualIntervalsExample/>
  {
categoryHeadingList.map((item)=> 
(

<CardView className='cardgap'>
    <div className="container1">
    <b>{item.name}</b>  <button className='btn btn-primary' >View All</button>
    </div>
   <hr></hr> <br/>
 { categorySubList.map((item)=>
  (
  <>
<div className="containers">
<img src={Images.tshirt} height='150' width='150'></img> <br/>
  <b>{item.name}</b>
</div>


  


</>
  ))}
    </CardView>

))
  }
  </>
  )
}

export default DashboardView