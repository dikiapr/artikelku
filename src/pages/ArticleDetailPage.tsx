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
      const found = getArticleById(id);
      setArticle(found ?? null);
    }
  }, [id]);

  if (article === undefined) return null;

  if (article === null) {
    return (
      <div>
        <p>Artikel tidak ditemukan.</p>
        <button onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '720px' }}>
      <button onClick={() => navigate(-1)} style={{ cursor: 'pointer', marginBottom: '1rem' }}>
        &larr; Kembali
      </button>
      <h1>{article.title}</h1>
      <small style={{ color: '#888' }}>
        Oleh {article.authorName} · {new Date(article.createdAt).toLocaleDateString('id-ID')}
      </small>
      <hr />
      <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.7' }}>{article.content}</div>
    </div>
  );
}
