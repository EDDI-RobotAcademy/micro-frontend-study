import React, { useEffect, useRef } from "react";
import { mount } from 'vueApp/Sample'

const App = () => {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current)
  }, [])

  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'cyan',
      }}>
        <h1>리액트 애플리케이션!</h1>
        <div ref={ ref }/>
    </div>
  );
}

export default App;
