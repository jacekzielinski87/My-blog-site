import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import Login from './pages/Login';

function App() {
  

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/addpost">Add Post</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='addpost' element={<AddPost/>}/>
      </Routes>
    </Router>
  )
}

export default App
