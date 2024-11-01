import React from 'react';
import { useParams } from 'react-router-dom';
import { Play, Clock, Download } from 'lucide-react';
import { releasesData } from '../data/releases';

const ReleaseDetails = () => {
  const { id } = useParams();
  const release = releasesData.find(r => r.id === id);

  if (!release) return <div>Release not found</div>;

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <img
              src={release.cover}
              alt={release.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-2">{release.title}</h1>
            <p className="text-red-500 text-xl mb-6">{release.artist}</p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <button className="bg-red-600 px-8 py-3 rounded-full flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Play Now
                </button>
                <button className="bg-gray-800 px-8 py-3 rounded-full flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download
                </button>
              </div>
              
              <div className="border-t border-gray-800 pt-6">
                <h2 className="text-2xl font-bold mb-4">Tracklist</h2>
                <div className="space-y-4">
                  {release.tracks.map((track, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-800 group"
                    >
                      <div className="flex items-center space-x-4">
                        <button className="opacity-0 group-hover:opacity-100">
                          <Play className="w-5 h-5" />
                        </button>
                        <span>{track.title}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        {track.duration}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-800 pt-6">
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-gray-300">{release.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseDetails;