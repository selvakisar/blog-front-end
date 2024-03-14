import { Route, Routes } from 'react-router';
import './App.css';
import Signup from './user/Signup';
import Login from './user/login';
import AddBlog from './blog/addBlog';
import Home from './components/Home';
import { AllBlog } from './blog/allBlogs';
import { UserBlogs } from './blog/userBlogs';

function App() {
  return (
    <div className="App">
      

      <Routes>

          <Route path='/' element={<Login/>}/>
        
          <Route path='/signup' element={<Signup/>}/>
<Route path='/add' element={<AddBlog/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/all' element={<AllBlog/>}/>
<Route path='/user' element={<UserBlogs/>}/>


          
        
      </Routes>
    </div>
  );
}

export default App;
