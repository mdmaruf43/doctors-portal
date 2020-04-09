import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import banner from '../../images/Mask-Group-1.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'right',
        marginTop: '30px'
    },
    linkText: {
        padding: '5px',
        color: 'inherit',
        ":hover": {
            textDecoration: 'none'
        },
    }, 
    btn: {
        backgroundColor: '#32CCBC',
    }, 
    img: {
        height: '30%',
        width: '80%',
        marginLeft: '40px'
    }, 
    gird: {
        marginTop: '150px'
    },
    bgImage: {
        backgroundImage: "url('/bgImage.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100%"
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Container className={classes.bgImage}>
            <div className={classes.root}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.linkText} href="/">
                            Home
                        </Link>
                        <Link className={classes.linkText} href="/doctor/dashboard">
                            Doctor
                        </Link>
                        <Link className={classes.linkText} href="/">
                            Contact Us
                        </Link>
                    </Typography>
                </Toolbar>
                <div className={classes.gird}>
                    <Grid container component="main" className={classes.root}>
                        <CssBaseline />
                        <Grid item xs={false} sm={4} md={5} >
                            <Typography variant="h3" gutterBottom>
                                You New Smile Starts Here
                            </Typography>
                            <Typography>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </Typography>
                            <Box mt={5}>
                                <Link href="/appointment">
                                    <Button className={classes.btn} variant="contained" color="primary">
                                        Get Appointment
                                    </Button>
                                </Link>
                                
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={8} md={7}>
                            <img className={classes.img} src={banner} alt=""/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Container>
    );
};

export default Header;