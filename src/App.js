import React from 'react';
// router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//style
import {GlobalStyle} from './GlobalStyle'
//сomponents
import Header from './components/Header';
import Home from './components/Home'
import Movie from './components/Movie'
import NotFound from './components/NotFound'
import Login from './components/Login'
// context
import UserProvider from './contex';

const App = ()  => 
   ( <Router>
     <UserProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
      </UserProvider>
    </Router>
  );


export default App;
