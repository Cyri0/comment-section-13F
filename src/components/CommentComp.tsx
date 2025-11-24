import type { Comment } from '../App'
import minus from "../../public/images/icon-minus.svg"
import plus from "../../public/images/icon-plus.svg"

const CommentComp = (props: Comment) => {
  return (
    <div className='baseBox commentWrapper'>
        <aside>
            <button><img src={plus} alt="plus" /></button>
            <div>{props.score}</div>
            <button><img src={minus} alt="minus" /></button>
        </aside>
        <section>
            <header>
                <div>
                    <img src={props.user.image.png} />
                    <strong>{props.user.username}</strong>
                    <span>{props.createdAt}</span>
                </div>
                <button>Reply</button>
            </header>
            <div>{props.content}</div>
        </section>
    </div>
  )
}

export default CommentComp