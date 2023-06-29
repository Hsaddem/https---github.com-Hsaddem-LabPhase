const zerostate={UserInfo:{},UserPreferences:{}};
//{id: new Date().toDateString(),description:'NA',checked:false}
const Reducer=(state=zerostate,action)=>
{switch(action.type){
    case'GetUserProfile':return {...state,UserInfo:action.payload};
   case'GetUserPreferences':return{...state,UserPreferences:action.payload}
    default:return state;

}}
export default Reducer;