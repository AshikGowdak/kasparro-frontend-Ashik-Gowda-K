"use client";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { AuditModule } from "@/types/audit";

const sidebarItemVariants = cva(
  "flex items-center justify-between p-4 rounded-2xl text-sm font-semibold transition-all border w-full",
  {
    variants: {
      status: {
        active: "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100",
        inactive: "bg-white text-slate-500 border-transparent hover:border-slate-200",
      },
    },
    defaultVariants: {
      status: "inactive",
    },
  }
);

interface AuditSidebarProps {
  modules: AuditModule[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function AuditSidebar({ modules, activeId, onSelect }: AuditSidebarProps) {
  return (
    <div className="w-64 flex flex-col gap-2 overflow-y-auto pr-2">
      <p className="text-[10px] font-bold text-slate-400 mb-4 px-2 uppercase tracking-widest">
        Audit Modules
      </p>
      {modules.map((m) => (
        <button
          key={m.id}
          onClick={() => onSelect(m.id)}
          className={cn(sidebarItemVariants({ status: activeId === m.id ? "active" : "inactive" }))}
        >
          {m.name}
          <span className={cn(
            "text-[10px] px-1.5 py-0.5 rounded",
            activeId === m.id ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-400"
          )}>
            {m.score}%
          </span>
        </button>
      ))}
    </div>
  );
}