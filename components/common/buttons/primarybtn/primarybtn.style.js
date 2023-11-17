import { StyleSheet } from "react-native";

import { COLORS } from "../../../../constants";

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 50,
        backgroundColor: COLORS.violet,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    btnLabel: {
        color: COLORS.whiteColor,
        fontSize: 16,
        fontWeight: "bold"
    }
});

export default styles;