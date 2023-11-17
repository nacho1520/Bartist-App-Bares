import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    imgContainer: { 
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center" 
    },
    profileImg: {
        width: 200,
        height: 200,
        borderRadius: 360
    },
    profileBody:{
        padding: 16
    },
    titleContainer: {
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: 20
    },
    profileName: {
        color: COLORS.whiteColor,
        fontSize: 36,
        fontWeight: "bold"
    },
    profileGenre: {
        color: COLORS.whiteColor,
        fontSize: 16,
        fontWeight: "500"
    },
    profileBio: {
        color: COLORS.whiteColor,
        fontSize: 18,
        fontWeight: "normal"
    }
});

export default styles;