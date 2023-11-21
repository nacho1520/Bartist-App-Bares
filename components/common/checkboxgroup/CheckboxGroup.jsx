import React from "react";
import { View, Text } from "react-native";
import Checkbox from "../checkbox/Checkbox";

import styles from "./checkboxgroup.style";

const CheckboxGroup = ({ group, onPress }) => {
    return(
        <View style={ styles.container }>
            <Text>
                generos
            </Text>
            <View style={ styles.checkBoxContainer }>
                {
                    group.map((item) => (
                        <Checkbox 
                            label={ item.genre }
                            isChecked={ item.send }
                            onPress={ () => onPress(item.genre) }
                            key={ item.id }
                        />
                    ))
                }
            </View>
        </View>
    );
};

export default CheckboxGroup;