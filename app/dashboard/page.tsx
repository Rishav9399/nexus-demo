export default function Dashboard(){
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6">
      <div className="w-ful max-w-4xl border border-gray-800 rounded-2xl bg-gray-900/40 p-8 shadow-2xl backdrop-blur-sm">

        {/* Header Section */}
        <div className="border-b border-gray-800 pb-6 mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-100">
            Command <span className="text-purple-500">Center</span>
          </h1>
          <p className="text-gray-400 mt-2">
            Welcome to the inner sanctum, Rishav. Your telemetry is offline until we connect the database.
          </p>
        </div>

        {/* Mock Analysis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-800 bg-black p-6 rounded-xl">
            <h3 className="text-gray-500 text-sm font-medium">MAANG Matches</h3>
            <p className="text-3xl font-bold text-gray-200 mt-2">0</p>
          </div>
          <div className="border border-gray-800 bg-black p-6 rounded-xl">
            <h3 className="text-gray-500 text-sm font-medium">Skill Gaps</h3>
            <p className="text-3xl font-bold text-gray-200 mt-2">Scanning...</p>
          </div>
          <div className="border border-gray-800 bg-black p-6 rounded-xl">
            <h3 className="text-gray-500 text-sm font-medium">System Status</h3>
            <p className="text-3xl font-bold text-green-500 mt-2">Operational</p>
          </div>
        </div>
        
      </div>
    </main>
  );
}