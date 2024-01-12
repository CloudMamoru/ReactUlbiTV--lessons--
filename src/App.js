import { useState } from 'react';

function App() {
  let [likes, setLikes] = useState(0);
  return (
    <div className='App'>
      <div>
        <h1>{likes}</h1>
        <button onClick={() => setLikes(likes + 1)}>Increment</button>
        <button onClick={() => setLikes(likes - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
