import { View, ScrollView, ActivityIndicator, Text } from "react-native";

import { HorizontalList, Welcome } from "../../../components";
import { COLORS } from "../../../constants";
import useFetch from "../../../hooks/useFetch";

const Home = () => {
    const { data, isLoading, error } = useFetch('artists');


    return (
        <ScrollView showsVerticalScrollIndicator={ false }>
            <View style={{ flex: 1, padding: 16 }}>
                <Welcome />
                {
                    isLoading ? (
                        <ActivityIndicator size="large" color={ COLORS.violet } />
                    ) : error ? (
                        <Text>Algo anda mal...</Text>
                    ) : (
                        <>
                            <HorizontalList title={ "Próximos shows" } data={ data } />
                            <HorizontalList title={ "Artistas recomendados" } data={ data } />
                            <HorizontalList title={ "Rap" } data={ data } />
                        </>
                    )
                }
            </View>
        </ScrollView>
    )
};

export default Home;