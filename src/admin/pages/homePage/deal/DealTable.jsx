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
import Button from "@mui/material/Button";
import { Delete, Edit } from "@mui/icons-material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";


/* ---------- STYLED ---------- */
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

/* ---------- DATA ---------- */
function createData(number, image, category, discount) {
  return { number, image, category, discount };
}

const rows = [
  createData(1, "📱", "Electronics", "20%"),
  createData(2, "👕", "Fashion", "30%"),
  createData(3, "🍎", "Grocery", "10%"),
  createData(4, "🪑", "Furniture", "25%"),
  createData(5, "📚", "Books", "15%"),
  createData(6, "💄", "Beauty", "40%"),
  createData(7, "🏀", "Sports", "35%"),
  createData(8, "🧸", "Toys", "18%"),
  createData(9, "🚗", "Automobile", "22%"),
  createData(10, "💻", "Computers", "28%"),
];

/* ---------- COMPONENT ---------- */
const DealTable = () => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-2 text-sm mb-6">
        <span className="text-base font-semibold text-black">Deals</span>
        <ChevronRightIcon fontSize="small" />
        <span>
          <Link to="/admin" className="cursor-pointer">
            Home
          </Link>
        </span>
        <ChevronRightIcon fontSize="small" />
        <span className="text-gray-400">Deals</span>
      </div>
      <h1 className="text-xl font-semibold text-primary">Deals</h1>

      <Paper sx={{ height: "70vh", display: "flex", flexDirection: "column" }}>
        <TableContainer
          sx={{
            flex: 1,
            overflow: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <StyledTableCell>No</StyledTableCell>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell>Category</StyledTableCell>
                <StyledTableCell>Discount</StyledTableCell>
                <StyledTableCell align="center">Edit</StyledTableCell>
                <StyledTableCell align="right">Delete</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedRows.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{row.number}</StyledTableCell>
                  <StyledTableCell>{row.image}</StyledTableCell>
                  <StyledTableCell>{row.category}</StyledTableCell>
                  <StyledTableCell>{row.discount}</StyledTableCell>

                  <StyledTableCell align="center">
                    <Button size="small" variant="outlined">
                      <Edit />
                    </Button>
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    <Button size="small" variant="outlined" color="error">
                      <Delete />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={rows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[10, 20, 30]}
          onPageChange={(e, newPage) => setPage(newPage)}
        />
      </Paper>
    </div>
  );
};

export default DealTable;
