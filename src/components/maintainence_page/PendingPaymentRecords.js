import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(flatNo, ownersName, amount, monthToBePaid) {
  return { flatNo, ownersName, amount, monthToBePaid };
}

const rows = [
  createData('302B', 'Seshagiri Rao Mellacheruvu', '2000', 'Oct  2020'),
  createData('302B', 'Sandeep Mellacheruvu', '2000', 'Nov  2020')
];

export default function MaintainenceDetails() {
  const classes = useStyles();
  const columnNames = ['Flat No', 'Owners name', 'Amount', 'Month to be Paid']
  const tableCells = columnNames.map((columnName) =>
      <TableCell align="right">{columnName}</TableCell>
  )
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableCells}
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.paymentDate}
                </TableCell>
                <TableCell align="right">{row.flatNo}</TableCell>
                <TableCell align="right">{row.ownersName}</TableCell>
                <TableCell align="right">{row.amountPaid}</TableCell>
                <TableCell align="right">{row.monthToBePaid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
