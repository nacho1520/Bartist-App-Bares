import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        borderRadius: 16,
        padding: 16,
        marginTop: 20
    },
    title: {
        fontSize: 20,
        color: COLORS.backgroundColor,
        fontWeight: "bold"
    },
    descContainer: {
        marginVertical: 12,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%"
    },
    labelContainer: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 5,
        width: "50%"
    },
    label: {
        fontSize: 14,
        color: COLORS.backgroundColor,
        fontWeight: "bold"
    },
    dataContainer: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 5
    },
    data: {
        fontSize: 14,
        color: COLORS.darkerGray,
        fontWeight: "normal"
    }
});

export default styles;