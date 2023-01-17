
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

import { useNewsContext } from '../../hooks/useNewsContext';
import { useBookmarksContext } from '../../hooks/useBookmarksContext';
import Spinner from '../layout/Spinner';

import Button from '@mui/material/Button';

//types

import { ArticleType} from '../../models/Types';

type ArticleProps = {
  article: ArticleType
}

const NewsItem: React.FC<ArticleProps> = ({article}) => {
  const {data, loading} = useNewsContext()
  const {bookmarkItems, bookmarkItem, unBookmarkItem} = useBookmarksContext()
  //createMarkup to show highlighting search term
  const createMarkup = (html:any) => {
    return { __html: html }
  }
  //go to article page
  const navigate = useNavigate()

  const visitArticlePage = () => {
    navigate(`/articles/${article.publishedAt}`)
  }
  //show spinner if loading
  if (loading) {
    return <Spinner/>
  }

  // bookmarks

  const isBookmark = (item:ArticleType) => {
    if (bookmarkItems !== null) {
      return (
        bookmarkItems!.findIndex((bookmark:ArticleType) => bookmark.title === item.title) > -1
      )
    }
  };
  const bookmark = (item:ArticleType) => {
    bookmarkItem!(item, data!) 
  
  }

  const unBookmark = (item:ArticleType) => {
    unBookmarkItem!(item,bookmarkItems!)
    console.log(item)
  }


  return (
   <>
    <div className="news">
      <div className="news__img">
        <img src={article.imageUrl} alt="img"/>
      </div>
      <div className="news__title" dangerouslySetInnerHTML={createMarkup(article.title)}/>
      <div className="news__desc" dangerouslySetInnerHTML={createMarkup(article.summary)}/>
      <span className="news__published">{article.publishedAt}</span>
      <br/>
      <br/>
      <div className="news__actions">
        <Button variant="contained" sx={{background: '#12d38c', "&:hover": {background: '#05e693'}}} onClick={visitArticlePage}>Read more</Button>
        {isBookmark(article) ? (
              <FaBookmark
                size='1.5em'
                onClick={() => unBookmark(article)}
              />
            ) : (
              <FaRegBookmark
                size='1.5em'
                onClick={() => bookmark(article)}
              />
            )}
      </div>
    </div>
   </>
  )
}

export default NewsItem