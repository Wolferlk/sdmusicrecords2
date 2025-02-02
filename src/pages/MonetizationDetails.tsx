import React, { useState } from 'react';
import { motion } from 'framer-motion';

const monetizationData = [
    {
      id: 'facebook',
      name: 'Facebook',
      category: 'Social Media',
      details: `Facebook (now Meta) offers monetization options, but whether you can earn revenue from your Facebook post views depends on the type of content and your eligibility. Here’s how you can potentially earn:
  
  1. Facebook In-Stream Ads (For Videos)** - If your post is a video, you can earn money through in-stream ads if you meet eligibility criteria.
  2. Facebook Stars (For Live Videos & Reels)** - Fans can **send Stars** as a virtual gift system.
  3. Facebook Ads Revenue (Branded Content & Ads on Reels)** - Earn from sponsored posts and reels ads.
  4. Facebook Bonus Programs (Invite-Only)** - Meta offers bonuses for viral posts, reels, or new features.
  
  🔹 **Important:** Normal text/image posts don’t generate revenue. Only videos, reels, and branded content have earning potential.`,
      requirements: [
        '10,000 followers',
        '600,000 minutes of watch time in the last 60 days',
        'At least 5 active videos',
        'Comply with Facebook Partner Monetization Policies'
      ],
      earningPotential: '$1 – $3 per 1,000 views, varies based on ad revenue.'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      category: 'Video Streaming',
      details: `YouTube offers revenue opportunities if your video gets views, but you must meet certain eligibility criteria:
  
  1. YouTube Partner Program (YPP) – Ad Revenue - Meet the YPP requirements to earn from ads.
  2. YouTube Shorts Monetization - Earn through Shorts ad revenue sharing.
  3. Super Chat, Super Stickers & Super Thanks - Viewers can donate money during live streams.
  4. Channel Memberships  - Offer exclusive content for a monthly fee.
  5. Brand Deals & Affiliate Marketing - Partner with brands for sponsorships.`,
      requirements: [
        '500 subscribers',
        '3,000 public watch hours in the past 12 months or 3 million Shorts views in the last 90 days',
        '2-Step Verification enabled',
        'No active community guideline strikes'
      ],
      earningPotential: '$1 – $3 per 1,000 views, sponsorships and memberships can increase earnings.'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      category: 'Social Media',
      details: `Instagram offers multiple ways to earn money from views, depending on the type of content:
  
  1. Instagram Reels Bonuses (Invite-Only) - Get paid based on Reels views & performance.
  2. Instagram Ads Revenue Sharing - Earn from long-form videos & reels.
  3. Instagram Subscriptions (Memberships) - Offer exclusive content to paying subscribers.
  4. Brand Sponsorships & Affiliate Marketing - Get paid for sponsored posts.
  5. Instagram Badges (Live Streams) - Viewers can send Badges (donations) during live streams.`,
      requirements: [
        '10,000+ followers',
        'High engagement & watch time',
        'Must be 18+',
        'Live in an eligible country'
      ],
      earningPotential: '$50 – $500 per post for small influencers, up to $10,000+ for larger accounts.'
    },
    {
      id: 'spotify',
      name: 'Spotify',
      category: 'Music Streaming',
      details: `Spotify allows artists to earn money from their music, but payouts depend on streams:
  
  1. Spotify Royalties (Per Stream Earnings) - Earn around **$0.003 – $0.005 per stream**.
  2. Spotify Fan Support (Tips & Donations) - Listeners can send direct tips.
  3. Spotify Artist Subscriptions & Exclusive Content - Paid artist subscriptions are in testing.
  4. Sponsorships & Brand Deals - Partner with brands for promotions.
  5. Performing Live & Selling Merch - Promote live shows and sell merchandise via Spotify.`,
      requirements: [
        'Upload music through a Spotify-approved distributor',
        'Promote songs to get more streams',
        'Engage with fans & get on popular playlists'
      ],
      earningPotential: '$3,000 – $5,000 per 1 million streams, more from sponsorships and merch.'
    }
  ];

const MonetizationDetails = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  return (
    <div className="pt-16 min-h-screen bg-gray-900 text-white px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center">Monetization Details</h1>
      <div className="flex space-x-4 mb-6">
        {monetizationData.map((platform) => (
          <button
            key={platform.id}
            onClick={() => setSelectedPlatform(platform)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedPlatform?.id === platform.id ? 'bg-purple-500 text-white' : 'bg-gray-700 hover:bg-purple-400'
            }`}
          >
            {platform.name}
          </button>
        ))}
      </div>
      {selectedPlatform && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 p-6 rounded-lg w-full max-w-3xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-2">{selectedPlatform.name} Monetization</h2>
          <p className="text-purple-400 text-lg mb-4">{selectedPlatform.category}</p>
          <p className="mb-4 whitespace-pre-line">{selectedPlatform.details}</p>
          <h3 className="text-2xl font-bold mt-4 mb-2">Requirements</h3>
          <ul className="list-disc pl-5 space-y-2">
            {selectedPlatform.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
          <h3 className="text-2xl font-bold mt-4 mb-2">Earning Potential</h3>
          <p>{selectedPlatform.earningPotential}</p>
        </motion.div>
      )}
    </div>
  );
};

export default MonetizationDetails;
