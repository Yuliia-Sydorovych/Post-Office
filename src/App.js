import './App.css';
//import Routes from '../src/routes/route';
import Header from './components/Header/Header';
import ListOfRequests from './components/ListOfRequests/ListOfRequests';

function App() {
  return (
    <div className="App">
      {/* <Routes /> */}
      <Header />
      <ListOfRequests />
    </div>
  );
}

export default App;
