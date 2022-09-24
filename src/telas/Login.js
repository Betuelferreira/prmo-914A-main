import { View } from "react-native";
import Txt from "../componentes/Texto";
import Infoat from "../componentes/Infoat";
import Icone from "../componentes/Icone";
import Lista from "../componentes/Lista";
/* import Icon from "react-native-vector-icons/AntDesign"; */

export default function Main() {
  return (
    <View style={{ flex: 1, alignItems:"center" }}>

      <Icone></Icone>

      <View style={{ display: 'flex', alignItems: "center" }}>

        <View style={{ flexDirection: "row", display: "flex", justifyContent: "flex-start", width: "85vw", }}>




          <Txt negrito="bold" tamanho={28} texto="MACEIÓ, " cor="BLACK" ></Txt>
          <Txt negrito="row" tamanho={28} texto="ALAGOAS" cor="#00000"></Txt>

        </View>

        <Infoat > </Infoat>


      </View>

      <Lista></Lista>

    </View>
  );
}

