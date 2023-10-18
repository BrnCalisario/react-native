import { StyleSheet, Text, TextInput, View, TouchableOpacity, Switch } from 'react-native';
import { useState } from "react"
import styles from "../styles/styles"
import { useUserContext } from '../contexts/UserContext';

export default function Register(props) {
    

    const { users, addUser } = useUserContext()

    const registerUser = () => {
        const user = { name, email, password, age }
        addUser(user)

        props.navigation.navigate("UserList")
    }   

    
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ age, setAge ] = useState('');
    const [ receive, setReceive] = useState(false);
    
    const toggleSwitch = () => setReceive(receive => !receive);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Registro</Text>

                <Text >Nome</Text>
                <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)}/>

                <Text >Idade</Text>
                <TextInput  style={styles.input} value={age} onChangeText={(text) => setAge(text)}/>

                <Text >Sexo</Text>
                <TextInput style={styles.input} />

                <Text >E-mail</Text>
                <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)}/>

                <Text>Senha</Text>
                <TextInput secureTextEntry={true} style={styles.input} value={password} onChangeText={(text) => setPassword(text)}/>

                <Text>Confirmar Senha</Text>
                <TextInput secureTextEntry={true} style={styles.input} />

                <Switch value={receive} onValueChange={toggleSwitch} />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} title='Login' onPress={registerUser}>
                    <Text style={styles.button}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                    <Text style={styles.register} >Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
