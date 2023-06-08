import React from 'react'
import {Col} from 'react-bootstrap'
import AltImage from '../../assets/alt.png'

const ProductCard = ({imgSrc , title , amountToDisplay}) => {
  const amontToDis = amountToDisplay === 0 ? 12 : amountToDisplay===2 ? 6 : 4
  return (
    <Col  className={`col-${amontToDis} d-flex justify-content-center `}>
        <div className='shadow-sm bg-white  rounded  m-2 d-flex flex-column justify-content-around align-items-around' style={{ maxWidth: '300px' , width : '100px' , height : '100px'}} >
           <img src={imgSrc} 
           onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src=AltImage;
          }}
           style={{width: '100%' , height : '90%' , objectFit : 'contain' , padding : '1rem' , borderRadius : '50px' }} />
           <p className='m-auto' style={{fontSize : '14px' , padding : '5px'}}>
              {title}
           </p> 
        </div>
      
    </Col>
  )
}

export default ProductCard