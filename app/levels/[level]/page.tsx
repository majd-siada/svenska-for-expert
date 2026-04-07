"use client";

import { useParams } from "next/navigation";
import { getLevelById, getLessonIdsForLevel } from "@/data/allLevels";
import TopicSection from "@/components/TopicSection";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";

export default function LevelDetailPage() {
  const params = useParams();
  const levelId = params.level as string;
  const level = getLevelById(levelId);

  if (!level) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-800">Nivån hittades inte</h1>
        <p className="mt-2 text-slate-500">Den begärda nivån finns inte.</p>
        <Link href="/levels" className="mt-4 inline-block text-indigo-600 hover:underline">
          &larr; Tillbaka till nivåer
        </Link>
      </div>
    );
  }

  const lessonIds = getLessonIdsForLevel(levelId);
  const categories = [...new Set(level.topics.map((t) => t.category))];

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Header */}
      <div className="mb-6 text-center">
        <div className="text-5xl">{level.icon}</div>
        <h1 className="mt-3 text-3xl font-bold text-slate-800">{level.name}</h1>
        <p className="mt-1 text-slate-500">{level.subtitle}</p>
      </div>

      {/* Goals */}
      <div className="mb-8 rounded-2xl border border-indigo-100 bg-white p-6">
        <h2 className="mb-3 text-lg font-bold text-slate-700">Lärandemål</h2>
        <ul className="space-y-2">
          {level.goals.map((g, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="text-indigo-500">&#10003;</span>
              <span>{g}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <ProgressBar lessonIds={lessonIds} label={`${level.name} — framsteg`} />
      </div>

      {/* Topics grouped by category */}
      {categories.map((cat) => {
        const catTopics = level.topics.filter((t) => t.category === cat);
        return (
          <div key={cat} className="mb-8">
            <h2 className="mb-4 text-xl font-bold text-slate-700">{cat}</h2>
            {catTopics.map((topic) => (
              <TopicSection key={topic.id} topic={topic} />
            ))}
          </div>
        );
      })}

      {/* Back link */}
      <div className="mt-12 text-center">
        <Link href="/levels" className="text-indigo-600 hover:underline">
          &larr; Tillbaka till alla nivåer
        </Link>
      </div>
    </div>
  );
}
