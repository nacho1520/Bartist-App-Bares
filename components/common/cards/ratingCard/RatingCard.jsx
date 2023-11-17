import React from "react";
import { View, Text } from "react-native";

import styles from "./ratingcard.style";
import { icons } from "../../../../constants";
import Rating from "../../rating/Rating";

const RatingCard = ({ title, description, rating }) => {
    return(
        <View style={ styles.card }>
            <Text style={ styles.title }>{ title }</Text>
            <Text>{ description }</Text>
            <Rating
                rate={ rating }
                rateIcon={ icons.blackStar }
                unRateIcon={ icons.outlineStar }
                textLabel={ false } 
            /> 
        </View>
    );
};

export default RatingCard;