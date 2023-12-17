import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: jjj,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  Total: total,
    x
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Toyota', 'Aqua','Gear Box', 24, 4.0),
  createData('Mitsubishi','Chariot','Rear Mirror', 37, 4.3),
  createData('Mazda', 3,'gear Box', 24, 6.0),
  createData('Ford', 'Ranger','Lights', 67, 4.3),
  createData('Nissan','Box','Washers', 49, 3.9),
];

export default function Stock() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Carname</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Part Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Buying Price</TableCell>
            <TableCell align="right">Selling Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.fat*row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}