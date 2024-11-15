import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import { studiosData } from '../data/studios';  // Assuming you have a `studiosData` array
import { Instagram, Twitter, Youtube, Globe } from 'lucide-react';

const StudioDetails = () => {
  const { id } = useParams();
  const studio = studiosData.find(a => a.id === id);

  if (!studio) return <div>Artist not found</div>;

   // State for managing the current image in the gallery
   const [currentImage, setCurrentImage] = useState(0);

   // Handle previous image
   const handlePrevImage = () => {
     setCurrentImage((prev) => (prev === 0 ? studio.images.length - 1 : prev - 1));
   };
 
   // Handle next image
   const handleNextImage = () => {
     setCurrentImage((prev) => (prev === studio.images.length - 1 ? 0 : prev + 1));
   };

  return (
    <div className="pt-16 min-h-screen">
      {/* Studio Cover Image */}
      <div className="relative h-[50vh]">
        <img
          src={studio.coverImage}
          alt={studio.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{studio.name}</h1>
            <p className="text-red-500 text-xl mb-6">{studio.genre}</p>
            <div className="prose prose-invert max-w-none">
              {studio.description.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}

              {/* Auto-changing Images */}
              {studio.images.length > 0 && (
                <div className="relative mb-6">
                  <img
                    src={studio.images[currentImage]}
                    alt={`Image ${currentImage + 1}`}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-50" />
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white cursor-pointer p-4" onClick={handlePrevImage}>
                    &#8592;
                  </div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white cursor-pointer p-4" onClick={handleNextImage}>
                    &#8594;
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Studio Details Sidebar */}
          <div className="space-y-8">
            {/* Social Media Links */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Social Media</h2>
              <div className="flex space-x-4">
                {studio.social?.instagram && (
                  <a href={studio.social.instagram} className="text-white hover:text-red-500" aria-label="Instagram">
                    <Instagram className="w-6 h-6" />
                  </a>
                )}
                {studio.social?.twitter && (
                  <a href={studio.social.twitter} className="text-white hover:text-red-500" aria-label="Twitter">
                    <Twitter className="w-6 h-6" />
                  </a>
                )}
                {studio.social?.youtube && (
                  <a href={studio.social.youtube} className="text-white hover:text-red-500" aria-label="YouTube">
                    <Youtube className="w-6 h-6" />
                  </a>
                )}
                {studio.website && (
                  <a href={studio.website} className="text-white hover:text-red-500" aria-label="Website">
                    <Globe className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>

            

            {/* Equipment List */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Equipment</h2>
              <ul className="space-y-2">
                {studio.equipment.map((item, index) => (
                  <li key={index} className="text-gray-400">{item}</li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <p className="text-gray-400">Phone: {studio.contact.phone}</p>
              <p className="text-gray-400">Email: {studio.contact.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioDetails;
