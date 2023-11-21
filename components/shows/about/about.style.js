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
        marginVertical: 12
    },
    description: {
        fontSize: 14,
        color: COLORS.darkerGray,
        fontWeight: "normal"
    }
});

export default styles;