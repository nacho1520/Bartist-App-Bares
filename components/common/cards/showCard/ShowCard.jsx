import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";

import styles from "./showcard.style";

const ShowCard = ({ name, image, date, time, bands }) => {
    return(
        <TouchableOpacity style={ styles.card }>
            <View style={ styles.imgContainer }>
                <Image 
                    source={ image }
                    resizeMode="cover"
                    style={ styles.searchImg }
                />
            </View>
            <View style={ styles.infoContainer }>
                <Text style={ styles.title }>{ name }</Text>
                <Text style={ styles.info }>{ bands }</Text>
                <Text style={ styles.info }>{ date }</Text>
                <Text style={ styles.info }>{ time }</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ShowCard;