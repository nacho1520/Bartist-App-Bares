import { View, ScrollView, ActivityIndicator, Text } from "react-native";
import { useRouter } from "expo-router";

import { images, COLORS } from "../../../constants";
import { ShowCard, PrimaryBtn } from "../../../components";
import useFetch from "../../../hooks/useFetch";

const pubId = '420f3a12-104c-4828-ad16-dbb19ce97218';

const MyShows = () => {
    const router = useRouter();
    const { data, isLoading, error } = useFetch(`/pubs/${ pubId }/shows`);
    return (
        <View style={{ flex: 1, padding: 16 }}>
            {
                isLoading ? (
                    <ActivityIndicator size="large" color={ COLORS.violet } />
                ) : error ? (
                    <Text>Algo salio mal...</Text>
                ) : (
                    <>
                        <ScrollView showsVerticalScrollIndicator={ false } style={{ marginBottom: 10, padding: 16 }}>
                            <View style={{ flex: 1, flexDirection: "column", gap: 20, marginBottom: 15 }}>
                                {
                                    data.map((item) => (
                                        <ShowCard 
                                            name={ item.name }
                                            genres={ item.genres.join(", ") }
                                            date={ item.date.split('T')[0] }
                                            time={ item.time + ' hs' }
                                            image={  images.temple }
                                            key={ item._id }
                                            handlePress={ () => router.push(`show-detail/${ item._id }`) }
                                        />
                                    ))
                                }
                            </View>
                        </ScrollView>
                        <View style={{ flexDirection: "row", justifyContent: "center", width: "100%" }}>
                            <View style={{ width: "50%" }}>
                                <PrimaryBtn 
                                    btnLabel="Crear Show"
                                    handlePress={ () => { router.push('create-show') } }
                                />
                            </View>
                        </View>
                    </>
                )
            }
        </View>
    )
};

export default MyShows;