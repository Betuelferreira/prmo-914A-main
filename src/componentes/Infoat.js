import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Txt from "../componentes/Texto";
import Clima from '../componentes/informaçao_clima';
const imagem= "../componentes/nchuva.png"

export default function info() {
  return (
    <View style={{ marginTop: 30, width: "85%", height: "60%", backgroundColor: "#427bff", borderRadius: 20, }} >

      <View style={{ width: "85%", height: "70%", backgroundColor: "#427bff", position: "absolute", top: 0, borderRadius: 20, display: 'flex', alignItems: "center" }}>

        <Image source={require("../imagens/nchuva.png")} style={{ top: 10, width: 90, height: 90 }} />

        <Txt position="absolute" topo={100} tipo="arial " negrito="bold" tamanho={30} texto="Chuva Pesada" cor="#FFFFFF" ></Txt>

        <Txt position="absolute" topo={140} tipo="arial " tamanho={15} texto="Quarta, 21 Set" cor="#FFFFFF" ></Txt>

        <Txt position="absolute" fundo={30} tipo="arial" tamanho={90} texto="24°" cor="#FFFFFF" ></Txt>

      </View>

      <View style={{ width: "85%", height: "30%", backgroundColor: "#427bff", position: "absolute", bottom: 0, borderRadius: 20, flexDirection: "row", flexWrap: "wrap" }}>

        <View style={{ borderColor: "#ffffff", borderWidth: 1, backgroundColor: "#427bff", width: "50%", height: "50%" }}> <Clima icon='wind' tempo='WIND' info='19.2km/h' /> </View>

        <View style={{ borderColor: "#ffffff", borderWidth: 1, backgroundColor: "#427bff", width: "50%", height: "50%" }}> <Clima icon='thermometer' tempo='FEELS LIKE' info='25°' /> </View>

        <View style={{ borderColor: "#ffffff", borderWidth: 1, backgroundColor: "#427bff", width: "50%", height: "50%", borderBottomLeftRadius: 20 }}> <Clima icon="sun" tempo='INDEX UV' info='2' /></View>

        <View style={{ borderColor: "#ffffff", borderWidth: 1, backgroundColor: "#427bff", width: "50%", height: "50%", borderBottomEndRadius: 20 }}> <Clima icon='activity' tempo='PRESSURE' info='1014 mbar' /></View>
        
        <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Txt negrito="bold" texto='Today' tamanho={14} alinhamento='right'></Txt>
          <TouchableOpacity onPress={() => { console.log("aaa") }}> <Txt negrito="bold" cor="gray" texto='Next 7 Days >' tamanho={14}></Txt> </TouchableOpacity>
        </View>


      </View>


    </View>
  );
}
