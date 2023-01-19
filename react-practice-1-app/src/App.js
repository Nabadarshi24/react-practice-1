import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList';
import CardDetails from './components/CardDetails';
import ClassCardList from './components/ClassCardList';

function App() {
  return (
    <div className="App">
      {/* <CardList /> */}
      <ClassCardList />
    </div>
  );
}

export default App;
