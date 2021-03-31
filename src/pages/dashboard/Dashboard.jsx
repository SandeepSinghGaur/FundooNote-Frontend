import React from 'react'
import './Dashboard.scss'
import Login from '../../components/login/Login'
import Registration from '../../components/registration/Registration'
import ForgetPassword from '../../components/forgetPassword/ForgetPassword'

const Dashboard = () => {
    return (
        <div className="mainClass">
            <Login />
            <Registration />
            <ForgetPassword />
        </div>

    )
}
export default Dashboard;