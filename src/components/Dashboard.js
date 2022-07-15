import React from 'react'
import ContentArea from './ContentArea'
import LeftNav from './LeftNav'
import RightContent from './RightContent'

function Dashboard() {
  return (
    <div className="container-fluid d-flex flex-wrap">   
<LeftNav />
<ContentArea />
<RightContent />
        </div>

   )
}

export default Dashboard