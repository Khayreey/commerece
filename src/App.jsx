import { useDispatch , useSelector} from "react-redux";
import { useEffect , useState } from "react";
import { getCategoriesFromDB } from "./store/category-actions";
import Home from "./Pages/Home";
import { getProductsFromDB } from "./store/products-actions";
import Localize from "./Pages/Localize";

function App() {
  const [whichTask , setWichTask] = useState(false)
  const selectedCategory = useSelector((state)=> state.cartegory.selectedCategory)
  const dispatch = useDispatch()
  

  useEffect(()=>{
    dispatch(getCategoriesFromDB())
  },[])
  useEffect(()=>{
    dispatch(getProductsFromDB(selectedCategory['id']))
  },[selectedCategory])
  return (
    <>
    { whichTask ? 
       <Home />
      :
      <Localize />
      }
      <div class="d-flex justify-content-center">
  <button class="btn btn-success w-50" onClick={()=>setWichTask((e)=>!e)}>Go</button>
</div>
    
     </>
  );
}

export default App;
