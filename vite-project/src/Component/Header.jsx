import React, { useState } from 'react'
import "../Style/Header.css"

const Header = ({Product}) => {
  let Sum = 0;
  Product.forEach((NewData) => {
    Sum += NewData.Qty
  })
  console.log(Sum);
  return (
    <>
     <div className="container-fluid ">
        <div className="row bg-dark p-3">
            <div className="col-sm-12 d-flex justify-content-between">
                <div>
                    <h1 className='text-white-50'>SHOPPING</h1>
                </div>
                <div>
                    <button id='button-icon' className="btn btn-info fw-bold btn-lg mt-1">CART
                    <span id='Badge' className='badge bg-white fw-bolder text-black ms-2'>
                      {Sum}
                    </span>
                    </button>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
export default Header