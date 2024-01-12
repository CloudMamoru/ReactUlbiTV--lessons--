import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [value, setValue] = useState('Text in <input>');
  return (
    <div className='App'>
      <div>
        <Counter />
        <h1>{value}</h1>
        <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
