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

  function dia_atual() {
    let dia_semana = new Date(Date(data.current.dt)).getDay()
    let dia_num = new Date(Date(data.current.dt)).getDate()
    let mês = new Date(Date(data.current.dt)).getMonth()

    switch (dia_semana) {
      case 0:
        dia_semana = 'Sunday'
        break
      case 1:
        dia_semana = 'Monday'
        break
      case 2:
        dia_semana = 'Tuesday'
        break
      case 3:
        dia_semana = 'Wendnesday'
        break
      case 4:
        dia_semana = 'Thursday'
        break
      case 5:
        dia_semana = 'Friday'
        break
      default:
        dia_semana = 'Saturday'
    }

    switch (mês) {
      case 0:
        mês = 'Jan'
        break
      case 1:
        mês = 'Feb'
        break
      case 2:
        mês = 'Mar'
        break
      case 3:
        mês = 'Apr'
        break
      case 4:
        mês = 'May'
        break
      case 5:
        mês = 'Jun'
        break
      case 6:
        mês = 'July'
        break
      case 7:
        mês = 'Ago'
        break
      case 8:
        mês = 'Sep'
        break
      case 9:
        mês = 'Oct'
        break
      case 10:
        mês = 'Nov'
        break
      default:
        mês = 'Dec'
    }
    return `${dia_semana}, ${dia_num} ${mês}`
  }

  return (
    // view azul maior
    <View style={styles.container}>

      <Image source={{ uri: data ? `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png` : null }} style={styles.img} />

      <Text style={styles.txt_description}>{data.current.weather[0].description}</Text>
      <Text style={{color: 'white', marginTop: 10}}>{dia_atual()}</Text>

      <Text style={styles.texto}>{`${(data.current.temp).toFixed(0)}°`}</Text>

      {/*  view dos cards */}
      <View style={styles.dados}>

        <View style={styles.card}>
          <Clima icon='wind' tempo='WIND' info={`${data.current.wind_speed}km/j`} />
        </View>

        <View style={styles.card}>
          <Clima icon='thermometer' tempo='FEELS LIKE' info={`${data.current.feels_like}°`} />
        </View>

        <View style={styles.card}>
          <Clima icon='sun' tempo='INDEX UV' info={`${data.current.uvi}`} />
        </View>

        <View style={styles.card}>
          <Clima icon='activity' tempo='PRESSURE' info={`${data.current.pressure} mbar`} />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    backgroundColor: '#477FFF',
    width: "80%",
    height: 470,
    borderRadius: "5%",
    alignItems: "center"
  },
  img: {
    width: 150,
    height: 100,
    marginTop: 20,
  },
  texto: {
    fontSize: 70,
    fontWeight: 'bold',
    color: "white",
    marginTop: 30,
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
    flexWrap: 'wrap',
    borderRadius: 20,
    borderColor: 'white',
    width: '100%',
    height: '32%',
    marginTop: 17,
  },
  card: {
    width: '50%',
    borderBottomWidth: 0,
    borderWidth: 0.5,
    borderColor: 'white',
  },
})
