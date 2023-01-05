import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import ExpendingCard from './components/page1';
import './App.css';
import './styles/done.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressSteps from './components/page2';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/displayOne' element={<ProgressSteps />} />
      </Routes>
    </Router>
  );
}

export default App;
