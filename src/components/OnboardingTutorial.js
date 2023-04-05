import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Box, MobileStepper } from '@mui/material';

const OnboardingTutorial = () => {
  const [open, setOpen] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Welcome to the AI Design Platform',
      content: 'Discover the power of AI-driven design with our innovative platform.'
    },
    {
      title: 'Collaborate with your team',
      content: 'Work together with your team to create stunning designs.'
    },
    {
      title: 'Explore the AI Design Assistant',
      content: 'Leverage the AI Design Assistant to simplify your design process.'
    },
    {
      title: 'Analyze and Optimize',
      content: 'Use analytics and reporting to measure success and optimize your designs.'
    }
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>{steps[activeStep].title}</DialogTitle>
      <DialogContent>
        <Typography variant="body1">{steps[activeStep].content}</Typography>
      </DialogContent>
      <DialogActions>
        <Box sx={{ flexGrow: 1 }}>
          <MobileStepper
            variant="dots"
            steps={steps.length}
            position="static"
            activeStep={activeStep}
          />
        </Box>
        <Button onClick={handleBack} disabled={activeStep === 0}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={activeStep === steps.length - 1}>
          Next
        </Button>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OnboardingTutorial;
