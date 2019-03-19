import {combineReducers} from 'redux';

const init = {
    id: '',
    username: "",
    error:"",
    success:""
}

// semua yang berhubungan dengan autentifikasi/login user, dihandle oleh fn AuthReducers
// Maka dari isAbsolute, kita gunakan switch
const AuthReducer=(state= init,action) =>{
    switch (action.type) {
        case 'LOGIN_SUCCESS':
           return{...state, id: action.payload.id, username:action.payload.username} 

// ...state:menggandakan object (membuat obj baru) dari state=init(initial) yang masih berupa obj kosong dengan property yang Sama
// namun value berbeda, disini value yang diupdate adalah id dan username yg dibawa oleh action creator onLoginClick
// (mengambil data dari database)

        case 'LOGOUT_SUCCESSFUL':
            return(state=init);
        
        case 'AUTH_ERROR' :
            return{...state,error: action.payload,succeess:''}

        case 'AUTH_SUCCESS':
            return{...state,error:'',success:action.payload}

        case 'SET_TIMEOUT'    :
            return{...state,error:"",success:""}

        default:
            return state;
    }

}





const tusa={
    id:"",
    username:"",
    email: ""

}

const RegReducer =(state=tusa,action)=>{
    switch (action.type){
        case 'REGISTER_SUCCESSFUL':
            return{...state,id: action.payload.id, username: action.payload.username, email: action.payload.email}

            default:
            return state
    }
}



export default combineReducers(
    {
        auth: AuthReducer,
        reg: RegReducer
    }
)