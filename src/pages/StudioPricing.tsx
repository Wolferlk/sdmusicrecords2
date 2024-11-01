import React from 'react';
import { Check } from 'lucide-react';

const StudioPricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 49,
      duration: 'per hour',
      features: [
        'Professional Recording Room',
        'Basic Mixing',
        'Up to 2 Revisions',
        'Digital Distribution',
      ],
    },
    {
      name: 'Pro',
      price: 99,
      duration: 'per hour',
      features: [
        'Premium Recording Suite',
        'Advanced Mixing & Mastering',
        'Unlimited Revisions',
        'Digital Distribution',
        'Music Video Production',
        'Marketing Support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 199,
      duration: 'per hour',
      features: [
        'Luxury Recording Suite',
        'Premium Mixing & Mastering',
        'Unlimited Revisions',
        'Global Distribution',
        'Music Video Production',
        'Full Marketing Campaign',
        'Radio Promotion',
      ],
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-4">Studio Pricing</h1>
        <p className="text-xl text-center text-gray-400 mb-12">
          Professional recording solutions for every budget
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-red-900 to-red-950 border-2 border-red-500'
                  : 'bg-gray-900'
              }`}
            >
              {plan.popular && (
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="ml-2 text-gray-400">{plan.duration}</span>
              </div>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-red-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full mt-8 px-6 py-3 rounded-lg ${
                plan.popular
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-gray-800 hover:bg-gray-700'
              } transition-colors`}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudioPricing;