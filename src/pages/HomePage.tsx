import { useAppSelector } from '../store/hooks';
import ArticleCard from '../components/ArticleCard';
import s from './HomePage.module.scss';

export default function HomePage() {
  const articles = useAppSelector((s) => s.articles.items);

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
