import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

export default function Complete({state,setstate}) {
    const states=["كامل تراب الجمهورية","أريانة","باجة","بن عروس","بنزرت","تطاوين","توزر","تونس","جندوبة"," زغوان","سليانة","سوسة","سيدي بوزيد","صفاقس","قابس","قبلي","القصرين","قفصة","القيروان","الكاف","مدنين","المنستير","منوبة","المهدية","نابل"];
  return (
    <Autocomplete
      disablePortal
      autoSelect
      inputValue={state}
      value={state}
      options={states}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="الولاية" />}
        onInputChange={(e,inputValue) => {
        setstate(inputValue);}}
        
    />
  );
}