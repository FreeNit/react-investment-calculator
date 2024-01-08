import { useState } from 'react';

// * Import Components
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div id='user-input'>
        <div id='input-group'>
          <label htmlFor=''>Initial Investment</label>
          <input type='text' />

          <label htmlFor=''> Annual Investment</label>
          <input type='text' />

          <label htmlFor=''>Expected Return</label>
          <input type='text' />

          <label htmlFor=''>Duration </label>
          <input type='text' />
        </div>
      </div>
    </>
  );
}

export default App;
