import React , {useState} from 'react'
import HorizintalScrollBar from '../components/HorizintalScroll/HorizintalScrollBar'
import Products from '../components/Products/Products'
import {Slider , Box} from '@mui/material'
const Home = () => {
  const [amountToDisplay , setAmountToDisplay] = useState(0) 
  return (
    <>
      <HorizintalScrollBar />
      <Box sx={{width:'100%' , display : 'flex' , justifyContent : 'center'}}>
         <Slider sx={{width:'80%'}} aria-label="Custom marks" step={2} min={0} max={4} defaultValue={0} valueLabelDisplay="auto" 
         onChange={(e)=> setAmountToDisplay(e.target.value)}
         />
      </Box>
      <Products amountToDisplay={amountToDisplay}/> 
    </>
  )
}

export default Home