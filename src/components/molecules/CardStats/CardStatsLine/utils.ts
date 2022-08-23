import { MAX_STATS } from "../../../../constants/stats";

export const statValueWidth = (value?: number, stat?: string) => {
  if (!stat || !value) return 45;
  const key = stat.replace(" ", "_");
  const valuePercentage =
    (value / MAX_STATS[key as keyof typeof MAX_STATS]) * 90;
  return valuePercentage + 45;
};
