import {useState} from 'react'
import "../../../../App.css"

const Login = ({onLoginSuccess}) => {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert('Login successful!');
      onLoginSuccess()
    } else {
      alert('Invalid credentials');
    }
  };




    return (
        <div>
            <form className="form-box">
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" placeholder="Enter email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="Enter password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login
