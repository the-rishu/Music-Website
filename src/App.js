import Header from './Component/Header';
import './App.css';
import Hero from './Component/Hero';
import Experience from './Component/Experience';
import Search from './Component/Search';
import Download from './Component/Download';
import Footer  from './Component/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero />
        <Experience/>
        <Search />
        <Download/>
        <Footer/>
    </div>
  );
}

export default App;
