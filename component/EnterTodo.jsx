import React, { useState } from 'react'
import { Input_cstm } from './Input_cstm'
import { StyleSheet, Text, View } from 'react-native'
import { Btn } from './Btn'

const styles = StyleSheet.create({
    typeTodo: {
        flexDirection: "row",
        justifyContent: "flex-end",
        margin: 10,
        alignItems: "flex-end",
    }
});
export const EnterTodo = ({ addTodo, delAll }) => {
    const [todo, setTodo] = useState({});
    const [value, setvalue] = useState(todo);
    const { typeTodo } = styles;

    return (
        <View style={typeTodo}>
            <Input_cstm value={value} onChangeText={(e) => {
                setvalue(e)
                setTodo(e)
            }} />

            <Btn onPress={() => {
                setvalue("");
                addTodo(todo)
            }}><Text> Add </Text>
            </Btn>


            <Btn onPress={() => delAll()}>
                <Text>Del All</Text>
            </Btn>
        </View>
    )
}
