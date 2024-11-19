import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        // width: '100%',
    },
    
    input: {
        width: 320,
        height: 50,
        margin: 8,
        borderWidth: 1.5,
        borderRadius: 20,
        paddingHorizontal: 15,
        backgroundColor: '#708D73',
        borderColor: "#311A05",
        justifyContent: 'center',
        color: '#311A05',
        fontSize: 18,
        paddingRight: 45,
    },

    icon: {
        position: 'absolute',
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        right: 8,
        top: 8,
    }
})