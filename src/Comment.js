import React, { Component } from 'react'


class Comment extends Component {
	render(){
		return(
			<div className='comment'>
				<div className='comment-user'>
					<span className='name'>{this.props.comment.username}</span>
				</div>
				<p className='content'>{this.props.comment.content}</p>
			</div>
		)
	}
}


export default Comment
