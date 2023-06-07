import { productActions } from "./productsSlice"

export const getProductsFromDB = (id = 1)=>{
    return async(dispatch)=>{
        const getData = async ()=>{
              const data = await
              fetch(`https://takeme-all.com/app/endpoints/products-types?locale=ar&categoryId=${id}`)
              if(data.ok){
                const response = await data.json()
                
                return response
              }  
              else {
                const error = await data.response
                throw new Error(error)
              }

        }    

        try{
            const products = await getData()
            dispatch(productActions.setProducts(products))
        }
        catch(err){
            console.log(err)
        }
    }
}