import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    btnContainer: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    btnImage: (dimension) => (
        {
            width: dimension,
            height: dimension,
            borderRadius: 360
        }
    ) 
});

export default styles;