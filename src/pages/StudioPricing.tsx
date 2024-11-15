import React from 'react';
import { Check } from 'lucide-react';

const StudioPricing = () => {
  const plans = [
    {
      name: 'Cover Song',
      price: 'LKR 20 000' ,
      duration: 'Song Only',
      features: [
        '🔥 Re-Arrenge Music Track  ',
        '🔥 Mixing & MAstering',
        '🔥 Professional Voice Recording ',
        '🔥 Digital Distribution',
        '🔥 Live Guitars: LKR 5000 to add live guitars to the track.',
        '⭕ Live Instrument Players: If you want to add live instruments, you must import the players and pay for their session.',
        '⭕ Production Time: Expect to finish production in the second or third week after confirmation.',
        '🛑 Reordering Fee: If reordering is required due to your mistake, it will cost LKR 1000 per hour.',
        '⭕ Advance Payment: LKR 10 000 advance is required to confirm your booking.',
        '⭕ Advance Policy: Advance payment will never be refunded.'
      ],
    },
    {
      name: 'Original Song',
      price: 'LKR 45 000/=',
      duration: ' ',
      features: [
        '🔥 Music Compposing ',
        '🔥 Vocal Recording (4 hours)',
        '🔥 Digital Mix & Mastering',
        '🔥 Additional Vocal or Instrumental Recording Hour: LKR 1500 per hour.',
        '🔥 Melody Creation: LKR 5000 for melody addition.',
        '🔥 Live Guitars: LKR 5000 to add live guitars to the track.',
        '⭕ Live Instrument Players: If you want to add live instruments, you must import the players and pay for their session.',
        '⭕ Production Time: Expect to finish production in the third or fourth week after confirmation.',
        '🛑 Reordering Fee: If reordering is required due to your mistake, it will cost LKR 1000 per hour.',
        '⭕ Advance Payment: LKR 15 000 advance is required to confirm your booking.',
        '⭕ Advance Policy: Advance payment will never be refunded.',
      ],
      popular: true,
    },
    {
      name: 'Cover Song with Video ',
      price: 'LKR 25 000/=',
      duration: ' ',
      features: [
        '🔥 Re-Arrenge Music Track  ',
        '🔥 Mixing & MAstering',
        '🔥 Professional Voice Recording ',
        '🔥 Studio Video Recording & Edit  ',
        '🔥 Digital Distribution',
        '🔥 Live Guitars: LKR 5000 to add live guitars to the track.',
        '⭕ Live Instrument Players: If you want to add live instruments, you must import the players and pay for their session.',
        '⭕ Production Time: Expect to finish production in the second or third week after confirmation.',
        '🛑 Reordering Fee: If reordering is required due to your mistake, it will cost LKR 1000 per hour.',
        '⭕ Advance Payment: LKR 10 000 advance is required to confirm your booking.',
        '⭕ Advance Policy: Advance payment will never be refunded.'
      ],
      
    },
    {
      name: 'Recording',
      price: 'LKR 1700/=',
      duration: 'per hour',
      features: [
        'Luxury Recording Suite',
        'Raw Audio Tracks',
        'We Transfer Downloadble Link',
      ],
      
    },
    {
      name: 'Karaoke Recordings',
      price: 'LKR 3 500/=' ,
      duration: ' ',
      features: [
        'Voice Recording (1 hour) ',
        'Basic Mix And Mastering',
        'We Transfer Downloadble Link',
        'Additional Vocal or Instrumental Recording Hour: LKR 1500 per hour.',
        '⭕ Studio Video LKR 5000 /= (Additional)',
      ],
      
    }, {
      name: 'Video Production',
      price: 'LKR 35 000/=',
      duration: ' ',
      features:  [
        '🔥 Script Writing: Custom script written for your video concept.',
        '🔥 Filming (One day): Includes video shoot with a professional crew.',
        '🔥 Digital Video Editing: High-quality editing to create a polished final video.',
        '🔥 Color Grading: Enhancing the video with professional color correction.',
        '🔥 Additional Filming Hours: LKR 15 000 for Extra Day shooting.',
        '🔥 Professional Motion Graphics: LKR 5000 for adding motion graphics to the video.',
        '⭕ Studio/Location Setup: We provide studio setup or location scouting; you may choose your preferred location.',
        '⭕ Production Time: Expect to finish production within 2-3 weeks after confirmation.',
        '🛑 Reordering Fee: If reordering is required due to your mistake, it will cost LKR 1000 per hour.',
        '⭕ Advance Payment: LKR 15 000 advance is required to confirm your booking.',
        '⭕ Advance Policy: Advance payment will never be refunded.',
      ],
      popular: true,
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
                <span className="text-4xl font-bold">{plan.price}</span>
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