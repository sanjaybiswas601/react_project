import React from 'react'

const Navbar = ({filterItem,flowerList}) => {
  return (
    <>
      <nav className='navbar'>
            <div className='btn-group'>
            {
                flowerList.map((curElem, index)=>{
                    return(<button className='btn-group__item' onClick={() =>filterItem(curElem)}>{curElem}</button>)
                })
            }
                
                
            </div>
        </nav>
    </>
  )
}

export default Navbar
