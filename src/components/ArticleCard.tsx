import { useNavigate } from 'react-router-dom';
import type { Article } from '../types';

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  const navigate = useNavigate();

  const tanggal = new Date(article.createdAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article style={{
      border: '1px solid #e5e7eb',
      borderRadius: '10px',
      padding: '1.25rem 1.5rem',
      background: '#fff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    }}>
      <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#111827' }}>
        {article.title}
      </h2>
      <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6', fontSize: '0.95rem' }}>
        {article.summary}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem' }}>
        <small style={{ color: '#9ca3af', fontSize: '0.82rem' }}>
          {article.authorName} · {tanggal}
        </small>
        <button
          onClick={() => navigate(`/article/${article.id}`)}
          style={{
            padding: '0.4rem 1rem',
            background: '#1e40af',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: 500,
          }}
        >
          Baca
        </button>
      </div>
    </article>
  );
}
