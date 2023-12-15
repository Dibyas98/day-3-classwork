import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Card from './components/card/Card'
import GridCard from './components/grid/GridCard';

function App() {
  return (
    <>
    <Nav></Nav>
    <Hero></Hero>
    <Card></Card>
    <GridCard name='jjfgj'></GridCard>
    </>
  );
}

export default App;
