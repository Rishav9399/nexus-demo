import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="border border-gray-800 p-12 rounded-xl bg-gray-900/50 shadow-2xl">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Welcome to Nexus, <span className="text-blue-500">Rishav.</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Stella's architecture is online. The foundation is set.
        </p>

        {/* Here is our high performance next.js Link */}
        <Link 
          href="/dashboard" 
          className="px-8 py-3 bg-purple-600 hover:bg-perple-700 transition-all duration-300 rounded-lg font-bold text-white shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_25px_rgba(147,51,234,0.7)]"
        >
          Enter Command Center
        </Link>
      </div>
    </main>
  );
}