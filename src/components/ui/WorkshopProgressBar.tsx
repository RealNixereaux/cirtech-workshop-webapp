import React from "react";

interface WorkshopProgressBarProps {
  day1Progress: number;
  day2Progress: number;
  day3Progress: number;
}

const WorkshopProgressBar: React.FC<WorkshopProgressBarProps> = ({
  day1Progress,
  day2Progress,
  day3Progress,
}) => {
  const totalWidth = day1Progress + day2Progress + day3Progress;

  return (
    <div className="w-full bg-gray-300 rounded-full h-8 relative overflow-hidden mb-8">
      {/* Day 1 */}
      <div
        className="bg-blue-500 h-8 absolute top-0 left-0 transition-all duration-700 ease-in-out"
        style={{ width: `${(day1Progress / totalWidth) * 100}%` }}
      >
        <span className="text-white text-sm font-semibold pl-2 leading-8">Day 1</span>
      </div>

      {/* Day 2 */}
      <div
        className="bg-green-500 h-8 absolute top-0 transition-all duration-700 ease-in-out"
        style={{
          left: `${(day1Progress / totalWidth) * 100}%`,
          width: `${(day2Progress / totalWidth) * 100}%`,
        }}
      >
        <span className="text-white text-sm font-semibold pl-2 leading-8">Day 2</span>
      </div>

      {/* Day 3 */}
      <div
        className="bg-orange-400 h-8 absolute top-0 transition-all duration-700 ease-in-out"
        style={{
          left: `${((day1Progress + day2Progress) / totalWidth) * 100}%`,
          width: `${(day3Progress / totalWidth) * 100}%`,
        }}
      >
        <span className="text-white text-sm font-semibold pl-2 leading-8">Day 3</span>
      </div>
    </div>
  );
};

export default WorkshopProgressBar;
