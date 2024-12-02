import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import "./home.css";
const DataTable = () => {
    const location = useLocation();
  const { formData } = location.state || { formData: [] };
  return (
    <Container component="main" maxWidth="lg" className="full-page">
      <Box className="table-wrapper">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Submitted Data
        </Typography>
        <TableContainer component={Paper} className="custom-table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Designation</TableCell>
                <TableCell align="center">Starting Time</TableCell>
                <TableCell align="center">Ending Time</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Attachment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">{formData.name || "N/A"}</TableCell>
                <TableCell align="center">{formData.date || "N/A"}</TableCell>
                <TableCell align="center">{formData.designation || "N/A"}</TableCell>
                <TableCell align="center">{formData.startTime || "N/A"}</TableCell>
                <TableCell align="center">{formData.endTime || "N/A"}</TableCell>
                <TableCell align="center">{formData.description || "N/A"}</TableCell>
                <TableCell align="center">
                  {formData.file ? (
                    <a
                      href={formData.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm"
                    >
                      View File
                    </a>
                  ) : (
                    "No File"
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  )
}

export default DataTable