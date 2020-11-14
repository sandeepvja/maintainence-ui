import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaintainenceAccountPage from './maintainence_page/MaintainenceAccountPage';
import OwnerDetailsPage from './ownerdetails_page/owners';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  table: {
    minWidth: 650,
  },
  tableTitle: {
    color: '#3f51b5',
    marginTop: '20px',
  }
}))
function getMainContentPage(selected) {
  
  switch(selected) {
    case 0:
      return <OwnerDetailsPage />

    case 1:
      return <MaintainenceAccountPage />

    default:
      return <MaintainenceAccountPage />
  }
}
export default function MainContent(props){
  const classes = useStyles();
  const page = getMainContentPage(props.selected)
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {page}
    </main>
  )
}
