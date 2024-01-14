import { useState, useRef, useMemo } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import PostFilter from './components/PostFilter';

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

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query));
  }, [filter.query, sortedPosts]);

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
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        deletePost={deletePost}
        posts={sortedAndSearchedPosts}
        title={'Список постов'}
      />
    </div>
  );
}

export default App;
