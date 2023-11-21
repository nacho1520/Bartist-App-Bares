import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./checkbox.style";

const Checkbox = ({ label, onPress, isChecked }) => {
    return(
        <View style={ styles.container }>
            <TouchableOpacity 
                style={ isChecked ? styles.selected : styles.checkbox }
                onPress={ onPress }
            />
            <Text style={ styles.label } >
                { label }
            </Text>
        </View>
    );
};

export default Checkbox;