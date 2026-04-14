"use client";

import { useState } from 'react';

export default function Dashboard() {
  // This is our State (our memory). 
  // 'matches' is the current value. 'setMatches' is the tool to change it.
  const [matches, setMatches] = useState(0);
  const [status, setStatus] = useState("Operational");
  const [isScanning, setIsScanning] = useState(false);

  // This is our function-the action that happens when we click the button.
  const handleScan = () => {
    setIsScanning(true);
    setStatus("Scannong MAANG Databases...");

    // We set a setTimeout to fake a 2-second dealy, like a real AI processing data.
    setTimeout(() => {
      setMatches(Math.floor(Math.random() * 5) + 1); // Fakes finding 1 - 5 job match making
      setStatus("Scan Complete.");
      setIsScanning(false);
    }, 2000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6">
      <div className="w-full max-w-4xl border border-gray-800 rounded-2xl bg-gray-900/40 p-8 shadow-2xl backdrop-blur-sm">
        
        {/* Header Section */}
        <div className="border-b border-gray-800 pb-6 mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-100">
              Command <span className="text-purple-500">Center</span>
            </h1>
            <p className="text-gray-400 mt-2">
              Welcome to the inner sanctum, Rishav.
            </p>
          </div>
          
          {/* Our Action Button */}
          <button 
            onClick={handleScan}
            disabled={isScanning}
            className={`px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 ${
              isScanning 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-green-600 hover:bg-green-500 shadow-[0_0_15px_rgba(22,163,74,0.4)]'
            }`}
          >
            {isScanning ? "Processing..." : "Run Skill Scan"}
          </button>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-800 bg-black p-6 rounded-xl">
            <h3 className="text-gray-500 text-sm font-medium">MAANG Matches</h3>
            <p className="text-4xl font-bold text-purple-400 mt-2">{matches}</p>
          </div>
          <div className="border border-gray-800 bg-black p-6 rounded-xl">
            <h3 className="text-gray-500 text-sm font-medium">System Status</h3>
            <p className={`text-xl font-bold mt-2 ${isScanning ? 'text-yellow-500 animate-pulse' : 'text-green-500'}`}>
              {status}
            </p>
          </div>
          <div className="border border-gray-800 bg-black p-6 rounded-xl">
            <h3 className="text-gray-500 text-sm font-medium">Architecture</h3>
            <p className="text-xl font-bold text-gray-200 mt-2">Client Component</p>
          </div>
        </div>

      </div>
    </main>
  );
}