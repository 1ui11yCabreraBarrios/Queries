import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'numero', label: 'Numero', minWidth: 50 },
  { id: 'producto', label: 'Producto', minWidth: 100,format: (value) => value.toLocaleString('en-US'), },
  {
    id: 'presentacion',
    label: 'Presentacion',
    minWidth: 100,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'existencia',
    label: 'Existencia',
    minWidth: 50,
    format: (value) => value.toLocaleString('en-US'),
  },
  
  {
    id: 'descripcion',
    label: 'Descripcion',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'laboratorio',
    label: 'Laboratorio',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'dosis',
    label: 'Dosis',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'formula',
    label: 'Formula',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(numero, producto, presentacion, existencia,descripcion,laboratorio,dosis, formula) {
 
  return { numero,producto, presentacion, existencia, descripcion, laboratorio,dosis,formula };
}

const rows = [
  createData(1, 'Aceptal', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Lancasco','1 tableta cada 8 horas','Acetaminofen'),
  createData(2, 'Napofen', 'Blister de 5 tabletas', 100,'Para inflamacion y dolor','Pharmadel','1 tableta cada 8 horas','Naproxeno'),
  createData(3, 'Acetaminofen', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Selectpharma','1 tableta cada 8 horas','Acetaminofen'),
  createData(4, 'Acetaminofen', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Selectpharma','1 tableta cada 8 horas','Acetaminofen'),
  createData(5, 'Acetaminofen', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Selectpharma','1 tableta cada 8 horas','Acetaminofen'),
  createData(6, 'Acetaminofen', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Selectpharma','1 tableta cada 8 horas','Acetaminofen'),
  createData(7, 'Acetaminofen', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Selectpharma','1 tableta cada 8 horas','Acetaminofen'),
  createData(8, 'Acetaminofen', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Selectpharma','1 tableta cada 8 horas','Acetaminofen'),
  createData(9, 'Acetaminofen', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Selectpharma','1 tableta cada 8 horas','Acetaminofen'),
  createData(10, 'Acetaminofen', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Selectpharma','1 tableta cada 8 horas','Acetaminofen'),
  createData(11, 'Acetaminofen', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Selectpharma','1 tableta cada 8 horas','Acetaminofen'),
  createData(12, 'Acetaminofen', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Selectpharma','1 tableta cada 8 horas','Acetaminofen'),
  createData(13, 'Acetaminofen', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Selectpharma','1 tableta cada 8 horas','Acetaminofen'),
  createData(14, 'Acetaminofen', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Selectpharma','1 tableta cada 8 horas','Acetaminofen'),
  createData(15, 'Acetaminofen', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Selectpharma','1 tableta cada 8 horas','Acetaminofen'),
  createData(16, 'Acetaminofen', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Selectpharma','1 tableta cada 8 horas','Acetaminofen'),
  createData(17, 'Acetaminofen', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Selectpharma','1 tableta cada 8 horas','Acetaminofen'),
  createData(18, 'Acetaminofen', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Selectpharma','1 tableta cada 8 horas','Acetaminofen'),
  createData(19, 'Acetaminofen', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Selectpharma','1 tableta cada 8 horas','Acetaminofen'),
  createData(20, 'Acetaminofen', 'Blister de 10 tabletas', 200,'Para fiebre y dolor de cabeza','Selectpharma','1 tableta cada 8 horas','Acetaminofen'),
 




];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
    borderRadius:"2rem",
  },
});

export function DashboardPage() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
