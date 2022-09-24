import React from 'react';
import { View, Image } from 'react-native';
import Txt from "../componentes/Texto";
export default function carta(props) {
 return (
   <View style={{border:"gray 1px solid",display:"flex",  justifyContent: "space-around", alignItems: "center", marginLeft:30, borderRadius:10, width:55, height:"100%", backgroundColor:""}}> 
    
    
    <Txt cor = "#000" tamanho={10} texto={props.hora}></Txt> 
    <Image source={props.image}
        style={{width:30, height:30 }} /> 
    <Txt negrito="bold" cor = "#000" tamanho={15} texto={props.temperatura}></Txt>       
   </View>
  );
}