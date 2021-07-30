
import Navbar from './navbar';
import Home from './home';


function App() {
  const title = "Alaye mi"
  const scores = [1,2,2,2,2,]
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
