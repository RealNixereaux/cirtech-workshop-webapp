import React from "react";
import { Link } from "react-router-dom";
import { useStepProgress } from "@/hooks/useStepProgress";

const Understand = () => {
  const { markStepCompleted } = useStepProgress();

  const handleContinue = () => {
    markStepCompleted("Understand");
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Understanding the Process</h1>
      <p className="mb-6 text-gray-700">
        In this phase, we gather and document a complete understanding of the client's existing workflow.
        Our goal is to ensure we have deep clarity before designing solutions.
      </p>

      <Link
        to="/document"
        onClick={handleContinue}
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full"
      >
        Continue to Documenting Processes
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

export default Understand;
