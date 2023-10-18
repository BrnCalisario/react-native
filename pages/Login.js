import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

import styles from "../styles/styles"

export default function Login(props) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login</Text>

                <Text >E-mail</Text>
                <TextInput style={styles.input}/>

                <Text>Senha</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity   style={styles.button} onPress={() => props.navigation.navigate("UserList")} >
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => props.navigation.navigate("Register")} >
                    <Text style={styles.register}>Cadastrar</Text>
                </TouchableOpacity >
            </View>
        </View>
    )
}

// const styles = StyleSheet.create({
//     title: {
//         fontSize: "3rem",
//         fontWeight: "bold",
//         textAlign: "center"
//     },
//     container: {
//         paddingHorizontal: "1rem",
//         flexDirection: 'column',
//         flex: 1,
//         justifyContent: "space-between"
//     },
//     register : {
//         textAlign: "center",
//         marginVertical: "2rem"

//     },
//     input: {
//         backgroundColor: "white",
//         border: "1px solid #AAA",
//         borderRadius: "4px"
//     },
//     button: {
//         backgroundColor: "black",
//         color: "white",
//         textAlign: "center",
//         fontSize: "1.5rem",
//         padding: "4px"
//     }

// })