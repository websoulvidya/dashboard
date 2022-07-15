import React,{useState} from 'react'
import { Routes,Route,NavLink } from 'react-router-dom'
import Countup from 'react-countup';
import IncreaseIcon from "../assets/increase.svg"
import DecreaseIcon from  "../assets/decrease.svg"
import Bookings from './Bookings'
import Enquires from './Enquires'
import Services from './Services'

function ContentArea(props) {
    console.log(props)
const [active,setActive] = useState("active")
const [active2,setActive2] = useState("")
const [active3,setActive3] = useState("")
const changeStyle = (prev)=>{
  setActive((prevClass) => {
    if (prevClass == "") {
        return "active"
    }
    else {
        return "";
    }
})
setActive2("")
setActive3("")
}

const changeStyle2 = (prev)=>{
  setActive2((prevClass) => {
    if (prevClass == "") {
        return "active"
    }
    else {
        return "";
    }
})
setActive("")
setActive3("")
}

const changeStyle3 = (prev)=>{
  setActive3((prevClass) => {
    if (prevClass == "") {
        return "active"
    }
    else {
        return "";
    }
})
setActive("")
setActive2("")
}
 return (

    <div className="middle-content">
    <div className="row d-flex welcome">
        <div className="w-70 top-content">
            <h1>
                Dashboard
                <small className="fw-regular d-block mt-10">Welcome back!</small>
            </h1>
        </div>
        <div className="w-30 text-right">
           <button className="border-0 fw-bold">Customise Blocks</button>
        </div>
    </div>

    <div className="row quick-stat d-flex justify-content-between flex-wrap mx-invert">
        <h6 className="fw-bold w-100 mb-0 px-15">Quick Start</h6>
        <div className="w-25 card-frame px-15">
            <div className="card position-relative d-flex flex-direction-column">
                <div className="card-body d-flex align-items-center flex-wrap">
                    <h5 className="card-title w-100">Total Bookings</h5>
                    <p className="card-text w-100"> <Countup start={1000} end ={28345} duration={5}  separator=","/></p>
                </div>
            </div>
        </div>
        <div className="w-25 card-frame px-15">
            <div className="card position-relative d-flex flex-direction-column">
                <div className="card-body d-flex align-items-center flex-wrap">
                    <h5 className="card-title w-100">Pending Approval</h5>
                    <p className="card-text w-100 red-text"><Countup start={10} end ={120} duration={5} /></p>
                </div>
            </div>
        </div>
        <div className="w-25 card-frame px-15">
            <div className="card position-relative d-flex flex-direction-column">
                <div className="card-body d-flex align-items-center flex-wrap">
                    <h5 className="card-title w-100">New Clients This month</h5>
                    <p className="card-text w-100">
                    <Countup start={10} end ={89} duration={10} />
                        <img src={IncreaseIcon} alt="Increase" className='ml-15' />
                    </p>
                </div>
            </div>
        </div>
        <div className="w-25 card-frame px-15">
            <div className="card position-relative d-flex flex-direction-column">
                <div className="card-body d-flex align-items-center flex-wrap">
                    <h5 className="card-title w-100">Returning Clients</h5>
                    <p className="card-text w-100">
                    <Countup start={10} end ={46} duration={10} />%
                        <img src={DecreaseIcon} alt="Decrease"  className='ml-15'/>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="row main-content mx-invert d-flex flex-wrap">
    <div className="w-100 d-flex px-15 position-relative mb-0 tab-menu">
       <NavLink to="/booking"><span className={`fw-bold position-relative ${active}`} onClick={changeStyle}>Bookings</span></NavLink> 
        <NavLink to="/enquires"><span className={`fw-bold position-relative ${active2}`} onClick={changeStyle2}>Enquires</span></NavLink>
        <NavLink to="/services"><span className={`fw-bold position-relative ${active3}`} onClick={changeStyle3}>My Service</span></NavLink>
    </div>
    <Routes>
    <Route exact path="/" element={<Bookings />} />
   <Route path="/booking" element={<Bookings />} />
   <Route path="/enquires" element={<Enquires />} />
   <Route path="/services" element={<Services />} />
    </Routes>
   

</div>
</div>
  )

}

export default ContentArea