import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogListPage from './blog_list';
import BlogDetailPage from './blog_detail';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogListPage />} />
        <Route path="/post/:id" element={<BlogDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
