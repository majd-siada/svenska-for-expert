"use client";

import { useState } from "react";
import type { Quiz } from "@/lib/types";

export default function QuizComponent({ quiz }: { quiz: Quiz }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const q = quiz.questions[current];
  const total = quiz.questions.length;
  const finished = current >= total;

  function handleSelect(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q.correctIndex) setScore((s) => s + 1);
  }

  function next() {
    if (current + 1 >= total) {
      setShowResult(true);
    }
    setCurrent((c) => c + 1);
    setSelected(null);
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
  }

  if (showResult || finished) {
    return (
      <div className="rounded-2xl border border-indigo-100 bg-white p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Resultat</h2>
        <p className="mt-2 text-lg text-slate-600">
          Du fick <span className="font-bold text-indigo-600">{score}</span> av{" "}
          <span className="font-bold">{total}</span> rätt!
        </p>
        <div className="mt-2 text-4xl">
          {score === total ? "🎉" : score >= total * 0.7 ? "👏" : "💪"}
        </div>
        <button
          onClick={restart}
          className="mt-6 rounded-lg bg-indigo-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          Försök igen
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-indigo-100 bg-white p-6">
      <div className="mb-4 flex items-center justify-between text-sm text-slate-500">
        <span>
          Fråga {current + 1} av {total}
        </span>
        <span>{score} rätt</span>
      </div>

      <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-indigo-500 transition-all"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      {q.passage && (
        <div className="my-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm italic text-slate-700">
          {q.passage}
        </div>
      )}

      <h3 className="my-4 text-lg font-semibold text-slate-800">{q.question}</h3>

      <div className="space-y-2">
        {q.options.map((opt, idx) => {
          let style = "border-slate-200 bg-white hover:border-indigo-300";
          if (selected !== null) {
            if (idx === q.correctIndex) style = "border-green-400 bg-green-50";
            else if (idx === selected) style = "border-red-400 bg-red-50";
          }
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={selected !== null}
              className={`w-full rounded-lg border px-4 py-3 text-left text-sm transition ${style}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="mt-4">
          <p className="rounded-lg bg-indigo-50 p-3 text-sm text-indigo-800">
            {q.explanation}
          </p>
          <button
            onClick={next}
            className="mt-3 rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            {current + 1 < total ? "Nästa fråga →" : "Se resultat"}
          </button>
        </div>
      )}
    </div>
  );
}
