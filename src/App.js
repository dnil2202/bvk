import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import LandingPages from './pages/LandingPages.jsx'
import ListLanding from './component/ListLanding';
import ListPages from './pages/ListPages';

function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPages/>}/>
          <Route path='/list' element={<ListPages/>}/>
        </Routes>
    </div>
  );
}

export default App;
