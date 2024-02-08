import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
// import Post from './com/Post';
import Home from './com/Home';
import Post from './com/Post';
import Comments from './com/Comments';
import Albams from './com/Albams';
import Photos from './com/Photos';
import Todos from './com/Todos';
import User from './com/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/Post" element={<Post/>}  />
        <Route path="/Comments" element={<Comments />}  />
        <Route path="/Ablams" element={<Albams/>}  />
        <Route path="/Photos" element={<Photos/>} />
        <Route path="/Todos" element={<Todos/>} />
        <Route path="/User" element={<User/>} />

      </Routes>
      {/* <Post></Post> */}
    </div>
  );
}

export default App;
