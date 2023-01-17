import React, { createContext, useReducer } from "react";

import BookmarksReducer from "./BookmarksReducer";

//types

import { BookmarksContextProviderProps, BookmarksStateType, ArticleType } from "../../models/Types";

export const BookmarksContext = createContext<Partial<BookmarksStateType>>({});

export const BookmarksContextProvider = ({children}:BookmarksContextProviderProps) => {

    const initialState: BookmarksStateType = {
        bookmarkItems: [],
        bookmarkItem: () => null,
        unBookmarkItem:() => null,

    }
 
    const [state, dispatch] = useReducer(BookmarksReducer, initialState)

    // add bookmaks to item
    const bookmarkItem = (item:ArticleType, array:ArticleType[]) => {
        localStorage.setItem("bookmarks", JSON.stringify([item, ...array]))
        dispatch({
          type: 'ADD_BOOKMARK_ITEM',
          payload: item,
        })
        console.log(item)
      }

    // delete bookmark from item
    const unBookmarkItem = (item:ArticleType, array:ArticleType[]) => {
        const newBookmarkItems = array.filter(
          (bookmarkItem) => bookmarkItem !== item
        )
        localStorage.setItem("bookmarks", JSON.stringify(newBookmarkItems))
        dispatch({
          type: 'DELETE_BOOKMARK_ITEM',
          payload: item,
        })
      }


    return (
      <BookmarksContext.Provider value={{ 
        ...state,
        bookmarkItem,
        unBookmarkItem
        }}>
        {children}
      </BookmarksContext.Provider>
    );
  };