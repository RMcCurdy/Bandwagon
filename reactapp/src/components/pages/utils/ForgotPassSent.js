import React from 'react'

const ForgotPassSent = () => {
  return (
<div className="my-flex-container">
      <div>
        <h1>Reset Password</h1>
        {/* Change first name */}
        
        <div className="main">
          <p className="sign">Reset your password</p>
          <div style={{fontSize:'4rem', paddingBottom:'5%'}}>
          😀
          </div>
          <div className='forgot-pass-sent-profile-label'>
            Your password reset has been sent.
          </div>
          <div className='forgot-pass-sent-profile-label'>
            Please check your email.
          </div>
        </div>

      </div>
    </div>
  )
}

export default ForgotPassSent
