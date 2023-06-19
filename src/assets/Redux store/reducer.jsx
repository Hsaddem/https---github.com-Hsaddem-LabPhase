const zerostate={UserInfo:{}};
//{id: new Date().toDateString(),description:'NA',checked:false}
const Reducer=(state=zerostate,action)=>
{switch(action.type){
    case'GetUserProfile':return {UserInfo:action.payload};
   
    default:return state;

}}
export default Reducer;