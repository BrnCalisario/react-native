import { FlatList } from "react-native"
import { useUserContext } from "../contexts/UserContext"
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from "../styles/styles";

function UserItem({ user })
{
    return(
        <View style={cardStyle.card}>
            <Text>Nome: { user.name }</Text>
            <Text>Email: { user.email }</Text>
            <Text>Idade: { user.age }</Text>            
            <Text>Receber Notificação: { user.receive ? "Sim" : "Não" }</Text>            
        </View>
    )

}


export default function UserList(props)
{
    const { users } = useUserContext();

    return(
        <FlatList data={users} renderItem={({item}) => <UserItem user={item}/>} />
    )
}

const cardStyle = StyleSheet.create({
    card: {
        border: "1px solid #AAA"
    }
})


// styles = StyleSheet.create({
//     card: {
//         border: "1px solid #AAA",
//     }
// })