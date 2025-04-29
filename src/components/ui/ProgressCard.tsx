import React from "react";
import { Link } from "react-router-dom";

interface ProgressCardProps {
  icon: React.ReactNode;
  title: string;
  progress: number | null;
  continueLink?: string;
  isCompleted?: boolean;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  icon,
  title,
  progress,
  continueLink,
  isCompleted,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
      <div>
        <h3 className="flex items-center text-lg font-bold mb-2">
          <span className="mr-2">{icon}</span>
          {title}
          {isCompleted && (
            <span className="ml-2 text-green-500 text-xl">✅</span>
          )}
        </h3>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          {progress !== null && (
            <div
              className="h-2.5 rounded-full bg-blue-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          )}
        </div>

        <p className="text-sm mb-4">
          {progress !== null ? `${progress}% Completed` : "Not Started"}
        </p>
      </div>

      {/* Continue Button */}
      {continueLink && (
        <Link
          to={continueLink}
          className="inline-block mt-2 text-center bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold rounded-full px-4 py-2 text-sm transition-all duration-300"
        >
          Continue
        </Link>
      )}
    </div>
  );
};

export default ProgressCard;
