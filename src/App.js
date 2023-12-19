import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Card from './components/card/Card'
import GridCard from './components/grid/GridCard';
import Grid_com from './components/grid/Grid_com';
import Footer from './components/footer/Footer';
import { useState } from 'react';

function App() {
  const [mode, setMode]= useState('dark')
  const toggle = ()=>{
    if(mode === 'dark'){
      setMode('light')
      console.log('light');
    }else{
      setMode('dark')
      console.log('dark');
    }
  }
  return (
    <>
    <Nav mode ={mode} toggle ={toggle}></Nav>
    <Hero mode ={mode}></Hero>
    <Card mode = {mode}></Card>
    <Grid_com mode ={mode}></Grid_com>
    <Footer mode ={mode}></Footer>
    </>
  );
}

export default App;
