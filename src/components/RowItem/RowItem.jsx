import React from 'react'
import './style.css'
import { useDispatch } from 'react-redux'
import {categoyAcctions} from '../../store/categorySlice'
import AltImage from '../../assets/alt.png'
const RowItem = (props) => {

  const dispatch = useDispatch()

  const setSelectedCategoryHandler = ()=>{
    dispatch(categoyAcctions.setSelectedCategory(props.category))
  } 
  return (
    
    <div className={props.isActive ?  'main mainActive' : 'main' } onClick={setSelectedCategoryHandler}>
    <div className={props.isActive ?  'mainActive itemContainer active' : 'itemContainer' }>
        <div className='imgBox '>
           <img src={props.imgSrc} alt="category-banner"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src=AltImage;
            }}
           />
        </div>
          
    </div>
    <p>{props.name}</p>
    </div>
  
    
  )
}

export default RowItem