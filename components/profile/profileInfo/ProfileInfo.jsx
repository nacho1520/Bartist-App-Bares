import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./profileinfo.style";
import { icons } from "../../../constants";
import SocialBtn from "../socialBtn/SocialBtn";
import PrimaryBtn from "../../common/buttons/primarybtn/PrimaryBtn";
import { useRouter } from "expo-router";

const ProfileInfo = ({imageUrl, name, type, bio, instagram, twitter, isUser }) => {

    const router = useRouter();

    const handleMarkersPress = () => {
        router.push('/markers');
    };

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
                <View style={ styles.titleContainer }>
                    <Text style={ styles.profileName }>{ name }</Text>
                    <Text style={ styles.profileGenre }>{ type }</Text>
                </View>
                <View>
                    <Text style={ styles.profileBio }>{ bio }</Text>
                </View>
                <View style={{ marginTop: 15, flexDirection: "column", gap: 15 }}>
                    <SocialBtn iconUrl={ icons.instagram } socialMedia="Instagram" />
                    <SocialBtn iconUrl={ icons.twitter } socialMedia="Twitter" />
                </View>
                {
                    isUser ? (
                        <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                            <View style={{ width: "50%" }}>
                                <PrimaryBtn btnLabel="Editar" />
                            </View>
                        </View>
                    ) : (
                        <></>
                    )
                }
                
            </View>
        </View>
    );
};

export default ProfileInfo;