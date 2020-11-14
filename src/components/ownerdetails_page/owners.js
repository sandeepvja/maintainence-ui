import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableTitle: {
    color: '#3f51b5',
    marginTop: '50px',
  }
}))

export default function OwnerDetails(){
  const classes = useStyles();
  return (
    <Typography variant="h4" component="h2" gutterBottom className={classes.tableTitle}>
      Owner Details
    </Typography>
  )
}
