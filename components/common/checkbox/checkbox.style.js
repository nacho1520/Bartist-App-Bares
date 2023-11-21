import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "30%"
    },
    checkbox: {
        borderColor: COLORS.backgroundColor,
        borderWidth: 1,
        borderRadius: 5,
        height: 30,
        width: 30
    },
    selected: {
        borderColor: COLORS.violet,
        backgroundColor: COLORS.violet,
        borderWidth: 1,
        borderRadius: 5,
        height: 30,
        width: 30
    },
    label: {
        fontSize: 16,
        marginLeft: 10,
    }
});

export default styles;