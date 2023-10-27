import React, { useEffect, useState } from "react";



function ImageScroll({images},hei,wid) {
    const [currInd, setCurrInd] = useState(0);

    const changeImg = ()=>{
        setCurrInd(prev => (prev+1) % images.length)
    }
  
    useEffect(() => {
      const interval = setInterval(
        changeImg
      , 2000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return (
      <div className="w-full ">
            <img src={images[currInd]}  id="imag" alt="images" className="h-[100vh]" />
        
      </div>
    );
  }
  
  export default ImageScroll;