import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const pages = ['diary', 'look', 'about'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
   
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar className="navbar" position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography style={{ textDecoration: "none" }}
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={{ mr: 1, p: 2, display: { xs: 'none', md: 'flex' }, color: 'rgba(234, 244, 239, 0.943)' }}
                    >
                        Forest Breathe
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'rgba(234, 244, 239, 0.943)' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link style={{ textDecoration: "none", color: "black" }} to={`/${page}`}>{page}</Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography style={{ textDecoration: "none" }}
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'white' }}
                    >
                    Forest Breathe
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}>
                                <Link style={{ textDecoration: "none", color: "rgba(234, 244, 239, 0.943)" }} to={`/${page}`}>{page}</Link>
                            </Button>
                        ))}
                    </Box>
                   
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;