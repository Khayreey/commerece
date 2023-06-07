import {categoyAcctions} from './categorySlice'

export const getCategoriesFromDB = ()=>{
    return async(dispatch)=>{
        const getData = async ()=>{
              const data = await fetch('https://takeme-all.com/app/endpoints/categories/list?locale=ar')
              if(data.ok){
                const response = await data.json()
                return response.output
              }  
              else {
                const error = await data.response
                throw new Error(error)
              }


        }    

        try{
            const categories = await getData()
            dispatch(categoyAcctions.setCategories({categories :categories , selectedCategory:categories[0] }))
        }
        catch(err){
            console.log(err)
        }
    }
}