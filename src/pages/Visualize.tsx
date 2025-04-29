import React from "react";
import { Link } from "react-router-dom";
import { useStepProgress } from "@/hooks/useStepProgress";

const Visualize = () => {
  const { markStepCompleted } = useStepProgress();

  const handleContinue = () => {
    markStepCompleted("Visualize");
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Visualizing the Workflow</h1>
      <p className="mb-6 text-gray-700">
        Here, we build visual maps and flowcharts based on the documented processes.
        Visualizations help identify bottlenecks, redundancies, and areas for improvement.
      </p>

      <Link
        to="/automate"
        onClick={handleContinue}
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full"
      >
        Continue to Preparing Automation
      </Link>

      <div className="mt-10 text-center">
        <Link
          to="/dashboard"
          className="inline-block bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-6 rounded-full"
        >
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Visualize;
