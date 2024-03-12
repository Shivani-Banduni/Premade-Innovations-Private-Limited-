import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function Admin_dashboard() {
    const [allStudentData, setAllStudentData] = useState([]);

    useEffect(() => {
        // Function to load data
        const loadData = () => {
            const data = JSON.parse(localStorage.getItem('formData')) || [];
            setAllStudentData(data);
        };

        // Load data initially
        loadData();

        // Setup listener for storage changes
        const handleStorageChange = (event) => {
            if (event.key === 'formData') {
                loadData();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Cleanup listener
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    console.log(allStudentData);

    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Details</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone No</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">College</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Location</TableCell>


            {/* Add more columns as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {allStudentData.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.details}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phoneNo}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.college}</TableCell>
              <TableCell align="right">
    <img src={row.selfie}  style={{ maxWidth: "100px", maxHeight: "100px" }} />
  </TableCell>
  <TableCell align="right">{`${row.location?.latitude}, ${row.location?.longitude}`}</TableCell>

              {/* <TableCell align="right">{row.location.latitude}</TableCell> */}

              {/* Add more cells as needed */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}
