import type { Article } from '../types';
import { seedArticles } from '../data/seedArticles';

const STORAGE_KEY = 'artikelku_articles';

function loadArticles(): Article[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedArticles));
    return seedArticles;
  }
  return JSON.parse(raw) as Article[];
}

function saveArticles(articles: Article[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

export function getArticles(): Article[] {
  return loadArticles();
}

export function getArticleById(id: string): Article | undefined {
  return loadArticles().find((a) => a.id === id);
}

export function addArticle(data: Omit<Article, 'id' | 'createdAt'>): Article {
  const articles = loadArticles();
  const newArticle: Article = {
    ...data,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  saveArticles([newArticle, ...articles]);
  return newArticle;
}
