import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
const paymentTypes = [
  {
    value: 'maintainence',
    label: 'Maintainence'
  }, {
    value: 'corpus',
    label: 'Corpus Fund'
  }
]
const month = [
  {
    value: 'january',
    label: 'January'
  }, {
    value: 'february',
    label: 'February'
  }, {
    value: 'march',
    label: 'March'
  }, {
    value: 'april',
    label: 'April'
  }, {
    value: 'may',
    label: 'May'
  }, {
    value: 'june',
    label: 'June'
  }, {
    value: 'july',
    label: 'July'
  }, {
    value: 'august',
    label: 'August'
  }, {
    value: 'september',
    label: 'September'
  },{
    value: 'october',
    label: 'October'
  }, {
    value: 'november',
    label: 'November'
  }, {
    value: 'december',
    label: 'December'
  }
]
function onPaymentTypeChange(e, setPaymentType) {
  setPaymentType(e.target.value)
}
function onPaymentMonthChange(e, setPaymentMonth) {
  setPaymentMonth(e.target.value)
  console.log(e.target.value)
}
function onPaymentDateChange(e, setPaymentDate) {
  setPaymentDate(e.target.value)
  console.log(e.target.value)
}
function onPaymentAmountChange(e, setPaymentAmount) {

  const isNum = isNumber(e.target.value)
  //console.log("value: " + e.target.value + " is Number: " + isNumber(e.target.value))
  if (isNum) {
    const amt = e.target.value
    setPaymentAmount(amt)
    //console.log(amt)
  }
}
function getCurrentDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
function isNumber(value) {
  const numberRegex = /^\d*\.?\d*$/
  if (value === '' || numberRegex.test(value)) {
    return true
  }
  else {
    return false
  }
}
export default function AddPaymentForm(props) {
  const classes = useStyles();
  const [paymentType, setPaymentType] = useState('');
  const [paymentMonth, setPaymentMonth] = useState('');
  const [paymentDate, setPaymentDate] = useState(getCurrentDate());
  const [paymentAmount, setPaymentAmount] = useState('');

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField required id="payment_type" select label="Payment Type"
        value={paymentType} onChange={(e) => onPaymentTypeChange(e, setPaymentType)}>
          {paymentTypes.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
      <br />
      <TextField required id="month" select label="Month"
       value={paymentMonth} onChange={(e) => onPaymentMonthChange(e, setPaymentMonth)}>
          {month.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
      <br />
      <TextField id="date" required label="Payment Date" type="date"
         value={paymentDate} onChange={(e) => onPaymentDateChange(e, setPaymentDate)}>
         >
      </TextField>
      <br />
      <TextField required id="amount" label="Amount" value={paymentAmount}
        onChange={(e) => onPaymentAmountChange(e, setPaymentAmount)}/>
      <br/>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
