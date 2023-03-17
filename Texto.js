import React from 'react';
import { View, Text } from 'react-native';

export default function Txt(props) {
  return (
    <Text style={{ top: props.topo, position: props.posicao, bottom: props.fundo, alignItems: props.alinhamento, fontFamily: props.tipo, fontWeight: props.negrito, fontSize: props.tamanho, color: props.cor }}>{props.texto}</Text>
  );
}