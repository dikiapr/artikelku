import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Article } from '../../types';
import { getArticles } from '../../services/articleService';

interface ArticlesState {
  items: Article[];
}

const initialState: ArticlesState = {
  items: getArticles(),
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticle(state, action: PayloadAction<Article>) {
      state.items.unshift(action.payload);
    },
    setArticles(state, action: PayloadAction<Article[]>) {
      state.items = action.payload;
    },
  },
});

export const { addArticle, setArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
