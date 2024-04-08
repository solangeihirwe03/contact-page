import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Create from '../pages/Create';
import Read from '../pages/Read';
import Home from '../pages/Home';
import Update from '../pages/Update';


const Navbar = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/update" element={<Update />}></Route>
          <Route path="/read" element={<Read />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default Navbar
