"use client";

import { useState } from 'react';
// We are importing the bridge we forged earlier!
import { supabase } from '../../lib/supabase'; 

export default function Dashboard() {
  const [matches, setMatches] = useState(0);
  const [status, setStatus] = useState("Operational");
  const [isScanning, setIsScanning] = useState(false);

  // Notice the word 'async' here. We have to wait for the internet to respond.
  const handleScan = async () => {
    setIsScanning(true);
    setStatus("Scanning MAANG databases...");
    
    // 1. Generate our data
    const foundMatches = Math.floor(Math.random() * 5) + 1;
    const finalStatus = "Scan Complete";

    // 2. The Database Injection
    // We tell Supabase to go to the 'scans' table and insert a new row.
    const { error } = await supabase
      .from('scans')
      .insert([
        { status: finalStatus, matches: foundMatches }
      ]);

    // 3. Update the UI based on what the database says
    if (error) {
      console.error("Vault Error:", error);
      setStatus("Connection to vault failed.");
    } else {
      setMatches(foundMatches);
      setStatus(finalStatus);
    }
    
    setIsScanning(false);
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
              Welcome to the inner sanctum, Rishav. Telemetry is ONLINE.
            </p>
          </div>
          
          <button 
            onClick={handleScan}
            disabled={isScanning}
            className={`px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 ${
              isScanning 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-green-600 hover:bg-green-500 shadow-[0_0_15px_rgba(22,163,74,0.4)]'
            }`}
          >
            {isScanning ? "Transmitting..." : "Run Skill Scan"}
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
            <p className="text-xl font-bold text-blue-400 mt-2">Supabase Connected</p>
          </div>
        </div>

      </div>
    </main>
  );
}