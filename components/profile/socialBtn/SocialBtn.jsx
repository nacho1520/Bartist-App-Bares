import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

import styles from "./socialbtn.style";

const SocialBtn = ({ iconUrl, socialMedia, handleNavigation }) => {
    return(
        <TouchableOpacity style={styles.btnContainer} onPress={handleNavigation && typeof handleNavigation === "function" ? handleNavigation : null}>
            <Image 
                source={iconUrl}
                resizeMode="cover"
                style={styles.socialIcon}
            />
            <Text style={styles.socialMedia}>{socialMedia}</Text>
        </TouchableOpacity>
    );
};

export default SocialBtn;