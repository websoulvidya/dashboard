import React,{useState} from 'react'
import NotificationIcon from "../assets/Notifications.svg"
import UserImg from "../assets/user.svg"
import CrownImg from "../assets/crown.svg"
import ExclamationIcon from "../assets/exclamation.svg"
import EmailIcon from "../assets/email.svg"
function RightContent() {
  const [togglerght,setToggleRight] = useState("")
   const toggleRight = (prev)=>{
    setToggleRight((prev) => {
      if (prev == "") {
          return "activeicon"
      }
      else {
          return "";
      }
  })

  }

  return (
    <>   
     <span className='toggle-icon toogle-icon-right d-none' onClick={toggleRight}></span> 
    <div className={`sidebar-right py-20 px-20 ${togglerght}`}>
      <div className='row d-flex'>
        <div className='w-80 position-relative'>
          <form>
            <label className='rounded w-100 float-left d-flex align-items-center'>
              <input type="text" className='outline-none w-100' name="name" placeholder='Search  keyword' />
            </label>
            <input type="submit" value="" className='submitbtn position-absolute' />
          </form>
        </div>
        <div className='w-20 d-flex justify-content-end'>
          <div className='notification position-relative dot'>
            <img src={NotificationIcon} alt='Notification' className='position-absolute' />
          </div>
        </div>
      </div>
      {/* User Area */}
      <div className='row d-flex user-area'>
        <div className='w-60'>
          <div className='user-content'>
            <h1>Hello,</h1>
            <h2 className='fw-bold'>Jonathan!</h2>
            <p>Copy your biolink and paste it in your profileto let people find you</p>
          </div>
        </div>
        <div className='w-40'>
          <div className='user text-right'>
            <img src={UserImg} alt='USer' />
          </div>
        </div>
      </div>

      <div className='row d-flex userlink-area'>
        <div className='w-70 position-relative'>
          <form>
            <label className='rounded d-flex align-items-center px-20'>
              <input type="text" name="name" placeholder='scheddo.com/jonathan' className='outline-none w-80' />
            </label>
            <input type="submit" value="" className='submitlink position-absolute' />
          </form>
        </div>
        <div className='w-30 pl-10'>
          <button className='edit-link border-0'>
            Edit Link
          </button>
        </div>
      </div>

      <div className='row upgrade-area'>
        <div className='w-100 position-relative'>
          <div className='pattern-upgrade d-flex align-items-center px-20 py-20'>
            <div className='w-70 pattern-text'>
              <h1>Upgrade to Pro</h1>
              <p className='mt-10'>For more profile control</p>
            </div>
            <div className='w-30'>
              <div className='crown-area d-flex align-items-center justify-content-center'>
                <img src={CrownImg} alt='Crown' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row d-flex reminder-area align-items-center position-relative'>
          <h1 className='w-50 fw-bold'>Reminder</h1>
        <div className='w-50 fw-bold text-right'>
          <button className='border-0 no-bg position-relative pr-10'>View All</button>
        </div>
      </div>


      <div className='row d-block'>
        <div className='d-flex py-15 reminders'>
          <div className='w-20'>
            <img src={ExclamationIcon} alt='Exclamation' />
          </div>
          <div className='w-80'>
            <h1 className='fw-bold'>Booking Reminder</h1>
            <p className='fw-regular pt-10'>Lorem ipsum dolor sit amet consectetur </p>
          </div>
        </div>
        <div className='d-flex py-15 reminders'>
          <div className='w-20'>
            <img src={EmailIcon} alt='New Message' />
          
          </div>
          <div className='w-80'>
            <h1 className='fw-bold'>Booking Reminder</h1>
            <p className='fw-regular pt-10'>Lorem ipsum dolor sit amet consectetur </p>
          </div>
        </div>
        <div className='d-flex py-15 reminders'>
          <div className='w-20'>
            <img src={ExclamationIcon} alt='New Message' />
          </div>
          <div className='w-80'>
            <h1 className='fw-bold'>Booking Reminder</h1>
            <p className='fw-regular pt-10'>Lorem ipsum dolor sit amet consectetur </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default RightContent