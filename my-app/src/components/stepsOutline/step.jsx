import React from 'react';
import styles from './styles.scss'; 

const steps = [
  {
    image: "./number-svgrepo-com (1).svg",
    subtitle: 'Start simple, grow later.',
    title: 'Launch',
    description: 'Create wallet-based voting that acts like a multisig, so you can make decisions quickly and stay agile. Simply authorize the wallets of your members so you can vote onchain securely without a token.'
  },
  {
    image: "./number1-svgrepo-com (2).svg",
    subtitle: 'Mint a token and decentralize decisions.',
    title: 'Scale',
    description: 'Once your DAO grows, you might want to change your voting structure. Mint your ERC-20s, distribute tokens, and decentralize decision-making to your members. Hold votes and work toward your mission with your community.'
  },
  {
    image: './number2-svgrepo-com (1).svg',
    subtitle: 'Configure actions and set permissions.',
    title: 'Experiment',
    description: 'Once your DAO grows into modular guilds, you will need more sophisticated permission management. Create smart contract actions that execute automatically, so you can streamline decision processes and improve coordination.'
  }
];

const StepComponent = () => {
  return (
    <section className="step-component">
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-content">
            <img src={step.image} alt={`Step ${index + 1}`} className="step-image" />
            <div className="step-details">
              <p className="step-subtitle">{step.subtitle}</p>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepComponent;