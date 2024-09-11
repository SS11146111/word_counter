import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { PageNotFound } from './components/PageNotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
