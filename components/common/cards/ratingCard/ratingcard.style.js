import { StyleSheet } from "react-native";

import { COLORS } from "../../../../constants";

const styles = StyleSheet.create({
    card: {
        padding: 16,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        height: 70,
        gap: 5
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-end"
    },
    title: {
        fontSize: 16,
        marginRight: 10,
        fontWeight: "bold",
        color: COLORS.whiteColor
    },
    description: {
        fontSize: 12,
        color: COLORS.whiteColor
    }
});

export default styles;