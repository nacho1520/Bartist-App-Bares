import React from "react";
import { View, Text } from "react-native";

import styles from "./about.style";

const About = ({ description }) => {
    return(
        <View style={ styles.container } >
            <Text style={ styles.title } >Descripción del show:</Text>
            <View style={ styles.descContainer } >
                <Text style={ styles.description } >{ description }</Text>
            </View>
        </View>
    );
};

export default About;