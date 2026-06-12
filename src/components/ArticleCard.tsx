import { useNavigate } from 'react-router-dom';
import type { Article } from '../types';
import s from './ArticleCard.module.scss';

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  const navigate = useNavigate();

  const tanggal = new Date(article.createdAt).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <article className={s.card}>
      <h2 className={s.title}>{article.title}</h2>
      <p className={s.summary}>{article.summary}</p>
      <div className={s.footer}>
        <span className={s.meta}>{article.authorName} · {tanggal}</span>
        <button className={s.readBtn} onClick={() => navigate(`/article/${article.id}`)}>
          Baca
        </button>
      </div>
    </article>
  );
}
