import React from 'react';
import { Avatar } from '@mui/material';
import RadioGroupRating from './rating';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
function TableContent({users}) {
    const [Open,setOpen]=useState([])
    
function handleMultipleCollapsible(setOpen,index)
{

setOpen(Open.map((e,i)=>(i==index?!e:e)));

}
  useEffect(()=>{
		setOpen(new Array(users.length).fill(false));
	}, [users])
console.log(useSelector(e=>e.UserPreferences))
    return (    <>
        {users.map((e,i)=>(
         <React.Fragment key={i}>
          
           <TableRow  sx={{ '& > *': { borderBottom: 'unset' } }}>
             <TableCell>
               <IconButton 
               key={i}
                 aria-label="expand row"
                 size="small"
                 onClick={() => handleMultipleCollapsible(setOpen,i)}
                 children={(Open[i]) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
               >
              </IconButton>
             </TableCell>
             <TableCell component="th" scope="row"><Avatar src={e.image_url}/> </TableCell>
             <TableCell align="right">{e.username}</TableCell>
             <TableCell align="right">{e.occupation}</TableCell>
             <TableCell align="right">{e.city}</TableCell>
             <TableCell align="right"><RadioGroupRating x={parseInt(e.score)}/></TableCell>
     
           </TableRow>
           
           <TableRow >
             <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
               <Collapse in={Open[i]} timeout="auto" unmountOnExit >
                 <Box sx={{ margin: 1 }}>
                 <Typography paddingRight ='10vw' align='right' variant="h6" gutterBottom >
                     بيانات المستخدم
                   </Typography>
                    <Table size="small" aria-label="details">
                    <TableHead>
                       <TableRow >
                         <TableCell align="center"  >الإسم</TableCell>
                         <TableCell align="right">الهاتف</TableCell>
                         <TableCell align="right">البريد الإلكتروني</TableCell>
                         <TableCell align="right">الأجرة</TableCell>
                       </TableRow>
                     </TableHead>
                     <TableBody>
                       <TableRow>
                         <TableCell align="center"  >{e.family_name+" "+e.given_name}</TableCell>
                         <TableCell align="right">{e.Phone}</TableCell>
                         <TableCell align="right">{e.email}</TableCell>
                         <TableCell align="right">{e.pay} </TableCell>
                     </TableRow>
                     </TableBody> 
                   </Table>
                 </Box>
               </Collapse>
             </TableCell>
           </TableRow>
               </React.Fragment>))}</>);
}

export default TableContent;