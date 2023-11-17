import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    starContainer: {
        flexDirection: "row",
        gap: 2,
        justifyContent: "space-between",
        alignItems: "center"
    },
    starIcon: {
        width: 20,
        height: 20
    },
    rateLabel: {
        color: COLORS.whiteColor,
        fontSize: 12,
        fontWeight: "normal"
    }
});

export default styles;