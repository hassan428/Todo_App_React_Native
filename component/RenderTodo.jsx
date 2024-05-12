import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Btn } from './Btn';

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 2,
        width: "100%",
    },
    individual_div: {
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: "rgb(255, 184, 184)",
        padding: 5,
        paddingHorizontal: 10,
        fontSize: "50px",
        flexDirection: "row",
        marginHorizontal: 2,
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "condensedBold"
    },
    btn_div: {
        flexDirection: "row",
    }
});
export const RenderTodo = ({ todo, edit, del }) => {

    const [render, setRender] = useState(todo);

    useEffect(() => {
        setRender(todo)
    }, [todo]);

    const { container, individual_div, text, btn_div } = styles;

    return <ScrollView style={container}>
        <View >
            {render.map((obj, i) => {
                return <View key={i} style={[container, individual_div]}>
                    <Text style={text}>
                        {obj}
                    </Text>

                    <View key={i} style={[btn_div]}>

                        <Btn onPress={() => edit(i)}>
                            <Text>Edit</Text>
                        </Btn>

                        <Btn onPress={() => del(i)}>
                            <Text> Del</Text>
                        </Btn>
                    </View>
                </View>
            })}
        </View>
    </ScrollView>

}
