import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    title: {
        fontSize: "3rem",
        fontWeight: "bold",
        textAlign: "center"
    },
    container: {
        paddingHorizontal: "1rem",
        flexDirection: 'column',
        flex: 1,
        justifyContent: "space-between"
    },
    register : {
        textAlign: "center",
        marginVertical: "2rem"

    },
    input: {
        backgroundColor: "white",
        border: "1px solid #AAA",
        borderRadius: "4px"
    },
    button: {
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        fontSize: "1.5rem",
        padding: "4px"
    }

})

export default styles