import { StyleSheet } from "react-native";

import { COLORS } from "../../../../constants";

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: 50
    },
    imgContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    searchImg: {
        width: 70,
        height: 70
    },
    infoContainer: {
        marginLeft: 10,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        gap: 10
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: COLORS.whiteColor
    },
    info: {
        fontSize: 10,
        fontWeight: "normal",
        color: COLORS.whiteColor
    }
});

export default styles;