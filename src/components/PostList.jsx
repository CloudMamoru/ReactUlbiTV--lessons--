import React from 'react';
import PostItem from './PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Применени деструкторизации пропсов
const PostList = ({ deletePost, posts, title }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((p, index) => (
          <CSSTransition key={p.id} timeout={500} classNames='post'>
            <PostItem index={index + 1} deletePost={deletePost} post={p} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
