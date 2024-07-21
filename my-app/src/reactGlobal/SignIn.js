import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';


const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { signIn } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(formData.email, formData.password);
      alert('Signed in successfully!');
    } catch (error) {
      alert('Error signing in. Please try again.');
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
