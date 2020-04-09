import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { mainListItems } from './ListItem';
import Typography from '@material-ui/core/Typography';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { utils } from 'react-modern-calendar-datepicker';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

    const drawerWidth = 240;

    const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#f4fdfb'
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        backgroundColor: '#32CCBC',
        position: 'relative',
        color: '#fff',
        height: '100vh',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
    },
    container: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        height: '70vh'
    },
    btnGroupBgColor: {
        backgroundColor: '#32CCBC',
        color: '#fff'
    }
}));

const DoctorDashbord = (props) => {
    const classes = useStyles();
    const [appointInformation, setAppointmentInformation] = useState([]);
    const [selectedDay, setSelectedDay] = useState(null);
    const [open, setOpen] = React.useState(true);
    const today = utils().getToday();
    useEffect(() => {
        fetch('https://boiling-reaches-16938.herokuapp.com/allAppointmentInformation')
        .then(res => res.json())
        .then(data => {
            setAppointmentInformation(data);
        })
    })
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, open),
                }}
                open={open}
            >
            <div className={classes.toolbarIcon}></div>
                <List>{mainListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Typography variant="h4" gutterBottom>
                            <Box pb={3}>Appointments</Box>
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6} lg={6}>
                                <Calendar
                                    value={selectedDay}
                                    onChange={setSelectedDay}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <TableContainer component={Paper}>
                                    <div>
                                        <Box display="flex" fontSize="1.5rem" p={1}>
                                            <Box p={1} color="#32CCBC" flexGrow={1}>
                                                Appointments
                                            </Box>
                                            <Box p={1}>
                                                {today.day + ' April, ' + today.year}
                                            </Box>
                                        </Box>
                                    </div>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">Name</TableCell>
                                                <TableCell align="center">Schedule</TableCell>
                                                <TableCell align="center">Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {appointInformation.map((row) => (
                                                <TableRow key={row.name}>
                                                    <TableCell component="th" scope="row">{row.name}</TableCell>
                                                    <TableCell align="right">{row.appointmentTime}</TableCell>
                                                    <TableCell component="th" scope="row">
                                                        <ButtonGroup variant="contained" aria-label="split button">
                                                            <Button className={classes.btnGroupBgColor}>Not Visited</Button>
                                                            <Button
                                                                className={classes.btnGroupBgColor}
                                                                size="small"
                                                                aria-controls={open ? 'split-button-menu' : undefined}
                                                                aria-expanded={open ? 'true' : undefined}
                                                                aria-label="select merge strategy"
                                                                aria-haspopup="menu"
                                                            >
                                                                <ArrowDropDownIcon />
                                                            </Button>
                                                        </ButtonGroup>
                                                    </TableCell>
                                                </TableRow>
                                            )).slice(0, 6)}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </Container>
                <div/>
            </main>
        </div>
    );
}

export default DoctorDashbord;