
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import SingUp from './Components/SingUp/SingUp';
import SingIn from './Components/SingIN/SingIn';
import ResetEmail from './Components/ResetEmail/ResetEmail';
import Country from './Components/Country/Country';
import AllCountry from './Components/AllCountry/AllCountry';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>} />
        <Route path='/singin' element={<SingIn></SingIn>} />
        <Route path='/resetemail' element={<ResetEmail></ResetEmail>} />
        <Route path='/country' element={
          <RequireAuth>
            <Country></Country>
          </RequireAuth>
        } />
        <Route path='/allcountry' element={<AllCountry></AllCountry>}></Route>
      </Routes>
    </div>
  );
}

export default App;
