export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  authorName: string;
  createdAt: string;
}
