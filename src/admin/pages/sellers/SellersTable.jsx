import { useState } from "react";

/* -------- MUI ICONS -------- */
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";

/* -------- MUI COMPONENTS -------- */
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
  Paper,
  TextField,
  InputAdornment,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { Link } from "react-router-dom";

/* -------- STATUS DATA -------- */
const accountStatus = [
  { status: "ALL", title: "All" },
  { status: "PENDING_VERIFICATION", title: "Pending Verification" },
  { status: "ACTIVE", title: "Active" },
  { status: "SUSPENDED", title: "Suspended" },
  { status: "DEACTIVATED", title: "Deactivated" },
  { status: "BANNED", title: "Banned" },
  { status: "CLOSED", title: "Closed" },
];

/* -------- STYLED TABLE -------- */
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

/* -------- TABLE DATA -------- */
const createData = (
  sellerName,
  email,
  mobile,
  gstin,
  businessName,
  accountStatus
) => ({
  sellerName,
  email,
  mobile,
  gstin,
  businessName,
  accountStatus,
});

const rows = [
  createData(
    "Rahul Sharma",
    "rahul@example.com",
    "9876543210",
    "22AAAAA0000A1Z5",
    "Rahul Enterprises",
    "ACTIVE"
  ),
  createData(
    "Amit Verma",
    "amit@example.com",
    "9123456789",
    "29BBBBB1111B2Z6",
    "Verma Traders",
    "SUSPENDED"
  ),
  createData(
    "Neha Singh",
    "neha@example.com",
    "9988776655",
    "07CCCCC2222C3Z7",
    "Singh Stores",
    "PENDING_VERIFICATION"
  ),
  createData(
    "Rohit Gupta",
    "rohit@example.com",
    "9090909090",
    "19DDDDD3333D4Z8",
    "Gupta Mart",
    "ACTIVE"
  ),
  createData(
    "Rohit Gupta",
    "rohit@example.com",
    "9090909090",
    "19DDDDD3333D4Z8",
    "Gupta Mart",
    "ACTIVE"
  ),
];

/* -------- MAIN COMPONENT -------- */
const SellersTable = () => {
  const [status, setStatus] = useState("ALL");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const rowsPerPage = 10;

  /* -------- FILTER LOGIC -------- */
  const filteredRows = rows.filter((row) => {
    const statusMatch =
      status === "ALL" ? true : row.accountStatus === status;

    const searchMatch =
      row.sellerName.toLowerCase().includes(search.toLowerCase()) ||
      row.email.toLowerCase().includes(search.toLowerCase()) ||
      row.businessName.toLowerCase().includes(search.toLowerCase());

    return statusMatch && searchMatch;
  });

  const paginatedRows = filteredRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="w-full">
      {/* -------- BREADCRUMB -------- */}
      <div className="flex items-center gap-2 text-sm mb-6">
        <span className="text-base font-semibold text-black">Sellers</span>
        <ChevronRightIcon fontSize="small" />
        <span><Link to="/admin">Home</Link></span>
        <ChevronRightIcon fontSize="small" />
        <span className="text-gray-400">Sellers</span>
      </div>

      {/* -------- FILTER BAR -------- */}
      <div className="flex items-center justify-between mb-4">
        <FormControl sx={{ width: 240 }} size="small">
          <InputLabel>Account Status</InputLabel>
          <Select
            value={status}
            label="Account Status"
            onChange={(e) => {
              setStatus(e.target.value);
              setPage(0);
            }}
          >
            {accountStatus.map((item) => (
              <MenuItem key={item.status} value={item.status}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          size="small"
          placeholder="Search seller..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(0);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          sx={{ width: 280 }}
        />
      </div>

      {/* -------- TABLE -------- */}
      <Paper sx={{ height: "65vh", display: "flex", flexDirection: "column" }}>
        <TableContainer sx={{ flex: 1, overflow: "auto" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Mobile</StyledTableCell>
                <StyledTableCell>GSTIN</StyledTableCell>
                <StyledTableCell>Business Name</StyledTableCell>
                <StyledTableCell>Account Status</StyledTableCell>
                <StyledTableCell align="right">
                  Change Status
                </StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedRows.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{row.sellerName}</StyledTableCell>
                  <StyledTableCell>{row.email}</StyledTableCell>
                  <StyledTableCell>{row.mobile}</StyledTableCell>
                  <StyledTableCell>{row.gstin}</StyledTableCell>
                  <StyledTableCell>{row.businessName}</StyledTableCell>
                  <StyledTableCell>{row.accountStatus}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Select size="small" value={row.accountStatus}>
                      {accountStatus
                        .filter((s) => s.status !== "ALL")
                        .map((item) => (
                          <MenuItem
                            key={item.status}
                            value={item.status}
                          >
                            {item.title}
                          </MenuItem>
                        ))}
                    </Select>
                  </StyledTableCell>
                </StyledTableRow>
              ))}

              {paginatedRows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    No sellers found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* -------- PAGINATION -------- */}
        <TablePagination
          component="div"
          count={filteredRows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[10]}
          onPageChange={(_, newPage) => setPage(newPage)}
          onRowsPerPageChange={() => {}}
        />
      </Paper>
    </div>
  );
};

export default SellersTable;
