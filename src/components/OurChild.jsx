import React from 'react';
import { Text, View } from "react-native";

function OurChild(props) {
    const { message } = props;
    return(
        <View style={{ height: 200, width:200, backgroundColor: 'red' }}>
            <Text>{message}</Text>
        </View>
    );
};

export default OurChild;