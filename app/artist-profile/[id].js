import React from "react";
import { ScrollView, ActivityIndicator, Text } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import { COLORS } from "../../constants";
import { ArtistInfo } from "../../components";
import useFetch from "../../hooks/useFetch";

const ArtistProfile = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    const { data, isLoading, error } = useFetch(`artists/${ params.id }`);

    const handleRatingNavigation = () => {
        router.push(`/artist-ratings/${ params.id }`);
    };

    return (
        <ScrollView showsVerticalScrollIndicator={ false }>
            {
                isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.violet} /> 
                ) : error ? (
                    <Text>Hay un error...</Text>
                ) : (
                    <>
                        <ArtistInfo 
                            name={ data.name }
                            type={ data.genres }
                            imageUrl={ data.profileImage }
                            bio={ data.bio }
                            rating={ data.rating }
                            handleRatingPress={ handleRatingNavigation }
                        />
                    </>
                )
            }
        </ScrollView>
    );
};

export default ArtistProfile;