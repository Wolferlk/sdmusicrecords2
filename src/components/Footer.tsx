import React from 'react';
import { Instagram, Twitter, Youtube, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Music className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold">SD MUSIC RECORDS</span>
            </div>
            <p className="text-gray-400">
              Shaping the future of music through innovation and artistic excellence
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-purple-500">Home</a></li>
              <li><a href="#artists" className="text-gray-400 hover:text-purple-500">Artists</a></li>
              <li><a href="#releases" className="text-gray-400 hover:text-purple-500">Releases</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-500">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-500">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sonic Realm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;