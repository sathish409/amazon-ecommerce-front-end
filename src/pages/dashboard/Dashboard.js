import React from 'react'
import { UserLayout } from '../../components/layouts/UserLayout'
import { LineGraph } from '../../components/charts/LineGraph.js'

const Dashboard = () => {
  return (
<UserLayout title='Dashboard'>
    <div className="dashboard" >
<LineGraph/>
    </div>
    </UserLayout>
   
  )
}

export default Dashboard