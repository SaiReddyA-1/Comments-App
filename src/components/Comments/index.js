import React, {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    if (name && comment) {
      const randomBgColorClass =
        initialContainerBackgroundClassNames[
          Math.floor(
            Math.random() * initialContainerBackgroundClassNames.length,
          )
        ]
      const newComment = {
        id: uuidv4(),
        name,
        comment,
        isLiked: false,
        date: new Date(),
        backgroundColor: randomBgColorClass,
      }
      this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newComment],
        name: '',
        comment: '',
      }))
    }
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(comment =>
        comment.id === id ? {...comment, isLiked: !comment.isLiked} : comment,
      ),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(comment => comment.id !== id),
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, name, comment} = this.state

    return (
      <div className="comments-app">
        <h1 className="app-title">Comments</h1>
        <p>Say Something about 4.0 Technologies </p>
        <div className="comment-form">
          <form onSubmit={this.onAddComment}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={this.onChangeName}
              className="input-field"
            />
            <textarea
              rows="6"
              placeholder="Your Comment"
              value={comment}
              onChange={this.onChangeComment}
              className="textarea-field"
            />
            <button type="submit" className="add-button">
              Add Comment
            </button>
          </form>
          <img
            className=""
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <p className="comments-count">{commentsList.length} Comments</p>

        <ul className="comments-list">
          {commentsList.map(comment => (
            <CommentItem
              key={comment.id}
              commentDetails={comment}
              toggleLike={this.toggleLike}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
