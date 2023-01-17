import { useContext } from "react"
import { BookmarksContext } from "../context/bookmarks/BookmarksContext" 

export const useBookmarksContext = () => {
  const context = useContext(BookmarksContext)

  if (context === undefined) {
    throw new Error("useBookmarksContext() must be used inside a BookmarksContextProvider")
  }

  return context
}