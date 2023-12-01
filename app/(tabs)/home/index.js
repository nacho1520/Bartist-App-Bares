import { View, ScrollView, ActivityIndicator, Text } from "react-native";

import { Welcome, ExploreArtists, RecommendedArtists, TopArtists } from "../../../components";
import { COLORS } from "../../../constants";
import useFetch from "../../../hooks/useFetch";

const Home = () => {
    const { data, isLoading, error } = useFetch('artists');


    return (
        <ScrollView showsVerticalScrollIndicator={ false }>
            <View style={{ flex: 1, padding: 16 }}>
                {
                    isLoading ? (
                        <ActivityIndicator size="large" color={ COLORS.violet } />
                    ) : error ? (
                        <Text>Algo anda mal...</Text>
                    ) : (
                        <>
                            <Welcome />
                            <ExploreArtists />
                            <TopArtists />
                            <RecommendedArtists />
                        </>
                    )
                }
            </View>
        </ScrollView>
    )
};

export default Home;