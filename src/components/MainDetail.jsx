import { useEffect, useState } from "react";
import { getCriptoUpdateUrl } from "../constants";

// This function give us the current time in seconds
function getCurrentTime() {
  return Math.round(Date.now() / 1000);
}
 

/*
  Use this function with the updated_at timestamp you get from each coin item in the API response
 */
function convertToSeconds(dateValue) {
  // This guard is needed due to the API discrepancies in handling date
  return typeof dateValue === "string"
    ? Math.round(Date.parse(dateValue) / 1000)
    : dateValue;
}

 function MainDetail({cryptoList, selectedCripto}) {
  const [currentTime, setCurrentTime] = useState("")

 
  const cryptoToRender = 
    cryptoList.find((item) => item.id === selectedCripto)

  const lastUpdated =   currentTime - convertToSeconds(cryptoToRender.last_updated)


  useEffect(() => {
    const stopInterval  = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () =>  clearInterval(stopInterval);
  }, [])
 
  
  return (
    <>
      <section className="main-detail__central">
        <div className="main-detail__update">
          {/* This part is for the challenge */}
          
        </div>
        <div className="main-detail__name">
        <h2>{cryptoToRender.id}</h2>
        <p><span class="small">a.k.a </span>{cryptoToRender.symbol}</p>
        </div>
        <div className="main-detail__price">
          <p>{`£${cryptoToRender.current_price}`}</p>
    <p>{`Last Updated ${lastUpdated} seconds`}</p></div>
      </section>
    </>
  );
}
export default MainDetail
