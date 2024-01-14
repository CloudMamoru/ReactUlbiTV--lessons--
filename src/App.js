import { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';

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
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (post) => {
    const newPost = {
      id: posts.length === 0 ? 1 : posts[posts.length - 1].id + 1,
      ...post,
    };
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((el) => el.id !== id));
  };

  return (
    <div className='App'>
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Добавить пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </MyModal>
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
