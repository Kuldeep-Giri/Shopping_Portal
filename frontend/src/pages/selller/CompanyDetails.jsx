import React from 'react'
import { useSeller } from '../../context/sellerContext'
import SidePanel from './sidePanel'
import { NavLink } from 'react-router-dom'

const CompanyDetails = () => {
  const [seller] = useSeller()
  console.log(seller)
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            
            <SidePanel/>
          </div>
          <div className="col-sm-9" >
            <div className="mt-5">
              <div className="row AddCompanyform">
          {
            seller.map((ele)=>{
        return(
          <div className="col-sm-6 " key={ele._id}>
            <div class="box-part text-center ">
                        
                        <i class="fa fa-instagram fa-3x" aria-hidden="true"></i>
                        
						<div class="title">
							<h3>{ele.company_name}</h3>
						</div>
            <div class="text">
							<NavLink className="text-primary underline" to=''>{ele.url}</NavLink>
						</div>     
						<div class="text">
							<span>{ele.desc}...</span>
						</div>
                        
						<NavLink className="text-primary underline" >Learn More</NavLink>
                        
					 </div>
           
           </div> 
        )
            })
          }
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompanyDetails