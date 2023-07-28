import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={< NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
