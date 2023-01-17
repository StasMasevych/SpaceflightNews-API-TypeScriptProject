import React, { createContext, useReducer} from "react";

import NewsReducer from "./NewsReducer";

import { NewsStateType, NewsContextProviderProps,ArticleType } from "../../models/Types";


export const NewsContext = createContext<Partial<NewsStateType>>({});

export const NewsContextProvider = ({children}: NewsContextProviderProps) => {


const initialState: NewsStateType = {
  data: [],
  loading: true,
  searchedNews:[],
  getNews: () => null,
  searchNews:() => null

}

const [state, dispatch] = useReducer(NewsReducer, initialState)

    // get all news 
    const getNews = async () => {
      const response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles`)
      const data = await response.json()
      console.log(data)
      
      dispatch({
          type: 'GET_NEWS',
          payload: data
      })
      
    }


    const searchNews = (array:ArticleType[], searchItem:string) => {
        const searchedNews = array
            //filter searched news
            .filter((item:ArticleType) => {
            return item.title.toLowerCase().includes(searchItem.toLowerCase()) || item.summary.toLowerCase().includes(searchItem.toLowerCase())
            //highlight search term
         }).map((item:ArticleType)=> {
            let newTitle = item.title.replace(
              new RegExp(searchItem, 'gi'),
              match =>
                `<mark style="background: yellow; color: black;">${match}</mark>`
            )
            let newContent = item.summary.replace(
              new RegExp(searchItem, 'gi'),
              match =>
                `<mark style="background: yellow; color: black;">${match}</mark>`
            )
            return {
              ...item,
              title: newTitle,
              summary: newContent,
            }
          })

         dispatch({
            type: 'GET_SEARCHED_NEWS',
            payload: searchedNews
        })

        return searchedNews
    }

    return (
      <NewsContext.Provider value={{ 
        ...state,
        getNews,
        searchNews,
        }}>
        {children}
      </NewsContext.Provider>
    );
  };