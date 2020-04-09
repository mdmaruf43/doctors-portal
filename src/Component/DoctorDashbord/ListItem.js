import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import DvrIcon from '@material-ui/icons/Dvr';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AddIcCallIcon/>
            </ListItemIcon>
            <ListItemText primary="Appointment" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Patients" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <DvrIcon/>
            </ListItemIcon>
            <ListItemText primary="Prescriptions" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <SettingsIcon/>
            </ListItemIcon>
            <ListItemText primary="Setting" />
        </ListItem>
    </div>
);