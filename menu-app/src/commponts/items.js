import React from 'react'
import { Col, Row } from 'react-bootstrap';

const Items = ({myData}) => {
  return (
  <Row >
  {
    myData.length >= 1 ? (myData.map((item) => {
        return(<Col key={item.id} sm='12' className='d-flex justify-content-center  '>
            
            <div  className="card mb-3" style={{maxWidth:"80%"}}>
            <div  className="row g-0">
              <div  className="col-md-4">
                <img src={item.img} alt='food' className="img-fluid rounded-start " ></img>
              </div>
              <div  className="col-md-8">
                <div  className="card-body  mx-4">
                <p  className="card-text " style={
                  {float:"left", top:"0"
               }
              }><small  className=" ">{item.price}</small></p>
                  <h5  className="card-title m-4 fs-3">{item.title}</h5>
                  <p  className="card-text">{item.description}</p>
              
                </div>
              </div>
            </div>
          </div>
          
            </Col>)

    })): <h3 className="text-center">لا يوجد بيانات</h3>
}
 </Row>
  )
}

export default Items
