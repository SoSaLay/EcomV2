import React, { useState } from 'react';
import axios from 'axios';


const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(true);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isRegistering) {
                await axios.post('http://localhost:5000/register', { email, password });
                setMessage('User registered successfully. You can now log in.');
            } else {
                const response = await axios.post('http://localhost:5000/login', { email, password });
                setMessage('Login successful');
                localStorage.setItem('token', response.data.token);
            }
        } catch (error) {
            setMessage(error.response?.data || 'An error occurred');
        }
    };

    return (
        <div className="auth-container">
            <h2>{isRegistering ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
            </form>
            <p>{message}</p>
            <button onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? 'Already have an account? Login' : 'Don’t have an account? Register'}
            </button>
        </div>
    );
};

export default Auth;
