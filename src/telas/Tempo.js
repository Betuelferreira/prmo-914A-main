import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, ActivityIndicator } from 'react-native';
import Txt from "../componentes/Texto";
import Icone from '../componentes/Icone';
import url from '../services/openweather'

export default function Telas() {
  const [data, setData] = useState()
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    fetch(url).then((res) => res.json()).then((data) => { setData(data), setLoading(false) })
  }, [])

  if (isLoading) {
    return <ActivityIndicator />
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#427bff' }}>


      <View style={styles.header}>
        {/*  <Txt tamanho={20} texto='&lt;'  cor="#FFFFFF" ></Txt> */}
        <Txt negrito="bold" tamanho={15} texto="MACEIÓ, " cor="#FFFFFF" ></Txt>
        <Txt negrito="row" tamanho={15} texto="Alagoas" cor="#FFFFFF"></Txt>

      </View>

      <View style={{ display: "flex", margin: "8%" }}>
        <Txt negrito="bold" tamanho={22} texto="Next 7 days" cor="#FFFFFF"></Txt>
      </View>
      <View style={styles.card}>
        <Image source={{ uri: data ? `http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png` : null }} style={{ marginRight: "10%", width: 30, height: 30 }} />
        <Txt negrito="bold" tamanho={20} texto="MACEIÓ, " cor="#FFFFFF"></Txt>
        <Text>{data.daily[0].temp.day}</Text>
      </View>
      <View style={styles.card}>
        <Image source={{ uri: data ? `http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png` : null }} style={{ marginRight: "10%", width: 30, height: 30 }} />
        <Txt negrito="bold" tamanho={20} texto="MACEIÓ, " cor="#FFFFFF"></Txt>
        <Text>{data.daily[1].temp.day}</Text>
      </View>
      <View style={styles.card}>
        <Image source={{ uri: data ? `http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png` : null }} style={{ marginRight: "10%", width: 30, height: 30 }} />
        <Txt negrito="bold" tamanho={20} texto="MACEIÓ, " cor="#FFFFFF"></Txt>
        <Text>{data.daily[2].temp.day}</Text>
      </View>
      <View style={styles.card}>
        <Image source={{ uri: data ? `http://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png` : null }} style={{ marginRight: "10%", width: 30, height: 30 }} />
        <Txt negrito="bold" tamanho={20} texto="MACEIÓ, " cor="#FFFFFF"></Txt>
        <Text>{data.daily[3].temp.day}</Text>
      </View>
      <View style={styles.card}>
        <Image source={{ uri: data ? `http://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png` : null }} style={{ marginRight: "10%", width: 30, height: 30 }} />
        <Txt negrito="bold" tamanho={20} texto="MACEIÓ, " cor="#FFFFFF"></Txt>
        <Text>{data.daily[4].temp.day}</Text>
      </View>
      <View style={styles.card}>
        <Image source={{ uri: data ? `http://openweathermap.org/img/wn/${data.daily[5].weather[0].icon}@2x.png` : null }} style={{ marginRight: "10%", width: 30, height: 30 }} />
        <Txt negrito="bold" tamanho={20} texto="MACEIÓ, " cor="#FFFFFF"></Txt>
        <Text>{data.daily[5].temp.day}</Text>
      </View>
      <View style={styles.card}>
        <Image source={{ uri: data ? `http://openweathermap.org/img/wn/${data.daily[6].weather[0].icon}@2x.png` : null }} style={{ marginRight: "10%", width: 30, height: 30 }} />
        <Txt negrito="bold" tamanho={20} texto="MACEIÓ, " cor="#FFFFFF"></Txt>
        <Text>{data.daily[6].temp.day}</Text>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    margin: "5%"
  },
  header: {
    maginTop: 5,
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  temp: {

  }
})