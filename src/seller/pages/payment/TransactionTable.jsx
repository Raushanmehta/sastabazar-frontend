import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { Divider } from "@mui/material";

/* Styled */
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

/* Data */
function createData(date, customer, order, amount) {
  return { date, customer, order, amount };
}

const rows = [
  createData("12 Jan", "Rahul", "#ORD01", "₹1200"),
  createData("13 Jan", "Neha", "#ORD02", "₹900"),
  createData("14 Jan", "Amit", "#ORD03", "₹2200"),
  createData("15 Jan", "Pooja", "#ORD04", "₹500"),
  createData("16 Jan", "Ravi", "#ORD05", "₹3400"),
  createData("17 Jan", "Sonal", "#ORD06", "₹1200"),
  createData("18 Jan", "Vikas", "#ORD07", "₹850"),
  createData("19 Jan", "Kiran", "#ORD08", "₹460"),
  createData("20 Jan", "Aman", "#ORD09", "₹1800"),
  createData("21 Jan", "Riya", "#ORD10", "₹750"),
  createData("22 Jan", "Ankit", "#ORD11", "₹950"),
  createData("23 Jan", "Simran", "#ORD12", "₹2200"),
];

export default function TransactionTable() {
  const [page, setPage] = useState(0);
  const rowsPerPage = 7; // fixed rows per page

  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-semibold text-gray-700">
        All Transactions
      </h1>

      <Paper sx={{ height: "70vh", display: "flex", flexDirection: "column" }}>
        {/* Table */}
        <TableContainer sx={{ flex: 1, overflow: "auto" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Customer</StyledTableCell>
                <StyledTableCell>Order</StyledTableCell>
                <StyledTableCell align="right">Amount</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedRows.map((row, i) => (
                <StyledTableRow key={i}>
                  <StyledTableCell>{row.date}</StyledTableCell>
                  <StyledTableCell>{row.customer}</StyledTableCell>
                  <StyledTableCell>{row.order}</StyledTableCell>
                  <StyledTableCell align="right">{row.amount}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <TablePagination
          component="div"
          count={rows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[6]}
          onPageChange={(e, newPage) => setPage(newPage)}
        />
      </Paper>
    </div>
  );
}
