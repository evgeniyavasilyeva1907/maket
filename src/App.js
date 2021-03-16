import './App.css';
import Header from './Components/Header/Header';
import Right from './Components/Right part/Right'
import Left from './Components/Left part/Left';

function App() {
  return (
    <div >
        <Header />
        <div className="container">
          <Left />
          <Right />
        </div>
    </div>
  );
}

export default App;
