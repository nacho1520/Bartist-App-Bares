import React, { useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";

import styles from "./ratingbar.style";
import { icons } from "../../../constants";

const RatingBar = () => {
    const [ defaultRating, setDefaultRating ] = useState(2);
    const [ maxRating, setMaxRating ] = useState([1,2,3,4,5]);

    return(
        <View style={ styles.starContainer }>
            {
                maxRating.map((item, key) => (
                    <TouchableOpacity
                        key={ item }
                        onPress={ () => setDefaultRating(item) } 
                    >
                        <Image 
                            source={
                                item <= defaultRating ? 
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