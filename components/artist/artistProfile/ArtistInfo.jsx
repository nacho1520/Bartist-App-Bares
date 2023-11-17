import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./artistinfo.style";
import { icons } from "../../../constants";
import SocialBtn from "../../profile/socialBtn/SocialBtn";
import Rating from "../../common/rating/Rating";

const ArtistInfo = ({imageUrl, name, type, bio, instagram, twitter, handleRatingPress, rating }) => {
    return(
        <View>
            <View style={ styles.imgContainer }>
                <Image 
                    source={{ uri: imageUrl }}
                    resizeMode="cover"
                    style={ styles.profileImg }
                />
            </View>
            <View style={ styles.profileBody }>
                <View style={ styles.artistHeader }>
                    <View style={ styles.titleContainer }>
                        <Text style={ styles.profileName }>{ name }</Text>
                        <Text style={ styles.profileGenre }>{ type }</Text>
                    </View>
                    <Rating 
                        rate={ rating }
                        rateIcon={ icons.star }
                        unRateIcon={ icons.outlineWhiteStar }
                        textLabel={ true }
                        handlePress={ handleRatingPress }
                    />
                </View>
                <View>
                    <Text style={ styles.profileBio }>{ bio }</Text>
                </View>
                <View style={{ marginTop: 15, flexDirection: "column", gap: 15 }}>
                    <SocialBtn iconUrl={ icons.instagram } socialMedia="Instagram" />
                    <SocialBtn iconUrl={ icons.twitter } socialMedia="Twitter" />
                </View>                
            </View>
        </View>
    );
};

export default ArtistInfo;