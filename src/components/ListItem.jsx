import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utilities/weatherType';
import moment from 'moment';

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props;
    const { item, date, temp, dateTextWrapper, rowContainer, featherStyle } = styles;
    return (
        <View style={item}>
            <View style={rowContainer}>
                <Feather style={featherStyle} name={weatherType[condition].icon} size={50} color={'white'} />
                <View style={dateTextWrapper}>
                    <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
                    <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
                </View>
            </View>
            <Text style={temp}>{`${Math.round(min)}°/ ${Math.round(max)}°`}</Text> 
        </View> 
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: '#632c1b',
        opacity: 0.7,
        borderRadius: 10,
        flexDirection: 'row',
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 16
    },
    dateTextWrapper: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    featherStyle: {
        paddingLeft: 4,
        paddingRight: 8
    }
});

export default ListItem;
