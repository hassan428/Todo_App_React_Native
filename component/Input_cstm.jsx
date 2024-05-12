import React from 'react'
import { StyleSheet, TextInput } from 'react-native';


const styles = StyleSheet.create({
    input: {
        backgroundColor: "pink",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: 10,
        marginHorizontal: 5,
        padding: 2,
        width: "65%",
        fontSize: 15,
    }
});

export const Input_cstm = (props) => {
    const { input } = styles;
    return (
        <TextInput  style={[input]} {...props} />
    )
};


