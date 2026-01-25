import {
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
  FormControl,
  InputLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { tableCellClasses } from "@mui/material/TableCell";
import { useState } from "react";
import { Link } from "react-router-dom";

/* -------- STATUS OPTIONS -------- */
const couponStatus = [
  { status: "ACTIVE", title: "Active" },
  { status: "DEACTIVATED", title: "Deactivated" },
  { status: "EXPIRED", title: "Expired" },
  { status: "DELETE", title: "Delete" },
];

/* -------- STATUS COLOR HELPER -------- */
const getStatusColor = (status) => {
  switch (status) {
    case "ACTIVE":
      return "green";
    case "DEACTIVATED":
      return "orange";
    case "EXPIRED":
      return "red";
    case "DELETE":
      return "gray";
    default:
      return "black";
  }
};

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

/* -------- INITIAL TABLE DATA -------- */
const initialRows = [
  {
    couponCode: "SAVE10",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    minOrderValue: 500,
    discount: "10%",
    status: "ACTIVE",
  },
  {
    couponCode: "NEW20",
    startDate: "2024-02-01",
    endDate: "2024-10-31",
    minOrderValue: 1000,
    discount: "20%",
    status: "ACTIVE",
  },
  {
    couponCode: "MEGA30",
    startDate: "2024-03-01",
    endDate: "2024-09-30",
    minOrderValue: 1500,
    discount: "30%",
    status: "EXPIRED",
  },
];

/* -------- COMPONENT -------- */
const Coupon = () => {
  const [filterStatus, setFilterStatus] = useState("ACTIVE");
  const [rows, setRows] = useState(initialRows);
  const [page, setPage] = useState(0);

  const rowsPerPage = 10;

  /* -------- FILTERED DATA -------- */
  const filteredRows = rows.filter(
    (row) => row.status === filterStatus
  );

  const paginatedRows = filteredRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  /* -------- STATUS CHANGE HANDLER -------- */
  const handleStatusChange = (index, newStatus) => {
    setRows((prev) =>
      prev.map((row, i) =>
        i === index ? { ...row, status: newStatus } : row
      )
    );
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-2 text-sm mb-6">
        <span className="text-base font-semibold text-black">Coupon</span>
        <ChevronRightIcon  fontSize="small" />
        <span><Link to="/admin">Home</Link></span>
        <ChevronRightIcon fontSize="small" />
        <span className="text-gray-400">Coupon</span>
      </div>
      {/* STATUS FILTER */}
      <FormControl className="w-60">
        <InputLabel>Coupon Status</InputLabel>
        <Select
          value={filterStatus}
          label="Coupon Status"
          onChange={(e) => {
            setFilterStatus(e.target.value);
            setPage(0);
          }}
        >
          {couponStatus.map((item) => (
            <MenuItem key={item.status} value={item.status}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* TABLE */}
      <div className="space-y-3 mt-4">

        <Paper sx={{ height: "65vh", display: "flex", flexDirection: "column" }}>
          <TableContainer sx={{ flex: 1, overflow: "auto" }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Coupon Code</StyledTableCell>
                  <StyledTableCell>Start Date</StyledTableCell>
                  <StyledTableCell>End Date</StyledTableCell>
                  <StyledTableCell>Min Order Value</StyledTableCell>
                  <StyledTableCell>Discount</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell align="right">
                    Change Status
                  </StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {paginatedRows.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell>{row.couponCode}</StyledTableCell>
                    <StyledTableCell>{row.startDate}</StyledTableCell>
                    <StyledTableCell>{row.endDate}</StyledTableCell>
                    <StyledTableCell>{row.minOrderValue}</StyledTableCell>
                    <StyledTableCell>{row.discount}</StyledTableCell>

                    {/* COLORED STATUS */}
                    <StyledTableCell
                      sx={{
                        color: getStatusColor(row.status),
                        fontWeight: 600,
                      }}
                    >
                      {row.status}
                    </StyledTableCell>

                    {/* STATUS DROPDOWN */}
                    <StyledTableCell align="right">
                      <Select
                        size="small"
                        value={row.status}
                        sx={{
                          color: getStatusColor(row.status),
                          fontWeight: 600,
                        }}
                        onChange={(e) =>
                          handleStatusChange(index, e.target.value)
                        }
                      >
                        {couponStatus.map((item) => (
                          <MenuItem
                            key={item.status}
                            value={item.status}
                            sx={{ color: getStatusColor(item.status) }}
                          >
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

          {/* PAGINATION */}
          <TablePagination
            component="div"
            count={filteredRows.length}
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

export default Coupon;
