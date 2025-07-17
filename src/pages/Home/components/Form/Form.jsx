// import React, { useState, useEffect } from 'react';
// import Login from "../Login/Login"
// import Signup from "../Signup/Signup"

// const Form = () => {
//   const [showLogin, setShowLogin] = useState(true);
//   const [message, setMessage] = useState('Login Form is displayed');

//   useEffect(() => {
//     if (showLogin) {
//       setMessage('Login Form is displayed');
//     } else {
//       setMessage('Signup Form is displayed');
//     }
//   }, [showLogin]);  // Runs when showLogin changes

//   return (
//     <div className="container">
//       <h1>{showLogin ? 'Login' : 'Signup'}</h1>

//       <div className="button-group">
//         <button onClick={() => setShowLogin(true)}>Login</button>
//         <button onClick={() => setShowLogin(false)}>Signup</button>
//       </div>

//       <p style={{ color: 'red' }} id='pStyle'>{showLogin ? 'Please login to continue' : 'Please signup to create account'}</p>


//       {showLogin ? <Login /> : <Signup />}

//        <p className="status-message">{message}</p> 
//     </div>
//   );
// };

// export default Form;




import React, { useState, useEffect } from 'react';
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const Form = ({ onClose }) => {
  const [showLogin, setShowLogin] = useState(true);
  const [message, setMessage] = useState('Login Form is displayed');

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setMessage(showLogin ? 'Login Form is displayed' : 'Signup Form is displayed');
  }, [showLogin]);

  return (
    <div className="container" style={{ position: 'relative' }}>
      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          background: 'transparent',
          border: 'none',
          fontSize: '20px',
          cursor: 'pointer'
        }}
      >
        ✖
      </button>

      <h1>{showLogin ? 'Login' : 'Signup'}</h1>

      <div className="button-group">
        <button onClick={() => setShowLogin(true)}>Login</button>
        <button onClick={() => setShowLogin(false)}>Signup</button>
      </div>

      <p style={{ color: 'red' }} id='pStyle'>

        {showLogin ? 'Please login to continue' : 'Please signup to create account'}

      </p>

      {isLoggedIn ? (

        <h2>Welcome! You are logged in.</h2>
      ) : (

        <>

          {showLogin ? <Login onLoginSuccess={() => setIsLoggedIn(true)} /> : <Signup />}

        </>
      
      )}


      <p className="status-message">{message}</p>
    </div>
  );
};

export default Form;
