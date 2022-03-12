import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

function App() {
  return (
    <AlertState>
      <GithubState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </div>
          </div>
        </Router>
      </GithubState>
    </AlertState>
  );
}

export default App;
