"use client";

import { useState } from "react";
import type { Topic } from "@/lib/types";
import LessonBlock from "./LessonBlock";

const categoryColors: Record<string, string> = {
  "dagligt": "bg-sky-100 text-sky-700",
  "kommunikation": "bg-blue-100 text-blue-700",
  "kultur": "bg-amber-100 text-amber-700",
  "praktiskt": "bg-teal-100 text-teal-700",
  "berättande": "bg-rose-100 text-rose-700",
  "professionellt": "bg-violet-100 text-violet-700",
  "media": "bg-orange-100 text-orange-700",
  "samhälle": "bg-emerald-100 text-emerald-700",
  "akademiskt": "bg-indigo-100 text-indigo-700",
  "litteratur": "bg-purple-100 text-purple-700",
  "retorik": "bg-pink-100 text-pink-700",
  "skrivande": "bg-rose-100 text-rose-700",
  "läsning": "bg-cyan-100 text-cyan-700",
  "analys": "bg-fuchsia-100 text-fuchsia-700",
  "presentation": "bg-lime-100 text-lime-700",
  "debatt": "bg-red-100 text-red-700",
  "kreativt": "bg-yellow-100 text-yellow-700",
};

function getCategoryColor(category: string): string {
  const lower = category.toLowerCase();
  for (const [key, value] of Object.entries(categoryColors)) {
    if (lower.includes(key)) return value;
  }
  return "bg-gray-100 text-gray-700";
}

export default function TopicSection({
  topic,
  defaultOpen = false,
}: {
  topic: Topic;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl border border-indigo-100 bg-white px-5 py-4 text-left shadow-sm transition hover:border-indigo-300"
      >
        <div>
          <span
            className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${getCategoryColor(topic.category)}`}
          >
            {topic.category}
          </span>
          <h3 className="mt-1 text-base font-semibold text-slate-800">{topic.title}</h3>
          <span className="text-xs text-slate-400">
            {topic.lessons.length} {topic.lessons.length === 1 ? "lektion" : "lektioner"}
          </span>
        </div>
        <span className="text-xl text-slate-400">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="mt-2 space-y-4 pl-2">
          {topic.lessons.map((lesson) => (
            <LessonBlock key={lesson.id} lesson={lesson} />
          ))}
        </div>
      )}
    </div>
  );
}
