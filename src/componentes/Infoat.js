import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Txt from "../componentes/Texto";
import Clima from '../componentes/informacao_clima';
import url from '../services/openweather'
/* const imagem= "../componentes/nchuva.png" */

export default function info() {
  const [data, setData] = useState()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url).then((res) => res.json()).then((data) => { setData(data), setLoading(false) })
  }, [])

  if (isLoading) {
    return <ActivityIndicator />
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: data ? `http://openweathermap.org/img/wn/${data.daily['current'].weather[0].icon}http://openweathermap.org/img/wn/` : null }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    backgroundColor: 'blue',
    width: "80%",
    height: "65%",
    borderRadius: "20%",
    alignItems: "center"
  },
})
