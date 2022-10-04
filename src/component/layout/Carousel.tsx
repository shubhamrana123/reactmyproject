import Carousel from 'react-bootstrap/Carousel';
import Images from '../constant/images';
function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}  style={{height:300}}>
        <img
          className="d-block w-100"
          src={Images.mobile}
          alt="First slide"
       style={{height:300}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} style={{height:300}}>
        <img
          className="d-block w-100"
          src={Images.watch}
          alt="Second slide"
          style={{height:50, width:50}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Images.mobile}
          alt="Third slide"
          style={{height:300}} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
// import React from 'react'

// const Carousel = () => {
//   return (
//     <div>Carousel</div>
//   )
// }

// export default Carousel