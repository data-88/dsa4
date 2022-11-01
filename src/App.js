import logo from './logo.svg'
import './App.css'
import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Routes from './Routing/Routes';

function App() {
  return (
    <div className="App">
      <Routes />
       <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
