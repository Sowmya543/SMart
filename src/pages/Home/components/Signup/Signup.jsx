import { useState } from 'react'
import "../../../../App.css"

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleRegister = () => {

        if (!email || !password) {
            alert('Please fill all fields');
            return;
        }
        const userData = {
            email,
            password
        };

        localStorage.setItem('user', JSON.stringify(userData));
        alert('Registration successful!');
        setEmail('');
        setPassword('');
    };
    return (
        <div> <form className="form-box">
            <div className="form-group">
                <label>Username:</label>
                <input type="text" placeholder="Enter username" />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" onClick={handleRegister}>Signup</button>
        </form></div>
    )
}

export default Signup
