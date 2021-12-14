import '../assets/css/App.css';
import Home from './Home';

const App = () => {

  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>E-Commerce</h1>
        </div>
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
