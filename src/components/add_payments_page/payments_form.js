import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
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

export default function PaymentsForm(props) {
  return (
  <div>
      <TextField required id="payment-type" select label="Payment Type"
       value={props.type} helperText="Please select your Data entry type">
          {paymentTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
      <br />
      <TextField required id="month" select label="Month" size="1000"
       value={props.type} >
          {month.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
      <br />
      <TextField id="date" required label="Payment Date" type="date"
         InputLabelProps={{
           shrink: true,
         }}>
      </TextField>
      <br />
      <TextField required id="amount" label="Amount" />
     </div>
   )
}
