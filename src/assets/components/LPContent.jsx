import  Box from  '@mui/material/Box';
import logo from '/logo-transparent-svg1.svg'
import Typography from '@mui/material/Typography'
import { Bounce } from 'react-awesome-reveal';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

export default function LPcontent() {
  const navigate=useNavigate();

    return ( 
    <Box sx={{display:'flex',flexDirection:'row-reverse',flexWrap:'wrap',justifyItems: 'center',px:3,pt:3,backgroundColor:'rgb(192, 230, 223)',height:{xs:'150vh',sm:'150vh',md:'90vh'}}}>
    <Bounce cascade  triggerOnce='true' duration='2000'>
      {/* ------------------------------------------------------------------------------------------------- */}
     <Box sx={{width:{xs:'90vw',md:'40vw'},height:{xs:'25vh',sm:'40vh',md:'30vh'},pt:5} }  >
        <img src={logo} style={{maxHeight:'60vh',objectFit:'contain',display:'block',margin:'auto'}}/>  
      </Box>
      {/* <----------------------------------------------------------------------------------------------> */}
      <Box sx={{width:{xs:'90vw',md:'50vw'},height:{xs:'50vh',sm:'50vh',md:'40vh'},px:2,pt:{xs:0,md:6}}}>  
       <Typography align='center' variant='h2' color='rgb(64,64,64)'>تلوَّج في خدمة ولاَّ خدَّامة؟</Typography>
<      Typography paragraph={true} align='right' variant='h5' color='rgb(64,64,64)' >الحرفي هو موقع خدمات احترافي حيث يمكنك أن تجد تقريبًا كل الأعمال التي قد ترغب في إنجازها. موقعنا هو أول موقع تونسي للعمالة اليدوية. لا تضيعوا الوقت في البحث عن من تتصل به. كل شيء بدءًا من الطلاء والسباكة والتركيبات الكهربائية والإصلاحات الطفيفة وانتهاءً ببناء جدران وطوابق جديدة بالإضافة إلى العديد والعديد من الخدمات الأخرى.</Typography>
      <Typography variant='h6'>لا تكسَر راسك لا في فمَاشي خدمة و لا في تعرفشي صنايعي...</Typography>
      <Stack direction="row" spacing={2} justifyContent="center"  alignItems="baseline" mt={3} >
      <Button variant="outlined" 
      sx={{marginLeft:'16px'}}
      onClick={()=>{navigate("/signup")}}
      >قم بالتسجيل مجانًا
      </Button>
      <Button variant="contained"
      onClick={()=>{navigate("/signin")}}

      >
        تسجيل الدخول
        </Button>
     </Stack>
     </Box>
     {/* -------------------------------------------------------------------------------------------- */}
     </Bounce> 
    </Box> );
}


