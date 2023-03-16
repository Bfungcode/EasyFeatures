import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import ExpendingCard from './components/page1';
import ProgressSteps from './components/page2';
import './App.css';
import './styles/d1.css';
import 'bootstrap/dist/css/bootstrap.min.css';



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
