import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

import styles from "./rating.style";

const showRating = (rate, handlePress, rateIcon, unRateIcon, textLabel) => {
    const maxRating = [1,2,3,4,5];
    return(
        <TouchableOpacity style={ styles.ratingContainer } onPress={ handlePress }>
            <View style={ styles.starContainer }>
                {
                    maxRating.map((item, key) => (
                        <Image 
                            source={ 
                                item <= rate ? 
                                rateIcon : 
                                unRateIcon
                             }
                            resizeMode="cover"
                            style={ styles.starIcon }
                            key={ item }
                        />
                    ))
                }
            </View>
            {
                textLabel ? (
                    <Text style={ styles.rateLabel }>Ver comentarios</Text>
                ) : (
                    <></>
                )
            }
        </TouchableOpacity>
    );
};


const showNoRatingMsg = (handlePress) => {
    return(
        <TouchableOpacity style={ styles.ratingContainer } onPress={ handlePress }>
            <Text style={ styles.rateLabel }>Ver Comentarios</Text>
        </TouchableOpacity>
    );
}

const Rating = ({ rate, handlePress, rateIcon, unRateIcon, textLabel }) => {
    return(
        rate != 0 ? showRating(rate, handlePress, rateIcon, unRateIcon, textLabel) 
        : showNoRatingMsg(handlePress)
    );
};

export default Rating;