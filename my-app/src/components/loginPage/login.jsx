import React, { useState } from 'react';
import axios from 'axios';
import './styles.scss';

const LoginComponent = () => {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = (isSignUp) => {
    let newErrors = {};

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    setIsActive(true);
  };

  const handleLogin = () => {
    setIsActive(false);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (validateForm(true)) {
      try {
        const response = await axios.post('http://localhost:5000/api/signup', formData);
        setMessage(response.data.message);
      } catch (error) {
        setMessage(error.response.data.error);
      }
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (validateForm(false)) {
      try {
        const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: formData.email, password: formData.password }),
        });
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem('token', data.token);
          setLoggedInUser(data.userName);
          setMessage(`Welcome, ${data.userName}!`);
        } else {
          throw new Error(data.error);
        }
      } catch (error) {
        setMessage(error.message);
      }
    }
  };

  if (loggedInUser) {
    return (
      <div className="logged-in">
        <h1>Welcome, {loggedInUser}!</h1>
        <button onClick={() => {
          localStorage.removeItem('token');
          setLoggedInUser(null);
        }}>Logout</button>
      </div>
    );
  }

  return (
    <div className={`login-container ${isActive ? 'active' : ''}`}>
      <div className="form-container sign-up">
        <form onSubmit={handleSignUp} noValidate>
          <h1>Create Account</h1>
          <span>or use your email for registration</span>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
          {errors.name && <span className="error">{errors.name}</span>}
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
          {errors.email && <span className="error">{errors.email}</span>}
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
          {errors.password && <span className="error">{errors.password}</span>}
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleSignIn} noValidate>
          <h1>Sign In</h1>
          <span>or use your email password</span>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
          {errors.email && <span className="error">{errors.email}</span>}
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
          {errors.password && <span className="error">{errors.password}</span>}
          <a href="#">Forget Your Password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" onClick={handleLogin}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="hidden" onClick={handleRegister}>Sign Up</button>
          </div>
        </div>
      </div>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default LoginComponent;