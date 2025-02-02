import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllArtists from './pages/AllArtists';
import ArtistDetails from './pages/ArtistDetails';
import AllReleases from './pages/AllReleases';
import AllStudios from './pages/AllStudios';  
import StudioProfile from './pages/Studiosdetails'; 
import ReleaseDetails from './pages/ReleaseDetails';
import StudioPricing from './pages/StudioPricing';
import SubmitDemo from './pages/SubmitDemo';
import AboutUs from './pages/AboutUs';
import JoinLabel from './pages/JoinLabel';
import Support from './pages/MonetizationDetails';

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
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/join-label" element={<JoinLabel />} />
          <Route path="/allstudios" element={<AllStudios />} />
          <Route path="/allstudios/:id" element={<StudioProfile />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;