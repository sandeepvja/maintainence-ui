import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ReceiptIcon from '@material-ui/icons/Receipt';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft(props) {
  const classes = useStyles();

  const menuItems = ['Owner Details', 'Maintainence Account', 'Expenses', 'Minutes of the Meeting']
  const icons = [<InfoIcon/>, <AccountBalanceIcon/>, <ReceiptIcon/>, <MeetingRoomIcon/>]

  const listItems = menuItems.map((menu, index) => (
    <ListItem button key={index} onClick={() => props.onMenuItemClick(index)}>
        <ListItemIcon>{icons[index]}</ListItemIcon>
        <ListItemText primary={menu} />
    </ListItem>
  ))
  return (
    <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper,}} anchor="left">
      <div className={classes.toolbar} />
      <Divider />
      <List>
          {listItems}
      </List>
    </Drawer>
  )
}
