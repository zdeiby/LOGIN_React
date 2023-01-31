import React from 'react';
import { AppUI } from './AppUI';
import { LoginInicio } from '../Inicio/Components/IrInicio';

function App() {
  let datos ='null'
  try{
  datos= localStorage.getItem('nombre')
  datos.toString(datos)
  }catch(e){
   datos='null'
   console.log(e)
  }
  let estado;
  if(datos != 'null'){
      estado=true
      } else {
          estado=false;
      }
 
  return ( <React.Fragment>
    {estado && (
       <AppUI></AppUI>
  )
  }
   {!estado && (
        <LoginInicio/>    
      )}
    </React.Fragment>
   
  );


}

export default App;
