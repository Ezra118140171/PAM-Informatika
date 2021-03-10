import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';

const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const additionalHandler = () => {
        setCounter(counter + 1);
    };
    
    const subtractionHandler = () => {
        setCounter(counter - 1);
    };


    return (
        <View style={styles.container}>
            <Button title="Tambah" onPress={() => additionalHandler()} />
            <Text>{counter}</Text>
            <Button title="Kurang" onPress={() => subtractionHandler()} />
        </View>
    );
};
export default Counter; 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});