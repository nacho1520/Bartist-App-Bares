import React from "react";
import { View, Text } from "react-native";

import styles from "./ratingcard.style";
import { icons } from "../../../../constants";
import Rating from "../../rating/Rating";

const RatingCard = ({ title, comment, rating }) => {
    return(
        <View style={ styles.card }>
            <View style={ styles.headerContainer }>
                <Text style={ styles.title }>{ title }</Text>
                <Rating
                    rate={ rating }
                    rateIcon={ icons.star }
                    unRateIcon={ icons.outlineWhiteStar }
                    textLabel={ false } 
                /> 
            </View>
            <Text style={ styles.description }>{ comment }</Text>     
        </View>
    );
};

export default RatingCard;