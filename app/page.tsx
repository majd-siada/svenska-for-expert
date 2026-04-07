import Link from "next/link";
import { levelsMeta } from "@/data/levels";

const features = [
  { icon: "📚", title: "6 Sektioner", desc: "Tre huvudnivåer plus Litteratur, Retorik och Skrivande" },
  { icon: "📝", title: "60+ Ämnen", desc: "Vardaglig, professionell och akademisk svenska" },
  { icon: "🎯", title: "Interaktiva övningar", desc: "Testa dina kunskaper med quiz och övningar" },
  { icon: "📈", title: "Spåra framsteg", desc: "Markera lektioner som klara och se din utveckling" },
];

const mainLevels = levelsMeta.filter((l) => l.group === "main");
const specialSections = levelsMeta.filter((l) => l.group === "special");

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-indigo-600">
            Avancerad svensk kursplan
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Behärska svenska,{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              på expertnivå
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Sex sektioner för avancerade elever — vardaglig, professionell och akademisk
            svenska, plus specialområden inom litteratur, retorik och skrivande.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/levels"
              className="rounded-xl bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
            >
              Börja lära dig &rarr;
            </Link>
            <Link
              href="/practice"
              className="rounded-xl border border-indigo-200 bg-white px-7 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
            >
              Övningar
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-indigo-100 bg-white p-6 text-center shadow-sm"
              >
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-3 font-bold text-slate-800">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Levels */}
      <section className="bg-slate-50/60 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-2 text-center text-2xl font-bold text-slate-800">
            Huvudnivåer
          </h2>
          <p className="mb-10 text-center text-sm text-slate-500">
            Tre nivåer — från vardaglig till akademisk svenska.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {mainLevels.map((lvl) => (
              <Link
                key={lvl.id}
                href={`/levels/${lvl.id}`}
                className="block rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm transition hover:border-indigo-300 hover:shadow-md"
              >
                <div className="mb-2 text-4xl">{lvl.icon}</div>
                <h3 className="text-lg font-bold text-slate-800">{lvl.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{lvl.subtitle}</p>
                <ul className="mt-3 space-y-1">
                  {lvl.goals.slice(0, 3).map((g, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-indigo-400">&#10003;</span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Sections */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-2 text-center text-2xl font-bold text-slate-800">
            Specialområden
          </h2>
          <p className="mb-10 text-center text-sm text-slate-500">
            Fördjupa dig i litteratur, retorik och skrivande.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {specialSections.map((lvl) => (
              <Link
                key={lvl.id}
                href={`/levels/${lvl.id}`}
                className="block rounded-2xl border border-violet-100 bg-white p-6 shadow-sm transition hover:border-violet-300 hover:shadow-md"
              >
                <div className="mb-2 text-4xl">{lvl.icon}</div>
                <h3 className="text-lg font-bold text-slate-800">{lvl.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{lvl.subtitle}</p>
                <ul className="mt-3 space-y-1">
                  {lvl.goals.slice(0, 3).map((g, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-violet-400">&#10003;</span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
