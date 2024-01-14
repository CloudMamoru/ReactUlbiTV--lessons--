import { useEffect, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';
import PostService from './components/API/PostService';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostingLoading] = useState(false);

  async function fetchPosts() {
    setIsPostingLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setIsPostingLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

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
      {isPostsLoading ? (
        <h1>Идет загрузка</h1>
      ) : (
        <PostList
          deletePost={deletePost}
          posts={sortedAndSearchedPosts}
          title={'Список постов'}
        />
      )}
    </div>
  );
}

export default App;
