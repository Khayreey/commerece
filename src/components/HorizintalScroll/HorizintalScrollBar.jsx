import React, { useState } from "react";
import "./style.css";
import RowItem from "../RowItem/RowItem";
import { Skeleton, Stack } from "@mui/material";
import {useSelector} from 'react-redux'
const HorizintalScrollBar = () => {

  const isWaiting = useSelector((state)=> state.cartegory.isWaiting)

  const categories = useSelector((state)=> state.cartegory.categories)

  const selectedCategory = useSelector((state)=> state.cartegory.selectedCategory)
  
  return (
    <div className="rowCategories">
      {isWaiting ? (
        <>
          <Skeleton variant="circular" width={85} height={85} />
          <Skeleton height={10} width="50%" style={{ marginBottom: 6 }} />
        </>
      ) : (
        categories &&
        categories.map((element) => {
          return (
            <RowItem
              key={element.id}
              name={element.name}
              imgSrc={element.imagePath}
              category={element}
              isActive={selectedCategory['id'] === element.id}
              // is active is triggerd as true or false based on state current hold
              //   isActive = {whichIsActiveCategory === element.id}
              //   clickHandler={()=> changeCategoryHandler(element.id , {itemId:element.itemId , categoryName:element.name})}
            />
          );
        })
      )}
    </div>
  );
};

export default HorizintalScrollBar;
