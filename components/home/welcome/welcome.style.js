import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    userName: {
        fontSize: 18,
        color: COLORS.gray,
      },
      welcomeMessage: {
        fontSize: 22,
        color: COLORS.whiteColor,
        marginTop: 2,
      },
});

export default styles;