import { StyleSheet } from "react-native";

import { COLORS } from "../../../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "flex-start"
    },
    title: {
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: '700',
        lineHeight: 24,
        color: COLORS.whiteColor
    },
    subTitle: {
        fontSize: 13,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 24,
        color: COLORS.whiteColor
    }
});

export default styles;