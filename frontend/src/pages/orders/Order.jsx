import React from 'react'

const Order = () => {
  return (
    <>
    <div className="container">
        <div className="order">
            <div className="card ">
               <div className="a-box justify-content-center d-flex justify-content-between "  >
                <div className='d-flex justify-content-start m-1'>
                    <div className='px-1' >
                    <pre style={{lineHeight:"16px"}}>ORDERS PLACED <br />
                         9 November 2023</pre>
                </div>
                <div className='px-5'>
                <pre style={{lineHeight:"16px"}}>PRICE <br />
                         100</pre>
                </div>
                <div className='px-4'>
                <pre style={{lineHeight:"16px"}}>SHIP TO <br />
                         kULDEEP GIRI</pre>
                </div>
                </div>
                <div className='mx-2'>
                    View Order Details
                </div>
               
               </div>
             <div className="order-product">
                
             </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Order