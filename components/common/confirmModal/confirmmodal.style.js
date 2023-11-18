import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        flex: 1
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: COLORS.darkerWhite,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        top: "50%",
        gap: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    title: {
        fontSize: 30,
        textAlign: "center",
    }
});

export default styles;