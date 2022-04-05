import './App.css';
import Header from './Header';
function App() {
  return (
    //BEM convention -> it is just a name styling
    <div className="app">
      <h1> Welcome to Andes </h1>
      <p> Where everything is better than Amazon </p>
      {/* HEADER */Header()}
      {/* HOME */}  
    </div>
  );
}

export default App;
