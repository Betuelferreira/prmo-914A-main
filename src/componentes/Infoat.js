import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ActivityIndicator } from 'react-native';
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
      <Image source={{ uri: data ? `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png` : null }} style={styles.img} />
      <Text style={styles.txt_description}>{data.current.weather[0].description}</Text>
      <Text>{`${Date(data.current.dt)}`}</Text>
      <Text style={styles.texto}>{`${(data.current.temp).toFixed(0)}°`}</Text>
      <View style={styles.dados}>
        <View style={styles.card}>
          <Text>WIND</Text>
        </View>
        <View style={styles.card}>
          <Text>FEELS LIKE</Text>
        </View>
        <View style={styles.card}>
          <Text>INDEX UV</Text>
        </View>
        <View style={styles.card}>
          <Text>PRESSURE</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    backgroundColor: 'blue',
    width: "80%",
    height: 350,
    borderRadius: "5%",
    alignItems: "center"
  },
  img: {
    width: 150,
    height: 100,
    marginTop: 20,
  },
  texto: {
    fontSize: 50,
    fontWeight: 'bold',
    color: "white",
  },
  txt_description: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "white",
    textTransform: 'capitalize'
  },
  dados: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap:'wrap',
    borderRadius: 20,
    borderColor: 'white',
    width: '100%',
    height: '32%',
  },
  card: {
    width: '50%',
    borderBottomWidth: 0,    
    borderWidth: 0.5,
    borderColor: 'white',
  }
})
