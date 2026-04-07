"use client";

import { useEffect, useState } from "react";
import { isLessonComplete, setLessonComplete } from "@/lib/progress";

export default function MarkComplete({ lessonId }: { lessonId: string }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(isLessonComplete(lessonId));
  }, [lessonId]);

  function toggle() {
    const next = !done;
    setDone(next);
    setLessonComplete(lessonId, next);
    window.dispatchEvent(new Event("progress-update"));
  }

  return (
    <button
      onClick={toggle}
      className={`mt-4 rounded-lg px-5 py-2 text-sm font-medium transition ${
        done
          ? "bg-indigo-100 text-indigo-700"
          : "bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
      }`}
    >
      {done ? "✓ Klar" : "Markera som klar"}
    </button>
  );
}
