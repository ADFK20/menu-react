

import React from 'react'
import { Row, Col } from 'react-bootstrap';

const Catgory = ({catgoryFilter , allCat}) => {
const onfilter =(cat)=>{
  catgoryFilter(cat)
}


  return (
    <Row className='my-5'>
    <Col sm='12' className='d-flex justify-content-center'>
    {
allCat.length >=1 ? (allCat.map((cat)=> {
return(
  <div>
  <button onClick={()=>onfilter(cat)} className='mx-2  btn hover'>{cat}</button>
  </div>
  )
})):<h4>there is no types</h4>

    }
   
    </Col>
    </Row>
  )
}

export default Catgory
