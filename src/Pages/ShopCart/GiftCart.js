import React from 'react'
import stick  from '../../Asset/Images/stick.png'
import './ShopCart.css'
const GiftCart = () => {
  return (
    <>
  
                        <td className>
                          <div className="d-flex  ">
                          <div className="shop__item">
                          <img src={stick} ></img>
                            
                          </div>
                         <div className="d-flex flex-column">
                         <p1 className="mx-2 " style={{fontWeight:'bold'}}>Glory Selfie Stick</p1>
                          <><p className="gift__tagline mx-2 ">Gift</p></>
                          <p1 className="mx-2 " >{"that a gift"}</p1>
                          
                         </div>
                          </div>
                        </td>
                        <td>${500}</td>
                        <td>
                          <div className="d-flex align-items-center ">
                           
                            <td style={{fontWeight:'bold',margin:'2px'}}>1</td>
                            
                          </div>
                        </td>
                        <td style={{ fontWeight: "500" }}>
                        
                        </td>
                   
    </>
     
  )
}

{/* <div className='d-flex justify-content-between align-items-center '>
        <div className='d-flex  '>
      
         
        
           <img src={stick} className="gift__img"></img>
           <div className='d-flex flex-column'>
           <div className='gift__tagline'>Gift</div>
           <span className='m-2 mb-0' style={{fontWeight:'600'}}>Glory Selfie Stick</span>
           <p className='m-2 mt-0' >Silver moon</p>
           </div>
        
        </div>
        <p>$5000</p>
        <p>1</p>
        </div> */}

export default GiftCart