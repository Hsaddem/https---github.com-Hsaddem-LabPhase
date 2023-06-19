export const GetUserProfile=(payload)=>
{return(
    {type:'GetUserProfile',
     payload:payload
    }
       )
}
export const EditTask=(payload)=>
{return(
    {type:'edit',
     payload:payload
    }
       )
}
export const CheckTask=(payload)=>
{return(
    {type:'check',
     payload:payload
    }
       )
}
export const DeleteTask=(payload)=>
{return(
    {type:'delete',
     payload:payload
    }
       )
}