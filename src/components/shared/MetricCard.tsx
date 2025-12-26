import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-2xl p-6 transition-all duration-300 border",
  {
    variants: {
      intent: {
        primary: "bg-white border-slate-100 hover:shadow-lg",
        highlight: "bg-blue-50 border-blue-100 shadow-sm",
        warning: "bg-orange-50 border-orange-100",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  label: string;
  value: string | number;
}

export function MetricCard({ label, value, intent, className, ...props }: MetricCardProps) {
  return (
    <div className={cn(cardVariants({ intent }), className)} {...props}>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{label}</p>
      <p className="text-2xl font-black">{value}</p>
    </div>
  );
}