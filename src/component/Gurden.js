import React, { useState } from 'react'
import "./style.css"
import FlowerCard from './FlowerCard'
import Flower from './FlowerApi'
import Navbar from './Navbar'

const uniqueList = [
    ...new Set(Flower.map((curElem)=>{
    return curElem.category;
})),
"All",
]

const Gurden = () => {
    const [flowerData,setFlowerData]= useState(Flower);
    const [flowerList,setFlowerList]= useState(uniqueList);
    const filterItem = (category)=>{ 
        if(category === "All"){
            setFlowerData(Flower);
            return;
        }
        const updatedList = Flower.filter((curElem)=>{
            return curElem.category === category
        });
        setFlowerData(updatedList);
    };
    
    

  return (
    <>
        <Navbar filterItem={filterItem} flowerList={flowerList}/>
        <FlowerCard flowerData={flowerData}/>
    </>
  )
}

export default Gurden

