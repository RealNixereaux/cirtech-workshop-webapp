import { createContext, useContext } from "react";

// User type
interface User {
  name: string;
  role: string;
  team: "Scalemind" | "Cirtech";
}

// Static user list (later replace with API if needed)
const staticUsers: User[] = [
  // Cirtech Team (Frontend / Workshop App)
  { name: "Workshop Engineer", role: "Frontend Specialist", team: "Cirtech" },
  { name: "Process Manager", role: "Workflow Designer", team: "Cirtech" },
  { name: "Automation Technician", role: "Automation Preparer", team: "Cirtech" },

  // Scalemind Team (Backend / Support)
  { name: "Backend Architect", role: "Database & API Engineer", team: "Scalemind" },
  { name: "Infrastructure Lead", role: "Deployment & Scaling", team: "Scalemind" },
  { name: "Security Analyst", role: "Security & Compliance", team: "Scalemind" },
];

// 🚀 Here you pick which user you want to simulate
const currentUser: User = staticUsers[0]; // <-- Currently set to the first Cirtech Workshop Engineer

// Create a Context
const UserContext = createContext<User>(currentUser);

// Hook to access user data
export const useUser = () => {
  return useContext(UserContext);
};
