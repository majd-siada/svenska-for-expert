import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-indigo-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="text-lg font-bold text-indigo-900">
          Svenska för Expert
        </Link>
        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <Link href="/levels" className="hover:text-indigo-700 transition-colors">
            Nivåer
          </Link>
          <Link href="/practice" className="hover:text-indigo-700 transition-colors">
            Övningar
          </Link>
        </div>
      </div>
    </nav>
  );
}
