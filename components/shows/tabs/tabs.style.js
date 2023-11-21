import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        marginBottom: 6
    },
    btn: (label, activeTab) => ({
        paddingVertical: 16,
        paddingHorizontal: 24,
        marginLeft: 2,
        backgroundColor: label === activeTab ? COLORS.violet : COLORS.whiteColor,
        borderRadius: 12
    }), 
    btnLabel: (label, activeTab) => ({
        fontSize: 12,
        color: label === activeTab ? COLORS.whiteColor : COLORS.violet
    }) 
});

export default styles;