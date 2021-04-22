import logo from './pat1.png';
import reactlogo from './logo192.png'
import './App.css';
import Navigation from './sections/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={reactlogo} className="React-logo" alt="reactlogo" />
        <Navigation />
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Hi, I am Pat!
          </h1>
        </div>

      </header>
    </div>
  );
}

export default App;