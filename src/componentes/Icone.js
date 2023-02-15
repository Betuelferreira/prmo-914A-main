import React from 'react';
import { View } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

export default function Icone(props) {
  return (
    <View style={{ marginTop: 20, marginBottom: 30, display: 'flex', flexDirection: "row", width:"85%", justifyContent: "space-Between"  }}>
      <Icon  name="bars" size={32} color="#000" />
      <Icon left= "100%"  name="ellipsis1" size={32} color="#000" />
      
    </View>
  );
}

