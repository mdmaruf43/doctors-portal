import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { mainListItems } from './DrawerList';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { utils } from 'react-modern-calendar-datepicker';
import CreateIcon from '@material-ui/icons/Create';

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
        paddingTop: theme.spacing(0.1),
        paddingBottom: theme.spacing(0.1),
        height: '100vh'
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        backgroundColor: '#00c689',
    },
    paper1: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        backgroundColor: '#f1536e',
    },
    paper2: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        backgroundColor: '#3da5f4',
    },
    paper4: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        backgroundColor: '#fca513',
    },
    
    justifyContent: {
        display: 'flex',
        alignItems: 'center',
        padding: '5px',
    }, 
    bgColor: {
        backgroundColor: '#00c689',
    },
    secondGridPaddingTop: {
        paddingTop: '55px',
    },
    btnViewBgColor: {
        backgroundColor: '#32CCBC',
    },
    iconBtnBgColor: {
        backgroundColor: '#ffd076',
        fontSize: '10px',
        marginLeft: '5px',

    },
    actionBtnBgColor: {
        backgroundColor: '#76c5ff',
    },
    modalPaddingTop: {
        paddingTop: '200px',
    },
    form: {
        margin: '0 auto',
    },
    formInput: {
        width: '600px',
        backgroundColor: '#f5f5f5',
        border: 'none',
        borderRadius: '3px',
        padding: '25px 15px !important', 
    },
    submitBtn: {
        backgroundColor: '#32CCBC',
        paddingLeft: '10px',
        paddingRight: '10px',
        borer: 'none',
        borderRadius: '5px',
        fontSize: '1.2rem',
    },
}));

Modal.setAppElement('#root');

const DoctorAppointmentDashbord = (props) => {
    const classes = useStyles();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [appointInformation, setAppointmentInformation] = useState([]);
    const [open, setOpen] = React.useState(true)
    const today = utils().getToday();
    const [prescribedData, setPrescribedData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        date: '',
    });

    const sendPrescribedInformation = (e) => {
        e.preventDefault();
        fetch('https://boiling-reaches-16938.herokuapp.com/appointmentInformation', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(prescribedData)
        })
        .then(res => res.json())
        .then(data => {
            console.log('Information Placed');
            alert('Hi, ' + data.name + ' Successfully send Your Information.')
        })
    }
    useEffect(() => {
        fetch('https://boiling-reaches-16938.herokuapp.com/allAppointmentInformation')
        .then(res => res.json())
        .then(data => {
            setAppointmentInformation(data);
        })
    }, []);
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
                        <div>
                        <Typography variant="h4" gutterBottom>
                            Dashboard
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={3} lg={3}>
                                <Paper className={classes.paper1}>
                                    <div className={classes.justifyContent}>
                                        <Typography style={{fontWeight: '500'}} variant="h4" gutterBottom>
                                            09
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Pending Appointments
                                        </Typography>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={3} lg={3}>
                                <Paper className={classes.paper2}>
                                    <div className={classes.justifyContent}>
                                        <Typography style={{fontWeight: '500'}} variant="h4" gutterBottom>
                                            19
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Today's Appointments
                                        </Typography>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={3} lg={3}>
                                <Paper className={classes.paper}>
                                    <div className={classes.justifyContent}>
                                        <Typography style={{fontWeight: '500'}} variant="h4" gutterBottom>
                                            34
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Today's Appointments
                                        </Typography>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={3} lg={3}>
                                <Paper className={classes.paper4}>
                                    <div className={classes.justifyContent}>
                                        <Typography style={{fontWeight: '500'}} variant="h4" gutterBottom>
                                            78
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Total Patients
                                        </Typography>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                        </div>
                        <div className={classes.secondGridPaddingTop}>
                            <Grid>
                                <Grid item xs={12} md={12} lg={12}>
                                    <TableContainer component={Paper}>
                                        <div>
                                            <Box display="flex" fontSize="1.5rem" p={1}>
                                                <Box p={1} color="#32CCBC" flexGrow={1}>
                                                    Recent Appointments
                                                </Box>
                                                <Box p={1}>
                                                    {today.day + ' April, ' + today.year}
                                                </Box>
                                            </Box>
                                        </div>
                                        <Table className={classes.table} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">Sr.No</TableCell>
                                                    <TableCell align="center">Date</TableCell>
                                                    <TableCell align="center">Time</TableCell>
                                                    <TableCell align="center">Name</TableCell>
                                                    <TableCell align="center">Contact</TableCell>
                                                    <TableCell align="center">Prescription</TableCell>
                                                    <TableCell align="center">Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {appointInformation.map((row) => (
                                                    <TableRow key={row._id}>
                                                        <TableCell component="th" scope="row">{}</TableCell>
                                                        <TableCell align="right">{row.value}</TableCell>
                                                        <TableCell align="right">{row.appointmentTime}</TableCell>
                                                        <TableCell align="right">{row.name}</TableCell>
                                                        <TableCell align="right">{row.phoneNumber}</TableCell>
                                                        <TableCell align="right" component="th" scope="row">
                                                            <Button onClick={() => setModalIsOpen(true)} className={classes.btnViewBgColor}>View</Button>
                                                        </TableCell>
                                                        <TableCell align="right" component="th" scope="row">
                                                            <Button className={classes.actionBtnBgColor}>Pending</Button>
                                                            <Button className={classes.iconBtnBgColor}>
                                                                <CreateIcon/>
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                )).slice(0, 6)}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.modalPaddingTop}>
                <Modal 
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    style={
                        {
                            overlay: {
                                backgroundColor: '#f4fdfb',
                                textAlign: 'center'
                            },
                            content: {
                                textAlign: 'center',
                                backgroundColor: '#fff',
                                borderRadiu: '2px',
                                display: 'inline-block',
                                margin: '1rem',
                                position: 'relative',
                                overflow: 'auto',
                                boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
                            }
                        }
                    }
                >
                    <div>
                        <Box color="#32CCBC" pt={2} fontSize="1.4rem">
                            Prescription
                        </Box>
                        <form className={classes.form} onSubmit={sendPrescribedInformation}>
                            <input 
                                className={classes.formInput}
                                type = "text" 
                                name="name" 
                                id="name" 
                                placeholder="Your Name" 
                                onChange={e => setAppointmentInformation({...prescribedData, name: e.target.value})}
                            /> <br/>
                            <input 
                            className={classes.formInput}
                                type="text" 
                                name="phoneNumber" 
                                id="phoneNumber" 
                                placeholder="Phone Number" 
                                onChange={e => setAppointmentInformation({...prescribedData, phoneNumber: e.target.value})}
                            /> <br/>
                            <input 
                                className={classes.formInput}
                                type = "email" 
                                name="email" 
                                id="email" 
                                placeholder="Email" 
                                onChange={e => setAppointmentInformation({...prescribedData, email: e.target.value})}
                            /> <br/>
                            <Box pt={2} textAlign="right">
                                <input className={classes.submitBtn} type="Submit"/>
                            </Box>
                        </form>
                    </div>
                </Modal>
            </div>
                    </Container>
                <div/>
            </main>
        </div>
    );
}

export default DoctorAppointmentDashbord;