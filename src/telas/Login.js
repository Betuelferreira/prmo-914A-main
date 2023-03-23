import { View, SafeAreaView} from "react-native";
import Txt from "../componentes/Texto";
import Infoat from "../componentes/Infoat";
import Icone from "../componentes/Icone";
import Lista from "../componentes/Lista";
import { Text } from "react-native-web";
/* import Icon from "react-native-vector-icons/AntDesign"; */

export default function Main() {
  return (
    <SafeAreaView style={{flex: 1}} >
      
     <Icone></Icone>

      <View style={{ display: 'flex', alignItems: "center" }}>

        <View style={{ flexDirection: "row", display: "flex", justifyContent: "flex-start", width: "85%" }}>




          <Txt negrito="bold" tamanho={28} texto="MACEIÓ, " cor="BLACK" ></Txt>
          <Txt negrito="row" tamanho={28} texto="ALAGOAS" cor="#00000"></Txt>
          
        </View>
        
        <Infoat/>
         
        <View style={{ padding: 10, marginTop: 40, marginBottom: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Txt negrito="bold" texto='Today' tamanho={14} alinhamento='right'></Txt>
          <Txt negrito="bold" cor="gray" texto='Next 7 Days >' tamanho={14}></Txt> 
        </View>

        <Lista/>
      </View>
      
      
    </SafeAreaView>
    
    
    
  );
}

