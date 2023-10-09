import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';

function IconText(props) {
    const { iconName, iconColor, bodyText, bodyTextStyles } = props;
    return (
        <View style={styles.container}>
            <Feather name={iconName} size={50} color={iconColor} />
            <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: "bold"
    },
    container: {
        alignItems: "center"
    }
});

export default IconText;