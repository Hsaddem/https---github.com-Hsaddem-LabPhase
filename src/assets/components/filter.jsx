import React from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import  IconButton  from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { Button, Rating, Typography } from '@mui/material';
import Complete from './autocomplete';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetUserPreferences } from '../Redux store/actions';
function Filter({openClose,setopenClose}) {
  const [rating,setrating]=useState(0);
  const [state,setstate]=useState("كامل تراب الجمهورية");
  const dispatch=useDispatch();
    return (<>
    <Box sx={{ display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'center' }}>
<IconButton sx={{margin:'auto'}}
onClick={()=>setopenClose(!openClose)}>
        للحصول على نتائج بحث أفضل انقر هنا!  

<FilterAltOutlinedIcon/>
</IconButton>
</Box>
<Drawer
anchor='right'

open={openClose}

>
<Box
      sx={{ display:'flex',flexDirection:'column',alignContent:'center',justifyContent:'center' }}
      role="filter"
     padding={2}
    >
      <Box py={2} px={2}  sx={{ display:'flex',flexDirection:'column',alignContent:'center',justifyContent:'center' }}>
      <Typography variant='h5'>لتحسين نتائج البحث، يُنصح باستخدام الاقتراحات التالية:</Typography>
      <Typography variant='h6'>1.تحديد الولاية</Typography>
      <Typography variant='h6'>2.تحديد التقييم</Typography>

      </Box>
      <Box py={3} px={2}
       sx={{ display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Complete  state={state} setstate={setstate}/>
      <Rating 
       sx={{marginTop:'24px'}}
       value={rating}
        onChange={(event, newValue) => {
          setrating(newValue);}}
          />
      </Box>
      <Box py={2}  sx={{ display:'flex',flexDirection:'column',alignContent:'center',justifyContent:'center' }}>
        <Button sx={{marginX:'16px'}} variant="outlined" onClick={()=>{setstate("");setrating(0)}}>
        إعادة الإختيار
          </Button>
        <Button sx={{marginX:'16px'}} variant="contained"   onClick={()=>{dispatch(GetUserPreferences([state,rating]));setopenClose( false)}}>
          تأكيد الإختيار
          </Button>
          </Box>
    </Box>
</Drawer></>
      );
}

export default Filter;