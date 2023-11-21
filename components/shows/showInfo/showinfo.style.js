import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    imgContainer: { 
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center" 
    },
    showImg: {
        width: 200,
        height: 200,
        borderRadius: 360
    },
    showBody:{
        padding: 16
    },
    titleContainer: {
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: 20
    },
    showName: {
        color: COLORS.whiteColor,
        fontSize: 36,
        fontWeight: "bold"
    },
    showBar: {
        color: COLORS.whiteColor,
        fontSize: 16,
        fontWeight: "500"
    },
    showDesc: {
        color: COLORS.whiteColor,
        fontSize: 16,
        fontWeight: "normal"
    },
    infoLabel: {
        color: COLORS.whiteColor,
        fontSize: 18,
        fontWeight: "bold"
    },
    info: {
        color: COLORS.whiteColor,
        fontSize: 18,
        fontWeight: "normal"
    }
});

export default styles;