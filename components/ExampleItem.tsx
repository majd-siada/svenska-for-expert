import type { Example } from "@/lib/types";

export default function ExampleItem({ example }: { example: Example }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-slate-100 bg-white px-4 py-3">
      <span className="mt-0.5 text-indigo-400">&bull;</span>
      <div>
        <p className="font-medium text-slate-800">{example.swedish}</p>
        <p className="text-sm text-slate-500">{example.explanation}</p>
      </div>
    </div>
  );
}
