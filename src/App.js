import Home from './pages/home';
import CharacterPlanet from './pages/characterPlanet';
import Menu from './components/menu';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CaractersProvider } from './context/userContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (  
        <BrowserRouter>
            <CaractersProvider>
            <Menu/>
                <Routes>                 
                    <Route path="/" element={<Home/>}></Route>          
                    <Route path="/planet/:index" element={<CharacterPlanet/>}></Route>                 
                </Routes>
            </CaractersProvider>  
        </BrowserRouter>
    );
}

export default App;
