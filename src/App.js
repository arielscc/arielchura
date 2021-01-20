import React, { useEffect, useState } from 'react';
import { Loader } from './components/Loader/Loader';
import { Main } from './components/Main/Main';

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2800);
  }, [loader]);

  return <div>{loader ? <Loader /> : <Main />}</div>;
}

export default App;
