import { useEffect, useState } from "react"
import AddComment from "./components/AddComment"
import CommentComp from "./components/CommentComp"

export type CurrentUser = {
  image: {
    png: string,
    webp: string
  },
  username: string
}

export type Comment = {
  content: string,
  createdAt: string,
  id: number,
  replies?: Comment[],
  score: number,
  user: CurrentUser
}

const App = () => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>()
  const [comments, setComments] = useState<Comment[]>([])
  useEffect(()=>{
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
      setCurrentUser(data.currentUser)
      setComments(data.comments)
    })
  },[])

  return (
    <div className="mainWrapper">
      {comments.map(comment => 
        <CommentComp {...comment} />
      )}

      {currentUser && <AddComment {...currentUser} />}
    </div>
  )
}

export default App