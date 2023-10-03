import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import FileExplorer from './pages/FileExplorer';
import FolderPage from './pages/FolderPage';

function App() {
  return (
    <div className="App w-full max-w-5xl mx-auto p-5">
      <h1 className='text-3xl font-medium leading-none tracking-tight text-[#646cff] md:text-4xl text-center md:text-left my-6'>Document Explorer</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FileExplorer />} />
          <Route path="/folder/:id" element={<FolderPage />} />
        </Routes>
        <Analytics />
      </BrowserRouter>
    </div>
  );
}

export default App;
