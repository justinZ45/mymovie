import './App.css';
import InputMovie from "./components/Inputmovie";
import ListMovie from './components/Listmovie';
import MovieLogin from './components/Movielogin';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MovieSignin from './components/Moviesignin';
import Home from './components/Home';
import Trailers from './components/Trailers';



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