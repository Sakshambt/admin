import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Footer, Navbar, Header, Sidebar} from './components/index';
import {Employees} from "./pages";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Header/>
      <div>
      <Sidebar/>
      </div>
      {/* <div>
        <Routes>
          <Route path= "" element = {(<Employees/>)}/>
        </Routes>
      </div> */}
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
