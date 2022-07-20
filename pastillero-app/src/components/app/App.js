import '../../styles/App.css';
import Navbar from '../navbar/Navbar';
import Info from '../info/Info';
import Product from '../product/Product';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Info/>
      <Product/>
    </div>
  );
}

export default App;
