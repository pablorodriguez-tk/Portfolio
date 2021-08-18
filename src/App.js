import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
};

export default App;
