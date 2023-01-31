import React,{ useState ,useEffect}  from "react";
import { LoginUI } from "./loginUi";
import { Inicio } from "../Inicio";


function Login(){
    
    let datos ='null'
   try{
   datos= localStorage.getItem('nombre')
   datos.toString(datos)
   }catch(e){
    datos='null'
    console.log(e)
   }

    
    let estado;
    console.log('los datos son:',datos)
    if(datos != 'null' ){
        estado=false
        } else {
            estado=true;
        }
    return(
        <React.Fragment>
        {estado && (
            <LoginUI></LoginUI>
      )
      }
       {!estado && (
            <Inicio/>    
          )}
        </React.Fragment>
    )
}

export default Login;
