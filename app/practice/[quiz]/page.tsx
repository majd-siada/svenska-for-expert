"use client";

import { useParams } from "next/navigation";
import { getQuizById } from "@/data/quizzes";
import QuizComponent from "@/components/QuizComponent";
import Link from "next/link";

export default function QuizPage() {
  const params = useParams();
  const quizId = params.quiz as string;
  const quiz = getQuizById(quizId);

  if (!quiz) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-800">Quiz hittades inte</h1>
        <p className="mt-2 text-slate-500">Det begärda quizet finns inte.</p>
        <Link href="/practice" className="mt-4 inline-block text-indigo-600 hover:underline">
          &larr; Tillbaka till övningar
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <Link href="/practice" className="mb-6 inline-block text-sm text-indigo-600 hover:underline">
        &larr; Alla övningar
      </Link>
      <h1 className="text-2xl font-bold text-slate-800">{quiz.title}</h1>
      <p className="mt-1 mb-6 text-slate-500">{quiz.description}</p>
      <QuizComponent quiz={quiz} />
    </div>
  );
}
