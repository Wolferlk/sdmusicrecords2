import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllArtists from './pages/AllArtists';
import ArtistDetails from './pages/ArtistDetails';
import AllReleases from './pages/AllReleases';
import ReleaseDetails from './pages/ReleaseDetails';
import StudioPricing from './pages/StudioPricing';
import SubmitDemo from './pages/SubmitDemo';
import JoinLabel from './pages/JoinLabel';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<AllArtists />} />
          <Route path="/artists/:id" element={<ArtistDetails />} />
          <Route path="/releases" element={<AllReleases />} />
          <Route path="/releases/:id" element={<ReleaseDetails />} />
          <Route path="/studio-pricing" element={<StudioPricing />} />
          <Route path="/submit-demo" element={<SubmitDemo />} />
          <Route path="/join-label" element={<JoinLabel />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;