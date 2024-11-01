import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { releasesData } from '../data/releases';

const AllReleases = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredReleases = filter === 'all' 
    ? releasesData 
    : releasesData.filter(release => release.type === filter);

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Latest Releases</h1>
        
        <div className="flex justify-center space-x-4 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full ${
              filter === 'all' ? 'bg-red-600' : 'bg-gray-800'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('single')}
            className={`px-6 py-2 rounded-full ${
              filter === 'single' ? 'bg-red-600' : 'bg-gray-800'
            }`}
          >
            Singles
          </button>
          <button 
            onClick={() => setFilter('album')}
            className={`px-6 py-2 rounded-full ${
              filter === 'album' ? 'bg-red-600' : 'bg-gray-800'
            }`}
          >
            Albums
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredReleases.map((release) => (
            <Link 
              to={`/releases/${release.id}`}
              key={release.id} 
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={release.cover}
                  alt={release.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-red-600 p-4 rounded-full">
                    <Play className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold group-hover:text-red-500">
                  {release.title}
                </h3>
                <p className="text-red-400">{release.artist}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReleases;