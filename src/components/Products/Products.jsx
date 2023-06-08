import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import {Skeleton} from '@mui/material'
import { useSelector } from "react-redux";
const Products = ({amountToDisplay}) => {
  const products = useSelector((state)=> state.product.products)
  const isWaiting =  useSelector((state)=> state.product.isWaiting)
  return (
    <div className="container-fluid my-3">
    <div className="row">
      {isWaiting ?  <>
          <Skeleton className='m-auto' variant="circular" width={85} height={85} />
        </>
      : null  
      }
      {products&& products.length > 0 ? 

        products.map((e)=>{
          return (
            <ProductCard amountToDisplay={amountToDisplay} imgSrc={e.imagePath} title={e.title} key={e.id}/>
          )
        })
     : 
     !isWaiting ?
     <p className="m-auto display-6"> No <span className='text-danger'>Product</span>  In This
      <span className='text-danger'> Category</span> </p>
   : null  
  }
    </div>
    </div>
  );
};

export default Products;
