import { Routes, Route } from 'react-router-dom';
import MasterLayout from './layout/MasterLayout';
import HomePage from './pages/HomePage';
import ArticleDetailPage from './pages/ArticleDetailPage';

export default function App() {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticleDetailPage />} />
      </Route>
    </Routes>
  );
}
