import React, { useState } from "react";
import { ScrollView, ActivityIndicator, Text, View, Modal } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { COLORS, icons } from "../../constants";
import useFetch from "../../hooks/useFetch";
import { ProfileImage, Rating, PrimaryBtn, RatingCard, RateModal } from "../../components"; 

const ratings = [
    {
        id: 1,
        title: "Música que llega al corazón",
        description: "Las canciones de Peso Plum tienen un poderoso impacto emocional"
    },
    {
        id: 2,
        title: "Música que llega al corazón",
        description: "Las canciones de Peso Plum tienen un poderoso impacto emocional"
    },
    {
        id: 3,
        title: "Música que llega al corazón",
        description: "Las canciones de Peso Plum tienen un poderoso impacto emocional"
    },
    {
        id: 4,
        title: "Música que llega al corazón",
        description: "Las canciones de Peso Plum tienen un poderoso impacto emocional"
    },
    {
        id: 5,
        title: "Música que llega al corazón",
        description: "Las canciones de Peso Plum tienen un poderoso impacto emocional"
    },
    {
        id: 6,
        title: "Música que llega al corazón",
        description: "Las canciones de Peso Plum tienen un poderoso impacto emocional"
    }
];

const ArtistRating = () => {
    const params = useLocalSearchParams();
    const { data, isLoading, error } = useFetch(`/artists/${ params.id }`);
    const { data: ratingData, isLoading: isLoadingRating, error: errorRating } = useFetch(`/artists/${ params.id }/ratings`);
    console.log( ratingData );
    const [ modalOpen, setModalOpen ] = useState(false);
    return (
        <ScrollView showsVerticalScrollIndicator={ false } >
            {
                isLoading || isLoadingRating ? (
                    <ActivityIndicator size="large" color={COLORS.violet} />
                ) : error || errorRating ? (
                    <Text>Algo anda mal...</Text>
                ) : (
                    <View style={{ flexDirection: "column", gap: 25, width: "100%", flex: 1, padding: 16 }}>
                        <ProfileImage profileImg={ data.profileImage } />  
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Text style={{ color: COLORS.whiteColor, fontSize: 36, fontWeight: "bold" }}>{ data.name }</Text>
                            <Rating 
                                rate={ data.rating }
                                rateIcon={ icons.star }
                                unRateIcon={ icons.outlineWhiteStar }
                                textLabel={ false }
                                handlePress={() => {}} 
                            />
                        </View>
                            {
                                ratingData.map((item) => (
                                    <RatingCard 
                                        title={ item.title }
                                        description={ item.description }
                                        rating={ item.rating }
                                        key={ item._id }
                                    />
                                ))
                            }
                        <View style={{ width: "100%", justifyContent: "center", flexDirection: "row", marginVertical: 10 }}>
                            <View style={{ width: "50%" }}>
                                <PrimaryBtn btnLabel="Calificar" 
                                    handlePress={ () => { setModalOpen(true) } }
                                />
                            </View>
                        </View>
                        <RateModal open={ modalOpen } setOpen={ () => setModalOpen(false) } />
                    </View>
                )
            }
        </ScrollView>
        
    );
};

export default ArtistRating;