import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SubmitDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    genre: '',
    social: '',
    message: '',
    demoLink: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_email: 'sdmusicrecordz@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          genre: formData.genre,
          social_links: formData.social,
          message: formData.message,
          demo_link: formData.demoLink,
        },
        'YOUR_PUBLIC_KEY'
      );
      alert('Demo submitted successfully!');
      setFormData({
        name: '',
        email: '',
        genre: '',
        social: '',
        message: '',
        demoLink: '',
      });
    } catch (error) {
      alert('Failed to submit demo. Please try again.');
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-4">Submit Your Demo</h1>
        <p className="text-xl text-center text-gray-400 mb-12">
          Let us hear your music and start your journey with Sonic Realm
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
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
          </div>
          
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
            <label className="block text-sm font-medium mb-2">Demo Link</label>
            <input
              type="url"
              required
              value={formData.demoLink}
              onChange={(e) => setFormData({ ...formData, demoLink: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="SoundCloud, Dropbox, or Google Drive link"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Tell us about yourself and your music"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg transition-colors flex items-center justify-center"
          >
            <Send className="w-5 h-5 mr-2" />
            Submit Demo
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitDemo;