import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const JoinLabel = () => {
  const [formData, setFormData] = useState({
    artistName: '',
    realName: '',
    email: '',
    phone: '',
    genre: '',
    location: '',
    experience: '',
    social: '',
    portfolio: '',
    goals: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_email: 'sdmusicrecordz@gmail.com',
          artist_name: formData.artistName,
          real_name: formData.realName,
          email: formData.email,
          phone: formData.phone,
          genre: formData.genre,
          location: formData.location,
          experience: formData.experience,
          social_links: formData.social,
          portfolio: formData.portfolio,
          goals: formData.goals,
        },
        'YOUR_PUBLIC_KEY'
      );
      alert('Application submitted successfully!');
      setFormData({
        artistName: '',
        realName: '',
        email: '',
        phone: '',
        genre: '',
        location: '',
        experience: '',
        social: '',
        portfolio: '',
        goals: '',
      });
    } catch (error) {
      alert('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-4">Join Our Label</h1>
        <p className="text-xl text-center text-gray-400 mb-12">
          Take your music career to the next level with Sonic Realm
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Artist/Band Name</label>
              <input
                type="text"
                required
                value={formData.artistName}
                onChange={(e) => setFormData({ ...formData, artistName: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Real Name</label>
              <input
                type="text"
                required
                value={formData.realName}
                onChange={(e) => setFormData({ ...formData, realName: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Genre</label>
              <input
                type="text"
                required
                value={formData.genre}
                onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Music Experience</label>
            <textarea
              rows={3}
              required
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Tell us about your musical background and achievements"
            ></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Social Media Links</label>
            <input
              type="text"
              value={formData.social}
              onChange={(e) => setFormData({ ...formData, social: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Instagram, YouTube, SoundCloud, etc."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Portfolio/Music Links</label>
            <input
              type="text"
              required
              value={formData.portfolio}
              onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Links to your music, videos, or press coverage"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Career Goals</label>
            <textarea
              rows={4}
              required
              value={formData.goals}
              onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="What are your musical aspirations and how can we help achieve them?"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg transition-colors flex items-center justify-center"
          >
            <Send className="w-5 h-5 mr-2" />
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinLabel;