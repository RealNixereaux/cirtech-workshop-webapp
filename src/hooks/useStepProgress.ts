import { useState, useEffect } from "react";

const STORAGE_KEY = "workshop_step_progress";

export const useStepProgress = () => {
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setCompletedSteps(JSON.parse(stored));
    }
  }, []);

  const markStepCompleted = (step: string) => {
    if (!completedSteps.includes(step)) {
      const updated = [...completedSteps, step];
      setCompletedSteps(updated);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  };

  const resetProgress = () => {
    setCompletedSteps([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { completedSteps, markStepCompleted, resetProgress };
};
