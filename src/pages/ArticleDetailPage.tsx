import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Article } from '../types';
import { getArticleById } from '../services/articleService';

export default function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null | undefined>(undefined);

  useEffect(() => {
    if (id) {
      setArticle(getArticleById(id) ?? null);
    }
  }, [id]);

  if (article === undefined) return null;

  if (article === null) {
    return (
      <div>
        <p style={{ color: '#6b7280' }}>Artikel tidak ditemukan.</p>
        <button onClick={() => navigate(-1)} style={btnStyle}>
          &larr; Kembali
        </button>
      </div>
    );
  }

  const tanggal = new Date(article.createdAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div style={{ maxWidth: '720px' }}>
      <button onClick={() => navigate(-1)} style={{ ...btnStyle, marginBottom: '1.5rem' }}>
        &larr; Kembali
      </button>

      <h1 style={{ margin: '0 0 0.5rem', color: '#111827', lineHeight: 1.3 }}>
        {article.title}
      </h1>

      <p style={{ margin: '0 0 0.25rem', color: '#4b5563', fontStyle: 'italic' }}>
        {article.summary}
      </p>

      <small style={{ color: '#9ca3af' }}>
        Ditulis oleh <strong>{article.authorName}</strong> · {tanggal}
      </small>

      <hr style={{ margin: '1.25rem 0', borderColor: '#e5e7eb' }} />

      <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8', color: '#1f2937' }}>
        {article.content}
      </div>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  padding: '0.4rem 0.9rem',
  background: '#f3f4f6',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '0.875rem',
  color: '#374151',
};
