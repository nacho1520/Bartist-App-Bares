import React from "react";
import { ScrollView, View, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import useFetch from "../../../hooks/useFetch";
import { icons, COLORS } from "../../../constants";
import { HeaderBtn, SearchBar, SearchCard } from "../../../components";

const Search = () => {
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
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                        <View style={{ width: "80%" }}>
                            <SearchBar />
                        </View>
                        <HeaderBtn 
                            iconUrl={ icons.filter }
                            dimension="70%"
                            handleBtnPress={ () => {} }
                        />
                    </View>
                    <ScrollView 
                        showsVerticalScrollIndicator={ false }
                        contentContainerStyle={{ justifyContent: "center"}}
                    >
                        <View style={{ flex: 1, flexDirection: "column", gap: 30, paddingVertical: 10 }}>
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

export default Search;