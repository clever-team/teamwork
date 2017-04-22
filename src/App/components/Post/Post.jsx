import { Component } from 'react'

import A from 'lsk-general/General/A';
import { Comment } from '../../components/Comment';

class PostTitle extends Component {
  render() {
    return (
      <h3 className="post-title">{this.props.title}</h3>
    );
  }
}

class PostComments extends Component {
  getComments(id) {

    return [
      {
        id: '111',
        userId: '1',
        userName: 'newUser',
        avatarSrc: '',
        text: 'It\'s a really Cool Blog!',
        date: new Date(),
        likeCount: 5,
        isEditable: false
      }];
  }
  render() {
    var comments = this.getComments(this.props.id).map(x => {
      return (
        <Comment 
          id={x.id}
          userId={x.userId}
          userName={x.userName}
          avatarSrc={x.avatarSrc}
          text={x.text}
          date={x.date}
          likeCount={x.likeCount}
          isEditable={x.isEditable}/>
      );
    });
    if (!comments.length) {
      return <span>Комментариев нет.</span>;
    }
    return (
      <div className="post-comments">
        {comments}
      </div>
    );
  }
}

export default class Post extends Component {
  render() {
    var post = this.props.item;
    return (
      <div className="post">
        <PostTitle title={post.title || 'unknown'} />
        <span className="pull-right"><A href="/post/{post.id || -1}">Подробнее...</A></span>
        <PostComments id={post.id || -1} />
      </div>
    );
  }
}
