import './App.css';
import InputMovie from "./components/inputmovie";
import ListMovie from './components/listmovie';
import MovieLogin from './components/movielogin';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MovieSignin from './components/moviesignin';
import Home from './components/Home';
import Trailers from './components/trailers';



function App() {
  return (
    <Router>
     <Routes>
     <Route exact path="/signup" element={<MovieSignin/>}/>
     <Route exact path="/list" element = {[<InputMovie/>,<ListMovie/>]} />
     <Route exact path="/home" element={<Home/>}/>
     <Route exact path="/trailers" element={<Trailers/>}/>
       <Route exact path="/" element={<MovieLogin/>}/>
       </Routes>
   </Router>
  )};

export default App;