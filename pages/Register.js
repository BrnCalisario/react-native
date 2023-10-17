import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from "../styles/styles"

export default function Register(props) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Registro</Text>

                <Text >Nome</Text>
                <TextInput style={styles.input}/>

                <Text >Idade</Text>
                <TextInput style={styles.input}/>

                <Text >Sexo</Text>
                <TextInput style={styles.input}/>

                <Text >E-mail</Text>
                <TextInput style={styles.input}/>

                <Text>Senha</Text>
                <TextInput style={styles.input} />

                <Text>Confirmar Senha</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} title='Login'>
                    <Text style={styles.button}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                    <Text style={styles.register} >Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
