import React from "react";
import { Link } from "react-router-dom";
import { useStepProgress } from "@/hooks/useStepProgress";

const Automate = () => {
  const { markStepCompleted } = useStepProgress();

  const handleBackToDashboard = () => {
    markStepCompleted("Automate");
  };

  return (
    <div className="min-h-screen p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Preparing for Automation</h1>
      <p className="mb-6 text-gray-700">
        In the final step, we define automation strategies based on the optimized processes.
        We also prepare technical documentation and system designs for implementation.
      </p>

      <div className="text-green-600 font-semibold mt-8 text-xl">
        🎉 Congratulations! You have completed the Workshop Workflow!
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/dashboard"
          onClick={handleBackToDashboard}
          className="inline-block bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-6 rounded-full"
        >
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Automate;
