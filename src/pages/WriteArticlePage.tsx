import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { addArticle } from '../services/articleService';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import s from './WriteArticlePage.module.scss';

export default function WriteArticlePage() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!currentUser) return;
    setLoading(true);
    addArticle({
      title: title.trim(),
      summary: summary.trim(),
      content: content.trim(),
      authorName: currentUser.username,
    });
    navigate('/');
  }

  return (
    <div className={s.wrapper}>
      <h1 className={s.heading}>Tulis Artikel</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <Input
          label="Judul"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Judul artikel..."
        />
        <Textarea
          label="Ringkasan"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
          rows={3}
          placeholder="Ringkasan singkat yang tampil di halaman utama..."
        />
        <Textarea
          label="Isi Artikel"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={12}
          placeholder="Tulis isi artikel selengkap-lengkapnya di sini..."
        />
        <div className={s.actions}>
          <Button type="submit" loading={loading}>Terbitkan Artikel</Button>
          <Button type="button" variant="secondary" onClick={() => navigate(-1)}>Batal</Button>
        </div>
      </form>
    </div>
  );
}
