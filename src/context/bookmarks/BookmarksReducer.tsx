
import { BookmarksStateType, BookmarksActionType } from "../../models/Types"

const BookmarksReducer = (state: BookmarksStateType, action: BookmarksActionType) => {
    switch (action.type) {
      case 'ADD_BOOKMARK_ITEM':
        return {
          ...state,
          bookmarkItems: [...state.bookmarkItems, action.payload],

        }
      case 'DELETE_BOOKMARK_ITEM':
        return {
          ...state,
          bookmarkItems: state.bookmarkItems.filter(
            item => item.title !== action.payload!.title
          )
        }
        
      default:
        return state
      }
  }
  
  export default BookmarksReducer