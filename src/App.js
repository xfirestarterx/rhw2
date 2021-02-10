import React from 'react';
import { FunctionalComponent } from './components/Functional';
import { ClassComponent } from './components/Class';
import { ClassPureComponent } from './components/ClassPure';
import './App.css';

function App() {
  return (
    <>
      { React.createElement('div', { className: 'component' }, 'hello from createElement') }
      <FunctionalComponent />
      <ClassComponent />
      <ClassPureComponent />
    </>
  );
}

export default App;
