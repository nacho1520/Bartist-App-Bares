import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";

import { icons } from "../../../../constants";
import styles from "./searchcard.style";
import Rating from "../../rating/Rating";

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
                <Text style={ styles.info }>{ genres.split(',').join(', ') }</Text>
                {/* {
                    rating > 0 ? (
                        <Rating 
                            rate={ rating }
                            rateIcon={ icons.blackStar }
                            unRateIcon={ icons.outlineStar }
                            textLabel={ false }
                        />
                    ) : (
                        <></>
                    )
                } */}
            </View>
        </TouchableOpacity>
    );
};

export default SearchCard;