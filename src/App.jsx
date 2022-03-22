import { useEffect, useRef } from 'react';
import useFormHandler from './hooks/useFormHandler';

import './App.css';

const App = () => {
  const inputRef = useRef();

  const form = { name: '', email: '', age: '', password: '' };
  const { formData, changeHandler } = useFormHandler(form);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <main>
      <h1>Welcome to React</h1>
      <form>
        <input
          type='text'
          placeholder='Enter your name'
          ref={inputRef}
          name='name'
          value={formData.name}
          onChange={changeHandler}
        />
        <input
          type='text'
          placeholder='Enter your email'
          name='email'
          value={formData.email}
          onChange={changeHandler}
        />
        <input
          type='text'
          placeholder='Enter your age'
          name='age'
          value={formData.age}
          onChange={changeHandler}
        />
        <input
          type='password'
          placeholder='Enter your password'
          name='password'
          value={formData.password}
          onChange={changeHandler}
        />
      </form>
      <p>{formData.name}</p>
      <p>{formData.email}</p>
      <p>{formData.age}</p>
      <p>{formData.password}</p>
    </main>
  );
};

export default App;
