import React, { useState } from 'react'
import { Input_cstm } from './Input_cstm'
import { StyleSheet, Text, View } from 'react-native'
import { Btn } from './Btn'

const styles = StyleSheet.create({
    typeTodo: {
        flex : 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        margin: 10,
        alignItems: "flex-end",
    },
});
export const EditTodo = ({ edit_done, edit_cancel, defaultValue }) => {
    const [todo, setTodo] = useState({});
    const [value, setvalue] = useState(todo);
    const { typeTodo } = styles;

    return (
        <View style={typeTodo}>
            <Input_cstm value={value} defaultValue={defaultValue} onChangeText={(e) => {
                setvalue(e)
                setTodo(e)
            }} />

            <Btn onPress={() => {
                setvalue("");
                edit_done(todo)
            }}><Text> Edit </Text>
            </Btn>


            <Btn onPress={() => edit_cancel()}>
                <Text>Cancel</Text>
            </Btn>
        </View>
    )
}
