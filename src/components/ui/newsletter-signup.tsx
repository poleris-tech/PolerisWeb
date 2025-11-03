'use client';

import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for subscribing! Check your email for confirmation.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again later.');
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === 'loading' || status === 'success'}
            className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500/50 text-white font-semibold rounded-lg transition-colors duration-200 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
        >
          {status === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Subscribing...
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle className="w-5 h-5" />
              Subscribed!
            </>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>

      {/* Status Messages */}
      {message && (
        <div
          className={`mt-3 p-3 rounded-lg flex items-start gap-2 ${
            status === 'success'
              ? 'bg-green-500/20 border border-green-500/30 text-green-100'
              : 'bg-red-500/20 border border-red-500/30 text-red-100'
          }`}
        >
          {status === 'success' ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          )}
          <p className="text-sm">{message}</p>
        </div>
      )}

      <p className="mt-3 text-xs text-white/50">
        Subscribe to get the latest web design tips, exclusive offers, and updates. Unsubscribe anytime.
      </p>
    </div>
  );
}
