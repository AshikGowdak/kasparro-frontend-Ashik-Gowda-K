import { cn } from "@/lib/utils";

// ScoreBadge component to display score with color coding

export default function ScoreBadge({ score }: { score: number }) {
  const getColor = () => {
    if (score >= 80) return "bg-green-100 text-green-700 border-green-200";
    if (score >= 50) return "bg-yellow-100 text-yellow-700 border-yellow-200";
    return "bg-red-100 text-red-700 border-red-200";
  };

  return (
    <div className={cn("px-2 py-1 rounded border text-xs font-bold inline-block", getColor())}>
      {score}/100
    </div>
  );
}