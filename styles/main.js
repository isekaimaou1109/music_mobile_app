import { StyleSheet } from "react-native";

/* 2 breakpoints > 600 < 600*/

export const styles = StyleSheet.create({
    imageSize: {
        width: 48,
        height: 48,
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
    },
    secondImage: {
        position: 'absolute',
        left: 10,
        zIndex: -1
    },
    justifyImage: { 
        display: 'flex', 
        flexDirection: 'row', 
        position: 'relative' 
    },
    justifyMenuSpace: {
        display: 'grid',
        gridTemplateRows: 'fit-content',
        gridGap: 10,
        position: 'fixed',
        zIndex: 2000,
        bottom: 10,
        right: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: '100%',
        backgroundColor: '#e7e7e7',
        position: 'absolute',
        zIndex: 2010
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});