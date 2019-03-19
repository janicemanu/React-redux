import axios from 'axios';
import cookies from 'universal-cookie';

const cookie = new cookies ()

// fn action creator yg menghubungkan component ke redux store
export const onLoginClick = (user,pass) =>{
    // utk mengambil dan mencocokan data yang telah disave di database
    return(dispatch)=>{
    axios.get( "http://localhost:1993/users",{
        params:{
            username : user,
            password : pass
        }
    }).then(res=>{
        if(res.data.length>0){
            // jika data username ditemukan/object ada isinya
            console.log(res.data[0]); //mengambil object index 0 untuk dikirim ke redux
            
            const{id,username}=res.data[0]//ambil data dari property id dan username
            dispatch({
                type:"LOGIN_SUCCESS",
                payload: {id,username}//penyerdehanaan jika key dan valuenya bernama sama, cukup tulis valuenya saja
            })

            cookie.set('masihLogin',username,{path:'/'})
        }else{
            // jika usernametidakditemukan
            dispatch({
                type: "AUTH_ERROR",
                payload : "Username and Password don't match"
            })

            // setTimeout(()=>{
            //     dispatch({
            //         type:'AUTH_NO_MESS'
            //     })
    
            // },3000);
        }


    }).catch(err=>{
        console.log("System error")
    })
}
}  



export const onRegisterClick = (user,pass,email) =>{
    return dispatch=>{
    axios.get( "http://localhost:1993/users",{
        params:{
            username : user
            
        }
    }).then(res=>{
        if(res.data.length===0){
            axios.post("http://localhost:1993/users",{
                username: user,
                password : pass,
                email : email   
            }).then(res => {
                dispatch({
                    type: 'AUTH_SUCCESS',
                    payload: 'Register Succeeded'
                });
            
            })
        }else{
            dispatch({
                type: "AUTH_ERROR",
                payload: "Username has been taken"
            })
        }
})
}  
}
export const keepLogin = (user)=> {
    return dispatch =>{
        axios.get('http://localhost:1993/users',{
            params:{
                username: user
            }
        }).then(res=>{
            if(res.datalength>0){
                dispatch({
                type:'LOGIN_SUCCESSFUL',
                payload: {username: user}   
                }

                )
            }



        })
    }
}

export const onLogoutClick=()=>{
    return{type:"LOGOUT_SUCCESSFUL"};
}


export const onSetTimeOut=()=>{
    return{type:"SET_TIMEOUT"};
}