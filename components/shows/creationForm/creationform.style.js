import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: "column",
        alignItems: "center",
        gap: 25
    },
    inputContainer: {
        width: "100%",
        borderBottomWidth: 2,
        borderBottomColor: COLORS.whiteColor
    },
    inputLabel: {
        color: COLORS.darkerWhite
    },
    dateContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    dateInfo: {
        width: "45%",
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.whiteColor
    }
});

export default styles;
