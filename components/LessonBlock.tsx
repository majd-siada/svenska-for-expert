import type { Lesson } from "@/lib/types";
import ExampleItem from "./ExampleItem";
import MarkComplete from "./MarkComplete";

export default function LessonBlock({ lesson }: { lesson: Lesson }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-5">
      <h4 className="text-lg font-semibold text-slate-800">{lesson.title}</h4>
      <p className="mt-1 text-sm leading-relaxed text-slate-600">
        {lesson.description}
      </p>

      {lesson.examples.length > 0 && (
        <div className="mt-4 space-y-2">
          {lesson.examples.map((ex, i) => (
            <ExampleItem key={i} example={ex} />
          ))}
        </div>
      )}

      {lesson.keyRules.length > 0 && (
        <div className="mt-4 rounded-lg border border-indigo-100 bg-indigo-50/40 p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-600">
            Viktiga regler
          </p>
          <ul className="space-y-1">
            {lesson.keyRules.map((rule, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="text-indigo-400">&#9679;</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <MarkComplete lessonId={lesson.id} />
    </div>
  );
}
