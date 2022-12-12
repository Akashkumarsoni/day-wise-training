import './App.css';
import GoogleTaxonomy from './google';
import HOC from './hoc';

function App() {
  return (
    <div className="App">
      <HOC comp={GoogleTaxonomy}/>
    </div>
  );
}

export default App;
