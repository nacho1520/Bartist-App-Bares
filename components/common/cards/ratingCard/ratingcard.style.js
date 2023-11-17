import { StyleSheet } from "react-native";

import { COLORS } from "../../../../constants";

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.whiteColor,
        borderRadius: 12,
        padding: 16,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        height: 150,
        gap: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default styles;