import React, { useState, useEffect } from "react";
import { ScrollView, ActivityIndicator, Text } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import axios from "axios";

import { COLORS, icons } from "../../constants";
import { ArtistInfo, HeaderBtn } from "../../components";
import useFetch from "../../hooks/useFetch";

const pubId = '420f3a12-104c-4828-ad16-dbb19ce97218';

const ArtistProfile = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    const { data, isLoading, error } = useFetch(`artists/${ params.id }`);
    const [ like, setLike ] = useState(false);

    useEffect(() => {
        if(data) {
            setLike(data.liked)
        }
    }, [data]);

    const likeArtist = async () => {
        const url = `https://bartist-backend.fly.dev/api/v1/pubs/${pubId}/likes`;
        const body = {
            like: params.id
        };
        const header = {
            'content-type': 'application/json'
        };
        try {
            const response = await axios.post(url, body, header);
            console.log(response);
        } catch (e) {
            console.error('Error liking artist:', e.response ? e.response.data : e.message);
        }
    };
    
    const unlikeArtist = async () => {
        const url = `https://bartist-backend.fly.dev/api/v1/pubs/${pubId}/likes`;
        const body = {
            like: params.id
        };
        const header = {
            'content-type': 'application/json'
        };
        try {
            const response = await axios.delete(url, { data: body, headers: header });
            console.log(response);
        } catch (e) {
            console.error('Error unliking artist:', e.response ? e.response.data : e.message);
        }
    };
    
    const handleLike = () => {
        setLike((prevLike) => !prevLike);
        if (like === true) {
            console.log('Le saco mg');
            unlikeArtist();
        } else {
            console.log(like);
            console.log('Le doy mg');
            likeArtist();
        }
    };

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
                        <Stack.Screen 
                            options={{
                                headerStyle: { backgroundColor: COLORS.backgroundColor },
                                headerShadowVisible: false,
                                headerTitle: "",
                                headerLeft: () => (
                                    <HeaderBtn 
                                        iconUrl={ icons.arrowLeft } 
                                        dimension="60%"
                                        handleBtnPress={ () => router.back() } 
                                    />
                                ),
                                headerRight: () => (
                                    <HeaderBtn 
                                        iconUrl={ like ? icons.fullHeart : icons.heart  }
                                        dimension="60%"
                                        handleBtnPress={ handleLike }
                                    />
                                )
                            }}
                        />
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