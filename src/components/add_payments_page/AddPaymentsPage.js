import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PaymentsForm from './payments_form';
import ExpenseForm from './expenses_form';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const entryTypes = [
  {
    value: 'payment',
    label: 'Payment'
  }, {
    value: 'expense',
    label: 'Expense'
  }
]

function handleChange(e) {
  console.log("Selected: "+ e)
}
export default function AddPaymentForm(props) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <PaymentsForm />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
