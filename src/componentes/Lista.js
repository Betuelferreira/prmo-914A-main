import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, ActivityIndicator, Text } from 'react-native';
import Carta from '../componentes/Carta';
const nuvem = require("../imagens/nuvem.png")
const sol = require("../imagens/sol.png")
const lua = require("../imagens/lua.png")
const nchuva = require("../imagens/nchuva.png")
const nraio1 = require("../imagens/nraio1.png")
const nraio2 = require("../imagens/nraio2.png")
const solraio = require("../imagens/solraio.png")
const nsol = require("../imagens/nsol.png")
import url from '../services/openweather'

export default function Lista() {
   const [data, setData] = useState()
   const [isLoading, setLoading] = useState(true)

   useEffect(() => {
      fetch(url).then((res) => res.json()).then((data) => { setData(data), setLoading(false) })
   }, [])

   if (isLoading) {
      return <ActivityIndicator />
   }

   return (


      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ width: "100%", height: 130 }}>


         <Text>{`${Date(1679598000)}`}</Text>
         <Carta hora={`${new Date(Date(data.hourly[0].dt)).getHours()}:00`} image={`http://openweathermap.org/img/wn/${data.hourly[0, 0].weather[0].icon}@4x.png`} temperatura="Now"></Carta>

         <Carta hora={`${new Date(Date(data.hourly[0, 2].dt)).getHours()}:00`} image={`http://openweathermap.org/img/wn/${data.hourly[0, 2].weather[0].icon}@4x.png`} temperatura="28°"></Carta>

         <Carta hora="16:00" image={`http://openweathermap.org/img/wn/${data.hourly[0, 4].weather[0].icon}@4x.png`} temperatura="35°"></Carta>

         <Carta hora="17:00" image={`http://openweathermap.org/img/wn/${data.hourly[0, 6].weather[0].icon}@4x.png`} temperatura="32°"></Carta>

         <Carta hora="18:00" image={`http://openweathermap.org/img/wn/${data.hourly[0, 8].weather[0].icon}@4x.png`} temperatura="30°"></Carta>

         <Carta hora="19:00" image={`http://openweathermap.org/img/wn/${data.hourly[0, 10].weather[0].icon}@4x.png`} temperatura="29°"></Carta>

         <Carta hora="20:00" image={`http://openweathermap.org/img/wn/${data.hourly[0, 12].weather[0].icon}@4x.png`} temperatura="28°"></Carta>

      </ScrollView>
   );
}
