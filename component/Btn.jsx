import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'


const styles = StyleSheet.create({
    btn: {
        // backgroundColor: "pink",
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: "solid",
        borderColor: "black",
        marginHorizontal: 5,
        fontSize: 15,
        padding: 2,
        paddingHorizontal: 5,
        textAlign: "center"
    }
});
export const Btn = (props) => {
    const { btn, style } = styles;

    return (
        <>
            <TouchableOpacity {...props} style={[btn, { style }]}>
                {props.children}
            </TouchableOpacity>
        </>
    )
}
