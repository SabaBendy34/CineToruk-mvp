"use client";

import React, { useState } from 'react';

// SVG Icons as components
const FilmIcon = () => (
  <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="7" y1="2" x2="7" y2="22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="17" y1="2" x2="17" y2="22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="2" y1="7" x2="7" y2="7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="2" y1="17" x2="7" y2="17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="17" y1="17" x2="22" y2="17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="17" y1="7" x2="22" y2="7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="22" y1="2" x2="11" y2="13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function TorukMator() {
  const [input, setInput] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = () => {
    if (!input.trim()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setRecommendations(`Based on your preferences for "${input}", here are your personalized recommendations:\n\n1. The Shawshank Redemption (1994)\n2. Inception (2010)\n3. Interstellar (2014)\n4. The Dark Knight (2008)\n5. Parasite (2019)\n\nEach film offers compelling storytelling and cinematic excellence that matches your taste.`);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-amber-400">
              <FilmIcon />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Toruk Mator
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-200 font-light">Your Movie Assistant</p>
        </header>

        {/* Landing Text */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 mb-8 md:mb-12 shadow-2xl">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-amber-400 flex-shrink-0 mt-1">
              <SparklesIcon />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-amber-300 mb-3">
                Discover Your Next Favorite Film
              </h2>
              <div className="space-y-3 text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">What it does:</strong> Toruk Mator uses advanced AI to understand your movie preferences and deliver personalized recommendations that match your taste perfectly.
                </p>
                <p>
                  <strong className="text-white">Who it's for:</strong> Movie enthusiasts, casual viewers, and anyone tired of endless scrolling through streaming services.
                </p>
                <p>
                  <strong className="text-white">Why it's simple:</strong> Just describe what you're in the mood for—a genre, mood, theme, or even a specific movie—and get instant, curated suggestions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 mb-6 shadow-2xl">
          <label htmlFor="movieInput" className="block text-sm font-medium text-slate-300 mb-3">
            Tell me what you're looking for
          </label>
          <textarea
            id="movieInput"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="E.g., 'I want a mind-bending sci-fi thriller' or 'Something like Inception'"
            className="w-full bg-slate-900/70 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 resize-none"
            rows="4"
          />

          <button
            onClick={handleGenerate}
            disabled={!input.trim() || isLoading}
            className="mt-4 w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-amber-500/50 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Finding movies...</span>
              </>
            ) : (
              <>
                <SendIcon />
                <span>Get Recommendations</span>
              </>
            )}
          </button>
        </div>

        {/* Output Section */}
        {recommendations && (
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-2xl animate-fadeIn">
            <h3 className="text-xl font-semibold text-amber-300 mb-4 flex items-center gap-2">
              <div className="w-5 h-5 text-amber-400">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="7" y1="2" x2="7" y2="22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="17" y1="2" x2="17" y2="22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              Your Recommendations
            </h3>
            <div className="bg-slate-900/70 rounded-xl p-4 md:p-6 border border-slate-700/50">
              <p className="text-slate-200 whitespace-pre-line leading-relaxed">
                {recommendations}
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 md:mt-16 text-center text-slate-400 text-sm">
          <p>Powered by AI • Built for movie lovers</p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}