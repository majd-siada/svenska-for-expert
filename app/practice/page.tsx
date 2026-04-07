import Link from "next/link";
import { quizzes } from "@/data/quizzes";
import { levelsMeta } from "@/data/levels";

function getLevelName(levelId: string): string {
  return levelsMeta.find((l) => l.id === levelId)?.name ?? levelId;
}

export default function PracticePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-800">Övningar</h1>
      <p className="mt-2 text-slate-500">
        Välj ett quiz för att testa dina kunskaper.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {quizzes.map((q) => (
          <Link
            key={q.id}
            href={`/practice/${q.id}`}
            className="block rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm transition hover:border-indigo-300 hover:shadow-md"
          >
            <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
              {getLevelName(q.level)}
            </span>
            <h3 className="mt-3 text-lg font-bold text-slate-800">{q.title}</h3>
            <p className="mt-1 text-sm text-slate-500">{q.description}</p>
            <p className="mt-3 text-xs text-slate-400">
              {q.questions.length} frågor
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
