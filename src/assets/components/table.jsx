import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TablePaginationDemo from './pagination';
import { Avatar } from '@mui/material';
import RadioGroupRating from './rating';
import axios from "axios"
import { useState,useEffect } from 'react';
function CreateTable(row)
{ console.log(row)
  const [open, setOpen] = useState(false);
  return (<>
   {row.map((row,key)=>(
    <React.Fragment key={key}>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row"><Avatar src={row.image_url}/> </TableCell>
        <TableCell align="right">{row.username}</TableCell>
        <TableCell align="right">{row.occupation}</TableCell>
        <TableCell align="right">{row.city}</TableCell>
        <TableCell align="right">{row.Phone}</TableCell>
        <TableCell align="right"><RadioGroupRating x={parseInt(row.score)}/></TableCell>

      </TableRow>
      
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                {/* <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody> */}
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      
     
          </React.Fragment>))}</>
  );
}





export default function CollapsibleTable() {
  const [rows,setrows]= useState([]);
  const getData= async () => {
    await axios
      .get("/users.json")
      .then((response) => {
        setrows(response.data);
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
            <TableCell align="right">المستخدم</TableCell>
            <TableCell align="right">إسم المستخدم</TableCell>
            <TableCell align="right">مجال الحرفة</TableCell>
            <TableCell align="right">الولاية</TableCell>
            <TableCell align="right">الهاتف</TableCell>
            <TableCell align="right">تقييم</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       
{CreateTable(rows)}

{/* .map((e) => (   <CreateRow key={e.key} row={e} />   )) */}

          {/* {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))} */}
        </TableBody>
      </Table>
      <TablePaginationDemo/>
    </TableContainer>
  );
}