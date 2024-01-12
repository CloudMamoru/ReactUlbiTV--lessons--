import { useState, useRef } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'JavaScript',
      body: 'Язык программирования',
    },
    {
      id: 2,
      title: 'Dota2',
      body: 'Компьютерная игра',
    },
    {
      id: 3,
      title: 'Moscow',
      body: 'Это столица России',
    },
  ]);

  const createPost = (post) => {
    const newPost = {
      id: posts.length === 0 ? 1 : posts[posts.length - 1].id + 1,
      ...post,
    };
    setPosts([...posts, newPost]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((el) => el.id !== id));
  };

  return (
    <div className='App'>
      <PostForm createPost={createPost} />
      <PostList deletePost={deletePost} posts={posts} title={'Список постов'} />
    </div>
  );
}

export default App;
