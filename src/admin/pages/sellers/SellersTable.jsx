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
  Paper
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { useState } from "react";

/* -------- STATUS DATA -------- */
const accountStatus = [
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

/* -------- TABLE DATA (UPDATED TO MATCH HEADER) -------- */
const createData = (
  sellerName,
  email,
  mobile,
  gstin,
  businessName,
  accountStatus
) => {
  return { sellerName, email, mobile, gstin, businessName, accountStatus };
};

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
    "Rahul Sharma",
    "rahul@example.com",
    "9876543210",
    "22AAAAA0000A1Z5",
    "Rahul Enterprises",
    "ACTIVE"
  ),
  createData(
    "Rahul Sharma",
    "rahul@example.com",
    "9876543210",
    "22AAAAA0000A1Z5",
    "Rahul Enterprises",
    "ACTIVE"
  ),
  createData(
    "Rahul Sharma",
    "rahul@example.com",
    "9876543210",
    "22AAAAA0000A1Z5",
    "Rahul Enterprises",
    "ACTIVE"
  ),
  createData(
    "Rahul Sharma",
    "rahul@example.com",
    "9876543210",
    "22AAAAA0000A1Z5",
    "Rahul Enterprises",
    "ACTIVE"
  ),
  createData(
    "Rahul Sharma",
    "rahul@example.com",
    "9876543210",
    "22AAAAA0000A1Z5",
    "Rahul Enterprises",
    "ACTIVE"
  ),
  createData(
    "Rahul Sharma",
    "rahul@example.com",
    "9876543210",
    "22AAAAA0000A1Z5",
    "Rahul Enterprises",
    "ACTIVE"
  ),
  createData(
    "Rahul Sharma",
    "rahul@example.com",
    "9876543210",
    "22AAAAA0000A1Z5",
    "Rahul Enterprises",
    "ACTIVE"
  ),
];

const SellersTable = () => {
  const [status, setStatus] = useState("ACTIVE");
  const [page, setPage] = useState(0);

  const rowsPerPage = 10;

  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className=" w-full">

      {/* STATUS DROPDOWN */}
      <FormControl className="w-60">
        <InputLabel id="account-status-label">Account Status</InputLabel>
        <Select
          labelId="account-status-label"
          value={status}
          label="Account Status"
          onChange={(e) => setStatus(e.target.value)}
        >
          {accountStatus.map((item) => (
            <MenuItem key={item.status} value={item.status}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <div className="space-y-3 mt-4">
  <Paper sx={{ height: "65vh", display: "flex", flexDirection: "column" }}>

    {/* Make table scrollable, pagination fixed */}
    <TableContainer sx={{ flex: 1, overflow: "auto","scrollbar-width": "none", }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell>Seller Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Mobile</StyledTableCell>
            <StyledTableCell>GSTIN</StyledTableCell>
            <StyledTableCell>Business Name</StyledTableCell>
            <StyledTableCell>Account Status</StyledTableCell>
            <StyledTableCell align="right">Change Status</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {paginatedRows.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell>{row.sellerName}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.mobile}</StyledTableCell>
              <StyledTableCell>{row.gstin}</StyledTableCell>
              <StyledTableCell>{row.businessName}</StyledTableCell>
              <StyledTableCell>{row.accountStatus}</StyledTableCell>
              <StyledTableCell align="right">
                <Select size="small" value={row.accountStatus}>
                  {accountStatus.map((item) => (
                    <MenuItem key={item.status} value={item.status}>
                      {item.title}
                    </MenuItem>
                  ))}
                </Select>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* FIXED BOTTOM PAGINATION */}
    <TablePagination
      component="div"
      count={rows.length}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[10]}
      onPageChange={(_, newPage) => setPage(newPage)}
    />

  </Paper>
</div>

    </div>
  );
};

export default SellersTable;
