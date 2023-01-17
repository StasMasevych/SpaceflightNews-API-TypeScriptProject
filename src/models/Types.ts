//Types for News

export type ArticleType = {
    title: string;
    summary: string;
    url: string;
    imageUrl: string;
    author: string;
    publishedAt: string;
    newsSite: string;
  
}

export type NewsContextProviderProps = {
    children: React.ReactNode
}

export type NewsStateType = {
  data: ArticleType[] | null;
  loading: boolean;
  searchedNews: ArticleType[] | null;
  getNews: () => void;
  searchNews:(array: ArticleType[], searchItem: string) => ArticleType[] | null;

}

export type NewsActionType = {
  type: 'GET_NEWS' | 'GET_ARTICLE' | 'GET_SEARCHED_NEWS';
  payload: ArticleType[] | null
}

// Types for Bookmarks

export type BookmarksContextProviderProps = {
    children: React.ReactNode
}

export type BookmarksStateType = {
    bookmarkItems: ArticleType[];
    bookmarkItem: (item:ArticleType, array:ArticleType[]) => void,
    unBookmarkItem:(item:ArticleType, array:ArticleType[]) => void,
}

export type BookmarksActionType = {
    type: 'ADD_BOOKMARK_ITEM' | 'DELETE_BOOKMARK_ITEM' ;
    payload: ArticleType
  }





