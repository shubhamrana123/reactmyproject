import React from 'react'
import CardView from '../component/layout/Card';
import { categoryHeadingList, categorySubList } from '../dummyData/dummyData'
import { useNavigate } from 'react-router-dom';
import Images from '../component/constant/images';
import IndividualIntervalsExample from '../component/layout/Carousel';
import { productRating } from '../dummyData/dummyData';
import { productPrice } from '../dummyData/dummyData';
const DashboardView = () => {
const navigate = useNavigate()
    console.log(categoryHeadingList);


    const openProductDetails = (id:any) =>{
      // console.log(id);
      id=+1;
navigate('productDetails')

    }
    
  return (
  <>
<IndividualIntervalsExample/>
  {
categoryHeadingList.map((item:any)=> 
(

<CardView className='cardgap'>
    <div className="container1">
    <b>{item.name}</b> 
     <button className='btn btn-primary' >View All</button>
    </div>
   <hr></hr> <br/>
 { categorySubList.map((item)=>
  (    
  <>
<div className="productCard" onClick={(e)=>openProductDetails(item.id)}>
<img src={Images.tshirt} height='150' width='150'></img> <br/>
<div className="productCardName">
<b>{item.name}</b>
</div>
<div className="productCardRating">
{item.rating}
</div>
<div className="productCardPrice">
₹{item.price}
</div>

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