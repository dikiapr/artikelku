import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Article } from '../types';
import { getArticles } from '../services/articleService';

export default function HomePage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setArticles(getArticles());
  }, []);

  return (
    <div>
      <h1>Daftar Artikel</h1>
      {articles.length === 0 && <p>Belum ada artikel.</p>}
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {articles.map((article) => (
          <li key={article.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
            <h2 style={{ margin: '0 0 0.5rem' }}>{article.title}</h2>
            <p style={{ margin: '0 0 0.75rem', color: '#555' }}>{article.summary}</p>
            <small style={{ color: '#888' }}>
              Oleh {article.authorName} · {new Date(article.createdAt).toLocaleDateString('id-ID')}
            </small>
            <br />
            <button
              onClick={() => navigate(`/article/${article.id}`)}
              style={{ marginTop: '0.75rem', cursor: 'pointer' }}
            >
              Baca
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
