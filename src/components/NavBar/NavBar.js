import './NavBar.css' 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


const NavBar = () => {

    return (
        <AppBar position="static" className='header-primary'>
            <Toolbar>
                <div className='container-logo'>
                    <img src="./logo.png" />
                </div>
                <ul className='navbar'>
                    <li>
                        <button>Inicio</button>
                    </li>
                    <li>
                        <button>Quienes Somos</button>
                    </li>
                    <li>
                        <button>Productos</button>
                    </li>
                </ul>
                <Button color="inherit">
                 
                </Button>
                
              
            </Toolbar>
        </AppBar>
        
    )
}

export default NavBar