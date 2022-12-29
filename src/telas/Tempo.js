import React from 'react';
import { View, Image } from 'react-native';
import Txt from "../componentes/Texto";
import Icone from '../componentes/Icone';

export default function Telas() {
 return (
  <View style={{ flex: 1, backgroundColor: '#427bff'}}>

    
    <View style={{ flexDirection: "row", display: "flex", justifyContent: "center", width: "100vw" }}>
      <Txt tamanho={20} texto='&lt;'  cor="#FFFFFF" ></Txt>
      <Txt negrito="bold" tamanho={15} texto="MACEIÓ, " cor="#FFFFFF" ></Txt>
      <Txt negrito="row" tamanho={15} texto="Alagas" cor="#FFFFFF"></Txt>
      
    </View>

    <View style={{display: "flex", margin:"8%"}}>
     <Txt negrito="bold" tamanho={22} texto="Next 7 days"  cor="#FFFFFF"></Txt>
    </View>
     <View style={{flexDirection:"row", margin:"5%"}}>
      <Image  source={require("../imagens/sol.png")} style={{marginRight:"10%", width:30, height:30 }} /> 
      <Txt negrito="bold" tamanho={20} texto="MACEIÓ, " cor="#FFFFFF"></Txt>
     </View>
     <View style={{flexDirection:"row", margin:"5%"}}>
      <Image  source={require("../imagens/sol.png")} style={{marginRight:"10%", width:30, height:30 }} /> 
      <Txt negrito="bold" tamanho={20} texto="MACEIÓ, " cor="#FFFFFF"></Txt>
     </View>
     <View style={{flexDirection:"row", margin:"5%"}}>
      <Image  source={require("../imagens/sol.png")} style={{marginRight:"10%", width:30, height:30 }} /> 
      <Txt negrito="bold" tamanho={20} texto="MACEIÓ, " cor="#FFFFFF"></Txt>
     </View>
     <View style={{flexDirection:"row", margin:"5%"}}>
      <Image  source={require("../imagens/sol.png")} style={{marginRight:"10%", width:30, height:30 }} /> 
      <Txt negrito="bold" tamanho={20} texto="MACEIÓ, " cor="#FFFFFF"></Txt>
     </View>
     <View style={{flexDirection:"row", margin:"5%"}}>
      <Image  source={require("../imagens/sol.png")} style={{marginRight:"10%", width:30, height:30 }} /> 
      <Txt negrito="bold" tamanho={20} texto="MACEIÓ, " cor="#FFFFFF"></Txt>
     </View>
     <View style={{flexDirection:"row", margin:"5%"}}>
      <Image  source={require("../imagens/sol.png")} style={{marginRight:"10%", width:30, height:30 }} /> 
      <Txt negrito="bold" tamanho={20} texto="MACEIÓ, " cor="#FFFFFF"></Txt>
     </View>
     <View style={{flexDirection:"row", margin:"5%"}}>
      <Image  source={require("../imagens/sol.png")} style={{marginRight:"10%", width:30, height:30 }} /> 
      <Txt negrito="bold" tamanho={20} texto="MACEIÓ, " cor="#FFFFFF"></Txt>
     </View>

    </View>
  
  );
}