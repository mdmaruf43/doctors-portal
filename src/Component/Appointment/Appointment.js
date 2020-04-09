import Modal from 'react-modal';
import React, { useState } from 'react';
import './Appointment.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import banner from '../../images/Mask-Group-1.png';
import { Toolbar } from '@material-ui/core';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import Card from '@material-ui/core/Card';
import { utils } from 'react-modern-calendar-datepicker';
import { Calendar } from "react-modern-calendar-datepicker";
import CardContent from '@material-ui/core/CardContent';

    
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '65vh'
    },
    gridRoot1: {
        flexGrow: 1,
    },
    gridRoot2: {
        marginTop: '200px',
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
    img: {
        height: '40%',
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
    },
    appointment: {
        marginTop: '100px',
    },
    h5: {
        textAlign: 'center',
        color: '#32CCBC',

    },
    cardRoot: {
        minWidth: 275,
    },
    cardTitle: {
        fontSize: 20,
        color: '#32CCBC',
    },
    btn: {
        backgroundColor: '#32CCBC',
        "hover": {
            backgroundColor: '#32CCBC'
        },
        color: "#fff"
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
        padding: '25px 15px !important' 
    },
    submitBtn: {
        backgroundColor: '#32CCBC',
        color: '#fff',
        paddingLeft: '10px',
        paddingRight: '10px',
        borer: 'none',
        borderRadius: '5px',
        fontSize: '1.2rem'
    }
}));

const Appointment = (props) => {
    const classes = useStyles();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);
    const [appointmentInformation, setAppointmentInformation] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        date: '',
    });
    const [title, setTitle] = useState('Teeth Orthodontics');
    const gregorianToday = utils().getToday();
    const sendAppointmentInformation = (e) => {
        e.preventDefault();
        fetch('https://boiling-reaches-16938.herokuapp.com/appointmentInformation', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointmentInformation)
        })
        .then(res => res.json())
        .then(data => {
            console.log('Information Placed');
            alert('Hi, ' + data.name + ' Successfully send Your Information.')
        })
    }
    return (
        <Container>
            <div className={classes.bgImage}>
                <div className={classes.root}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Link className={classes.linkText} href="/">
                                Home
                            </Link>
                            <Link className={classes.linkText} href="/doctor/appointment/dashboard">
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
                                    Appointment
                                </Typography>
                                {   !modalIsOpen &&
                                    <Calendar
                                        value={selectedDay}
                                        onChange={date => setSelectedDay(date)}
                                        calendarClassName="responsive-calendar"
                                        shouldHighlightWeekends
                                    />
                                }
                            </Grid>
                            <Grid item xs={12} sm={8} md={7}>
                                <img className={classes.img} src={banner} alt=""/>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
            <div className={classes.appointment}>
                <Typography className={classes.h5} variant="h5" gutterBottom>
                    Available Appointments on {gregorianToday.day}, {gregorianToday.year}
                </Typography>
                <div className={classes.grodRoot1}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Card className={classes.cardRoot}>
                                <CardContent>
                                    <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                        Teeth Orthodontics
                                    </Typography>
                                    <Typography variant="body2" color="black">
                                        8:00 AM - 9:00 AM
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        <small>10 SPACES AVAILABEL</small>
                                    </Typography>
                                    <Button onClick={() => setModalIsOpen(true)} className={classes.btn}>
                                        Book Appointment
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card className={classes.cardRoot}>
                                <CardContent>
                                    <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                        Cosmetic Dentistry
                                    </Typography>
                                    <Typography variant="body2" color="black">
                                        10:05 AM - 11:30 AM
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        <small>10 SPACES AVAILABEL</small>
                                    </Typography>
                                    <Button onClick={() => setModalIsOpen(true)} className={classes.btn}>
                                        Book Appointment
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card className={classes.cardRoot}>
                                <CardContent>
                                    <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                        Teeth Cleaning
                                    </Typography>
                                    <Typography variant="body2" color="black">
                                        5:00 PM - 6:30 PM
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        <small>10 SPACES AVAILABEL</small>
                                    </Typography>
                                    <Button onClick={() => setModalIsOpen(true)} className={classes.btn}>
                                        Book Appointment
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.grodRoot2}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Card className={classes.cardRoot}>
                                <CardContent>
                                    <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                        Cavity Protection
                                    </Typography>
                                    <Typography variant="body2" color="black">
                                        7:00 AM - 8:30 AM
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        <small>10 SPACES AVAILABEL</small>
                                    </Typography>
                                    <Button onClick={() => setModalIsOpen(true)} className={classes.btn}>
                                        Book Appointment
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card className={classes.cardRoot}>
                                <CardContent>
                                    <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                        Teeth Orthodontics
                                    </Typography>
                                    <Typography variant="body2" color="black">
                                        8:00 AM - 9:00 AM
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        <small>10 SPACES AVAILABEL</small>
                                    </Typography>
                                    <Button onClick={() => setModalIsOpen(true)} className={classes.btn}>
                                        Book Appointment
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card className={classes.cardRoot}>
                                <CardContent>
                                    <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                        Teeth Orthodontics
                                    </Typography>
                                    <Typography variant="body2" color="black">
                                        8:00 AM - 9:00 Am
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        <small>10 SPACES AVAILABEL</small>
                                    </Typography>
                                    <Button onClick={() => setModalIsOpen(true)} className={classes.btn}>
                                        Book Appointment
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
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
                            {title}
                        </Box>
                        <form className={classes.form} onSubmit={sendAppointmentInformation}>
                            <input 
                                className={classes.formInput}
                                type = "text" 
                                name="name" 
                                id="name" 
                                placeholder="Your Name" 
                                onChange={e => setAppointmentInformation({...appointmentInformation, name: e.target.value})}
                            /> <br/>
                            <input 
                            className={classes.formInput}
                                type="text" 
                                name="phoneNumber" 
                                id="phoneNumber" 
                                placeholder="Phone Number" 
                                onChange={e => setAppointmentInformation({...appointmentInformation, phoneNumber: e.target.value})}
                            /> <br/>
                            <input 
                                className={classes.formInput}
                                type = "email" 
                                name="email" 
                                id="email" 
                                placeholder="Email" 
                                onChange={e => setAppointmentInformation({...appointmentInformation, email: e.target.value})}
                            /> <br/>
                            <input 
                                className={classes.formInput}
                                type = "text" 
                                name="date" 
                                id="date" 
                                placeholder="Email" 
                                value={gregorianToday.day + '/' + gregorianToday.month + '/' + gregorianToday.year} 
                                onChange={e => setAppointmentInformation({...appointmentInformation, value: e.target.value})}
                            /> <br/>
                            <Box pt={2} textAlign="right">
                                <input className={classes.submitBtn} type="Submit"/>
                            </Box>
                        </form>
                    </div>
                </Modal>
            </div>
        </Container>
    );
};

export default Appointment;