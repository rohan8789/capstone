import React from 'react'
import Login from './Login'
import Registration from './Registration'

const Auth = () => {
  return (
    <>
        <div className='container-x  ms-4 me-4 row border d-flex justify-content-center'>
            <div className='col  border'>
                <Login/>
            </div>
            <div className='col border '>
                <Registration/>
            </div>
        </div>
    </>
  )
}

export default Auth
