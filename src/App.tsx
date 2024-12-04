import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Layout/Header';
import { MediaGrid } from './components/Media/MediaGrid';
import { UploadForm } from './components/Upload/UploadForm';

// Demo data
const demoMedia = [
  {
    id: '1',
    title: 'Mountain Landscape',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    type: 'image' as const,
    tags: ['nature', 'landscape'],
    uploadedBy: '1',
    uploadedAt: new Date(),
  },
  {
    id: '2',
    title: 'Urban Architecture',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    type: 'image' as const,
    tags: ['city', 'architecture'],
    uploadedBy: '1',
    uploadedAt: new Date(),
  },
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route
              path="/"
              element={
                <MediaGrid
                  items={demoMedia}
                  onItemClick={(item) => console.log('Clicked:', item)}
                />
              }
            />
            <Route path="/upload" element={<UploadForm />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;