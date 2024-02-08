import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import ViewUser from './components/ViewUser';

function App() {
  return (
    <div>

      <BrowserRouter>
      
        <Routes>

          <Route path='/' element={<AddUser/>}/>
          <Route path='/view' element={<ViewUser/>}/>

        </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
