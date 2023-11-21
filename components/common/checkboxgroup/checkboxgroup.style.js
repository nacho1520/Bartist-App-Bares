import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.whiteColor,
        width: "90%",
        padding: 10,
        flexDirection: "column",
        gap: 10,
        borderRadius: 6
    },
    checkBoxContainer: {
        width: "100%",
        flexDirection: "row",
        gap: 10,
        justifyContent: "flex-start",
        "alignItems": "center",
        flexWrap: "wrap",
        padding: 5
    }
});

export default styles;