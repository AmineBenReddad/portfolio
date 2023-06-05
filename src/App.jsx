import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Footer from './components/Footer';



const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
  width: 1640px;
  margin: auto;
`



function App() {
  return (
    <Container>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </Container>
  );
}

export default App;
