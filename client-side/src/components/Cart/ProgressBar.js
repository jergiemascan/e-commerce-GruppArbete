import React from "react";
import ReactDOM from "react-dom";
import "./ProgressBar";

import {
  useStepProgressBar,
  StepProgressBarLine,
} from "react-step-progress-bar-line";

export default function ProgressBar() {
  const [activeStep, sections, nextStep, prevStep] = useStepProgressBar({
    activeStep: 0,
    sections: [
      {
        stepsCount: 2,
      },
      {
        stepsCount: 3,
      },
      {
        stepsCount: 5,
      },
    ],
    stepChangeCallback: (step) => {
      return true;
    },
    finishCallback: () => {
      alert("finish");

      return true;
    },
  });

  return (
    <div>
      <StepProgressBarLine
        className="progress-bar__line"
        activeStep={activeStep}
        sections={sections}
      />

      <button onClick={prevStep}>Prev</button>

      <button onClick={nextStep}>Nxt</button>
    </div>
  );
}
