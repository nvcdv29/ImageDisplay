import React from 'react';
import { ImageSection } from './components/ImageSection';
import { Layout } from 'lucide-react';
import { loadImages } from './utils/imageLoader';

function App() {
  const imageData = loadImages();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <Layout className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">Image Gallery</h1>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {imageData.map((category, index) => (
          <ImageSection key={index} category={category} />
        ))}
      </main>
    </div>
  );
}

export default App;