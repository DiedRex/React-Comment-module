import React ,{ Component } from 'react'
import Comment from './Comment'


class CommentList extends Component {

	//如果app没有传来表单，则默认comments数组为空
  static defaultProps = {
    comments: []
	}

  render() {
    // const comments = [
    //   {username: 'Jerry', content: 'Hello'},
    //   {username: 'Tomy', content: 'World'},
    //   {username: 'Lucy', content: 'Good'}
    // ]
		// console.log(this.props.comments)
    return (
			<div>
				{this.props.comments.map((comment,i)=><Comment comment={comment} key={i} />)}
			</div>
    )
  }
}



export default CommentList
