import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import useFetch from "../../../hooks/useFetch";
import ArtistCard from "../../common/cards/artistCard/ArtistCard";
import { COLORS } from "../../../constants";
import styles from "./recommended.style";

const pubId = '420f3a12-104c-4828-ad16-dbb19ce97218';

const HorizontalList = () => {
    const router = useRouter();
    const { data, isLoading, error } = useFetch(`pubs/${ pubId }/recommendedArtists`);

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
                            <Text style={ styles.title } >Por que te gusto { data.basedOn }</Text>
                        </View>
                        <View style={ styles.listContainer } >
                            <FlatList 
                                data={ data.artists }
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