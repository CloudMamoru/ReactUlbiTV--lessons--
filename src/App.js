import { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';

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
  const [posts2, setPosts2] = useState([
    {
      id: 1,
      title: 'Python',
      body: 'Язык программирования',
    },
    {
      id: 2,
      title: 'CS 2',
      body: 'Компьютерная игра',
    },
    {
      id: 3,
      title: 'Lipetsk',
      body: 'Это город России',
    },
  ]);

  return (
    <div className='App'>
      <PostList posts={posts} title={'Список постов 1'} />
      <PostList posts={posts2} title={'Список постов 2'} />
    </div>
  );
}

export default App;
