import React from "react";
import { View, Text } from "react-native";

import styles from "./bulletpointsinfo.style";

const BulletPointsInfo = ({ title, labels, data }) => {
    return(
        <View style={ styles.container } >
            <Text style={ styles.title } >{ title }</Text>
            <View style={ styles.descContainer } >
                <View style={ styles.labelContainer }>
                    {
                        labels.map( (label) => (
                            <Text 
                                style={ styles.label }
                                key={ label }
                            >
                                { label }
                            </Text>
                        ))
                    }
                </View>
                <View style= { styles.dataContainer }>
                    {
                        data.map( (item) => (
                            <Text 
                                style={ styles.data }
                                key={ item }
                            >
                                { item }
                            </Text>
                        ))
                    }
                </View>
            </View>
        </View>
    );
};

export default BulletPointsInfo;