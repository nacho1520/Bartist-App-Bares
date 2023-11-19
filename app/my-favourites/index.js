import React from "react";
import { ScrollView, View, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import useFetch from "../../hooks/useFetch";
import { icons, COLORS } from "../../constants";
import { HeaderBtn, SearchBar, SearchCard } from "../../components";

const Favs = () => {
    const { data, isLoading, error } = useFetch('/artists');
    const router = useRouter();

    return(
        <View style={{ flex: 1, padding: 16 }}>
        {
            isLoading ? (
                <ActivityIndicator size="large" color={COLORS.violet} />
            ) : error ? (
                <Text>Algo salio mal...</Text>
            ) : (
                <>
                    <ScrollView 
                        showsVerticalScrollIndicator={ false }
                        contentContainerStyle={{ justifyContent: "center", padding: 16 }}
                    >
                        <View style={{ flex: 1, flexDirection: "column", gap: 20 }}>
                            {
                                data.map((item) => (
                                    <SearchCard 
                                        name={ item.name }
                                        genres={ item.genres }
                                        image={  item.profileImage }
                                        handlePress={ () => { router.push(`/artist-profile/${ item._id }`) } }
                                        rating={ item.rating }
                                        key={ item._id }
                                    />
                                ))
                            }
                        </View>
                    </ScrollView>
                </>
            )
        }
        </View>
    );
};

export default Favs;