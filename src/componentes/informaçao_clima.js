import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Txt from './Texto';

export default function Clima(props) {
 return (
   <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row'}}>
       <View style={{width: '45%', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <Icon name= {props.icone} size={25} color="white"></Icon>
       </View>
       <View style={{width: '55%', alignItems: 'flex-start', justifyContent: 'space-evenly', height: '100%'}}>
            <Txt texto={props.tempo} cor = 'white' tamanho = {12}></Txt>
            <Txt texto={props.info} cor = 'white' tamanho = {12}></Txt>
       </View>
   </View>
  );
}
