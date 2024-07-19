import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleLike, deleteComment} = props
  const {id, name, comment, isLiked, date, backgroundColor} = commentDetails
  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className={`comment-item ${backgroundColor}`}>
      <div className="comment-header">
        <h3 className="comment-name">{name}</h3>
        <p className="comment-time">{formatDistanceToNow(date)} ago</p>
      </div>
      <p className="comment-text">{comment}</p>
      <div className="comment-footer">
        <button className="like-button" onClick={() => toggleLike(id)}>
          <img src={likeImgUrl} alt="like" className="like-icon" />
        </button>
        <button
          className="delete-button"
          onClick={() => deleteComment(id)}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
