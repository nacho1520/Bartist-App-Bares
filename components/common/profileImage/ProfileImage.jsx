import React from "react";
import { View, Image } from "react-native";

import styles from "./profileimage.style";

const ProfileImage = ({ profileImg }) => {
    return(
        <View style={ styles.imgContainer }>
            <Image 
                source={{ uri: profileImg }}
                resizeMode="cover"
                style={ styles.profileImg }
            />
        </View>
    );
};

export default ProfileImage;