import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Footer() {
    return (
        <footer>
            <Box>
                <Container maxWidth="lg"
                    sx={{ textAlign: "center", mt: 15}}>
                    <Grid container>
                        <Grid item xs={12} sx={{  color: 'rgb(4, 34, 4)' }}>
                            <Box borderBottom={1}>
                            </Box>
                            <Box sx={{ pt: 1 }}>
                                <img src="/images/footerLogo.png" alt="footerLogo" className="logo" width="70" height="70" />
                            </Box>
                            <Box>
                                &copy; 2022 Copyright: Laura Stabulniece
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer;