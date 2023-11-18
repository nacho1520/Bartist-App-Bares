import React, { useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";

import styles from "./ratingbar.style";
import { icons } from "../../../constants";

const RatingBar = ({ rate, setRate }) => {
    // const [ defaultRating, setDefaultRating ] = useState(2);
    const [ maxRating, setMaxRating ] = useState([1,2,3,4,5]);

    return(
        <View style={ styles.starContainer }>
            {
                maxRating.map((item, key) => (
                    <TouchableOpacity
                        key={ item }
                        onPress={ () => setRate({ ...rate, rating: item }) } 
                    >
                        <Image 
                            source={
                                item <= rate.rating ? 
                                icons.blackStar :
                                icons.star
                            }
                            style= { styles.starIcon }
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                ))
            }
        </View>
    );
};

export default RatingBar;