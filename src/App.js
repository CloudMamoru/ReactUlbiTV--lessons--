import { useState } from 'react';

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('Text in <input>');
  return (
    <div className='App'>
      <div>
        <h1>{likes}</h1>
        <button onClick={() => setLikes(likes + 1)}>Increment</button>
        <button onClick={() => setLikes(likes - 1)}>Decrement</button>
        <h1>{value}</h1>
        <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
