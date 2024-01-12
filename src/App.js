import { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

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

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e) => {
    // Предотвращает обновления страницы при использования кнопки (предотвращает поведение по умолчанию)
    e.preventDefault();
    setPosts([...posts, { id: 4, title, body }]);
    setTitle('');
    setBody('');
  };

  return (
    <div className='App'>
      <form>
        <MyInput
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Название поста'
        />
        <MyInput
          type='text'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder='Содержание поста'
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={'Список постов'} />
    </div>
  );
}

export default App;
