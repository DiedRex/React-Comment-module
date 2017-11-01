import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'


class CommentApp extends Component {

	//初始化一个comments数组用语存储从CommentInput中传入的数组
	constructor(){
		super()
		this.state={
			comments:[]
		}
	}
	//将数据通过setState储存在comments中
	handleSubmitComment(comment){
		if(!comment) return
		if(!comment.username) return alert('请输入姓名')
		if(!comment.content) return alert('请输入评论内容')
		this.state.comments.push(comment)//把comments数据放倒初始化存储的this.state.comments中
		this.setState({
			comments:this.state.comments
		})
	}
	render(){//此处的onSubmit方法获得从子节点传上来的内容并绑定到handleSubmitComment(comment)方法上。
		console.log(this.state.comments)
		return(
			<div className='wrapper'>
				<CommentInput
					onSubmit={this.handleSubmitComment.bind(this)} />
				<CommentList comments={this.state.comments}/>
			</div>
		)
	}
}

export default CommentApp
