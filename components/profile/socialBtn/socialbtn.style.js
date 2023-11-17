import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "35%",
  },
  socialMedia: {
    color: COLORS.whiteColor,
    fontSize: 16,
    fontWeight: "500",
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
});

export default styles;
