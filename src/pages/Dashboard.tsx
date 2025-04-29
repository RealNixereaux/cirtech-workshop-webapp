import React, { useEffect } from "react";
import { useProgressData } from "@/hooks/useProgressData";
import { useUser } from "@/hooks/useUser";
import { useStepProgress } from "@/hooks/useStepProgress";
import ProgressCard from "@/components/ui/ProgressCard";
import WorkshopProgressBar from "@/components/ui/WorkshopProgressBar"; // <-- Import Progress Bar



const Dashboard = () => {
  const { data, isLoading, isError } = useProgressData();
  const { name, role, team } = useUser();
  const { completedSteps } = useStepProgress();

  useEffect(() => {
    document.title = "Cirtech Automation Workshop";
  }, []);
  

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-75"></div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="text-center mt-20 text-red-500">
        Failed to load progress data.
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 md:px-8 py-8 bg-gray-50">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold">Cirtech Workshop</div>
        <div>
          <button className="bg-gray-200 rounded-full px-4 py-2 text-sm">
            Profile ▼
          </button>
        </div>
      </div>

      {/* Progress Legend */}
      <div className="flex justify-center space-x-6 mb-10">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span>Understand</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
          <span>Document</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
          <span>Visualize</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-400 rounded-full"></span>
          <span>Automate</span>
        </div>
      </div>

      {/* Welcome Message */}
      <h2 className="text-xl font-semibold text-center mb-6">
        Welcome back, {name}! ({role} - {team})
      </h2>

      {/* Global Workshop Progress Bar */}
      <div className="mb-8">
        <WorkshopProgressBar
          day1Progress={completedSteps.includes("Understand") ? 100 : 0}
          day2Progress={completedSteps.includes("Document") ? 100 : 0}
          day3Progress={
            (completedSteps.includes("Visualize") && completedSteps.includes("Automate"))
              ? 100
              : 0
          }
        />
      </div>

      {/* Progress Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item) => {
          const stepName =
            item.title === "Understanding Process"
              ? "Understand"
              : item.title === "Documenting Processes"
              ? "Document"
              : item.title === "Visualizing Workflow"
              ? "Visualize"
              : item.title === "Preparing Automation"
              ? "Automate"
              : "";

          const isCompleted = completedSteps.includes(stepName);

          return (
            <ProgressCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              progress={isCompleted ? 100 : item.progress}
              continueLink={
                item.title === "Understanding Process"
                  ? "/understand"
                  : item.title === "Documenting Processes"
                  ? "/document"
                  : item.title === "Visualizing Workflow"
                  ? "/visualize"
                  : item.title === "Preparing Automation"
                  ? "/automate"
                  : undefined
              }
              isCompleted={isCompleted}
            />
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-400 text-sm">
        © Cirtech, 2025
      </div>
    </div>
  );
};

export default Dashboard;
