import React, { useState } from 'react';
import styles from './styles.scss'; 

const ContactHero = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        interests: [],
        primaryGoal: '',
        switchReason: '',
        comments: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prevState => ({
                ...prevState,
                interests: checked 
                    ? [...prevState.interests, name]
                    : prevState.interests.filter(interest => interest !== name)
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.company.trim()) newErrors.company = "Company is required";
        if (formData.interests.length === 0) newErrors.interests = "Please select at least one interest";
        if (!formData.primaryGoal) newErrors.primaryGoal = "Please select a primary financial goal";
        if (!formData.switchReason) newErrors.switchReason = "Please select a reason";
        if (!formData.comments.trim()) newErrors.comments = "Please provide some comments";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
            // Here you would typically send the data to your server
        } else {
            console.log("Form has errors, please correct them");
        }
    };

    return (
      <div className="contact-hero">
        <section className="contact">
          <aside className="infoSection">
            <img src="bob.svg" alt="Informative" className="info-image" />
            <div className="infoText">
              <h3>General Inquiries</h3>
              <p>For all other matters, please send an email:</p>
              <a href="mailto:info@marketinfoz.com">info@MarketInfoZ.com</a>
            </div>
          </aside>
  
          <section className="formArea">
            <h2>Contact Us</h2>
            <p>We equip leaders with the information they need to innovate, transform, and profit.</p>
            <form id="contactForm" onSubmit={handleSubmit} noValidate>
              <div className="nameSection">
                <input type="text" className="textInput" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} />
                {errors.fullName && <span className="error">{errors.fullName}</span>}
                <input type="email" className="textInput" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                {errors.email && <span className="error">{errors.email}</span>}
                <input type="text" className="textInput" name="company" placeholder="Company" value={formData.company} onChange={handleInputChange} />
                {errors.company && <span className="error">{errors.company}</span>}
              </div>
  
              <div className="checkbox">
                <h4>What should we talk about?</h4>
                <label><input type="checkbox" name="investing" checked={formData.interests.includes('investing')} onChange={handleInputChange} /> Investing</label>
                <label><input type="checkbox" name="startupDevelopment" checked={formData.interests.includes('startupDevelopment')} onChange={handleInputChange} /> Startup Development</label>
                <label><input type="checkbox" name="personalFinance" checked={formData.interests.includes('personalFinance')} onChange={handleInputChange} /> Personal Finance</label>
                {errors.interests && <span className="error">{errors.interests}</span>}
              </div>
  
              <div className="multipleChoice">
                <div className="radio">
                  <h4>Your primary financial goal?</h4>
                  <label><input type="radio" name="primaryGoal" value="savingForRetirement" checked={formData.primaryGoal === 'savingForRetirement'} onChange={handleInputChange} />Saving for retirement</label>
                  <label><input type="radio" name="primaryGoal" value="investingForGrowth" checked={formData.primaryGoal === 'investingForGrowth'} onChange={handleInputChange} />Investing for growth</label>
                  <label><input type="radio" name="primaryGoal" value="preservingWealth" checked={formData.primaryGoal === 'preservingWealth'} onChange={handleInputChange} />Preserving wealth</label>
                  <label><input type="radio" name="primaryGoal" value="fundingSpecificGoal" checked={formData.primaryGoal === 'fundingSpecificGoal'} onChange={handleInputChange} />Funding a specific goal</label>
                  {errors.primaryGoal && <span className="error">{errors.primaryGoal}</span>}
                </div>
  
                <div className="radio">
                  <h4>What would most likely cause you to switch financial/business advisors?</h4>
                  <label><input type="radio" name="switchReason" value="highFees" checked={formData.switchReason === 'highFees'} onChange={handleInputChange} />High fees</label>
                  <label><input type="radio" name="switchReason" value="poorPerformance" checked={formData.switchReason === 'poorPerformance'} onChange={handleInputChange} />Poor performance</label>
                  <label><input type="radio" name="switchReason" value="lackOfPersonalizedAttention" checked={formData.switchReason === 'lackOfPersonalizedAttention'} onChange={handleInputChange} />Lack of personalized attention</label>
                  <label><input type="radio" name="switchReason" value="distrustInAdvisor" checked={formData.switchReason === 'distrustInAdvisor'} onChange={handleInputChange} />Distrust in the advisor</label>
                  {errors.switchReason && <span className="error">{errors.switchReason}</span>}
                </div>
              </div>
  
              <div className="openEnd">
                <textarea name="comments" placeholder="Tell us a bit about your goals" rows="6" value={formData.comments} onChange={handleInputChange}></textarea>
                {errors.comments && <span className="error">{errors.comments}</span>}
              </div>
  
              <div className="buttonArea">
                <button type="submit" className="button">Submit</button>
              </div>
            </form>
          </section>
        </section>
      </div>
    );
};

export default ContactHero;