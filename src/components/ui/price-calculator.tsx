'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, Minus, Calculator, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';
import { ADD_ONS } from '@/constants/site-data';

interface CalculatorState {
  pages: number;
  addOns: {
    blog: boolean;
    unlimitedEdits: boolean;
    seoOptimization: boolean;
    googleAds: boolean;
  };
}

interface PriceBreakdown {
  baseOneTime: number;
  baseMonthly: number;
  additionalPages: number;
  oneTimeAddOns: number;
  monthlyAddOns: number;
  totalOneTime: number;
  totalMonthly: number;
}

export function PriceCalculator() {
  const [state, setState] = useState<CalculatorState>({
    pages: 6,
    addOns: {
      blog: false,
      unlimitedEdits: false,
      seoOptimization: false,
      googleAds: false,
    },
  });

  const [showBreakdown, setShowBreakdown] = useState(false);
  const [animatePrice, setAnimatePrice] = useState(false);

  // Base pricing constants
  const BASE_ONE_TIME = 3200;
  const BASE_MONTHLY = 30;
  const INCLUDED_PAGES = 6;
  const PRICE_PER_ADDITIONAL_PAGE = 100;

  // Calculate price breakdown
  const calculatePrice = (): PriceBreakdown => {
    const additionalPages = Math.max(0, state.pages - INCLUDED_PAGES);
    const additionalPagesCost = additionalPages * PRICE_PER_ADDITIONAL_PAGE;

    let oneTimeAddOns = 0;
    let monthlyAddOns = 0;

    // Add-on: Blog Integration ($250 one-time)
    if (state.addOns.blog) {
      oneTimeAddOns += 250;
    }

    // Add-on: SEO Optimization ($300 one-time)
    if (state.addOns.seoOptimization) {
      oneTimeAddOns += 300;
    }

    // Add-on: Unlimited Edits ($40/month)
    if (state.addOns.unlimitedEdits) {
      monthlyAddOns += 40;
    }

    // Add-on: Google Ads Management ($400/month)
    if (state.addOns.googleAds) {
      monthlyAddOns += 400;
    }

    return {
      baseOneTime: BASE_ONE_TIME,
      baseMonthly: BASE_MONTHLY,
      additionalPages: additionalPagesCost,
      oneTimeAddOns,
      monthlyAddOns,
      totalOneTime: BASE_ONE_TIME + additionalPagesCost + oneTimeAddOns,
      totalMonthly: BASE_MONTHLY + monthlyAddOns,
    };
  };

  const prices = calculatePrice();

  // Trigger animation when price changes
  useEffect(() => {
    setAnimatePrice(true);
    const timer = setTimeout(() => setAnimatePrice(false), 500);
    return () => clearTimeout(timer);
  }, [state]);

  const handlePageChange = (increment: boolean) => {
    setState((prev) => ({
      ...prev,
      pages: increment ? prev.pages + 1 : Math.max(1, prev.pages - 1),
    }));
  };

  const toggleAddOn = (addOn: keyof typeof state.addOns) => {
    setState((prev) => ({
      ...prev,
      addOns: {
        ...prev.addOns,
        [addOn]: !prev.addOns[addOn],
      },
    }));
  };

  const getActiveAddOnsCount = () => {
    return Object.values(state.addOns).filter(Boolean).length;
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Calculator Header */}
      <div className="text-center mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 mb-4"
        >
          <Calculator className="w-6 h-6 text-cyan-400" />
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Calculate Your <span className="text-cyan-300">Custom Price</span>
          </h3>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto"
        >
          Customize your package and see the price update in real-time. No surprises, just transparency.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Column: Configuration */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          {/* Number of Pages */}
          <div className="relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
            <label className="block text-white font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Number of Pages
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handlePageChange(false)}
                disabled={state.pages <= 1}
                className="w-12 h-12 rounded-xl bg-white/20 hover:bg-white/30 disabled:bg-white/10 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Minus className="w-5 h-5 text-white" />
              </button>

              <div className="flex-1 text-center">
                <motion.div
                  key={state.pages}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-4xl font-black text-white"
                >
                  {state.pages}
                </motion.div>
                <div className="text-sm text-white/70 mt-1">
                  {state.pages <= INCLUDED_PAGES ? (
                    <span className="text-green-400">Included in base package</span>
                  ) : (
                    <span className="text-cyan-400">
                      +${(state.pages - INCLUDED_PAGES) * PRICE_PER_ADDITIONAL_PAGE} (${PRICE_PER_ADDITIONAL_PAGE}/page)
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => handlePageChange(true)}
                className="w-12 h-12 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Add-ons */}
          <div className="relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
            <label className="block text-white font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              Optional Add-Ons
              {getActiveAddOnsCount() > 0 && (
                <span className="ml-auto px-3 py-1 rounded-full bg-cyan-400 text-white text-xs font-bold">
                  {getActiveAddOnsCount()} selected
                </span>
              )}
            </label>

            <div className="space-y-3">
              {/* Blog Integration */}
              <AddOnToggle
                label="Blog Integration"
                price={250}
                type="one-time"
                description="Full-featured blog with categories"
                active={state.addOns.blog}
                onToggle={() => toggleAddOn('blog')}
              />

              {/* SEO Optimization */}
              <AddOnToggle
                label="SEO Optimization"
                price={300}
                type="one-time"
                description="Keyword research & optimization"
                active={state.addOns.seoOptimization}
                onToggle={() => toggleAddOn('seoOptimization')}
              />

              {/* Unlimited Edits */}
              <AddOnToggle
                label="Unlimited Edits"
                price={40}
                type="monthly"
                description="Make changes anytime"
                active={state.addOns.unlimitedEdits}
                onToggle={() => toggleAddOn('unlimitedEdits')}
              />

              {/* Google Ads Management */}
              <AddOnToggle
                label="Google Ads Management"
                price={400}
                type="monthly"
                description="Professional ad campaign management"
                active={state.addOns.googleAds}
                onToggle={() => toggleAddOn('googleAds')}
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Price Summary */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:sticky lg:top-24 h-fit"
        >
          <div className="relative rounded-2xl bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 backdrop-blur-md border-2 border-white/30 p-6 sm:p-8 shadow-2xl">
            {/* Sparkle decoration */}
            <div className="absolute top-4 right-4">
              <Sparkles className="w-6 h-6 text-cyan-300 animate-pulse" />
            </div>

            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Calculator className="w-6 h-6 text-cyan-400" />
              Your Custom Package
            </h4>

            {/* Price Display */}
            <div className="mb-6 pb-6 border-b border-white/20">
              {/* One-time Cost */}
              <div className="mb-4">
                <div className="text-white/70 text-sm mb-2">One-time Investment</div>
                <motion.div
                  key={prices.totalOneTime}
                  initial={{ scale: 1.05 }}
                  animate={{ scale: animatePrice ? 1.05 : 1 }}
                  className="text-5xl font-black text-white flex items-baseline gap-2"
                >
                  <span className="text-2xl">$</span>
                  {prices.totalOneTime.toLocaleString()}
                </motion.div>
              </div>

              {/* Monthly Cost */}
              <div>
                <div className="text-white/70 text-sm mb-2">Monthly Hosting</div>
                <motion.div
                  key={prices.totalMonthly}
                  initial={{ scale: 1.05 }}
                  animate={{ scale: animatePrice ? 1.05 : 1 }}
                  className="text-3xl font-bold text-cyan-300 flex items-baseline gap-2"
                >
                  <span className="text-xl">$</span>
                  {prices.totalMonthly}
                  <span className="text-base text-white/60">/month</span>
                </motion.div>
              </div>
            </div>

            {/* Price Breakdown Toggle */}
            <button
              onClick={() => setShowBreakdown(!showBreakdown)}
              className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors mb-4 flex items-center gap-2"
            >
              {showBreakdown ? 'Hide' : 'Show'} price breakdown
              <ArrowRight className={`w-4 h-4 transition-transform ${showBreakdown ? 'rotate-90' : ''}`} />
            </button>

            {/* Animated Breakdown */}
            <AnimatePresence>
              {showBreakdown && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mb-6 pb-6 border-b border-white/20"
                >
                  <div className="space-y-2 text-sm">
                    <PriceRow label="Base Package" value={`$${prices.baseOneTime}`} />
                    {prices.additionalPages > 0 && (
                      <PriceRow
                        label={`Additional Pages (${state.pages - INCLUDED_PAGES})`}
                        value={`+$${prices.additionalPages}`}
                      />
                    )}
                    {prices.oneTimeAddOns > 0 && (
                      <PriceRow label="One-time Add-ons" value={`+$${prices.oneTimeAddOns}`} />
                    )}
                    {prices.monthlyAddOns > 0 && (
                      <PriceRow label="Monthly Add-ons" value={`+$${prices.monthlyAddOns}/mo`} />
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* What's Included */}
            <div className="mb-6">
              <h5 className="text-white font-semibold mb-3 text-sm">Always Included:</h5>
              <ul className="space-y-2">
                <IncludedFeature text="Mobile-responsive design" />
                <IncludedFeature text="SEO-ready structure" />
                <IncludedFeature text="SSL & domain setup" />
                <IncludedFeature text="1 year priority support" />
                <IncludedFeature text="Google Analytics" />
              </ul>
            </div>

            {/* CTA Button */}
            <CustomButton
              href="#contact"
              variant="primary"
              size="lg"
              className="w-full bg-white text-blue-700 hover:bg-white/90 border-0 shadow-xl hover:shadow-2xl"
            >
              Request This Package
              <ArrowRight className="ml-2 w-5 h-5" />
            </CustomButton>

            <p className="text-white/60 text-xs text-center mt-4">
              Free consultation • No hidden fees • Start today
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Helper Components
interface AddOnToggleProps {
  label: string;
  price: number;
  type: 'one-time' | 'monthly';
  description: string;
  active: boolean;
  onToggle: () => void;
}

function AddOnToggle({ label, price, type, description, active, onToggle }: AddOnToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileTap={{ scale: 0.98 }}
      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
        active
          ? 'bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border-cyan-400'
          : 'bg-white/5 border-white/10 hover:border-white/20'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-white font-semibold text-sm">{label}</span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                type === 'monthly' ? 'bg-blue-400/30 text-blue-200' : 'bg-white/20 text-white/80'
              }`}
            >
              {type === 'monthly' ? 'Monthly' : 'One-time'}
            </span>
          </div>
          <p className="text-white/60 text-xs mb-2">{description}</p>
          <div className="text-cyan-400 font-bold text-sm">
            ${price}{type === 'monthly' && '/mo'}
          </div>
        </div>
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            active ? 'bg-cyan-400 border-cyan-400' : 'border-white/30'
          }`}
        >
          {active && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
        </div>
      </div>
    </motion.button>
  );
}

interface PriceRowProps {
  label: string;
  value: string;
}

function PriceRow({ label, value }: PriceRowProps) {
  return (
    <div className="flex justify-between items-center text-white/80">
      <span>{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function IncludedFeature({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-white/80 text-sm">
      <div className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
        <Check className="w-2.5 h-2.5 text-green-400" strokeWidth={3} />
      </div>
      {text}
    </li>
  );
}
