import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./primarybtn.style";

const PrimaryBtn = ({ btnLabel, handlePress }) => {
    return(
        <TouchableOpacity style={ styles.button } onPress={ handlePress }> 
            <Text style={ styles.btnLabel }>{ btnLabel }</Text>
        </TouchableOpacity>
    );
};


export default PrimaryBtn;