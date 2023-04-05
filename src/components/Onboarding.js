import React, { useState } from 'react';
import './Onboarding.css';

const Onboarding = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="onboarding">
      <h2>Onboarding Step {step}</h2>
      {step === 1 && (
        <div>
          <p>Welcome to the AI design platform! Let's get started by exploring the key features.</p>
          {/* Add more content for step 1 */}
        </div>
      )}
      {step === 2 && (
        <div>
          <p>Now let's dive deeper into the AI Design Assistant Panel and see how it can help you.</p>
          {/* Add more content for step 2 */}
        </div>
      )}
      {step === 3 && (
        <div>
          <p>Finally, let's learn how to manage projects, collaborate with your team, and analyze performance.</p>
          {/* Add more content for step 3 */}
        </div>
      )}
      <div className="onboarding-controls">
        <button onClick={handlePrev} disabled={step === 1}>
          Previous
        </button>
        <button onClick={handleNext} disabled={step === 3}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
