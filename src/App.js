import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import PermanentDrawerLeft from './components/Drawer';
import MainContent from './components/Content';

const drawerWidth = 240;
const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  }
});

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0
    }
  }
  onMenuItemClick(index) {
    this.setState({selected: index})
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h4" noWrap>
              Sai Srinivasam Apartments
            </Typography>
          </Toolbar>
        </AppBar>
        <PermanentDrawerLeft onMenuItemClick={this.onMenuItemClick.bind(this)}/>
        <MainContent selected={this.state.selected}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
