import React from 'react';
import PostItem from './PostItem';

// Применени деструкторизации пропсов
const PostList = ({ posts, title }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((p) => (
        <PostItem key={p.id} post={p} />
      ))}
    </div>
  );
};

export default PostList;
