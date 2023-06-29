export const GetUserProfile=(payload)=>
{return(
    {type:'GetUserProfile',
     payload:payload
    }
       )
}
export const GetUserPreferences=(payload)=>
{return(
    {type:'GetUserPreferences',
     payload:payload
    }
       )
}
