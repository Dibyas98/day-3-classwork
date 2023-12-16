import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Card from './components/card/Card'
import GridCard from './components/grid/GridCard';
import Grid_com from './components/grid/Grid_com';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Nav></Nav>
    <Hero></Hero>
    <Card></Card>
    <Grid_com></Grid_com>
    <Footer></Footer>
    </>
  );
}

export default App;
