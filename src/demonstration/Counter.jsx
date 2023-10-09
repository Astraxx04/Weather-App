import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from "react-native";

function Counter() {
    const [count, setCount] = useState(0);
    const [newCount, setNewCount] = useState(0);

    useEffect(() => {
        console.log(`The count value is ${count} newcount is ${newCount}`);
        return () => {
            console.log("Clean Up");
        }
    }, [count]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`Count: ${count}`}</Text>
            <Button color={'red'} title={'Increase the count'} onPress={() => setCount(count+1)} />
            <Button color={'green'} title={'Decrease the count'} onPress={() => setCount(newCount-1)} />
            <Button color={'red'} title={'Increase the count'} onPress={() => setNewCount(newCount+1)} />
            <Button color={'green'} title={'Decrease the count'} onPress={() => setNewCount(newCount-1)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        marginTop: 50
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25
    }
});

export default Counter;