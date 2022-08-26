import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/routes/Home';
import Blogs from './components/routes/Blogs';
import BlogCreate from './components/routes/BlogCreate';
import Blog from './components/routes/Blog';
import BlogEdit from './components/routes/BlogEdit';
import WallPapers from "./components/shared/WallPapers";
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <h3>{location.state ? location.state.msg: null }</h3>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/create-blog' element={<BlogCreate />} /> 
        <Route path='/blogs/:id' element={<Blog />} />
        <Route path='/blogs/:id/edit' element={<BlogEdit />} /> 
        <Route path="/images" element={<WallPapers />} />

      </Routes>

    </div>
  );
}


export default App;
