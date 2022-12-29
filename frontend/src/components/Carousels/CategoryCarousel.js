import React, {useEffect, useState} from "react";
import carouselCard from "./CarouselCard"

const CatCarousel = () => {
  const data = ['Convertible', 'Exotic', 'Executive', 'Family Friendly', 'Fast', 'Hybrid/ Electric', 'Offroad']
  const [currIndex, setCurrIndex] = useState(0)
  const scrollFuncUp = () => {
    if (currIndex === data.length-1) {
      return setCurrIndex(0)
    }
    return setCurrIndex(currIndex + 1)
  }
  const scrollFuncDown = () => {
    if (currIndex === 0) {
      return setCurrIndex(data.length - 1)
    }
    return setCurrIndex(currIndex - 1)
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {scrollFunc()},2000)

  //   return () => clearInterval(interval)
  // })

  return (
    <div className="categories-section">
    {data.map((item, index) => (
      <div className="categorycard" key={index} value={item}>
        <carouselCard item={item} />
      </div>
    ))}
   </div>

  )

}

export default CatCarousel
