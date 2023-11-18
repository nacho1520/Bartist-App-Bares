import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: "column",
        alignItems: "center",
        gap: 25
    },
    inputContainer: {
        width: "90%",
        backgroundColor: COLORS.whiteColor,
        borderRadius: 6,
        padding: 10
    },
    dateContainer: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    dateInfo: {
        width: "45%",
        backgroundColor: COLORS.whiteColor,
        borderRadius: 6,
        padding: 10
    }
});

export default styles;