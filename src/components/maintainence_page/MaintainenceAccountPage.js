import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MaintainenceRecords from './MaintainenceRecords';
import PendingPaymentRecords from './PendingPaymentRecords';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableTitle: {
    color: '#3f51b5',
    marginTop: '50px',
  }
}))

export default function MaintainenceAccountPage(){
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom className={classes.tableTitle}>
        Maintainence Payments
      </Typography>
      <MaintainenceRecords/>
      <Typography variant="h4" component="h2" gutterBottom className={classes.tableTitle}>
        Pending Payments
      </Typography>
      <PendingPaymentRecords/>
    </div>
  )
}
