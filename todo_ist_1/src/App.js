import './App.css';
import Navbar from './MyComponents/Navbar';
import ToDo from './MyComponents/ToDo';
import Footer from './MyComponents/Footer'

function App() {
  return (
    <div>
    <Navbar title="Todo List"/>
    <ToDo/>
    <Footer></Footer>
    
    </div>
  );
}

export default App;
