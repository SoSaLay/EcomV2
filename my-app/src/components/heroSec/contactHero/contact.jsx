import React from 'react';
import styles from './styles.scss'; 

const ContactHero = () => {
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
  
           
            <div className='social-icons-wrapper'> 
              <img src="instagram-svgrepo-com (1).svg" alt="Instagram Icon" className="social-icons" />
              <img src="facebook-svgrepo-com.svg" alt="Facebook Icon" className="social-icons" />
              <img src="linkedin-svgrepo-com (2).svg" alt="LinkedIn Icon" className="social-icons" />
    
            </div>
          </aside>
  
          <section className="formArea">
            <h2>Contact Us</h2>
            <p>We equip leaders with the information they need to innovate, transform, and profit.</p>
            <form id="contactForm">
              <div className="nameSection">
                <input type="text" className="textInput" name="first-name" placeholder="Full Name" required />
                <input type="email" className="textInput" name="email" placeholder="Email" required />
                <input type="text" className="textInput" name="company" placeholder="Company" required />
              </div>
  
              <div className="checkbox">
                <h4>What should we talk about?</h4>
                <label><input type="checkbox" name="investing" /> Investing</label>
                <label><input type="checkbox" name="startupDevelopment" /> Startup Development</label>
                <label><input type="checkbox" name="personalFinance" /> Personal Finance</label>
              </div>
  
              <div className="multipleChoice">
                <div className="radio">
                  <h4>Your primary financial goal?</h4>
                  <label><input type="radio" name="goals" value="Ques1" required />Saving for retirement</label>
                  <label><input type="radio" name="goals" value="Ques2" required />Investing for growth</label>
                  <label><input type="radio" name="goals" value="Ques3" required />Preserving wealth</label>
                  <label><input type="radio" name="goals" value="Ques4" required />Funding a specific goal</label>
                </div>
  
                <div className="radio">
                  <h4>What would most likely cause you to switch financial/business advisors?</h4>
                  <label><input type="radio" name="genQuestions" value="Ques1" required />High fees</label>
                  <label><input type="radio" name="genQuestions" value="Ques2" required />Poor performance</label>
                  <label><input type="radio" name="genQuestions" value="Ques3" required />Lack of personalized attention</label>
                  <label><input type="radio" name="genQuestions" value="Ques4" required />Distrust in the advisor</label>
                </div>
              </div>
  
              <div className="openEnd">
                <textarea name="comments" placeholder="Tell us a bit about your goals" rows="6" required></textarea>
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