import React from "react";
import { View, Text } from "react-native";

import styles from "./welcome.style";

const Welcome = () => {
    return(
        <View style={{ marginBottom: 10 }}>
            <View style={ styles.container } >
                <Text style={ styles.userName }>Hola Temple,</Text>
                <Text style={ styles.welcomeMessage }>Compartí tu grandiosa música</Text>
            </View>
        </View>
    );
};

export default Welcome;