import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function DonationDetails() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(
      // "http://localhost:8080/petparadise/admin/donors",
      "http://petparadise-env.eba-hnv6tun3.ap-south-1.elasticbeanstalk.com/petparadise/admin/donors",
     
      {
        headers: { Authorization: `Bearer ${sessionStorage['jwt']}` },
      }
    );
    setUsers(await response.json());
    console.log(response);
  };

  //[] is used to avoid infinite loop
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Donation Details </h1>
      <br></br>
      <TableContainer component={Paper} align="center">
        <Table sx={{ maxWidth: 1600 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="left">Amount(Rs)</StyledTableCell>
              <StyledTableCell align="left">Contact</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">City</StyledTableCell>
              <StyledTableCell align="left">State</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.amount}</StyledTableCell>
                <StyledTableCell >{row.contactno}</StyledTableCell>
                <StyledTableCell >{row.email}</StyledTableCell>
                <StyledTableCell >{row.city}</StyledTableCell>
                <StyledTableCell >{row.state}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Container>
  );
}

export default DonationDetails;
