
import React, { useState, useEffect } from 'react';

interface AdminProps {
  onUpdate?: () => void;
}

export default function Admin({ onUpdate }: AdminProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [preview, setPreview] = useState<string | null>(localStorage.getItem('site_logo_fallback'));
  const [status, setStatus] = useState('');
  const [dbStatus, setDbStatus] = useState<'checking' | 'connected' | 'error' | 'setup_required'>('checking');
  const [dbError, setDbError] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const checkConnection = async () => {
    setDbStatus('checking');
    setDbError('');
    try {
      const res = await fetch('/.netlify/functions/api');
      if (!res.ok) {
        setDbStatus('error');
        setDbError(`Functions are not running. Use "netlify dev" to test locally.`);
        return;
      }
      const data = await res.json();
      if (data.status === 'connected') {
        setDbStatus('connected');
        if (data.logo) {
          setPreview(data.logo);
          localStorage.setItem('site_logo_fallback', data.logo);
        }
      } else {
        setDbStatus(data.status || 'error');
        setDbError(data.error || 'Unknown connection error');
      }
    } catch (err) {
      setDbStatus('error');
      setDbError('Cloud functions unreachable. Ensure you are running with "netlify dev" or deployed on Netlify.');
    }
  };

  useEffect(() => {
    if (isAuthenticated) checkConnection();
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') setIsAuthenticated(true);
    else alert('Incorrect password');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const saveLogoToDb = async () => {
    if (!preview) return;
    setIsSaving(true);
    setStatus('Syncing...');
    localStorage.setItem('site_logo_fallback', preview);

    try {
      const response = await fetch('/.netlify/functions/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ logo: preview }),
      });
      setStatus(response.ok ? 'Saved to Supabase!' : 'Saved locally');
    } catch (err) {
      setStatus('Saved locally');
    } finally {
      setIsSaving(false);
      setTimeout(() => setStatus(''), 3000);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#3c5c7d] flex items-center justify-center px-4">
        <div className="bg-white p-10 rounded-[40px] shadow-2xl w-full max-w-md text-center">
          <h2 className="text-3xl font-black text-[#3c5c7d] mb-2">Admin Portal</h2>
          <p className="text-[#3c5c7d]/40 text-sm font-bold uppercase mb-8">Access restricted</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#f48120] outline-none text-center font-bold"
              placeholder="Passcode: admin123" autoFocus
            />
            <button className="w-full bg-[#f48120] text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-orange-100">Login</button>
          </form>
          <button onClick={() => window.location.hash = ''} className="mt-6 text-[#3c5c7d]/40 font-bold text-xs uppercase tracking-widest">Back to Site</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black text-[#3c5c7d]">Dashboard</h1>
          <button onClick={() => window.location.hash = ''} className="bg-white px-6 py-2 rounded-xl text-[#f48120] font-black border border-gray-100 shadow-sm">Exit</button>
        </div>

        <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 mb-8">
          <div className={`p-6 rounded-3xl flex items-center gap-6 ${dbStatus === 'connected' ? 'bg-green-50' : 'bg-red-50'}`}>
             <div className={`w-3 h-3 rounded-full animate-pulse ${dbStatus === 'connected' ? 'bg-green-500' : 'bg-red-500'}`}></div>
             <p className="font-bold text-[#3c5c7d]">
               {dbStatus === 'connected' ? 'Connected to Supabase' : dbError}
             </p>
          </div>
        </div>

        {/* Logo Management */}
        <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-50">
            <h2 className="text-xl font-black text-[#3c5c7d]">Branding</h2>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-center min-h-[200px]">
              {preview ? <img src={preview} className="max-h-32" /> : <p className="text-gray-300 font-bold">No Logo</p>}
            </div>
            <div className="space-y-4">
              <input type="file" onChange={handleFileUpload} className="w-full text-sm text-[#3c5c7d]" />
              <button 
                onClick={saveLogoToDb} disabled={isSaving}
                className="w-full bg-[#3c5c7d] text-white py-4 rounded-2xl font-black hover:bg-[#f48120] transition-colors"
              >
                {status || 'Save Configuration'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
