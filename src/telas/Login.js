import { View, SafeAreaView, TouchablebleOpacity } from "react-native";
import Txt from "../componentes/Texto";
import Infoat from "../componentes/Infoat";
import Icone from "../componentes/Icone";
import Lista from "../componentes/Lista";
import { Button, Text } from "react-native-web";
import React, { useState, useEffect } from 'react';


/* import Icon from "react-native-vector-icons/AntDesign"; */


export default function Main({ navigation }) {

  return (
    <SafeAreaView style={{ flex: 1 }} >


      <Icone></Icone>

      <View style={{ display: 'flex', alignItems: "center" }}>
        <View style={{ flexDirection: "row", display: "flex", justifyContent: "flex-start", width: "85%" }}>




          <Txt negrito="bold" tamanho={28} texto="MACEIÓ, " cor="BLACK" ></Txt>
          <Txt negrito="row" tamanho={28} texto="ALAGOAS" cor="#00000"></Txt>

        </View>

        <Infoat />

        <View style={{ padding: 10, marginTop: 40, marginBottom: 10, display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', width: '100%' }}>
          <Button
            title="Next 7 Days"
            onPress={() => navigation.navigate("Telas")}
          />
        </View>

        <Lista />
      </View>


    </SafeAreaView>



  );
}

