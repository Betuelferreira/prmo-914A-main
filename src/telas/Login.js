import { View } from "react-native";
import Txt from "../componentes/Texto";
import Infoat from "../componentes/Infoat";
import Icone from "../componentes/Icone";
import Lista from "../componentes/Lista";
import { Text } from "react-native-web";
/* import Icon from "react-native-vector-icons/AntDesign"; */

export default function Main() {
  return (
    <View >
      
     <Icone></Icone>

      <View style={{ display: 'flex', alignItems: "center" }}>

        <View style={{ flexDirection: "row", display: "flex", justifyContent: "flex-start", width: "85%" }}>




          <Txt negrito="bold" tamanho={28} texto="MACEIÓ, " cor="BLACK" ></Txt>
          <Txt negrito="row" tamanho={28} texto="ALAGOAS" cor="#00000"></Txt>
          
        </View>
        
        <Infoat > </Infoat>
        
      </View>
      
      {/* <Lista/> */}
    </View>
    
    
    
  );
}

