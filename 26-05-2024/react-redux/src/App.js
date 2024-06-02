import logo from './logo.svg';
import './App.css';
import Counter from './components/Counters'
import CounterChangeComponent from './components/CounterChangeComponent';
import Products from './components/Products';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to={"/counter"}>Counter</Link> | &nbsp;
      <Link to={"/counter-change"}>Counter Change</Link>| &nbsp;
      <Link to={"/product"}>Product</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
