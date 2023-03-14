import React from 'react';
import { View, ScrollView } from 'react-native';
import Carta from '../componentes/Carta';
const nuvem = require("../imagens/nuvem.png")
const sol = require("../imagens/sol.png")
const lua = require("../imagens/lua.png")
const nchuva = require("../imagens/nchuva.png")
const nraio1 = require("../imagens/nraio1.png")
const nraio2 = require("../imagens/nraio2.png")
const solraio = require("../imagens/solraio.png")
const nsol = require("../imagens/nsol.png")
export default function Lista() {
 return (


  <ScrollView horizontal  showsHorizontalScrollIndicator={false} style={{height: "40%", width:"100%",}}>
    
     <Carta hora="14:00" image={nchuva} temperatura="Now"></Carta>  
     <Carta hora="15:00" image={nuvem} temperatura="28°"></Carta>  
     <Carta hora="16:00" image={sol} temperatura="35°"></Carta>  
     <Carta hora="17:00" image={nsol} temperatura="32°"></Carta>  
     <Carta hora="18:00" image={nsol} temperatura="30°"></Carta>  
     <Carta hora="19:00" image={nuvem} temperatura="29°"></Carta>  
     <Carta hora="20:00" image={lua} temperatura="28°"></Carta>  

  </ScrollView>
  );
}
