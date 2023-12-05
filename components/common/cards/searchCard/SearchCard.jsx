import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";

import styles from "./searchcard.style";

const SearchCard = ({ name, genres, image, handlePress, rating }) => {
    return(
        <TouchableOpacity style={ styles.card } onPress={ handlePress }>
            <View style={ styles.imgContainer }>
                <Image 
                    source={{ uri: image }}
                    resizeMode="cover"
                    style={ styles.searchImg }
                />
            </View>
            <View style={ styles.infoContainer }>
                <Text style={ styles.title }>{ name }</Text>
                <Text style={ styles.info }>{ genres[0] }</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SearchCard;