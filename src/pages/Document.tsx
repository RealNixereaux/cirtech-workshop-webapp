import React from "react";
import { Link } from "react-router-dom";
import { useStepProgress } from "@/hooks/useStepProgress";

const Document = () => {
  const { markStepCompleted } = useStepProgress();

  const handleContinue = () => {
    markStepCompleted("Document");
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Documenting Processes</h1>
      <p className="mb-6 text-gray-700">
        During this step, we create detailed documentation of each key process step.
        This forms the foundation for workflow visualization and future automation.
      </p>

      <Link
        to="/visualize"
        onClick={handleContinue}
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full"
      >
        Continue to Visualizing Workflow
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

export default Document;
