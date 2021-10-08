
import './App.css';
import AddTask from './components/AddTask/AddTask';
import Tasks from './components/Tasks/Tasks'
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div className="App">
        <TopBar></TopBar>
        <AddTask></AddTask>
        <Tasks></Tasks>
    </div>
  );
}

export default App;
