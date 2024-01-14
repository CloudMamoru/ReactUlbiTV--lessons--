import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
  return (
    <div className='post'>
      <div className='post__content'>
        <strong>
          {props.index}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className='post__btns'>
        <MyButton onClick={() => props.deletePost(props.post.id)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
