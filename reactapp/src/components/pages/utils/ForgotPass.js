import { useHistory } from 'react-router';

function ForgotPass() {

  const history = useHistory();

  const sendToForgotPassSentHandler = () => {
    history.push('/forgotsent');
  }

  return (
    <div className="my-flex-container">
      <div>
        <h1>Reset Password</h1>
        {/* Change first name */}
        
        <div className="main">
          <p className="sign">Reset your password</p>

          <form className="form1" />
          <div>
          <div className='forgot-pass-profile-label'>Please enter your email address to reset your password</div>
          
          <input id="email" className="forgot-pass-input" type="text" placeholder="Email" />
          </div>
          <div>
          <button onClick={sendToForgotPassSentHandler} className="submit">
            Submit
          </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default ForgotPass
