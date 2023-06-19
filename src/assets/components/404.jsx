import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage () {
    return ( 
        <div 
        style={{
            display:"flex",
            flexDirection:"column",
            background:"url('/slimane.gif')",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center center",
            backgroundSize:"90% cover",
            color:"#fff",
            backgroundColor:"#fefffe"
            }}
            >
<div 
style={{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"rgba(0,0,0,0.65)",
    minHeight:"100vh"
    }}
>
	<h1>404</h1>
	<p>يبطى شوية... ارجع غدوة.</p>
        <Link to={"/"}>الصفحة الرئيسية</Link>
</div>
</div>
    
     );
}

 