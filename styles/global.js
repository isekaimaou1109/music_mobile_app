import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
    align: { 
        display: 'flex', 
        flexDirection: 'column', 
        flex: 1, 
        alignItems: 'center',
        marginTop: 120,
        height: '100%'
    },
    input: { 
        padding: 10, 
        borderColor: '#888', 
        borderWidth: 1, 
        borderRadius: 5, 
        borderStyle: 'solid',
        marginTop: 20
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        letterSpacing: 5
    },
    forgotPassword: {
        color: 'rgb(155 155 155)',
        textAlign: 'start',
        marginTop: 10
    },
    button: {
        backgroundColor: 'rgba(26,131,239,1)',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 20,
        borderRadius: 5,
        textAlign: 'center'
    },
    pre: {
        marginTop: 20,
        fontSize: 'clamp(12px, 600px, 18px)'
    },
    songName: {
        paddingVertical: 5
    }
})