import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";

import styles from "./artistcard.style";

const ArtistCard = ({ title, subTitle, imageUrl, handleNavigation }) => {
    return(
        <TouchableOpacity onPress={ handleNavigation }>
            <Image 
                
                source={{ uri: imageUrl }}
                style={{ width: 114, height: 118, borderRadius: 360 }}
            />
            <Text style={ styles.title } >{ title }</Text>
            <Text style={ styles.subTitle }>{ subTitle }</Text>
        </TouchableOpacity>
    );
    
};

export default ArtistCard;