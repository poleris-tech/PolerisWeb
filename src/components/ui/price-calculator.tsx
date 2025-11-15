'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, Minus, Calculator, TrendingUp, ArrowRight, Sparkles, Zap, Crown, Rocket, ChevronDown } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';

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
  totalValue: number;
  savings: number;
}

interface PackagePreset {
  id: string;
  name: string;
  icon: any;
  description: string;
  pages: number;
  addOns: {
    blog: boolean;
    unlimitedEdits: boolean;
    seoOptimization: boolean;
    googleAds: boolean;
  };
  badge?: string;
  badgeColor?: string;
}

const PACKAGE_PRESETS: PackagePreset[] = [
  {
    id: 'starter',
    name: 'Starter',
    icon: Rocket,
    description: 'Perfect for small businesses',
    pages: 6,
    addOns: {
      blog: false,
      unlimitedEdits: false,
      seoOptimization: false,
      googleAds: false,
    },
    badge: 'Most Popular',
    badgeColor: 'bg-blue-400',
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: Zap,
    description: 'For growing businesses',
    pages: 10,
    addOns: {
      blog: true,
      unlimitedEdits: false,
      seoOptimization: true,
      googleAds: false,
    },
    badge: 'Best Value',
    badgeColor: 'bg-green-400',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: Crown,
    description: 'Complete digital solution',
    pages: 15,
    addOns: {
      blog: true,
      unlimitedEdits: true,
      seoOptimization: true,
      googleAds: true,
    },
    badge: 'Premium',
    badgeColor: 'bg-purple-400',
  },
];

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

  const [selectedPreset, setSelectedPreset] = useState<string | null>('starter');
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [animatePrice, setAnimatePrice] = useState(false);

  // Base pricing constants
  const BASE_ONE_TIME = 3200;
  const BASE_MONTHLY = 30;
  const INCLUDED_PAGES = 6;
  const PRICE_PER_ADDITIONAL_PAGE = 100;

  // Calculate price breakdown with value proposition
  const calculatePrice = (): PriceBreakdown => {
    const additionalPages = Math.max(0, state.pages - INCLUDED_PAGES);
    const additionalPagesCost = additionalPages * PRICE_PER_ADDITIONAL_PAGE;

    let oneTimeAddOns = 0;
    let monthlyAddOns = 0;

    // Add-on: Blog Integration ($250 one-time, valued at $500)
    if (state.addOns.blog) {
      oneTimeAddOns += 250;
    }

    // Add-on: SEO Optimization ($300 one-time, valued at $800)
    if (state.addOns.seoOptimization) {
      oneTimeAddOns += 300;
    }

    // Add-on: Unlimited Edits ($40/month, valued at $100/month)
    if (state.addOns.unlimitedEdits) {
      monthlyAddOns += 40;
    }

    // Add-on: Google Ads Management ($400/month, valued at $800/month)
    if (state.addOns.googleAds) {
      monthlyAddOns += 400;
    }

    const totalOneTime = BASE_ONE_TIME + additionalPagesCost + oneTimeAddOns;
    const totalMonthly = BASE_MONTHLY + monthlyAddOns;

    // Calculate value (what customer would pay elsewhere)
    const marketValue = 5000; // Base website market value
    const addOnsMarketValue =
      (state.addOns.blog ? 500 : 0) +
      (state.addOns.seoOptimization ? 800 : 0) +
      (additionalPages * 150); // Market rate for pages

    const totalValue = marketValue + addOnsMarketValue;
    const savings = totalValue - totalOneTime;

    return {
      baseOneTime: BASE_ONE_TIME,
      baseMonthly: BASE_MONTHLY,
      additionalPages: additionalPagesCost,
      oneTimeAddOns,
      monthlyAddOns,
      totalOneTime,
      totalMonthly,
      totalValue,
      savings,
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
    setSelectedPreset(null); // Clear preset when manually adjusting
    setState((prev) => ({
      ...prev,
      pages: increment ? Math.min(prev.pages + 1, 30) : Math.max(1, prev.pages - 1),
    }));
  };

  const toggleAddOn = (addOn: keyof typeof state.addOns) => {
    setSelectedPreset(null); // Clear preset when manually adjusting
    setState((prev) => ({
      ...prev,
      addOns: {
        ...prev.addOns,
        [addOn]: !prev.addOns[addOn],
      },
    }));
  };

  const applyPreset = (preset: PackagePreset) => {
    setSelectedPreset(preset.id);
    setState({
      pages: preset.pages,
      addOns: preset.addOns,
    });
  };

  const getActiveAddOnsCount = () => {
    return Object.values(state.addOns).filter(Boolean).length;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      {/* Calculator Header */}
      <div className="text-center mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4"
        >
          <Calculator className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
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
          Choose a preset package or customize your own. See pricing update in real-time.
        </motion.p>
      </div>

      {/* Package Presets */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8 md:mb-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {PACKAGE_PRESETS.map((preset, index) => {
            const Icon = preset.icon;
            const isSelected = selectedPreset === preset.id;

            return (
              <motion.button
                key={preset.id}
                onClick={() => applyPreset(preset)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  isSelected
                    ? 'bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border-cyan-400 shadow-lg shadow-cyan-500/20'
                    : 'bg-white/5 border-white/20 hover:border-white/40 hover:bg-white/10'
                }`}
              >
                {/* Badge */}
                {preset.badge && (
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white ${preset.badgeColor}`}>
                    {preset.badge}
                  </div>
                )}

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-br from-cyan-400 to-blue-500'
                    : 'bg-white/20'
                }`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-white mb-2">{preset.name}</h4>
                <p className="text-white/70 text-sm mb-4">{preset.description}</p>

                {/* Quick Stats */}
                <div className="flex items-center gap-4 text-xs text-white/60">
                  <span>{preset.pages} pages</span>
                  <span>•</span>
                  <span>{Object.values(preset.addOns).filter(Boolean).length} add-ons</span>
                </div>

                {/* Selected Indicator */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 left-3 w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center"
                  >
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

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
            <label className="flex items-center gap-2 text-white font-semibold mb-4">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Number of Pages
              <span className="ml-auto text-xs text-white/60 font-normal">Max 30 pages</span>
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handlePageChange(false)}
                disabled={state.pages <= 1}
                className="w-12 h-12 rounded-xl bg-white/20 hover:bg-white/30 disabled:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
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
                    <span className="text-green-400 flex items-center justify-center gap-1">
                      <Check className="w-4 h-4" />
                      Included in base package
                    </span>
                  ) : (
                    <span className="text-cyan-400">
                      +${(state.pages - INCLUDED_PAGES) * PRICE_PER_ADDITIONAL_PAGE} (${PRICE_PER_ADDITIONAL_PAGE}/page)
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => handlePageChange(true)}
                disabled={state.pages >= 30}
                className="w-12 h-12 rounded-xl bg-white/20 hover:bg-white/30 disabled:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 relative h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(state.pages / 30) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              />
            </div>
          </div>

          {/* Add-ons */}
          <div className="relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
            <label className="flex items-center gap-2 text-white font-semibold mb-4">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              Optional Add-Ons
              {getActiveAddOnsCount() > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto px-3 py-1 rounded-full bg-cyan-400 text-white text-xs font-bold"
                >
                  {getActiveAddOnsCount()} selected
                </motion.span>
              )}
            </label>

            <div className="space-y-3">
              {/* Blog Integration */}
              <AddOnToggle
                label="Blog Integration"
                price={250}
                type="one-time"
                description="Full-featured blog with categories"
                marketValue={500}
                active={state.addOns.blog}
                onToggle={() => toggleAddOn('blog')}
              />

              {/* SEO Optimization */}
              <AddOnToggle
                label="SEO Optimization"
                price={300}
                type="one-time"
                description="Keyword research & optimization"
                marketValue={800}
                active={state.addOns.seoOptimization}
                onToggle={() => toggleAddOn('seoOptimization')}
              />

              {/* Unlimited Edits */}
              <AddOnToggle
                label="Unlimited Edits"
                price={40}
                type="monthly"
                description="Make changes anytime"
                marketValue={100}
                active={state.addOns.unlimitedEdits}
                onToggle={() => toggleAddOn('unlimitedEdits')}
              />

              {/* Google Ads Management */}
              <AddOnToggle
                label="Google Ads Management"
                price={400}
                type="monthly"
                description="Professional ad campaign management"
                marketValue={800}
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

            {/* Savings Badge */}
            {prices.savings > 0 && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-6 p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30"
              >
                <div className="flex items-center gap-2 text-green-400 mb-1">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-bold text-sm">You Save ${prices.savings.toLocaleString()}</span>
                </div>
                <p className="text-xs text-white/70">
                  Compared to market value of ${prices.totalValue.toLocaleString()}
                </p>
              </motion.div>
            )}

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
              className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors mb-4 flex items-center gap-2 group"
            >
              <span>{showBreakdown ? 'Hide' : 'Show'} price breakdown</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showBreakdown ? 'rotate-180' : ''}`} />
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
                    <PriceRow label="Base Package" value={`$${prices.baseOneTime.toLocaleString()}`} />
                    {prices.additionalPages > 0 && (
                      <PriceRow
                        label={`Additional Pages (${state.pages - INCLUDED_PAGES})`}
                        value={`+$${prices.additionalPages.toLocaleString()}`}
                      />
                    )}
                    {prices.oneTimeAddOns > 0 && (
                      <PriceRow label="One-time Add-ons" value={`+$${prices.oneTimeAddOns.toLocaleString()}`} />
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
              href={`?subject=Custom Package Request - ${state.pages} Pages&message=Hi! I'm interested in a custom package with the following:%0A%0A- ${state.pages} pages%0A- Base price: $${prices.baseOneTime.toLocaleString()} one-time + $${prices.baseMonthly}/month${prices.additionalPages > 0 ? `%0A- Additional pages: $${prices.additionalPages.toLocaleString()}` : ''}${state.addOns.blog ? '%0A- Blog integration: $250' : ''}${state.addOns.unlimitedEdits ? '%0A- Unlimited edits: $40/month' : ''}${state.addOns.seoOptimization ? '%0A- SEO optimization: $300' : ''}${state.addOns.googleAds ? '%0A- Google Ads management: $400/month' : ''}%0A%0ATotal: $${prices.totalOneTime.toLocaleString()} one-time + $${prices.totalMonthly}/month%0A%0AI'd like to discuss this package and get started!#contact`}
              variant="comic"
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
  marketValue: number;
  active: boolean;
  onToggle: () => void;
}

function AddOnToggle({ label, price, type, description, marketValue, active, onToggle }: AddOnToggleProps) {
  const savingsPercent = Math.round(((marketValue - price) / marketValue) * 100);

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
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-white font-semibold text-sm">{label}</span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                type === 'monthly' ? 'bg-blue-400/30 text-blue-200' : 'bg-white/20 text-white/80'
              }`}
            >
              {type === 'monthly' ? 'Monthly' : 'One-time'}
            </span>
            {savingsPercent > 0 && (
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-400/30 text-green-200">
                Save {savingsPercent}%
              </span>
            )}
          </div>
          <p className="text-white/60 text-xs mb-2">{description}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-cyan-400 font-bold text-sm">
              ${price}{type === 'monthly' && '/mo'}
            </span>
            {marketValue > price && (
              <span className="text-white/40 text-xs line-through">
                ${marketValue}{type === 'monthly' && '/mo'}
              </span>
            )}
          </div>
        </div>
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            active ? 'bg-cyan-400 border-cyan-400 scale-110' : 'border-white/30'
          }`}
        >
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </motion.div>
            )}
          </AnimatePresence>
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
