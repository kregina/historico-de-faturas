import React from 'react';
import logo from './logo.svg';
import './index.css';

function App() {
  return (
    <ul className="flex">
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="#">Active</a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
      </li>
      <li className="mr-6">
        <a className="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
      </li>
    </ul>
  );
}

export default App;
