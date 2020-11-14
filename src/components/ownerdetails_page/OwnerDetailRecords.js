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

function createData(flatno, block, ownersName, mobileNumber) {
  return { flatno, block, ownersName, mobileNumber };
}

const rows = [
  createData('302', 'B', 'Seshagiri Rao Mellacheruvu', '8143398402'),
  createData('302', 'B', 'Sandeep Mellacheruvu', '8143398402'),
];

export default function OwnerDetailRecords() {
  const classes = useStyles();
  const columnNames = ['Flat no', 'Block', 'Owner\'s name', 'Mobile Number']
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
            rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.flatno}
                </TableCell>
                <TableCell align="right">{row.block}</TableCell>
                <TableCell align="right">{row.ownersName}</TableCell>
                <TableCell align="right">{row.mobileNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
