import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from './pages/login';
import RoutesApp from './routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App"> 
        <RoutesApp/>
        <ToastContainer/> 
    </div>
  );
}

export default App;
