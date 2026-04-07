"use client";

import { levelsMeta } from "@/data/levels";
import { getLessonIdsForLevel, getAllLessonIds } from "@/data/allLevels";
import LevelCard from "@/components/LevelCard";
import ProgressBar from "@/components/ProgressBar";

const mainLevels = levelsMeta.filter((l) => l.group === "main");
const specialSections = levelsMeta.filter((l) => l.group === "special");

export default function LevelsPage() {
  const allIds = getAllLessonIds();

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-800">Alla nivåer</h1>
      <p className="mt-2 text-slate-500">
        Sex sektioner — tre huvudnivåer och tre specialområden.
      </p>

      <div className="mt-6 mb-10">
        <ProgressBar lessonIds={allIds} label="Total framsteg" />
      </div>

      <h2 className="mb-4 text-xl font-bold text-slate-700">Huvudnivåer</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {mainLevels.map((lvl) => (
          <LevelCard
            key={lvl.id}
            id={lvl.id}
            icon={lvl.icon}
            name={lvl.name}
            subtitle={lvl.subtitle}
            goals={lvl.goals}
            lessonIds={getLessonIdsForLevel(lvl.id)}
          />
        ))}
      </div>

      <h2 className="mt-12 mb-4 text-xl font-bold text-slate-700">Specialområden</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {specialSections.map((lvl) => (
          <LevelCard
            key={lvl.id}
            id={lvl.id}
            icon={lvl.icon}
            name={lvl.name}
            subtitle={lvl.subtitle}
            goals={lvl.goals}
            lessonIds={getLessonIdsForLevel(lvl.id)}
          />
        ))}
      </div>
    </div>
  );
}
