import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground, View } from "react-native";
import IconText from '../components/IconText';
import moment from 'moment';

function City({ weatherData}) {
    const { name, country, population, sunrise, sunset } = weatherData;
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require("../../assets/city.png")} style={styles.imageLayout} >
            <Text style={[styles.cityName, styles.cityCountryText]}>{name}</Text>
            <Text style={[styles.countryName, styles.cityCountryText]}>{country}</Text>
            <View style={[styles.populationWrapper, styles.rowLayout]}>
                <IconText iconName={"user"} iconColor={"#0b7aa8"} bodyText={`Population: ${population}`} bodyTextStyles={styles.populationText} />
            </View>
            <View style={[styles.riseSetWrapper, styles.rowLayout]}>
                <IconText iconName={"sunrise"} iconColor={"#0b7aa8"} bodyText={moment(sunrise).format('h:mm:ss a')} bodyTextStyles={styles.riseSetText} />
                <IconText iconName={"sunset"} iconColor={"#0b7aa8"} bodyText={moment(sunset).format('h:mm:ss a')} bodyTextStyles={styles.riseSetText} />
            </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
        paddingTop: 40
    },
    countryName: {
        fontSize: 30,
        paddingTop: 10
    },
    cityCountryText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#632c1b'
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 20,
        color: "#0b5d84"
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 50
    },
    riseSetText: {
        fontSize: 20,
        color: "#632c1b"
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default City;