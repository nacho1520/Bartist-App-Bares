import React from "react";
import { ScrollView, ActivityIndicator } from "react-native";

import { COLORS } from "../../constants";
import { ProfileInfo } from "../../components";
import useFetch from "../../hooks/useFetch";

const Profile = () => {
    const id = "420f3a12-104c-4828-ad16-dbb19ce97218";
    const { data, isLoading, error } = useFetch(`pubs/${ id }`);
    console.log(data);
    return (
        <ScrollView showsVerticalScrollIndicator={ false }>
            {
                isLoading ? (
                    <ActivityIndicator size="large" color={ COLORS.violet } />
                ) : error ? (
                    <Text>Algo anda mal...</Text>
                ) : (
                    <ProfileInfo 
                        imageUrl={ data.profileImage }
                        name={ data.name }
                        type={ data.type }
                        bio={ data.bio }
                        instagram={ data.instagram }
                        twitter={ data.twitter }
                        isUser={ true }
                    />
                )
            }
        </ScrollView>
    );
};

export default Profile;