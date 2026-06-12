import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { addArticle } from '../services/articleService';

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
    <div style={{ maxWidth: '680px' }}>
      <h1 style={{ marginTop: 0, marginBottom: '1.5rem', color: '#111827' }}>Tulis Artikel</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
        <div style={fieldStyle}>
          <label style={labelStyle}>Judul</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={inputStyle}
            placeholder="Judul artikel..."
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>Ringkasan</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            rows={3}
            style={{ ...inputStyle, resize: 'vertical' }}
            placeholder="Ringkasan singkat yang tampil di halaman utama..."
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>Isi Artikel</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={12}
            style={{ ...inputStyle, resize: 'vertical' }}
            placeholder="Tulis isi artikel selengkap-lengkapnya di sini..."
          />
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
          <button type="submit" disabled={loading} style={btnPrimaryStyle}>
            {loading ? 'Menyimpan...' : 'Terbitkan Artikel'}
          </button>
          <button type="button" onClick={() => navigate(-1)} style={btnSecondaryStyle}>
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}

const fieldStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.35rem',
};

const labelStyle: React.CSSProperties = {
  fontSize: '0.875rem',
  fontWeight: 500,
  color: '#374151',
};

const inputStyle: React.CSSProperties = {
  padding: '0.55rem 0.75rem',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  fontSize: '0.95rem',
  outline: 'none',
  fontFamily: 'inherit',
};

const btnPrimaryStyle: React.CSSProperties = {
  padding: '0.6rem 1.25rem',
  background: '#1e40af',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontSize: '0.95rem',
  fontWeight: 600,
  cursor: 'pointer',
};

const btnSecondaryStyle: React.CSSProperties = {
  padding: '0.6rem 1.25rem',
  background: '#f3f4f6',
  color: '#374151',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  fontSize: '0.95rem',
  cursor: 'pointer',
};
