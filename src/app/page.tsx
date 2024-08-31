"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import maaDurga from "@/data/maadura51";
import styles from "./page.module.css";
export default function Home() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleClick = (sNo: number) => {
    setActiveStep(sNo);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const randomColorPicker = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };

  return (
    <>
      <h1 className={styles.kalambold} style={{
        color: randomColorPicker(),
        borderBottom: `1px solid ${randomColorPicker()}`,
        paddingBottom: "10px",
        marginBottom: "20px",
        boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        position: "fixed",
        width: "100%",
        zIndex: 1,
        backdropFilter: "blur(2px)",
        top: 0,
        textAlign: "center",
       }} >माँ दुर्गा - 51 शक्ति पीठ</h1>
      <Box
        sx={{ paddingTop: "60px", display: "flex", alignItems: "center", justifyContent: "start" }}
      >
        
        <Stepper activeStep={activeStep} orientation="vertical">
          {maaDurga.map((step, index) => (
            <Step key={step.SNo}>
              <StepLabel onClick={() => handleClick(index)}>
                {step.Peedam}
              </StepLabel>
              <StepContent>
                <Typography variant="h6">{step.GoddessName}</Typography>
                <Typography>
                  {step.Place}, {step.State}
                </Typography>
                <Typography>{step.Description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2">
                    Timings: {step.Timings}
                  </Typography>
                  <Typography variant="body2">
                    History: {step.History}
                  </Typography>
                  <Typography variant="body2">
                    How to Reach: {step.HowToReach}
                  </Typography>
                  {step.ImageUrls && step.ImageUrls.length > 0 && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2">Images:</Typography>
                      {step.ImageUrls.map((url, i) => (
                        <img
                          key={i}
                          src={url}
                          alt={`${step.GoddessName} temple`}
                          style={{
                            width: "10%",
                            height: "auto",
                            margin: "10px",
                          }}
                        />
                      ))}
                    </Box>
                  )}
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
}
