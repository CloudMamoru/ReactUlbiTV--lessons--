import { useState, useRef } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

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

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  function getSortedPosts() {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }

  const sortedPosts = getSortedPosts();

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

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className='App'>
      <PostForm createPost={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Поиск ...'
        />
        <MySelect
          defaultValue='Сортировка'
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
          value={selectedSort}
          onChange={sortPosts}
        />
      </div>
      {posts.length !== 0 ? (
        <PostList deletePost={deletePost} posts={sortedPosts} title={'Список постов'} />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
      )}
    </div>
  );
}

export default App;
