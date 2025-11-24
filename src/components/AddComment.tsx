import type { CurrentUser } from "../App"

const AddComment = (props: CurrentUser) => {
  return (
    <div className="baseBox addComment">
      <img src={props.image.png} alt={props.username} />
      <textarea placeholder="Add a comment..."></textarea>
      <button>SEND</button>
    </div>
  )
}

export default AddComment