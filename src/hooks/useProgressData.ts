import { useQuery } from "@tanstack/react-query";
import { fakeProgressData, ProgressItem } from "@/lib/fakeProgress";

export const useProgressData = () => {
  return useQuery<ProgressItem[]>({
    queryKey: ["progressData"],
    queryFn: async () => {
      // Simulate a network delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      return fakeProgressData;
    },
  });
};
