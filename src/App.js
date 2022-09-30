import BasketState from './context/state';

import Basket from './Basket/';

import logo from './logo.svg';
import './App.scss';

function App() {

  return (
    <BasketState>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Basket/>
        </div>
      </div>
    </BasketState>
  );
}

export default App;
