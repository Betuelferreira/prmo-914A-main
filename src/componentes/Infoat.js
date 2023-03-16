import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Txt from "../componentes/Texto";
import Clima from '../componentes/informacao_clima';
/* const imagem= "../componentes/nchuva.png" */

export default function info() {
  return (
    <View style={{ marginTop: 30, width: "85%", height: "100%", backgroundColor: "#427bff", borderRadius: 20, }} >

        <View style={{ width: "10", height: "70%", backgroundColor: "#427bff", borderRadius: 20, display: 'flex', alignItems: "center" }}>

          <Image source={require("../imagens/nchuva.png")} style={{ top: 10, width: 90, height: 90 }} />

          <Txt tipo="arial " negrito="bold" tamanho={30} texto="Chuva Pesada" cor="#FFFFFF" ></Txt>

          <Txt tipo="arial " tamanho={15} texto="Quarta, 21 Set" cor="#FFFFFF" ></Txt>

          <Txt tipo="arial" tamanho={90} texto="24°" cor="#FFFFFF" ></Txt>

          

      </View>
      {/* <View style={{ width: "100%", height: "40%", backgroundColor: "#427bff", borderRadius: 20, flexDirection: "row", flexWrap: "wrap" }}>

            <View style={{ borderColor: "#ffffff", borderWidth: 1, backgroundColor: "#427bff", width: "50%", height: "50%" }}> <Clima icon='wind' tempo='WIND' info='19.2km/h' /> </View>

            <View style={{ borderColor: "#ffffff", borderWidth: 1, backgroundColor: "#427bff", width: "50%", height: "50%" }}> <Clima icon='thermometer' tempo='FEELS LIKE' info='25°' /> </View>

            <View style={{ borderColor: "#ffffff", borderWidth: 1, backgroundColor: "#427bff", width: "50%", height: "50%", borderBottomLeftRadius: 20 }}> <Clima icon="sun" tempo='INDEX UV' info='2' /></View>

            <View style={{ borderColor: "#ffffff", borderWidth: 1, backgroundColor: "#427bff", width: "50%", height: "50%", borderBottomEndRadius: 20 }}> <Clima icon='activity' tempo='PRESSURE' info='1014 mbar' />
            </View>

            <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
              <Txt negrito="bold" texto='Today' tamanho={14} alinhamento='right'></Txt>
              <TouchableOpacity onPress={() => { console.log("aaa") }}> <Txt negrito="bold" cor="gray" texto='Next 7 Days >' tamanho={14}></Txt> </TouchableOpacity>
            </View>


      </View> */}
    </View>
  );
}
