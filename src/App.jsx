import { useDispatch , useSelector} from "react-redux";
import { useEffect } from "react";
import { getCategoriesFromDB } from "./store/category-actions";
import Home from "./Pages/Home";
import { getProductsFromDB } from "./store/products-actions";
function App() {
  const selectedCategory = useSelector((state)=> state.cartegory.selectedCategory)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getCategoriesFromDB())
  },[])
  useEffect(()=>{
    dispatch(getProductsFromDB(selectedCategory['id']))
  },[selectedCategory])
  return (
     <Home />
  );
}

export default App;
