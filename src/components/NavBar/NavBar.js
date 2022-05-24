import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <div className='logoImg'>
                    <img src='./logo.png' />
                </div>
                <ul>
                    <li><a href='#'>Inicio</a></li>
                    <li><a href='#'>Contacto</a></li>
                    <li><a href='#'>Preguntas Frecuentes</a></li>
                    <li><a href='#'>Nuestros Productos</a></li>
                </ul>
                <CartWidget />
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;