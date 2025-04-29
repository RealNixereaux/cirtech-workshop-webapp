export interface ProgressItem {
    id: number;
    title: string;
    icon: string;
    progress: number | null; // null means "Not Started"
  }
  
  export const fakeProgressData: ProgressItem[] = [
    {
      id: 1,
      title: "Understanding Process",
      icon: "📌",
      progress: 60,
    },
    {
      id: 2,
      title: "Documenting Processes",
      icon: "📝",
      progress: 30,
    },
    {
      id: 3,
      title: "Visualizing Workflow",
      icon: "📊",
      progress: null,
    },
    {
      id: 4,
      title: "Preparing Automation",
      icon: "⚙️",
      progress: null,
    },
  ];
  