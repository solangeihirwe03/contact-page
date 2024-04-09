import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Create from '../pages/Create';
import Read from '../pages/Read';
import Home from '../pages/Home';
import Update from '../pages/Update';


const Navbar = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>home</Route>
          <Route path="/create" element={<Create />}>create</Route>
          <Route path="/update" element={<Update />}>update</Route>
          <Route path="/read" element={<Read />}>read</Route>
        </Routes>
      </BrowserRouter>
  );
}

export default Navbar
