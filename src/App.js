import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import PostsPage from './components/PostsPage';
import CommentsPage from './components/CommentsPage';

function App() {
  const isAuthenticated = !!localStorage.getItem('authenticated');

  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/posts" element={isAuthenticated ? <PostsPage /> : <Navigate to="/" />} />
   <Route path="/posts/comments/:postId" element={isAuthenticated ? <CommentsPage /> : <Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;

