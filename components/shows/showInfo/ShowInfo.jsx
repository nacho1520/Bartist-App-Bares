import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./showinfo.style";

const ShowInfo = ({ name, bar, image }) => {
    return(
        <View>
            <View style={ styles.imgContainer }>
                <Image 
                    source={{ uri: image }}
                    resizeMode="cover"
                    style={ styles.showImg }
                />
            </View>
            <View style={ styles.showBody }>
                <View style={ styles.titleContainer }>
                    <Text style={ styles.showName }>{ name }</Text>
                    <Text style={ styles.showBar }>{ bar }</Text>
                </View>
            </View>
        </View>
    );
};

export default ShowInfo;