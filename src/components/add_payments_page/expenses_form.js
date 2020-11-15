import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
const reason = [
  {
    value: 'electrical',
    label: 'Electrical Work'
  }, {
    value: 'plumbing',
    label: 'Plumbing Work'
  }, {
    value: 'misc',
    label: 'Miscellaneous'
  }
]

export default function ExpenseForm(props) {
  return (
  <div>
      <TextField id="date" required label="Date of Expense" type="date"
         InputLabelProps={{
           shrink: true,
         }}>
      </TextField>
      <TextField required id="reason" select label="Reason"
       value={props.type}>
          {reason.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
      <br />
      <TextField required id="desc" label="Description"
       value={props.type} >
      </TextField>
      <br />
      <br />
      <TextField required id="amount" label="Amount" />
     </div>
   )
}
