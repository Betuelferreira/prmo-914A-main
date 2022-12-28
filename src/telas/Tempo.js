import React from 'react';
import { View } from 'react-native';
import Txt from "../componentes/Texto";

export default function Telas() {
 return (
  <View style={{ flex: 1, backgroundColor: '#427bff'}}>
    <View style={{ flexDirection: "row", display: "flex", justifyContent: "center", width: "85vw", }}>
      <Txt tamanho={15} texto='&lt;'></Txt>
      <Txt negrito="bold" tamanho={15} texto="MACEIÓ, " cor="BLACK" ></Txt>
      <Txt negrito="row" tamanho={15} texto="Alagas" cor="#00000"></Txt>
    </View>
  </View>
  );
}