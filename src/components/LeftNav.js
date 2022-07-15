import React,{useState} from 'react'
import "./Dashboard.css"
import ContentArea from './ContentArea'
import LogoImg from "../assets/logo-icon.svg"
import DashboardActiveIcon  from "../assets/dashboard-active.svg"
import GraphIcon from "../assets/graph.svg"
import AppointmentIcon from "../assets/appointments.svg"
import EnquiresIcon  from "../assets/enquiries.svg"
import MessagesIcon from "../assets/messages.svg"
import UsersIcon from "../assets/users.svg"
import SettingsIcon from "../assets/settings.svg"
import logoutIcon from "../assets/logout.svg"


function LeftNav() {
  const [toggle,setToggle] = useState("")
  const [dashboard,setDashboard] = useState("activenav")
  const [graph,setGraph] = useState("")
  const [appnt,setAppnt] = useState("")
  const [enquiry,setEnquiry] =useState("")
  const [message,setMessage] =useState("")
  const [user,setUser] =useState("")
  const [setting,setSetting] =useState("")


   const toggleClass = (prev)=>{
    setToggle((prev) => {
      if (prev == "") {
          return "activeicon"
      }
      else {
          return "";
      }
  })

  }
  

  const dashBoardContent =(pre)=>{
    setDashboard((pre) => {
      if (pre == "") {
          return "activenav"
      }
      else {
          return "";
      }
  })
  setGraph("")
  setAppnt("")
  setEnquiry("")
  setMessage("")
  setUser("")
  setSetting("")
  }


  const graphContent =(pre)=>{
    setGraph((pre) => {
      if (pre == "") {
          return "activenav"
      }
      else {
          return "";
      }
  })
  setDashboard("")
  setAppnt("")
  setEnquiry("")
  setMessage("")
  setUser("")
  setSetting("")
  }

  const appointmentContent =(pre)=>{
    setAppnt((pre) => {
      if (pre == "") {
          return "activenav"
      }
      else {
          return "";
      }
  })
  setDashboard("")
  setGraph("")
  setEnquiry("")
  setMessage("")
  setUser("")
  setSetting("")
  }

  const enquiryContent =(pre)=>{
    setEnquiry((pre) => {
      if (pre == "") {
          return "activenav"
      }
      else {
          return "";
      }
  })
  setDashboard("")
  setGraph("")
  setAppnt("")
  setMessage("")
  setUser("")
  setSetting("")
  }


  const messageContent =(pre)=>{
    setMessage((pre) => {
      if (pre == "") {
          return "activenav"
      }
      else {
          return "";
      }
  })
  setDashboard("")
  setGraph("")
  setAppnt("")
  setEnquiry("")
  setUser("")
  setSetting("")
  }

  const userContent =(pre)=>{
    setUser((pre) => {
      if (pre == "") {
          return "activenav"
      }
      else {
          return "";
      }
  })
  setDashboard("")
  setGraph("")
  setAppnt("")
  setEnquiry("")
  setMessage("")
  setSetting("")
  }

  const settingContent =(pre)=>{
    setSetting((pre) => {
      if (pre == "") {
          return "activenav"
      }
      else {
          return "";
      }
  })
  setDashboard("")
  setGraph("")
  setAppnt("")
  setEnquiry("")
  setMessage("")
  setUser("")
  }
  return (
    <div class="sidebar-left d-flex text-center py-20 flex-direction-column justify-content-between position-sticky top-0">
      <span className='toggle-icon d-none' onClick={toggleClass}></span>
    <a class="navbar-brand"><img src={LogoImg} alt="Logo" /></a>

     <nav class={`d-flex flex-direction-column ${toggle}`}>
        <a href="#first" className={` ${dashboard} position-relative`}  onClick={dashBoardContent}><img src={DashboardActiveIcon} alt="" className='icon '/></a>
        <a href="#second" className={` ${graph} position-relative`} onClick={graphContent}><img src={GraphIcon} alt="" className='icon'/></a>
        <a href="#third" className={`${appnt} position-relative`}   onClick={appointmentContent}><img src={AppointmentIcon} alt="" className='icon' /></a>
        <a href="#four"  className={`${enquiry} position-relative`}   onClick={enquiryContent}><img src={EnquiresIcon} alt="" className='icon'/></a>
        <a href="#five"  className={`${message} position-relative`}   onClick={messageContent}><img src={MessagesIcon} alt="" className='icon'/></a>
        <a href="#six"  className={`${user} position-relative`}   onClick={userContent}><img src={UsersIcon} alt="" className='icon'/></a>
        <a href="#seven"  className={`${setting} position-relative`}   onClick={settingContent}><img src={SettingsIcon} alt="" className='icon'/></a>
    </nav>

    <a class="logout"><img src={logoutIcon} alt="Logout" /></a>
    
</div>

  )
}

export default LeftNav