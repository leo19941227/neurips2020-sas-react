import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('8:45 - 9:00', "Intro", "", "", ""),
  createData('9:00 - 9:30', "Invited talk - session 1", "", "", ""),
  createData('9:30 - 10:00', "Invited talk - session 2", "", "", ""),
  createData('10:00 - 10:15', "Poster - lightning round", "", "", ""),
  createData('10:15 - 11:00', "Virtual poster session", "", "", ""),,
  createData('11:00 - 11:30', "Invited talk - 3", "", "", ""),
  createData('11:30 - 12:30', "Contributed talk - session 1", "", "", ""),
  createData('12:30 - 1:30', "Break", "", "", ""),
  createData('1:30 - 2:00', "Invited talk - session 4", "", "", ""),
  createData('2:00 - 2:30', "Invited talk - session 5", "", "", ""),
  createData('2:30 - 3:30', "Contributed talk - session 2", "", "", ""),
  createData('3:30 - 4:15', "Virtual poster session", "", "", ""),
  createData('4:15 - 4:45', "Invited talk - session 6", "", "", ""),
  createData('4:45 - 5:15', "Invited talk - session 7", "", "", ""),
  createData('5:15 - 6:00', "Virtual Panel / open discussion", "", "", ""),
  createData('6:00 - 6:05', "Closing remarks", "", "", ""),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Time</StyledTableCell>
            <StyledTableCell align="left">Type</StyledTableCell>
            <StyledTableCell align="left">Presenters</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="left">Note</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
              <StyledTableCell align="left">{row.carbs}</StyledTableCell>
              <StyledTableCell align="left">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
