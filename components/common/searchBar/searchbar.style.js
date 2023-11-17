import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        backgroundColor: COLORS.whiteColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        height: 40   
    },
    searchInput: {
        color: COLORS.gray,
        width: "100%",
        height: "100%",
        paddingLeft: 10
    }
});

export default styles;