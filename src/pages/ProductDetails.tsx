import React from 'react'
import Images from '../component/constant/images'
import CardView from '../component/layout/Card'

const ProductDetails = () => {
  return (
    <>


      <div className="container">
        <CardView>
          <img src={Images.tshirt} width={200} height={200} className='product-details-zoom'/> <br />
          <button className='form-control btn btn-primary'>ADD TO CART</button> <br />
          <button className='form-control btn btn-danger'>BUY NOW</button>
        </CardView>
        <CardView>
          <div className="product-detail-container">
          <div className="product-detail-name">
            <h3>Tshirt</h3>
          </div>
          <div className="product-detail-rating" style={{backgroundColor:'green',textAlign:'center'}}>3.0</div>
          <div className="product-detail-price">3</div>
          <div className="product-detail-offer"><b>Available Offers</b></div>
          <div className="product-detail-tag">
            <img src={Images.tag} alt="" width='20'/>
            <div> Special PriceGet extra ₹130 off (price inclusive of discount)T&C</div>
            </div>
            <div className="product-detail-tag">
            <img src={Images.tag} alt="" width='20'/>
            <div> Special PriceGet extra ₹130 off (price inclusive of discount)T&C</div>
            </div>
            <div className="product-detail-tag">
            <img src={Images.tag} alt="" width='20'/>
            <div> Special PriceGet extra ₹130 off (price inclusive of discount)T&C</div>
            </div>
            <div className="product-detail-tag">
            <img src={Images.tag} alt="" width='20'/>
            <div> Special PriceGet extra ₹130 off (price inclusive of discount)T&C</div>
            </div>
          </div>
     
        </CardView>
      </div>


    </>
  )
}

export default ProductDetails