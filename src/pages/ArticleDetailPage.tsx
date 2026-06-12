import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticleById } from '../services/articleService';
import s from './ArticleDetailPage.module.scss';

export default function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = useMemo(() => (id ? getArticleById(id) ?? null : null), [id]);

  if (article === null) {
    return (
      <div>
        <p className={s.notFound}>Artikel tidak ditemukan.</p>
        <button className={s.backBtn} onClick={() => navigate(-1)}>← Kembali</button>
      </div>
    );
  }

  const tanggal = new Date(article.createdAt).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <div className={s.wrapper}>
      <button className={s.backBtn} onClick={() => navigate(-1)}>← Kembali</button>
      <h1 className={s.title}>{article.title}</h1>
      <p className={s.summary}>{article.summary}</p>
      <span className={s.meta}>
        Ditulis oleh <strong>{article.authorName}</strong> · {tanggal}
      </span>
      <hr className={s.divider} />
      <div className={s.content}>{article.content}</div>
    </div>
  );
}
