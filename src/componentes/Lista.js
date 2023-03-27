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
         <Carta hora={`${new Date(Date(data.hourly[0].dt)).getHours()}:00`} image={`http://openweathermap.org/img/wn/${data.hourly[0].weather[0].icon}@4x.png`} temperatura="Now"></Carta>

         <Carta hora={`${new Date(Date(data.hourly[0].dt)).getHours() + 2}:00`} image={`http://openweathermap.org/img/wn/${data.hourly[2].weather[0].icon}@4x.png`} temperatura={`${(data.hourly[2].temp).toFixed(0)}°`}></Carta>

         <Carta hora={`${new Date(Date(data.hourly[0].dt)).getHours() + 4}:00`} image={`http://openweathermap.org/img/wn/${data.hourly[4].weather[0].icon}@4x.png`} temperatura={`${(data.hourly[4].temp).toFixed(0)}°`}></Carta>

         <Carta hora={`${new Date(Date(data.hourly[0].dt)).getHours() + 6}:00`} image={`http://openweathermap.org/img/wn/${data.hourly[6].weather[0].icon}@4x.png`} temperatura={`${(data.hourly[6].temp).toFixed(0)}°`}></Carta>

         <Carta hora={`${new Date(Date(data.hourly[0].dt)).getHours() + 8}:00`} image={`http://openweathermap.org/img/wn/${data.hourly[8].weather[0].icon}@4x.png`} temperatura={`${(data.hourly[8].temp).toFixed(0)}°`}></Carta>

         <Carta hora={`${new Date(Date(data.hourly[0].dt)).getHours() + 10}:00`} image={`http://openweathermap.org/img/wn/${data.hourly[10].weather[0].icon}@4x.png`} temperatura={`${(data.hourly[10].temp).toFixed(0)}°`}></Carta>

         <Carta hora={`${new Date(Date(data.hourly[0].dt)).getHours() + 12}:00`} image={`http://openweathermap.org/img/wn/${data.hourly[12].weather[0].icon}@4x.png`} temperatura={`${(data.hourly[12].temp).toFixed(0)}°`}></Carta>

      </ScrollView>
   );
}
