import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { releasesData } from '../data/releases';

const AllReleases = () => {
  const [filter, setFilter] = useState('all');

  // Filter the releases based on the selected filter
  const filteredReleases = filter === 'all' 
    ? releasesData 
    : releasesData.filter(release => release.type === filter);

  return (
    <section id="releases" className="py-20 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Releases</h2>
        
        {/* Scrollable Container */}
        <div className="overflow-x-auto">
          <div className="flex space-x-8">
            {/* Map through filteredReleases */}
            {filteredReleases.map((release) => (
              <div key={release.id} className="group relative min-w-[250px]">
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  <img
                    src={release.cover}
                    alt={release.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-purple-500 p-4 rounded-full">
                      <Play className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{release.title}</h3>
                  <p className="text-purple-400">{release.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllReleases;
