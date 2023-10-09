import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

function CurrentWeather({ weatherData }) {

  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData;

  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView style={[styles.wrapper, { backgroundColor: weatherType[weatherCondition]?.backgroundColor}]}>
      <ImageBackground source={require("../../assets/nature.gif")} style={styles.bgImage}>
      <View style={styles.container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
        <Text style={styles.tempStyles}>{`${temp}°`}</Text>
        <Text style={styles.feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText messageOne={`High: ${temp_max}° `} messageTwo={`Low: ${temp_min}°`} containerStyles={styles.highLowWrapper} messageOneStyles={styles.highLow} messageTwoStyles={styles.highLow} />
      </View>
      <RowText messageOne={weather[0]?.description} messageTwo={weatherType[weatherCondition]?.message} containerStyles={styles.bodyWrapper} messageOneStyles={styles.description} messageTwoStyles={styles.message} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 24,
    color: 'black',
    marginTop: 10
  },
  highLow: {
    fontSize: 16,
    color: 'black'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100
  },
  description: {
    fontSize: 50,
    textTransform: 'capitalize'
  },
  message: {
    fontSize: 30
  },
  bgImage: {
    flex: 1
  }
});

export default CurrentWeather;