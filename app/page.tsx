"use client";

import React, { useState } from 'react';

// ============================================================================
// ICON COMPONENTS - Extracted for reusability
// ============================================================================
const Icon = ({ children, className = "" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const FilmIcon = ({ className = "w-6 h-6" }) => (
  <Icon className={className}>
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="17" x2="22" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
  </Icon>
);

const SparklesIcon = ({ className = "w-6 h-6" }) => (
  <Icon className={className}>
    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </Icon>
);

const SendIcon = ({ className = "w-5 h-5" }) => (
  <Icon className={className}>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </Icon>
);

const PlayIcon = ({ className = "w-5 h-5" }) => (
  <Icon className={className}>
    <polygon points="5 3 19 12 5 21 5 3" />
  </Icon>
);

// ============================================================================
// CARD COMPONENT - Reusable glass-morphism card
// ============================================================================
const GlassCard = ({ children, className = "", animate = false }) => (
  <div
    className={`
      bg-slate-800/40 backdrop-blur-md 
      border border-slate-700/50 
      rounded-2xl shadow-2xl
      transition-all duration-500
      ${animate ? 'hover:bg-slate-800/50 hover:border-slate-600/50 hover:shadow-amber-500/10' : ''}
      ${className}
    `}
  >
    {children}
  </div>
);

// ============================================================================
// FEATURE CARD COMPONENT
// ============================================================================
const FeatureCard = ({ icon: Icon, title, description }) => (
  <GlassCard className="p-6 group cursor-default" animate>
    <div className="flex items-start gap-4">
      <div className="p-3 bg-amber-500/10 rounded-xl group-hover:bg-amber-500/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-amber-400" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-white mb-2 group-hover:text-amber-300 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </GlassCard>
);

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function TorukMator() {
  const [input, setInput] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;

    setIsLoading(true);
    setRecommendations('');

    // Simulate API call with realistic delay
    await new Promise(resolve => setTimeout(resolve, 1800));

    setRecommendations(
      `Based on your preferences for "${input}", here are your personalized recommendations:\n\n` +
      `🎬 The Shawshank Redemption (1994)\n` +
      `   A masterpiece of hope and resilience\n\n` +
      `🎬 Inception (2010)\n` +
      `   Mind-bending narrative and stunning visuals\n\n` +
      `🎬 Interstellar (2014)\n` +
      `   Epic space odyssey with emotional depth\n\n` +
      `🎬 The Dark Knight (2008)\n` +
      `   Groundbreaking superhero storytelling\n\n` +
      `🎬 Parasite (2019)\n` +
      `   Sharp social commentary meets thriller\n\n` +
      `Each recommendation offers compelling storytelling and cinematic excellence that matches your taste.`
    );

    setIsLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  const handleClear = () => {
    setInput('');
    setRecommendations('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">

      {/* ====== ANIMATED BACKGROUND ====== */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 -right-20 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }} />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
      </div>

      {/* ====== MAIN CONTENT ====== */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

        {/* ====== HEADER ====== */}
        <header className="text-center mb-10 sm:mb-16 animate-fadeInDown">
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="text-amber-400 transform hover:rotate-12 transition-transform duration-300">
              <FilmIcon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-400 bg-clip-text text-transparent drop-shadow-lg">
              Toruk Mator
            </h1>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-200/90 font-light tracking-wide">
            Your Intelligent Movie Companion
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-400">
            <PlayIcon className="w-4 h-4" />
            <span>AI-Powered • Personalized • Instant</span>
          </div>
        </header>

        {/* ====== HERO SECTION ====== */}
        <GlassCard className="p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 animate-fadeInUp">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
            <div className="flex-shrink-0 p-3 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl">
              <SparklesIcon className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text mb-4 sm:mb-5">
                Discover Your Next Favorite Film
              </h2>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <FeatureCard
                  icon={SparklesIcon}
                  title="What it does"
                  description="Advanced AI analyzes your preferences to deliver perfectly matched movie recommendations."
                />
                <FeatureCard
                  icon={FilmIcon}
                  title="Who it's for"
                  description="Movie lovers, casual viewers, and anyone seeking their next great cinematic experience."
                />
                <FeatureCard
                  icon={PlayIcon}
                  title="Why it's simple"
                  description="Just describe your mood or preferences, and receive instant, curated suggestions."
                />
              </div>
            </div>
          </div>
        </GlassCard>

        {/* ====== INPUT SECTION ====== */}
        <GlassCard className="p-6 sm:p-8 mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <label
            htmlFor="movieInput"
            className="block text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2"
          >
            <SparklesIcon className="w-4 h-4 text-amber-400" />
            What are you in the mood for?
          </label>

          <div className="relative">
            <textarea
              id="movieInput"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="e.g., 'A mind-bending thriller like Inception' or 'Something uplifting and heartwarming'"
              className="w-full bg-slate-900/60 border border-slate-600/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-300 resize-none hover:bg-slate-900/80"
              rows="4"
              aria-label="Movie preferences input"
            />
            {input && (
              <button
                onClick={handleClear}
                className="absolute top-3 right-3 text-slate-500 hover:text-slate-300 transition-colors p-1"
                aria-label="Clear input"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <button
              onClick={handleGenerate}
              disabled={!input.trim() || isLoading}
              className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:from-slate-700 disabled:to-slate-800 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/30 active:scale-[0.98] flex items-center justify-center gap-2.5 group"
              aria-label="Get movie recommendations"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Finding Your Perfect Movies...</span>
                </>
              ) : (
                <>
                  <SendIcon className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  <span>Get Recommendations</span>
                </>
              )}
            </button>

            {recommendations && (
              <button
                onClick={handleClear}
                className="sm:w-auto px-6 py-3.5 border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white rounded-xl transition-all duration-300 font-medium"
                aria-label="Start new search"
              >
                New Search
              </button>
            )}
          </div>

          <p className="text-xs text-slate-500 mt-3 flex items-center gap-1.5">
            <kbd className="px-2 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-400">Enter</kbd>
            to submit
          </p>
        </GlassCard>

        {/* ====== OUTPUT SECTION ====== */}
        {recommendations && (
          <GlassCard className="p-6 sm:p-8 animate-fadeInUp">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text flex items-center gap-2.5">
                <FilmIcon className="w-6 h-6 text-amber-400" />
                Your Personalized Picks
              </h3>
              <span className="text-xs text-slate-500 bg-slate-900/50 px-3 py-1.5 rounded-full">
                5 movies
              </span>
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/60 rounded-xl p-5 sm:p-7 border border-slate-700/30">
              <p className="text-slate-200 whitespace-pre-line leading-relaxed text-sm sm:text-base">
                {recommendations}
              </p>
            </div>

            <div className="mt-5 pt-5 border-t border-slate-700/50">
              <p className="text-sm text-slate-400 text-center">
                💡 Want different suggestions? Modify your preferences and search again.
              </p>
            </div>
          </GlassCard>
        )}

        {/* ====== FOOTER ====== */}
        <footer className="mt-12 sm:mt-16 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
            <SparklesIcon className="w-4 h-4" />
            <span>Powered by Advanced AI</span>
            <span className="text-slate-700">•</span>
            <span>Built for Cinephiles</span>
          </div>
          <p className="text-xs text-slate-600">
            © 2024 Toruk Mator. Enhancing your movie discovery experience.
          </p>
        </footer>
      </main>

      {/* ====== GLOBAL STYLES ====== */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
}