import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = (props) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    // Предотвращает обновления страницы
    e.preventDefault();
    props.createPost(post);
    setPost({ title: '', body: '' });
  };

  return (
    <form>
      <MyInput
        type='text'
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder='Название поста'
      />
      <MyInput
        type='text'
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder='Содержание поста'
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
