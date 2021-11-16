import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
// Icons
import EditIcon from "@mui/icons-material/EditOutlined";
import DoneIcon from "@mui/icons-material/DoneAllTwoTone";
import RevertIcon from "@mui/icons-material/NotInterestedOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
  selectTableCell: {
    width: 60,
  },
  tableCell: {
    width: 130,
    height: 40,
  },
  input: {
    width: 130,
    height: 40,
  },
}));

let idNo = 0;

const createData = (
  name,
  address,
  mobile,
  email,
  city,
  pieces,
  weight,
  cod,
  order,
  special,
  service,
  product,
  remarks,
  insurance
) => ({
  id: idNo++,
  name,
  address,
  mobile,
  email,
  city,
  pieces,
  weight,
  cod,
  order,
  special,
  service,
  product,
  remarks,
  insurance,
  isEditMode: false,
});

const CustomTableCell = ({ row, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  return (
    <TableCell align="left" className={classes.tableCell}>
      {isEditMode ? (
        <Input
          value={row[name]}
          name={name}
          onChange={(e) => onChange(e, row)}
          className={classes.input}
        />
      ) : (
        row[name]
      )}
    </TableCell>
  );
};

function FaiedTable({rows}) {
  // const [rows, setRows] = React.useState([
  //   createData(
  //     "Muhamamd Ismail",
  //     "Korangi no. 5",
  //     "03161604575",
  //     "ismail.muhammad@tcs.com.pk",
  //     "Karachi",
  //     2,
  //     3,
  //     3000,
  //     12345,
  //     "-",
  //     "-",
  //     "-",
  //     "-",
  //     "-",
  //   ),
  //   createData(
  //     "Muhamamd Ismail",
  //     "Korangi no. 5",
  //     "03161604575",
  //     "ismail.muhammad@tcs.com.pk",
  //     "Karachi",
  //     2,
  //     3,
  //     3000,
  //     12345,
  //     "-",
  //     "-",
  //     "-",
  //     "-",
  //     "-",
  //   ),
  //   createData(
  //     "Muhamamd Ismail",
  //     "Korangi no. 5",
  //     "03161604575",
  //     "ismail.muhammad@tcs.com.pk",
  //     "Karachi",
  //     2,
  //     3,
  //     3000,
  //     12345,
  //     "-",
  //     "-",
  //     "-",
  //     "-",
  //     "-",
  //   ),
  // ]);
  const [previous, setPrevious] = React.useState({});
  const classes = useStyles();

  const onToggleEditMode = (id) => {
    setRows((state) => {
      return rows.map((row) => {
        if (row.id === id) {
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };

  const onChange = (e, row) => {
    if (!previous[row.id]) {
      setPrevious((state) => ({ ...state, [row.id]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const onRevert = (id) => {
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return previous[id] ? previous[id] : row;
      }
      return row;
    });
    setRows(newRows);
    setPrevious((state) => {
      delete state[id];
      return state;
    });
    onToggleEditMode(id);
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="left" />
            <TableCell align="left">Consignee Name</TableCell>
            <TableCell align="left">Consignee Address</TableCell>
            <TableCell align="left">Consignee Mobile Number</TableCell>
            <TableCell align="left">Consignee Email</TableCell>
            <TableCell align="left">Destination City</TableCell>
            <TableCell align="left">Piecesa</TableCell>
            <TableCell align="left">Weight</TableCell>
            <TableCell align="left">COD Amount</TableCell>
            <TableCell align="left">Order Reference Number</TableCell>
            <TableCell align="left">Special Handling</TableCell>
            <TableCell align="left">Service Type</TableCell>
            <TableCell align="left">Product Details</TableCell>
            <TableCell align="left">Remarks</TableCell>
            <TableCell align="left">Insurance/Declared Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={classes.selectTableCell}>
                {row.isEditMode ? (
                  <>
                    <IconButton
                      aria-label="done"
                      onClick={() => onToggleEditMode(row.id)}
                    >
                      <DoneIcon />
                    </IconButton>
                    <IconButton
                      aria-label="revert"
                      onClick={() => onRevert(row.id)}
                    >
                      <RevertIcon />
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    aria-label="delete"
                    onClick={() => onToggleEditMode(row.id)}
                  >
                    <EditIcon />
                  </IconButton>
                )}
              </TableCell>
              <CustomTableCell {...{ row, name: "name", onChange }} />
              <CustomTableCell {...{ row, name: "address", onChange }} />
              <CustomTableCell {...{ row, name: "mobile", onChange }} />
              <CustomTableCell {...{ row, name: "email", onChange }} />
              <CustomTableCell {...{ row, name: "city", onChange }} />
              <CustomTableCell {...{ row, name: "pieces", onChange }} />
              <CustomTableCell {...{ row, name: "weight", onChange }} />
              <CustomTableCell {...{ row, name: "cod", onChange }} />
              <CustomTableCell {...{ row, name: "order", onChange }} />
              <CustomTableCell {...{ row, name: "special", onChange }} />
              <CustomTableCell {...{ row, name: "service", onChange }} />
              <CustomTableCell {...{ row, name: "product", onChange }} />
              <CustomTableCell {...{ row, name: "remarks", onChange }} />
              <CustomTableCell {...{ row, name: "insurance", onChange }} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default FaiedTable;
