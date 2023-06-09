import React  from "react";

import SingleImage from "../components/SingleImage/SingleImage";
import { useTranslation , withTranslation} from "react-i18next";
let arr = [1,2,3,4,5]
const Localize = () => {
  const {t , i18n } = useTranslation()
  const changeHandler = ()=>{
    const changeLan =  i18n.language === 'ar' ? 'en' : 'ar'
    i18n.changeLanguage(changeLan)
  }
  return (
    <>
   <div className='d-flex justify-content-center p-2 w-100'>

  {arr.map((e , index)=>{
    return (
      <SingleImage key={index}/>
    )
  })}
   
   </div>
   <div className="w100 d-flex justify-content-center">
   <button className='btn btn-primary m-4' onClick={changeHandler}>{t('photoAction')}</button>
   </div>
  
   </> 
  );
};

export default Localize ;
