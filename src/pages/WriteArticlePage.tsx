import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { addArticle } from '../services/articleService';
import s from './WriteArticlePage.module.css';

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
        <div className={s.field}>
          <label className={s.label}>Judul</label>
          <input
            className={s.input}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Judul artikel..."
          />
        </div>
        <div className={s.field}>
          <label className={s.label}>Ringkasan</label>
          <textarea
            className={s.textarea}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            rows={3}
            placeholder="Ringkasan singkat yang tampil di halaman utama..."
          />
        </div>
        <div className={s.field}>
          <label className={s.label}>Isi Artikel</label>
          <textarea
            className={s.textarea}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={12}
            placeholder="Tulis isi artikel selengkap-lengkapnya di sini..."
          />
        </div>
        <div className={s.actions}>
          <button className={s.submitBtn} type="submit" disabled={loading}>
            {loading ? 'Menyimpan...' : 'Terbitkan Artikel'}
          </button>
          <button className={s.cancelBtn} type="button" onClick={() => navigate(-1)}>
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
