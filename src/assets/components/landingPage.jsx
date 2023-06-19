import React from 'react';
import ResponsiveAppBar from './AppBar';
import StickyFooter from './footer';
import LPcontent from './LPContent';

export default function LandingPage() {
    return (<>
    <ResponsiveAppBar/>
    <LPcontent/>
    <StickyFooter/>
    </>
    )
   
        
      };