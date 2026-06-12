import { useEffect, useState } from 'react';
import type { Article } from '../types';
import { getArticles } from '../services/articleService';
import ArticleCard from '../components/ArticleCard';
import s from './HomePage.module.css';

export default function HomePage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles(getArticles());
  }, []);

  return (
    <div>
      <h1 className={s.heading}>Daftar Artikel</h1>
      {articles.length === 0 && (
        <p className={s.empty}>Belum ada artikel. Tulis artikel pertamamu!</p>
      )}
      <div className={s.list}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
