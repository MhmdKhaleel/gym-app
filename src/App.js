import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import ViewUser from './components/ViewUser';
import SearchUser from './components/SearchUser';

function App() {
  return (
    <div>

      <BrowserRouter>
      
        <Routes>

          <Route path='/' element={<AddUser/>}/>
          <Route path='/view' element={<ViewUser/>}/>
          <Route path='/search' element={<SearchUser/>}/>

        </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
