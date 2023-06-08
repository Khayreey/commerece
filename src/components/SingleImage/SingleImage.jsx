import React , {useState} from "react";
import "./style.css";
import AltImage from "../../assets/alt.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const SingleImage = () => {
  const [fullDisplay, setFullDisplay] = useState(false);
  
  return (
    <>
      {fullDisplay ? (
        <div className="full">
          <ArrowBackIcon onClick={() => setFullDisplay(false)} />
          <img src={AltImage} alt="" className="postImg  p-4 rounded " />
        </div>
      ) : null }
     <img src={AltImage} alt="" className="postImg bg-white m-2 p-4 rounded " 
     onClick={() => setFullDisplay(true)}
     />
    </>
  );
};

export default SingleImage;
