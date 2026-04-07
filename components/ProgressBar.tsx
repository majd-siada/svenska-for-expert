"use client";

import { useEffect, useState } from "react";
import { getOverallProgress } from "@/lib/progress";

interface ProgressBarProps {
  lessonIds: string[];
  label?: string;
}

export default function ProgressBar({ lessonIds, label }: ProgressBarProps) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const refresh = () => setPct(getOverallProgress(lessonIds));
    refresh();
    window.addEventListener("progress-update", refresh);
    return () => window.removeEventListener("progress-update", refresh);
  }, [lessonIds]);

  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
        <span>{label ?? "Framsteg"}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-indigo-500 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
