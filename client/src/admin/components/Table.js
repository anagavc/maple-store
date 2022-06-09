import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TablePagination } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";
import { NavigationButton } from "./Buttons";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#7A8890",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#7A8890",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#E7F4FC",
    color: "#7A8890",
    paddingTop: "2px",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function PaymentsTable({ headers, data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((head, index) => (
              <StyledTableCell key={index}>
                <select>
                  <option defaultValue>{head.name}</option>
                </select>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <StyledTableRow key={row.invoice_number}>
                <StyledTableCell component="th" scope="row">
                  {row.invoice_number}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.date}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.category}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.student_name}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.class}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.bill_assigned}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.amount_paid}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.balance}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.payment_method}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[2, 5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
export function ExpensesTables({ headers, data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((head, index) => (
              <StyledTableCell key={index}>
                <select>
                  <option defaultValue>{head.name}</option>
                </select>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.invoice_number}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.date}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.category}
                </StyledTableCell>

                <StyledTableCell component="th" scope="row">
                  {row.amount_paid}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.description}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.remark}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[2, 5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
export function AllTable({ headers, data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((head, index) => (
              <StyledTableCell key={index}>
                <select>
                  <option defaultValue>{head.name}</option>
                </select>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.invoice_number}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.category}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.student_name}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.class}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.bill_assigned}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.amount_paid}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.balance}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.payment_method}
              </StyledTableCell>

              <StyledTableCell component="th" scope="row">
                {row.description}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.remark}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function StudentsTable({ headers, data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [activeRow, setActiveRow] = useState();
  const handleMoreMenu = (event, row) => {
    event.preventDefault();
    setActiveRow(row.id);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((head, index) => (
              <StyledTableCell key={index}>{head.name}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.first_name}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.middle_name}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.last_name}
                </StyledTableCell>

                <StyledTableCell component="th" scope="row">
                  {row.class}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.arm}
                </StyledTableCell>
                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{ width: "200px" }}
                >
                  <NavLink to={`${row.id}/addPayment`}>{row.action}</NavLink>{" "}
                  <button onClick={(event) => handleMoreMenu(event, row)}>
                    <MoreVertIcon />
                  </button>
                  {activeRow === row.id && (
                    <div
                      className="absolute flex flex-col items-center bg-grey-50 space-y-4 py-4 w-40 mb-24 px-2 z-50"
                      onClick={() => setActiveRow(null)}
                    >
                      <NavigationButton path={`${row.id}/`}>
                        Student's details
                      </NavigationButton>
                    </div>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[2, 5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
export function EntriesTable({ headers, data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [activeRow, setActiveRow] = useState(null);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((head, index) => (
              <StyledTableCell key={index}>
                <select>
                  <option defaultValue>{head.name}</option>
                </select>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.date}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.teller_name}
                </StyledTableCell>

                <StyledTableCell component="th" scope="row">
                  {row.total_payment}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.total_expense}
                </StyledTableCell>

                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{ width: "200px" }}
                >
                  <NavLink to=":id/addPayment">{row.status}</NavLink>{" "}
                  <button
                    onClick={() => {
                      setActiveRow(0);
                    }}
                  >
                    <MoreVertIcon />
                  </button>
                  {activeRow === row.id && (
                    <div className="absolute flex flex-col bg-grey-50 py-4 w-40 mb-24 px-2 z-50">
                      <button>Permissions</button>
                      <button>Edit entry</button>
                      <button>Delete entry</button>
                    </div>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[2, 5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
export function UserTable({ headers, data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [activeRow, setActiveRow] = useState(null);

  const handleMoreMenu = (event, row) => {
    event.preventDefault();
    setActiveRow(row.id);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((head, index) => (
              <StyledTableCell key={index}>
                <select>
                  <option defaultValue>{head.name}</option>
                </select>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.username}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.email}
                </StyledTableCell>

                <StyledTableCell component="th" scope="row">
                  {row.designation}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.password}
                </StyledTableCell>

                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{ width: "200px" }}
                >
                  <NavLink to=":id/addPayment">{row.status}</NavLink>{" "}
                  <button onClick={(event) => handleMoreMenu(event, row)}>
                    <MoreVertIcon />
                  </button>
                  {activeRow === row.id && (
                    <div
                      className="absolute flex flex-col bg-grey-50 space-y-4 py-4 w-40 mb-24 px-2 z-50"
                      onClick={() => setActiveRow(null)}
                    >
                      <button>Edit information</button>
                      <button>Change password</button>
                      <button>Block user</button>
                      <button>Delete user</button>
                    </div>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[2, 5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

// <button onClick={() => setCheck((prevCheck) => !prevCheck)}>
//   {check.toString()}
// </button>;
