import React, { useState } from 'react'
import './slider.css'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'
import { useProduct } from '../../context/ProductContext';


const Sliders = () => {
    const [slider, setSlider] = useState(0)
    const {state:{menFashion} } = useProduct();

    return (
        <>
            <section style={{ width: "100%",marginBottom:"100px" }}>
                <div className="img-container">
                    <div className="img-list">
                        {
                            slider <= 0 ? <div className="img-item">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/Phase3/J23_P3B_PC_NTA_Hero_2x_V1._CB573767479_.jpg" alt="" />
                            </div> : ""
                        }
                        {
                            slider === 1 ? <div className="img-item">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/Jupiter23/GW/Phase3/B/_D98486283-_IN_WLA_Jupiter23_GW_Heroes_PC_Hero_3000x1200._CB573763644_.jpg" alt="" />
                            </div> : ""
                        }
                        {
                            slider >= 2 ? <div className="img-item">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/CEPC_soundbars_speakers/Phase_3_ELP_Fold/Phase_3_Tallhero_3000x12001._CB573744264_.jpg" alt="" />
                            </div> : ""
                        }
                    </div>
                    <div className="image-btn-container">
                        <button className="btn-slider" onClick={(pre) => setSlider(slider - 1)}> <FaAngleLeft /></button>
                        <button className="btn-slider" onClick={(pre) => setSlider(slider + 1)}> <FaAngleRight /></button>
                    </div>
                </div>
            </section>
            <div className="container-fluid card-con">
                <div className="row">
                    {/* Men's fasion column */}
                    <div className="col-sm-3">
                        <div className="card card-box">

                            <div className="card-box-items">
                                <div>
                                    <h4 className='box-head'>
                                        Upto 50% off | Men's Fashion</h4>
                                </div>
                                <div className='row second-row'>
                                    
                                    {
                                        menFashion.filter((ele,index)=> index<4).map(({images,_id,product_title})=>{
                                            return (
                                                
                                                <div className="col-5  " key={_id} >
                                                      <NavLink className='text-dark' to={`/sin-product/${_id}`}>
                                        {
                                            images.filter((ele,index)=>index==0).map(({photo,id})=>{
                                                return <img key={_id} src={`http://localhost:8000/images/${photo}`} alt="wekj" />
                                            })
                                        }
                                        <p className='mx-3'>{product_title.substring(0,20)}</p>
                                        </NavLink>
                                    </div>
                                                
                                        )
                                        })
                                    }

                                   
                                </div>
                               
                                <NavLink>See all offers</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card card-box">

                            <div className="card-box-items">
                                <div>
                                    <h4 className='box-head'>
                                        Up to 70% off | Deals on Amazon Brands & more</h4>
                                </div>
                                <div className="row second-row">
                                    <div className="col-5  ">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/HomeD_light_QuadImageCard_1x_186x116._SY116_CB575416348_.jpg" alt="" />
                                        <p className='mx-3'>Starting ₹169</p>
                                    </div>

                                    <div className="col-5">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Gateway/QC_PC_186x116_2_1._SY116_CB575535938_.jpg" alt="" />
                                        <p className='mx-3'>Starting ₹149</p>

                                    </div>
                                </div>
                                <div className="row second-row">
                                    <div className="col-5 ">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Gateway/HomeDecor_DryFruit_QuadImageCard_1x_186X116._SY116_CB575267810_.jpg" alt="" />
                                        <p className='mx-3'>Starting ₹99</p>
                                    </div>

                                    <div className="col-5">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/Jupiter23/Phase3/Desktop_QC/PB/2_1x._SY116_CB575198763_.png" alt="" />
                                        <p className='mx-3'>
                                            Min. 60% off | Festive collectio</p>

                                    </div>
                                </div>
                                <NavLink>See all offers</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card card-box">

                            <div className="card-box-items">
                                <div>
                                    <h4 className='box-head'>
                                        Deals on smartphones that suits your budget</h4>
                                </div>
                                <div className="row second-row">
                                    <div className="col-5  ">
                                        <img className='IMAGESLAST' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/GW/HERO/P3/B/Headphone_v2_Desktop_Cat_card_1x._SY304_CB575149386_.jpg" alt="" />
                                    </div>

                                </div>

                                <NavLink className=''>See all offers</NavLink>

                            </div>

                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card login-card">

                            <div className="card-box-items">
                            <h3>Sign in for your best experience</h3>
                            <button className=' w-100' style={{backgroundColor:"#FFD814",border:"none",padding:"3px",borderRadius:"7px"}}>Sign in securely</button>
                            </div>

                          

                        </div>
                        <div className='mt-4'>
                                <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/c0a3fdfc-8a4f-4b20-92ef-896499c05843.gif" alt="" style={{border:"none"}}/>
                            </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sliders