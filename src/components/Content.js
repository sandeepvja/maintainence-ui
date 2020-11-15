import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaintainenceAccountPage from './maintainence_page/MaintainenceAccountPage';
import OwnerDetailsPage from './ownerdetails_page/OwnershipDetailsPage';
import AddPaymentsPage from './add_payments_page/AddPaymentsPage';

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
function getMainContentPage(props) {

  switch(props.selected) {
    case 0:
      return <OwnerDetailsPage />

    case 1:
      return <MaintainenceAccountPage />
    case 2:
      return <AddPaymentsPage/>

    default:
      return <OwnerDetailsPage />
  }
}
export default function MainContent(props){
  const classes = useStyles();
  const page = getMainContentPage(props)
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {page}
    </main>
  )
}
