import React from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import  IconButton  from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
function Filter({openClose,setopenClose}) {
    return (<>
    <Box sx={{ display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'center' }}>
<IconButton sx={{margin:'auto'}}
onClick={()=>setopenClose(!openClose)}>
        للحصول على نتائج بحث أفضل انقر هنا!  

<FilterAltOutlinedIcon/>
</IconButton>
</Box>
<Drawer
anchor='top'
open={openClose}
>
<Box
      sx={{ display:'flex',flexDirection:'column',alignContent:'center',justifyContent:'center' }}
      role="presentation"
       onClick={()=>setopenClose( false)}
    >
      <Box py={2}  sx={{ display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'center' }}>
      <Typography variant='h5'>للحصول على نتائج بحث أفضل انقر هنا!</Typography>
      </Box>
      <Box py={1} 
       sx={{ display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'center' }}><Button>a</Button><Button>a</Button><Button>a</Button></Box>
      <Box py={2}  sx={{ display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'center' }}><Button sx={{marginX:'16px'}} variant="outlined">CLEAR</Button><Button sx={{marginX:'16px'}} variant="contained">ENTER</Button></Box>
    </Box>
</Drawer></>
      );
}

export default Filter;