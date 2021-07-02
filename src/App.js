//import logo from './logo.svg';
//import './App.css';
//import './assets/dist/style.css';

// components
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/pages/home';
import './assets/dist/style.css';
// includes

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
