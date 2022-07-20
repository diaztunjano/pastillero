import '../../styles/App.css';
import Navbar from '../navbar/Navbar';
import Info from '../info/Info';
import ProductsList from '../ProductsList/ProductsList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Info/>
      <ProductsList/>
    </div>
  );
}

export default App;
