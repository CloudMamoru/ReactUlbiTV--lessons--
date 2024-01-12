import PostItem from './components/PostItem';
import './styles/App.css';

function App() {
  return (
    <div className='App'>
      <PostItem
        post={{
          id: 1,
          title: 'JavaScript',
          body: 'JavaScript - это язык программирования',
        }}
      />
      <PostItem
        post={{
          id: 2,
          title: 'Dota2',
          body: 'Компьютерная игра',
        }}
      />
    </div>
  );
}

export default App;
