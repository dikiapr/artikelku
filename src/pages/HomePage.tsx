import { useEffect, useState } from 'react';
import type { Article } from '../types';
import { getArticles } from '../services/articleService';
import ArticleCard from '../components/ArticleCard';

export default function HomePage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles(getArticles());
  }, []);

  return (
    <div>
      <h1 style={{ marginTop: 0, marginBottom: '1.25rem', color: '#111827' }}>Daftar Artikel</h1>
      {articles.length === 0 && (
        <p style={{ color: '#6b7280' }}>Belum ada artikel. Tulis artikel pertamamu!</p>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
