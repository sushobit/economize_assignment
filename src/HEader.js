import React, { useState } from 'react';
import './Header.css';
import { Box, TextField } from '@mui/material';
import { Grid } from '@mui/material';


function Header() {

    const [Login, setLogin] = useState("Login");
    const handleLogin = e => {
        setLogin("Logout")
    }

    

    return (
        <header className="dashboard-header">
            <h2 className='logoname'>BlueRecipt</h2>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '80ch' },
                }}
                noValidate
                autoComplete="off"
            >
                

            </Box>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="navigation" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/Login" onClick={handleLogin}>{Login}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* </div>
            </div> */}
        </header>
    );
};

export default Header;