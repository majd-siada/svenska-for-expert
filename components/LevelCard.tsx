import Link from "next/link";
import ProgressBar from "./ProgressBar";

interface LevelCardProps {
  id: string;
  icon: string;
  name: string;
  subtitle: string;
  goals: string[];
  lessonIds: string[];
  progress?: number;
}

export default function LevelCard({
  id,
  icon,
  name,
  subtitle,
  goals,
  lessonIds,
}: LevelCardProps) {
  return (
    <Link
      href={`/levels/${id}`}
      className="block rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm transition hover:border-indigo-300 hover:shadow-md"
    >
      <div className="mb-3 text-4xl">{icon}</div>
      <h3 className="text-xl font-bold text-slate-800">{name}</h3>
      <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      <ul className="mt-3 space-y-1">
        {goals.slice(0, 3).map((g, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
            <span className="text-indigo-400">&#10003;</span>
            <span>{g}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <ProgressBar lessonIds={lessonIds} />
      </div>
    </Link>
  );
}
