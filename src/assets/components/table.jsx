import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePaginationDemo from './pagination';
import axios from "axios"
import { useState,useEffect } from 'react';
import TableContent from './tablerows';
export default function CollapsibleTable() {
  const [users,setusers]= useState([]);
  const getData= async () => {
    await axios
      .get("/users.json")
      .then((response) => {
        setusers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right"><h3>المستخدم</h3></TableCell>
            <TableCell align="right"><h3>إسم المستخدم</h3></TableCell>
            <TableCell align="right"> <h3>مجال الحرفة</h3></TableCell>
            <TableCell align="right"> <h3>الولاية</h3></TableCell>
            <TableCell align="right"> <h3>تقييم</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      <TableContent users={users}/>
          </TableBody>
      </Table>
      <TablePaginationDemo/>
    </TableContainer>
  );
}