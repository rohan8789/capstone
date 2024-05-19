import React from 'react'
import Login from './Login'
import Registration from './Registration'

const Auth = () => {
  return (
    <>
        <div className='container-x border border-black ms-4 me-4 row border d-flex justify-content-center'>
            <div className='col  border border-black'>
                <Login/>
            </div>
            <div className='col border border-black '>
                <Registration/>
            </div>
        </div>
    </>
  )
}

export default Auth