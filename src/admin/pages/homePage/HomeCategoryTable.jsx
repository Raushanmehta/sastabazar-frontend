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
import { Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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
function createData(number, id, image, category) {
  return { number, id, image, category };
}

const rows = [
  createData(1, "CAT001", "📱", "Electronics"),
  createData(2, "CAT002", "👕", "Fashion"),
  createData(3, "CAT003", "🍎", "Grocery"),
  createData(4, "CAT004", "🪑", "Furniture"),
  createData(5, "CAT005", "📚", "Books"),
  createData(6, "CAT006", "💄", "Beauty"),
  createData(7, "CAT007", "🏀", "Sports"),
  createData(8, "CAT008", "🧸", "Toys"),
  createData(9, "CAT009", "🚗", "Automobile"),
  createData(10, "CAT010", "💻", "Computers"),
];

/* ---------- COMPONENT ---------- */
const HomeCategoryTable = () => {
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
        <span><Link to="/admin" className="cursor-pointer">
            Home
          </Link></span>
        <ChevronRightIcon fontSize="small" />
        <span className="text-gray-400">Category</span>
      </div>
      <h1 className="text-xl font-semibold text-primary">All Category</h1>
      <Paper sx={{ height: "70vh", display: "flex", flexDirection: "column" }}>
        <TableContainer
          sx={{
            flex: 1,
            overflow: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <StyledTableCell>No</StyledTableCell>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell align="right">Category</StyledTableCell>
                <StyledTableCell align="right">Update</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedRows.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell>{row.number}</StyledTableCell>
                  <StyledTableCell>{row.id}</StyledTableCell>
                  <StyledTableCell>{row.image}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.category}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<Edit />}
                    >
                      Edit
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

export default HomeCategoryTable;
