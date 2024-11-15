import React from 'react';
import { useParams } from 'react-router-dom';
import { artistsData } from '../data/artists';
import { Instagram, Twitter, Youtube, Globe } from 'lucide-react';

const ArtistDetails = () => {
  const { id } = useParams();
  const artist = artistsData.find(a => a.id === id);

  if (!artist) return <div>Artist not found</div>;

  return (
    <div className="pt-16 min-h-screen">
      <div className="relative h-[50vh]">
        <img
          src={artist.coverImage}
          alt={artist.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{artist.name}</h1>
            <p className="text-red-500 text-xl mb-6">{artist.genre}</p>
            <div className="prose prose-invert max-w-none">
              {artist.bio.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}

              {/* YouTube Embed */}
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src={artist.yts}
                  style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0,
                  }}
                  allowFullScreen
                  scrolling="no"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Social Media</h2>
              <div className="flex space-x-4">
                {artist.social.instagram && (
                  <a href={artist.social.instagram} className="text-white hover:text-red-500">
                    <Instagram className="w-6 h-6" />
                  </a>
                )}
                {artist.social.spotify && (
                  <a href={artist.social.spotify} className="text-white hover:text-red-500">
                    <Instagram className="w-6 h-6" />
                  </a>
                )}
                {artist.social.twitter && (
                  <a href={artist.social.twitter} className="text-white hover:text-red-500">
                    <Twitter className="w-6 h-6" />
                  </a>
                )}
                {artist.social.youtube && (
                  <a href={artist.social.youtube} className="text-white hover:text-red-500">
                    <Youtube className="w-6 h-6" />
                  </a>
                )}
                {artist.website && (
                  <a href={artist.website} className="text-white hover:text-red-500">
                    <Globe className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Latest Releases</h2>
              {artist.spot && (
                <iframe
                  style={{ borderRadius: '12px' }}
                  src={artist.spot}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              )}
              <div className="space-y-4">
                {artist.releases.map((release) => (
                  <div key={release.id} className="group flex items-center space-x-4">
                    <img
                      src={release.cover}
                      alt={release.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold group-hover:text-red-500">
                        {release.title}
                      </h3>
                      <p className="text-sm text-gray-400">{release.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ArtistDetails;
