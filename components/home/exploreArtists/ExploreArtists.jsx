import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import useFetch from "../../../hooks/useFetch";
import ArtistCard from "../../common/cards/artistCard/ArtistCard";
import { COLORS } from "../../../constants";
import styles from "./exploreartists.style";

const HorizontalList = () => {
    const router = useRouter();
    const { data, isLoading, error } = useFetch(`artists`);

    return(
        <View style={{ marginTop: 10 }}>
            {
                isLoading ? (
                    <ActivityIndicator size="large" color={ COLORS.violet } />
                ) : error ? (
                    <Text>Algo salio mal...</Text>
                ) : (
                    <>
                        <View>
                            <Text style={ styles.title } >Descubri artistas</Text>
                        </View>
                        <View style={ styles.listContainer } >
                            <FlatList 
                                data={ data }
                                renderItem={ ({ item }) => (
                                    <ArtistCard 
                                        title={ item.name }
                                        subTitle={ item.genres[0] }
                                        imageUrl={ item.profileImage }
                                        handleNavigation={ () => { router.push(`/artist-profile/${ item._id }`) } }
                                    />
                                )}
                                keyExtractor={ item => item?.name }
                                contentContainerStyle={{ columnGap: 16 }}
                                horizontal
                                showsHorizontalScrollIndicator={ false }
                            />
                        </View>
                    </>
                )
            }
        </View>
    );
};

export default HorizontalList;