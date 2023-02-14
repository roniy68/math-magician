import './App.css';
import { Footer, Navbar, Calculator } from './components';
import { Home } from './containers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
